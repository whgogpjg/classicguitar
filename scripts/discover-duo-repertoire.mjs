import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const outputPath = path.join(root, 'duo-discovery-results.json');
const searches = [
  'Eden Stell Guitar Duo Topic', 'Duo Melis classical guitar', 'Brasil Guitar Duo Topic',
  'Beijing Guitar Duo Topic', 'Amadeus Guitar Duo Topic', 'Katona Twins Topic',
  'Presti Lagoya guitar duo', 'Kupinski Guitar Duo', 'SoloDuo classical guitar',
  'Siqueira Lima Guitar Duo', 'Duo Kitharsis classical guitar', 'Z.o.o. guitar duo',
  'Duo Gruber Maklar Topic', 'ARTIS GuitarDuo', 'Assad Brothers guitar duo',
  'Newman Oltman Guitar Duo', 'Maccari Pugliese guitar duo', 'Duo Sempre guitar',
  'Duo Montes Kircher guitar', 'Mobius Guitar Duo classical', 'Montenegrin Guitar Duo',
  'Roth Guitar Duo', 'Daniyah Guitar Duo', 'Eden Stell Scarlatti Rameau Couperin',
  'guitar duo Castelnuovo Tedesco Les Guitares bien temperees',
  'classical guitar duo Bach inventions', 'classical guitar duo Scarlatti sonata',
  'classical guitar duo Granados Spanish Dance', 'classical guitar duo Albeniz Suite Espanola',
  'classical guitar duo Piazzolla', 'classical guitar duo Sergio Assad',
  'classical guitar duo Leo Brouwer', 'classical guitar duo Fernando Sor',
  'classical guitar duo Mauro Giuliani', 'classical guitar duo Carulli'
];

function extractInitialData(html) {
  const markerIndex = Math.max(html.indexOf('var ytInitialData = '), html.indexOf('ytInitialData = '));
  if (markerIndex < 0) return null;
  const start = html.indexOf('{', markerIndex);
  let depth = 0, inString = false, escaped = false;
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
    else if (char === '}' && --depth === 0) return JSON.parse(html.slice(start, index + 1));
  }
  return null;
}

const textFrom = node => typeof node?.simpleText === 'string'
  ? node.simpleText
  : (node?.runs || []).map(run => run.text || '').join('');

function collectVideos(rootNode) {
  const videos = [], seen = new Set();
  const visit = node => {
    if (!node || typeof node !== 'object' || seen.has(node)) return;
    seen.add(node);
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
    Object.values(node).forEach(visit);
  };
  visit(rootNode);
  return [...new Map(videos.map(video => [video.id, video])).values()].slice(0, 24);
}

async function search(query) {
  const response = await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%253D%253D`, {
    headers: {
      'accept-language': 'en-US,en;q=0.9,ko;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136 Safari/537.36',
      cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+410'
    },
    signal: AbortSignal.timeout(7000)
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return collectVideos(extractInitialData(await response.text()));
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < searches.length) {
    const index = cursor++;
    const query = searches[index];
    try {
      const videos = await search(query);
      results[index] = {query, videos};
      console.log(`[discover] ${index + 1}/${searches.length} ${query}: ${videos.length}`);
    } catch (error) {
      results[index] = {query, videos: [], error: error.message};
      console.log(`[discover] ${index + 1}/${searches.length} ${query}: ${error.message}`);
    }
  }
}
await Promise.all(Array.from({length: 5}, worker));
fs.writeFileSync(outputPath, `${JSON.stringify({generatedAt: new Date().toISOString(), results}, null, 2)}\n`, 'utf8');
console.log(`[discover] wrote ${path.relative(root, outputPath)}`);
