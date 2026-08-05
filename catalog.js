(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'catalog.css';
  document.head.append(stylesheet);
  document.title = '클래식 기타 레퍼토리 파인더 — Aria';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = '200곡을 편성, 시대, 난이도, 지역, 기법, 분위기, 연주 시간으로 찾는 클래식 기타 레퍼토리';

  const labels = {
    type: {solo:'솔로', duo:'듀오', trio:'트리오', quartet:'콰르텟', ensemble:'중주'},
    era: {renaissance:'르네상스', baroque:'바로크', classical:'고전', romantic:'낭만', modern:'20세기', contemporary:'현대', 'modern-plus':'20세기 이후'},
    difficulty: {beginner:'입문', intermediate:'중급', advanced:'고급', virtuoso:'최상급'},
    region: {spain:'스페인', italy:'이탈리아', 'central-europe':'중부 유럽', 'france-uk':'프랑스·영국', 'latin-america':'라틴아메리카', 'north-america':'북아메리카', asia:'아시아', global:'그 밖의 지역'},
    technique: {arpeggio:'아르페지오', tremolo:'트레몰로', counterpoint:'대위법', scales:'스케일', slurs:'슬러', harmonics:'하모닉스', rhythm:'리듬', percussion:'타악적 주법', voicing:'성부 표현'},
    mood: {lyrical:'서정적', dance:'춤곡풍', meditative:'명상적', dramatic:'극적', bright:'밝음', dark:'어두움'},
    duration: {short:'5분 이하', medium:'6–10분', long:'11분 이상'},
    source: {original:'기타 원곡', transcription:'편곡·전사'}
  };
  const filterKeys = ['era','difficulty','region','technique','mood','duration','source'];
  const difficultyOrder = {beginner:0, intermediate:1, advanced:2, virtuoso:3};
  const fold = value => String(value).toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  function initCatalog() {
    const works = window.repertoireCatalog || [];
    const grid = document.querySelector('#repertoire-grid');
    const search = document.querySelector('#piece-search');
    if (!grid || !search || !works.length) return;

    const state = {type:'all', era:'all', difficulty:'all', region:'all', technique:'all', mood:'all', duration:'all', source:'all', sort:'recommended'};
    let visible = 24;
    const controls = Object.fromEntries(filterKeys.map(key => [key, document.querySelector(`#piece-${key}`)]));
    const sortControl = document.querySelector('#piece-sort');
    const resultCount = document.querySelector('#result-count');
    const summary = document.querySelector('#active-filter-summary');
    const empty = document.querySelector('#empty-state');
    const more = document.querySelector('#load-more');

    const modernPlus = new Option('20세기 이후', 'modern-plus');
    controls.era?.add(modernPlus);

    const params = new URLSearchParams(location.search);
    if (params.get('q')) search.value = params.get('q');
    ['type', ...filterKeys, 'sort'].forEach(key => {
      if (params.get(key)) state[key] = params.get(key);
    });
    filterKeys.forEach(key => { if (controls[key]) controls[key].value = state[key]; });
    if (sortControl) sortControl.value = state.sort;

    document.querySelectorAll('[data-type-count]').forEach(counter => {
      const type = counter.dataset.typeCount;
      counter.textContent = type === 'all' ? works.length : works.filter(work => work.type === type).length;
    });

    function durationMatches(minutes, band) {
      return band === 'all' || (band === 'short' && minutes <= 5) || (band === 'medium' && minutes >= 6 && minutes <= 10) || (band === 'long' && minutes >= 11);
    }

    function getResults() {
      const term = fold(search.value.trim());
      const filtered = works.filter(work => {
        const typeMatch = state.type === 'all' || work.type === state.type || (state.type === 'ensemble' && work.type !== 'solo');
        const eraMatch = state.era === 'all' || work.era === state.era || (state.era === 'modern-plus' && ['modern','contemporary'].includes(work.era));
        const text = fold(`${work.title} ${work.composer} ${labels.era[work.era]} ${labels.region[work.region]} ${labels.technique[work.technique]}`);
        return typeMatch && eraMatch &&
          (state.difficulty === 'all' || work.difficulty === state.difficulty) &&
          (state.region === 'all' || work.region === state.region) &&
          (state.technique === 'all' || work.technique === state.technique) &&
          (state.mood === 'all' || work.mood === state.mood) &&
          durationMatches(work.duration, state.duration) &&
          (state.source === 'all' || work.source === state.source) &&
          (!term || text.includes(term));
      });
      return filtered.sort((a, b) => {
        if (state.sort === 'title') return a.title.localeCompare(b.title, 'ko');
        if (state.sort === 'composer') return a.composer.localeCompare(b.composer, 'en');
        if (state.sort === 'duration') return a.duration - b.duration || a.title.localeCompare(b.title, 'ko');
        if (state.sort === 'difficulty') return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty] || a.title.localeCompare(b.title, 'ko');
        return Number(a.id.slice(-3)) - Number(b.id.slice(-3));
      });
    }

    function syncUrl() {
      const next = new URLSearchParams();
      if (search.value.trim()) next.set('q', search.value.trim());
      Object.entries(state).forEach(([key, value]) => { if (value !== 'all' && value !== 'recommended') next.set(key, value); });
      history.replaceState(null, '', `${location.pathname}${next.size ? `?${next}` : ''}${location.hash}`);
    }

    function describeFilters() {
      const parts = [];
      if (state.type !== 'all') parts.push(labels.type[state.type]);
      filterKeys.forEach(key => { if (state[key] !== 'all') parts.push(labels[key][state[key]]); });
      if (search.value.trim()) parts.push(`“${search.value.trim()}”`);
      return parts.length ? parts.join(' · ') : '모든 레퍼토리';
    }

    function card(work, index) {
      const thumb = work.video ? `style="background-image:url('https://i.ytimg.com/vi/${work.video}/hqdefault.jpg')"` : '';
      const action = work.video
        ? `<button class="play-circle play-video" data-video="${work.video}" data-title="${work.title} — ${work.composer}" aria-label="${work.title} 영상 재생">▶</button>`
        : `<button class="play-circle search-youtube" data-query="${work.query}" aria-label="${work.title} YouTube에서 찾기">↗</button>`;
      return `<article class="piece-card catalog-card ${work.video ? 'has-video' : ''}" ${thumb}>
        <div class="piece-meta"><span>${String(index + 1).padStart(3, '0')} · ${labels.type[work.type]}</span><span>${labels.era[work.era]}</span></div>
        <h3>${work.title}</h3><p class="composer">${work.composer}</p>
        <div class="catalog-tags"><span>${labels.difficulty[work.difficulty]}</span><span>${labels.region[work.region]}</span><span>${labels.technique[work.technique]}</span><span>${labels.mood[work.mood]}</span></div>
        <div class="piece-bottom"><span>약 ${work.duration}분 · ${labels.source[work.source]}</span>${action}</div>
      </article>`;
    }

    function render({updateUrl = true} = {}) {
      const results = getResults();
      grid.innerHTML = results.slice(0, visible).map(card).join('');
      if (resultCount) resultCount.textContent = `${results.length}곡`;
      if (summary) summary.textContent = describeFilters();
      if (empty) empty.hidden = results.length > 0;
      if (more) {
        more.hidden = results.length <= visible;
        more.textContent = `${Math.min(24, results.length - visible)}곡 더 보기 · ${visible}/${results.length}`;
      }
      document.querySelectorAll('[data-catalog-type]').forEach(button => button.classList.toggle('active', button.dataset.catalogType === state.type));
      if (updateUrl) syncUrl();
    }

    function reset({keepSearch = false} = {}) {
      Object.assign(state, {type:'all', era:'all', difficulty:'all', region:'all', technique:'all', mood:'all', duration:'all', source:'all', sort:'recommended'});
      if (!keepSearch) search.value = '';
      filterKeys.forEach(key => { if (controls[key]) controls[key].value = 'all'; });
      if (sortControl) sortControl.value = 'recommended';
      visible = 24;
    }

    document.querySelectorAll('[data-catalog-type]').forEach(button => button.addEventListener('click', () => {
      state.type = button.dataset.catalogType;
      visible = 24;
      render();
    }));
    filterKeys.forEach(key => controls[key]?.addEventListener('change', () => {
      state[key] = controls[key].value;
      visible = 24;
      render();
    }));
    sortControl?.addEventListener('change', () => { state.sort = sortControl.value; render(); });
    search.addEventListener('input', () => { visible = 24; render(); });
    document.querySelector('#reset-filters')?.addEventListener('click', () => { reset(); render(); search.focus(); });
    more?.addEventListener('click', () => { visible += 24; render({updateUrl:false}); });

    document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
      reset();
      const preset = button.dataset.preset;
      if (preset === 'beginner') state.difficulty = controls.difficulty.value = 'beginner';
      if (preset === 'spanish') state.region = controls.region.value = 'spain';
      if (preset === 'ensemble') state.type = 'ensemble';
      if (preset === 'modern') state.era = controls.era.value = 'modern-plus';
      if (preset === 'short') state.duration = controls.duration.value = 'short';
      render();
      document.querySelector('#library')?.scrollIntoView({behavior:'smooth', block:'start'});
    }));

    document.querySelector('#random-piece')?.addEventListener('click', () => {
      const candidates = getResults();
      if (!candidates.length) return;
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      search.value = pick.title;
      visible = 24;
      render();
      grid.querySelector('.piece-card')?.scrollIntoView({behavior:'smooth', block:'center'});
    });

    render({updateUrl:false});
  }

  window.addEventListener('DOMContentLoaded', initCatalog);
})();
