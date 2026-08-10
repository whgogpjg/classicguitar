import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const options = Object.fromEntries(process.argv.slice(2).map(argument => {
  const [key, value = 'true'] = argument.replace(/^--/, '').split('=');
  return [key, value];
}));
const threshold = Number(options.threshold || 2);
const concurrency = Number(options.concurrency || 4);
const maxQueries = Number(options['max-queries'] || 2);
const maxCandidates = Number(options['max-candidates'] || 40);
const measurePopularity = options['measure-popularity'] === 'true';
const requestTimeout = Number(options.timeout || 5000);
const requestAttempts = Number(options.attempts || 2);
const limit = Number(options.limit || 0);
const offset = Number(options.offset || 0);
const requestedTypes = new Set((options.types || 'duo,trio,quartet').split(','));
const outputPath = path.resolve(root, options.output || 'ensemble-youtube-audit.json');
const dataPath = path.resolve(root, options.data || 'ensemble-verification-data.js');

const context = {window: {}, console};
vm.createContext(context);
for (const filename of ['repertoire-data.js', 'repertoire-expansion.js', 'duo-expansion-data.js']) {
  if (!fs.existsSync(path.join(root, filename))) continue;
  vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
}

const keyFor = work => `${work.type}|${work.title}|${work.composer}`;
const normalize = value => String(value || '')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .normalize('NFC')
  .replace(/[’‘`]/g, "'")
  .toLocaleLowerCase();

const stopwords = new Set([
  'the','and','from','with','for','in','of','on','no','op','bwv','rv','major','minor','movement',
  'suite','concerto','sonata','divertimento','prelude','fugue','dance','theme','spanish','version','arrangement','arr',
  'duo','duet','trio','quartet','serenade',
  'classical','guitar','guitars','de','del','la','las','el','los','le','les','un','une','aus','et','en',
  'air','song','music','complete','excerpt','발췌'
]);

function titleTokens(title) {
  return [...normalize(title).matchAll(/[\p{L}\p{N}]+/gu)]
    .map(match => match[0])
    .filter(token => token.length >= 3 && !stopwords.has(token) && !/^\d+$/.test(token));
}

function catalogueReferences(title) {
  return [...normalize(title).matchAll(/\b(?:bwv|rv|kv?|op)\.?\s*\d+(?:\s*(?:no\.?)\s*\d+)?/g)]
    .map(match => match[0].replace(/[^\p{L}\p{N}]/gu, '').replace(/^kv/, 'k'));
}

function ordinalReferences(title) {
  return [...normalize(title).matchAll(/\b(?:no|nr)\.?\s*(\d+)\b/g)].map(match => match[1]);
}

function compactWords(value) {
  return [...normalize(value).matchAll(/[\p{L}\p{N}]+/gu)].map(match => match[0]).join(' ');
}

function composerTokens(composer) {
  return [...normalize(composer).matchAll(/[\p{L}]+/gu)]
    .map(match => match[0])
    .filter(token => token.length >= 3 && !['traditional','anonymous','arrangement','johnann','maria','the'].includes(token));
}

const ensemblePatterns = {
  duo: [
    /\uae30\ud0c0.{0,8}(\ub4c0\uc624|2\s*\uc911\uc8fc|\uc774\uc911\uc8fc)/,
    /(\ub4c0\uc624|2\s*\uc911\uc8fc|\uc774\uc911\uc8fc).{0,12}\uae30\ud0c0/,
    /\u30ae\u30bf\u30fc.{0,8}(2\s*\u91cd\u594f|\u4e8c\u91cd\u594f|\u30c7\u30e5\u30aa)/,
    /(2\s*\u91cd\u594f|\u4e8c\u91cd\u594f|\u30c7\u30e5\u30aa).{0,12}\u30ae\u30bf\u30fc/,
    /altius duo|quantum guitar duo|kupinski guitar duo/,
    /brasil guitar duo|brazil guitar duo|amadeus guitar duo|duo kitharsis|gruber.{0,8}maklar|maccari.{0,8}pugliese|newman.{0,8}oltman|duo sempre|montenegrin guitar duo|roth guitar duo|duo daniyah|artis guitarduo|z\.?o\.?o\.? guitar duo|mobius guitar duo|montes.{0,8}kircher|riverside guitar duo|copenhagen guitar duo|noli.{0,8}soattin|meyer.{0,8}thachuk|angenendt guitar duo|carisma guitar duo|harmonia guitar duo|duo palissandre|australian guitar duo|dacha guitar duo|lucerne guitar duo|vital guitar duo|duo morat.{0,8}fergo|reichelt.{0,8}nissen|tuscan guitar duo/,
    /\bguitar\s*(duo|duet)\b/, /\b(duo|duet)\s*(for|of|de|di|para)?\s*guitars?\b/,
    /\btwo\s+(classical\s+)?guitars?\b/, /(?<!no\s)(?<!no\.\s)\b2\s+(classical\s+)?guitars?\b/, /guitarrenduo/, /duo\s+de\s+guitarr/,
    /duo\s+de\s+viol/, /dos\s+guitarr/, /due\s+chitarr/, /duo\s+de\s+guitares?/,
    /기타\s*(듀오|2\s*중주|이중주)/, /(듀오|2\s*중주|이중주).{0,12}기타/,
    /katona twins|assad brothers|beijing guitar duo|eden stell|duo melis|soloduo|solo duo|siquiera lima|grigoryan brothers|presti.{0,8}lagoya|폴리포니\s*기타\s*듀오/
  ],
  trio: [
    /\uae30\ud0c0.{0,8}(\ud2b8\ub9ac\uc624|3\s*\uc911\uc8fc|\uc0bc\uc911\uc8fc)/,
    /(\ud2b8\ub9ac\uc624|3\s*\uc911\uc8fc|\uc0bc\uc911\uc8fc).{0,12}\uae30\ud0c0/,
    /\u30ae\u30bf\u30fc.{0,8}(3\s*\u91cd\u594f|\u4e09\u91cd\u594f|\u30c8\u30ea\u30aa)/,
    /(3\s*\u91cd\u594f|\u4e09\u91cd\u594f|\u30c8\u30ea\u30aa).{0,12}\u30ae\u30bf\u30fc/,
    /\bguitar\s*trio\b/, /\btrio\s*(for|of|de|di|para)?\s*guitars?\b/,
    /\bthree\s+(classical\s+)?guitars?\b/, /(?<!no\s)(?<!no\.\s)\b3\s+(classical\s+)?guitars?\b/, /gitarrentrio/, /trio\s+de\s+guitarr/,
    /trio\s+de\s+viol/, /tres\s+guitarr/, /tre\s+chitarr/, /trio\s+de\s+guitares?/,
    /기타\s*(트리오|3\s*중주|삼중주)/, /(트리오|3\s*중주|삼중주).{0,12}기타/,
    /amsterdam guitar trio|california guitar trio|trio con brio/
  ],
  quartet: [
    /\uae30\ud0c0.{0,8}(\ucf70\ub974\ud14b|\ucffc\ud14b|4\s*\uc911\uc8fc|\uc0ac\uc911\uc8fc)/,
    /(\ucf70\ub974\ud14b|\ucffc\ud14b|4\s*\uc911\uc8fc|\uc0ac\uc911\uc8fc).{0,12}\uae30\ud0c0/,
    /\u30ae\u30bf\u30fc.{0,8}(4\s*\u91cd\u594f|\u56db\u91cd\u594f|\u30ab\u30eb\u30c6\u30c3\u30c8)/,
    /(4\s*\u91cd\u594f|\u56db\u91cd\u594f|\u30ab\u30eb\u30c6\u30c3\u30c8).{0,12}\u30ae\u30bf\u30fc/,
    /\bguitar\s*quartet\b/, /\bquartet\s*(for|of|de|di|para)?\s*guitars?\b/,
    /\bfour\s+(classical\s+)?guitars?\b/, /(?<!no\s)(?<!no\.\s)\b4\s+(classical\s+)?guitars?\b/, /gitarrenquartett/, /quarteto\s+de\s+guitarr/,
    /quarteto\s+de\s+viol/, /cuarteto\s+de\s+guitarr/, /quattro\s+chitarr/, /quatuor\s+de\s+guitares?/,
    /기타\s*(콰르텟|쿼텟|4\s*중주|사중주)/, /(콰르텟|쿼텟|4\s*중주|사중주).{0,12}기타/,
    /los angeles guitar quartet|brazilian guitar quartet|canadian guitar quartet|aquarelle guitar quartet|\blagq\b|\bbgq\b/
  ]
};

const excludedPatterns = /sheet\s*music|score|tutorial|lesson|how\s+to|play\s+along|backing\s+track|midi|synthesia|tablature|\btab\b|악보|레슨|강좌|반주/;
const classicalDuoIdentity = /classical\s+guit|concert\s+guit|nylon[-\s]string|guitare\s+classique|chitarra\s+classica|guitarra\s+cl[aá]sica|klassische\s+gitarre|클래식\s*기타|クラシックギター|katona twins|assad brothers|beijing guitar duo|brasil guitar duo|brazil guitar duo|eden stell|duo melis|soloduo|solo duo|siqueira lima|grigoryan brothers|presti.{0,8}lagoya|kupinski guitar duo|amadeus guitar duo|kitharsis|gruber.{0,8}maklar|maccari.{0,8}pugliese|newman.{0,8}oltman|duo sempre|montenegrin guitar duo|roth guitar duo|duo daniyah|artis guitar duo|z\.?o\.?o\.? guitar duo|mobius guitar duo|montes.{0,8}kircher|altius duo|quantum guitar duo|riverside guitar duo|copenhagen guitar duo|noli.{0,8}soattin|meyer.{0,8}thachuk|angenendt guitar duo|carisma guitar duo|harmonia guitar duo|duo palissandre|australian guitar duo|dacha guitar duo|lucerne guitar duo|vital guitar duo|duo morat.{0,8}fergo|reichelt.{0,8}nissen|tuscan guitar duo/;

function extractInitialData(html) {
  const markers = ['var ytInitialData = ', 'ytInitialData = '];
  let markerIndex = -1;
  for (const marker of markers) {
    markerIndex = html.indexOf(marker);
    if (markerIndex >= 0) break;
  }
  if (markerIndex < 0) return null;
  const start = html.indexOf('{', markerIndex);
  if (start < 0) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < html.length; index += 1) {
    const char = html[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return JSON.parse(html.slice(start, index + 1));
    }
  }
  return null;
}

function textFrom(node) {
  if (!node) return '';
  if (typeof node.simpleText === 'string') return node.simpleText;
  return Array.isArray(node.runs) ? node.runs.map(run => run.text || '').join('') : '';
}

function collectVideos(rootNode) {
  const videos = [];
  const seenNodes = new Set();
  const visit = node => {
    if (!node || typeof node !== 'object' || seenNodes.has(node)) return;
    seenNodes.add(node);
    if (node.videoRenderer?.videoId) {
      const video = node.videoRenderer;
      videos.push({
        id: video.videoId,
        title: textFrom(video.title),
        channel: textFrom(video.ownerText) || textFrom(video.longBylineText),
        duration: textFrom(video.lengthText),
        published: textFrom(video.publishedTimeText)
      });
    }
    for (const value of Object.values(node)) visit(value);
  };
  visit(rootNode);
  return [...new Map(videos.map(video => [video.id, video])).values()];
}

async function youtubeSearch(query) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%253D%253D`;
  for (let attempt = 0; attempt < requestAttempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          'accept-language': 'en-US,en;q=0.9,ko;q=0.8',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136 Safari/537.36',
          cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+410'
        },
        signal: AbortSignal.timeout(requestTimeout)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = extractInitialData(await response.text());
      if (data) return collectVideos(data);
    } catch (error) {
      throw error;
    }
    await new Promise(resolve => setTimeout(resolve, 350 * (attempt + 1)));
  }
  return [];
}

