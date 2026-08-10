import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const context = {window:{}, console};
vm.createContext(context);
for (const filename of ['repertoire-data.js', 'repertoire-expansion.js', 'duo-expansion-data.js', 'ensemble-verification-data.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
}

const duos = context.window.repertoireCatalog.filter(work => work.type === 'duo');
const failures = [];
if (duos.length > 300) failures.push('published duo cap exceeded: ' + duos.length);
for (const work of duos) {
  if (work.status !== 'ensemble-verified') failures.push(work.title + ': not ensemble-verified');
  if (!work.duoCategory || !work.duoForm) failures.push(work.title + ': missing fine classification');
  if (!work.youtubePopularity || !Number.isFinite(work.youtubePerformanceCount)) failures.push(work.title + ': missing popularity');
  if (!Array.isArray(work.ensembleVideos) || work.ensembleVideos.length < 2) failures.push(work.title + ': fewer than 2 evidence videos');
  const videoIds = new Set((work.ensembleVideos || []).map(video => video.id));
  if (videoIds.size < 2) failures.push(work.title + ': fewer than 2 unique evidence videos');
}

if (failures.length) {
  console.error(failures.slice(0, 30).join('\n'));
  process.exitCode = 1;
} else {
  const popularity = Object.fromEntries(['very-high','high','medium','niche'].map(level => [
    level, duos.filter(work => work.youtubePopularity === level).length
  ]));
  console.log(JSON.stringify({duos:duos.length, popularity}, null, 2));
}
