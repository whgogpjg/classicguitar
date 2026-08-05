(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'catalog.css';
  document.head.append(stylesheet);
  document.title = '클래식 기타 레퍼토리 파인더 — Aria';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = '750곡을 조건별로 찾고 연주 영상과 무료 원전·정식 출판 악보 출처를 확인하는 클래식 기타 레퍼토리';

  const labels = {
    type: {solo:'솔로', duo:'듀오', trio:'트리오', quartet:'콰르텟', ensemble:'중주'},
    era: {renaissance:'르네상스', baroque:'바로크', classical:'고전', romantic:'낭만', modern:'20세기', contemporary:'현대', 'modern-plus':'20세기 이후'},
    difficulty: {beginner:'입문', intermediate:'중급', advanced:'고급', virtuoso:'최상급'},
    region: {spain:'스페인', italy:'이탈리아', 'central-europe':'중부 유럽', 'france-uk':'프랑스·영국', 'latin-america':'라틴아메리카', 'north-america':'북아메리카', asia:'아시아', global:'그 밖의 지역'},
    technique: {arpeggio:'아르페지오', tremolo:'트레몰로', counterpoint:'대위법', scales:'스케일', slurs:'슬러', harmonics:'하모닉스', rhythm:'리듬', percussion:'타악적 주법', voicing:'성부 표현'},
    mood: {lyrical:'서정적', dance:'춤곡풍', meditative:'명상적', dramatic:'극적', bright:'밝음', dark:'어두움'},
    duration: {short:'5분 이하', medium:'6–10분', long:'11분 이상'},
    source: {original:'기타 원곡', transcription:'편곡·전사'},
    genre: {classical:'클래식 기타', crossover:'세미클래식·크로스오버', film:'영화 음악', screen:'TV·뮤지컬', game:'게임 음악', anime:'애니·지브리', pop:'팝·록 명곡', 'recent-pop':'컨템퍼러리 팝', kpop:'K-pop·한국', 'jazz-world':'재즈·월드'},
    release: {recent:'2020년 이후', millennium:'2000–2019', legacy:'2000년 이전'},
    status: {core:'기타 레퍼토리', arrangement:'클래식 기타 편곡', verified:'클래식 기타 연주 영상 확인'}
  };
  const filterKeys = ['genre','release','era','difficulty','region','technique','mood','duration','source'];
  const difficultyOrder = {beginner:0, intermediate:1, advanced:2, virtuoso:3};
  const fold = value => String(value).toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const publicDomainModernComposers = [
    'tárrega', 'tarrega', 'albéniz', 'albeniz', 'granados', 'barrios', 'mangoré',
    'llobet', 'sagreras', 'debussy', 'ravel', 'de falla', 'ponce', 'turina',
    'satie', 'janáček', 'janacek', 'scriabin', 'scott joplin'
  ];

  function isLikelyPublicDomain(work) {
    if (['renaissance', 'baroque', 'classical', 'romantic'].includes(work.era)) return true;
    const composer = fold(work.composer);
    return publicDomainModernComposers.some(name => composer.includes(fold(name)));
  }

  function scoreSourcesFor(work) {
    const ensemble = labels.type[work.type] || work.type;
    const query = `${work.title} ${work.composer} classical guitar ${work.type}`;
    const encoded = encodeURIComponent(query);
    const imslpQuery = encodeURIComponent(`${work.title} ${work.composer}`);
    const links = [];
    const publicDomain = isLikelyPublicDomain(work);

    if (publicDomain) {
      links.push({
        provider: 'IMSLP', badge: '무료 원전',
        description: work.source === 'transcription' ? '퍼블릭 도메인 원전 검색 · 기타 편곡판의 권리는 별도 확인' : '퍼블릭 도메인 악보와 판본 검색',
        url: `https://imslp.org/index.php?title=Special:Search&search=${imslpQuery}`
      });
    }

    if (work.genre === 'classical' || work.type !== 'solo') {
      links.push({
        provider: "Productions d'Oz", badge: '기타 전문 출판사',
        description: `${ensemble}용 정식 출판 악보 검색`,
        url: `https://productionsdoz.com/en/catalogue/?search=${encoded}`
      });
    }

    if (work.genre !== 'classical' || work.source === 'transcription') {
      links.push({
        provider: 'Musicnotes', badge: '정식 디지털 악보',
        description: '영화·팝·재즈·편곡 악보 검색',
        url: `https://www.musicnotes.com/search/go?w=${encoded}`
      });
    }

    links.push({
      provider: 'Sheet Music Plus', badge: '출판 악보',
      description: `${ensemble} 편성의 인쇄·디지털 악보 검색`,
      url: `https://www.sheetmusicplus.com/en/explore?q=${encoded}`
    });

    if (!publicDomain && work.genre === 'classical' && links.length < 3) {
      links.push({
        provider: 'IMSLP', badge: '작품·판본 확인',
        description: '작품 정보와 국가별 공개 여부 확인',
        url: `https://imslp.org/index.php?title=Special:Search&search=${imslpQuery}`
      });
    }

    return {publicDomain, links: links.slice(0, 3)};
  }

  function initCatalog() {
    const works = window.repertoireCatalog || [];
    const grid = document.querySelector('#repertoire-grid');
    const search = document.querySelector('#piece-search');
    if (!grid || !search || !works.length) return;

    const state = {type:'all', genre:'all', release:'all', era:'all', difficulty:'all', region:'all', technique:'all', mood:'all', duration:'all', source:'all', sort:'recommended'};
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

    function releaseMatches(year, band) {
      if (band === 'all') return true;
      if (!year) return band === 'legacy';
      return (band === 'recent' && year >= 2020) || (band === 'millennium' && year >= 2000 && year <= 2019) || (band === 'legacy' && year < 2000);
    }

    function getResults() {
      const term = fold(search.value.trim());
      const filtered = works.filter(work => {
        const typeMatch = state.type === 'all' || work.type === state.type || (state.type === 'ensemble' && work.type !== 'solo');
        const eraMatch = state.era === 'all' || work.era === state.era || (state.era === 'modern-plus' && ['modern','contemporary'].includes(work.era));
        const text = fold(`${work.title} ${work.composer} ${work.year || ''} ${labels.genre[work.genre]} ${labels.era[work.era]} ${labels.region[work.region]} ${labels.technique[work.technique]}`);
        return typeMatch && eraMatch &&
          (state.genre === 'all' || work.genre === state.genre) &&
          releaseMatches(work.year, state.release) &&
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
        if (state.sort === 'newest') return (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title, 'ko');
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
      const scoreAction = `<button class="score-button open-score" data-score-id="${work.id}" aria-label="${work.title} 악보 찾기"><span aria-hidden="true">♩</span> 악보</button>`;
      return `<article class="piece-card catalog-card ${work.video ? 'has-video' : ''}" ${thumb}>
        <div class="piece-meta"><span>${String(index + 1).padStart(3, '0')} · ${labels.type[work.type]}</span><span>${work.year || labels.era[work.era]}</span></div>
        <h3>${work.title}</h3><p class="composer">${work.composer}</p>
        <div class="catalog-status ${work.status || 'core'}">${labels.status[work.status || 'core']}</div>
        <div class="catalog-tags"><span>${labels.genre[work.genre]}</span><span>${labels.difficulty[work.difficulty]}</span><span>${labels.technique[work.technique]}</span><span>${labels.mood[work.mood]}</span></div>
        <div class="piece-bottom"><span>약 ${work.duration}분 · ${labels.source[work.source]}</span><div class="piece-actions">${scoreAction}${action}</div></div>
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
      Object.assign(state, {type:'all', genre:'all', release:'all', era:'all', difficulty:'all', region:'all', technique:'all', mood:'all', duration:'all', source:'all', sort:'recommended'});
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
      if (preset === 'recent') state.release = controls.release.value = 'recent';
      if (preset === 'screen') state.genre = controls.genre.value = 'film';
      if (preset === 'game') state.genre = controls.genre.value = 'game';
      if (preset === 'kpop') state.genre = controls.genre.value = 'kpop';
      if (preset === 'duo-film') { state.type = 'duo'; state.genre = controls.genre.value = 'film'; }
      if (preset === 'duo-crossover') { state.type = 'duo'; state.genre = controls.genre.value = 'crossover'; }
      if (preset === 'duo-pop') { state.type = 'duo'; state.genre = controls.genre.value = 'pop'; }
      if (preset === 'duo-korean') { state.type = 'duo'; state.genre = controls.genre.value = 'kpop'; }
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

    const scoreModal = document.querySelector('#score-modal');
    const scoreTitle = document.querySelector('#score-title');
    const scoreMeta = document.querySelector('#score-meta');
    const scoreLinks = document.querySelector('#score-links');
    const closeScore = () => { if (scoreModal?.open) scoreModal.close(); };

    document.addEventListener('click', event => {
      const trigger = event.target.closest('.open-score');
      if (!trigger || !scoreModal || !scoreLinks) return;
      const work = works.find(item => item.id === trigger.dataset.scoreId);
      if (!work) return;
      const result = scoreSourcesFor(work);
      if (scoreTitle) scoreTitle.textContent = `${work.title} — ${work.composer}`;
      if (scoreMeta) scoreMeta.textContent = result.publicDomain
        ? '무료 원전을 우선 표시합니다. 기타 편곡판은 편곡자와 출판사의 권리를 별도로 확인하세요.'
        : '저작권 보호 가능성이 있는 작품입니다. 정식 출판·판매처에서 편성과 이용 범위를 확인하세요.';
      const nodes = result.links.map(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = 'score-source-link';
        const copy = document.createElement('span');
        const provider = document.createElement('strong');
        const badge = document.createElement('small');
        const description = document.createElement('p');
        provider.textContent = item.provider;
        badge.textContent = item.badge;
        description.textContent = item.description;
        copy.append(provider, badge, description);
        const arrow = document.createElement('b');
        arrow.textContent = '↗';
        link.append(copy, arrow);
        return link;
      });
      scoreLinks.replaceChildren(...nodes);
      scoreModal.showModal();
    });
    document.querySelector('#close-score-modal')?.addEventListener('click', closeScore);
    scoreModal?.addEventListener('click', event => { if (event.target === scoreModal) closeScore(); });

    render({updateUrl:false});
  }

  window.addEventListener('DOMContentLoaded', initCatalog);
})();