function qualifies(work, video) {
  const title = normalize(video.title);
  const configurationText = `${title} ${normalize(video.channel)}`;
  if (!title || excludedPatterns.test(configurationText) || /\btabs?\b/.test(configurationText)) return false;
  if (/me\s+and\s+myself|played\s+by\s+me|one[-\s]man|multitrack|split[-\s]screen/.test(title)) return false;
  if (work.type === 'duo' && work.genre !== 'classical' && !classicalDuoIdentity.test(configurationText)) return false;
  if (work.type === 'duo' && /(?:violin|cello|piano|trombone|flute|mandolin|ukulele).{0,16}(?:(?:and|&|\/)\s*)?guitar|guitar.{0,16}(?:(?:and|&|\/)\s*)?(?:violin|cello|piano|trombone|flute|mandolin|ukulele)/.test(title)) return false;
  if (!ensemblePatterns[work.type].some(pattern => pattern.test(configurationText))) return false;
  const tokens = titleTokens(work.title);
  const primaryTokens = titleTokens(String(work.title).split(/\bfrom\b/i)[0]);
  const matchedTokens = tokens.filter(token => title.includes(token));
  const references = catalogueReferences(work.title);
  const candidateReferences = catalogueReferences(video.title);
  const referenceMatches = (reference, candidateReference) => {
    if (reference === candidateReference) return true;
    const referenceHasNumber = /no\d+$/.test(reference);
    const candidateHasNumber = /no\d+$/.test(candidateReference);
    if (referenceHasNumber && candidateHasNumber) return false;
    return reference.replace(/no\d+$/, '') === candidateReference.replace(/no\d+$/, '');
  };
  const referencesMatch = references.length === 0 || candidateReferences.length === 0 ||
    references.some(reference => candidateReferences.some(candidateReference => referenceMatches(reference, candidateReference)));
  if (!referencesMatch) return false;
  const ordinals = ordinalReferences(work.title);
  const candidateOrdinals = ordinalReferences(video.title);
  if (ordinals.length && candidateOrdinals.length && !ordinals.some(number => candidateOrdinals.includes(number))) return false;
  if (ordinals.length) {
    const bareTitleNumbers = [...title.matchAll(/\b([\p{L}]+)\s+(\d{1,2})\b/gu)]
      .filter(match => tokens.includes(match[1]))
      .map(match => match[2]);
    if (bareTitleNumbers.length && !ordinals.some(number => bareTitleNumbers.includes(number))) return false;
  }
  const composerMatch = composerTokens(work.composer).some(token => configurationText.includes(token));
  const exactTitleMatch = compactWords(video.title).includes(compactWords(work.title));
  if (tokens.length === 0) return references.length > 0 &&
    candidateReferences.some(candidateReference => references.some(reference => referenceMatches(reference, candidateReference))) && composerMatch;
  if (primaryTokens.length && !primaryTokens.some(token => title.includes(token))) return false;
  const enoughTitleTokens = matchedTokens.length >= Math.min(3, tokens.length);
  return enoughTitleTokens && (composerMatch || exactTitleMatch);
}

