import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const context = {window:{}, console};
vm.createContext(context);
for (const filename of ['repertoire-data.js', 'repertoire-expansion.js', 'duo-expansion-data.js', 'ensemble-classification-data.js', 'ensemble-verification-data.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
}

const ensembleTypes = ['duo', 'trio', 'quartet'];
const ensembles = context.window.repertoireCatalog.filter(work => ensembleTypes.includes(work.type));
const failures = [];
const duoCount = ensembles.filter(work => work.type === 'duo').length;
if (duoCount > 400) failures.push('published duo cap exceeded: ' + duoCount);
for (const work of ensembles) {
  if (work.status !== 'ensemble-verified') failures.push(work.title + ': not ensemble-verified');
  if (!work.ensembleCategory || !work.ensembleForm) failures.push(work.title + ': missing fine classification');
  if (!work.youtubePopularity || !Number.isFinite(work.youtubePerformanceCount)) failures.push(work.title + ': missing popularity');
  if (!Array.isArray(work.ensembleVideos) || work.ensembleVideos.length < 2) failures.push(work.title + ': fewer than 2 evidence videos');
  const videoIds = new Set((work.ensembleVideos || []).map(video => video.id));
  if (videoIds.size < 2) failures.push(work.title + ': fewer than 2 unique evidence videos');
}

if (failures.length) {
  console.error(failures.slice(0, 30).join('\n'));
  process.exitCode = 1;
} else {
  const countBy = (works, key, values) => Object.fromEntries(values.map(value => [
    value, works.filter(work => work[key] === value).length
  ]));
  console.log(JSON.stringify({
    ensembles: ensembles.length,
    byType: countBy(ensembles, 'type', ensembleTypes),
    popularity: countBy(ensembles, 'youtubePopularity', ['very-high', 'high', 'medium', 'niche'])
  }, null, 2));
}