function qualifiedVideos(work, candidates, {distinctChannels = true, limit = 4} = {}) {
  const channels = new Set();
  const videos = [];
  for (const video of candidates) {
    if (!qualifies(work, video)) continue;
    const channelKey = normalize(video.channel).replace(/\s+-\s+topic$/, '') || video.id;
    if (distinctChannels && channels.has(channelKey)) continue;
    channels.add(channelKey);
    videos.push(video);
    if (videos.length >= limit) break;
  }
  return videos;
}

function popularityFor(performanceCount) {
  if (performanceCount >= 25) return 'very-high';
  if (performanceCount >= 12) return 'high';
  if (performanceCount >= 6) return 'medium';
  return 'niche';
}

function resultMetrics(work, candidates) {
  const matches = qualifiedVideos(work, candidates, {distinctChannels: false, limit: Infinity});
  const channelCount = new Set(matches.map(video => normalize(video.channel).replace(/\s+-\s+topic$/, '') || video.id)).size;
  return {
    performanceCount: matches.length,
    channelCount,
    popularity: popularityFor(matches.length),
    videos: qualifiedVideos(work, matches, {distinctChannels: false, limit: 4}).map(video => ({
      ...video,
      url: 'https://www.youtube.com/watch?v=' + video.id
    }))
  };
}

function queriesFor(work) {
  const base = `"${work.title}" ${work.composer}`;
  const refinedPhrases = {
    duo: ['"guitar duo"', '"two guitars"', '"duo de guitarras"', '"duo di chitarre"', '\uae30\ud0c0 2\uc911\uc8fc \u30ae\u30bf\u30fc2\u91cd\u594f'],
    trio: ['"guitar trio"', '"three guitars"', '"trio de guitarras"', '"trio di chitarre"', '\uae30\ud0c0 3\uc911\uc8fc \u30ae\u30bf\u30fc3\u91cd\u594f'],
    quartet: ['"guitar quartet"', '"four guitars"', '"cuarteto de guitarras"', '"quartetto di chitarre"', '\uae30\ud0c0 4\uc911\uc8fc \u30ae\u30bf\u30fc4\u91cd\u594f']
  };
  return refinedPhrases[work.type].slice(0, maxQueries).map(phrase => `${base} ${phrase}`);
  /* Kept below for audit-history readability; unreachable after the refined query set. */
  const phrases = {
    duo: ['classical guitar duo guitar duet 기타 2중주', 'two guitars guitar duo 기타 듀오'],
    trio: ['classical guitar trio three guitars 기타 3중주', 'guitar trio 기타 트리오'],
    quartet: ['classical guitar quartet four guitars 기타 4중주', 'guitar quartet 기타 콰르텟']
  };
  return phrases[work.type].slice(0, maxQueries).map(phrase => `${base} ${phrase}`);
}

async function auditWork(work) {
  const candidates = new Map();
  const searchedQueries = [];
  let error = '';
  for (const query of queriesFor(work)) {
    if (!measurePopularity && qualifiedVideos(work, candidates.values()).length >= threshold) break;
    searchedQueries.push(query);
    try {
      const videos = await youtubeSearch(query);
      for (const video of videos) {
        if (!candidates.has(video.id) && candidates.size < maxCandidates) candidates.set(video.id, video);
      }
    } catch (caught) {
      error = caught.message;
    }
  }
  const {videos, performanceCount, channelCount, popularity} = resultMetrics(work, candidates.values());
  return {
    key: keyFor(work), type: work.type, title: work.title, composer: work.composer,
    verified: videos.length >= threshold, evidenceCount: videos.length,
    performanceCount, channelCount, popularity,
    videos, candidates: [...candidates.values()], searchedQueries, error
  };
}

async function runPool(items, workerCount, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
      const done = results.filter(Boolean).length;
      if (done % 10 === 0 || done === items.length) {
        const verified = results.filter(result => result?.verified).length;
        console.log(`[audit] ${done}/${items.length} checked, ${verified} verified`);
      }
    }
  }
  await Promise.all(Array.from({length: workerCount}, run));
  return results;
}

const mergeReportPaths = (options['merge-reports'] || '').split(',').filter(Boolean);
const sourceReports = mergeReportPaths.length
  ? mergeReportPaths.map(filename => JSON.parse(fs.readFileSync(path.resolve(root, filename), 'utf8')))
  : options['retry-errors-from']
    ? [JSON.parse(fs.readFileSync(path.resolve(root, options['retry-errors-from']), 'utf8'))]
    : [];
const bestResult = (current, candidate) => {
  if (!current) return candidate;
  const preferred = candidate.verified !== current.verified
    ? (candidate.verified ? candidate : current)
    : candidate.evidenceCount !== current.evidenceCount
      ? (candidate.evidenceCount > current.evidenceCount ? candidate : current)
      : (candidate.error && !current.error ? current : candidate);
  const candidates = [...new Map([...(current.candidates || []), ...(candidate.candidates || [])]
    .map(video => [video.id, video])).values()];
  const searchedQueries = [...new Set([...(current.searchedQueries || []), ...(candidate.searchedQueries || [])])];
  return {...preferred, candidates, searchedQueries, error: current.error && candidate.error ? candidate.error : ''};
};
const mergedSourceResults = new Map();
for (const sourceReport of sourceReports) {
  for (const result of sourceReport.results) {
    mergedSourceResults.set(result.key, bestResult(mergedSourceResults.get(result.key), result));
  }
}
const baseReport = sourceReports.length ? {results: [...mergedSourceResults.values()]} : null;
let works = context.window.repertoireCatalog.filter(work => requestedTypes.has(work.type));
if (baseReport) {
  if (options['merge-only'] === 'true') works = [];
  else if (options['reaudit-all'] === 'true') works = works;
  else {
    const retryUnverified = options['retry-unverified'] === 'true';
    const retryOneEvidence = options['retry-one-evidence'] === 'true';
    const auditMissing = options['audit-missing'] === 'true';
    const existingKeys = new Set(baseReport.results.map(result => result.key));
    const retryKeys = new Set(baseReport.results
      .filter(result => !result.verified && (retryUnverified || (retryOneEvidence && result.evidenceCount === 1) || result.error))
      .map(result => result.key));
    works = works.filter(work => retryKeys.has(keyFor(work)) || (auditMissing && !existingKeys.has(keyFor(work))));
  }
}
if (offset > 0 || limit > 0) works = works.slice(offset, limit > 0 ? offset + limit : undefined);
console.log(`[audit] checking ${works.length} works with threshold ${threshold}`);
const auditedResults = await runPool(works, concurrency, auditWork);
let results = baseReport ? (() => {
  const merged = new Map(baseReport.results.map(result => [result.key, result]));
  for (const result of auditedResults) merged.set(result.key, bestResult(merged.get(result.key), result));
  return [...merged.values()];
})() : auditedResults;
if (options.rejudge === 'true') {
  const worksByKey = new Map(context.window.repertoireCatalog.map(work => [keyFor(work), work]));
  results = results.map(result => {
    const work = worksByKey.get(result.key);
    if (!work) return result;
    const metrics = resultMetrics(work, result.candidates || []);
    return {...result, ...metrics, evidenceCount: metrics.videos.length, verified: metrics.videos.length >= threshold};
  });
}
const excludedDuplicateKeys = new Set([
  'duo|Scherzino|Manuel María Ponce'
]);
results = results.map(result => excludedDuplicateKeys.has(result.key)
  ? {...result, verified: false, evidenceCount: 0, videos: [], exclusion: 'duplicate catalogue entry'}
  : result);
const verifiedResults = results.filter(result => result.verified);
const report = {
  generatedAt: new Date().toISOString(),
  method: 'YouTube public search; title/composer and two-guitar configuration matched; at least 2 unique performance videos; duplicate videos, score, lesson, MIDI, backing track and solo multitrack excluded; channel count reported separately',
  searchProtocol: {
    queryVariantsPerWork: maxQueries,
    candidateSampleCap: maxCandidates,
    popularityMeaning: 'count of unique qualifying performance videos found in the public-search sample; not YouTube global total'
  },
  threshold,
  searched: results.length,
  verified: verifiedResults.length,
  rejected: results.length - verifiedResults.length,
  byType: Object.fromEntries([...requestedTypes].map(type => {
    const typed = results.filter(result => result.type === type);
    return [type, {searched: typed.length, verified: typed.filter(result => result.verified).length}];
  })),
  results
};

fs.mkdirSync(path.dirname(outputPath), {recursive: true});
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(`[audit] report written to ${path.relative(root, outputPath)}`);

if (options['report-only'] !== 'true') {
  const selectedDuoKeys = new Set([...verifiedResults]
    .filter(result => result.type === 'duo')
    .sort((a, b) => (b.performanceCount || 0) - (a.performanceCount || 0) || a.title.localeCompare(b.title))
    .slice(0, 300)
    .map(result => result.key));
  const publishedResults = verifiedResults.filter(result => result.type !== 'duo' || selectedDuoKeys.has(result.key));
  const evidence = Object.fromEntries(publishedResults.map(result => [result.key, result.videos]));
  const metrics = Object.fromEntries(publishedResults.map(result => [result.key, {
    performanceCount: result.performanceCount || result.evidenceCount,
    channelCount: result.channelCount || result.evidenceCount,
    popularity: result.popularity || popularityFor(result.performanceCount || result.evidenceCount)
  }]));
  const clientData = `(() => {\n  const audit = ${JSON.stringify({
    generatedAt: report.generatedAt,
    threshold: report.threshold,
    searched: report.searched,
    verified: report.verified,
    rejected: report.rejected,
    byType: report.byType,
    evidence,
    metrics
  }, null, 2)};\n  const keyFor = work => \`${'${work.type}|${work.title}|${work.composer}'}\`;\n  const before = window.repertoireCatalog || [];\n  const after = before.filter(work => {\n    if (work.type === 'solo') return true;\n    const videos = audit.evidence[keyFor(work)] || [];\n    if (videos.length < audit.threshold) return false;\n    work.ensembleVideos = videos;\n    work.status = 'ensemble-verified';\n    work.video = videos[0].id;\n    return true;\n  });\n  after.forEach((work, index) => { work.id = \`work-${'${String(index + 1).padStart(3, \'0\')}'}\`; });\n  window.repertoireCatalog = after;\n  window.ensembleVerificationAudit = audit;\n})();\n`;
  fs.mkdirSync(path.dirname(dataPath), {recursive: true});
  const augmentedClientData = clientData.replace(
    '    work.ensembleVideos = videos;\n',
    '    work.ensembleVideos = videos;\n' +
    '    const metrics = audit.metrics[keyFor(work)] || {};\n' +
    '    work.youtubePerformanceCount = metrics.performanceCount || videos.length;\n' +
    '    work.youtubeChannelCount = metrics.channelCount || videos.length;\n' +
    "    work.youtubePopularity = metrics.popularity || 'niche';\n"
  );
  fs.writeFileSync(dataPath, augmentedClientData, 'utf8');
  console.log(`[audit] client data written to ${path.relative(root, dataPath)}`);
}
