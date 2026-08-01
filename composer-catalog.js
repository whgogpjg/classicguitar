(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'composer.css';
  document.head.append(stylesheet);
  document.title = '클래식 기타 작곡가 44인 — Aria';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = '르네상스부터 현대까지 클래식 기타 작곡가 44인의 생애, 음악 언어, 대표작과 감상 링크';

  const labels = {
    era:{renaissance:'르네상스',baroque:'바로크',classical:'고전',romantic:'낭만',modern:'20세기',contemporary:'현대'},
    region:{iberia:'스페인·이베리아',italy:'이탈리아','central-europe':'중부·동유럽','france-uk':'프랑스·영국','latin-america':'라틴아메리카',asia:'아시아','north-america':'북아메리카'},
    relation:{performer:'연주자-작곡가',composer:'기타를 위해 쓴 작곡가',source:'주요 전사 원전'}
  };
  const eraOrder = {renaissance:0,baroque:1,classical:2,romantic:3,modern:4,contemporary:5};
  const fold = value => String(value).toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');

  function init() {
    const data = window.composerCatalog || [];
    const grid = document.querySelector('#composer-directory-grid');
    const search = document.querySelector('#composer-search');
    if (!grid || !search || !data.length) return;

    const state = {era:'all',region:'all',relation:'all',sort:'timeline'};
    let visible = 12;
    const region = document.querySelector('#composer-region');
    const relation = document.querySelector('#composer-relation');
    const sort = document.querySelector('#composer-sort');
    const count = document.querySelector('#composer-result-count');
    const summary = document.querySelector('#composer-filter-summary');
    const empty = document.querySelector('#composer-empty');
    const more = document.querySelector('#composer-load-more');
    const params = new URLSearchParams(location.search);
    if (params.get('q')) search.value = params.get('q');
    ['era','region','relation','sort'].forEach(key => { if (params.get(key)) state[key] = params.get(key); });
    if (region) region.value = state.region;
    if (relation) relation.value = state.relation;
    if (sort) sort.value = state.sort;

    document.querySelectorAll('[data-composer-count]').forEach(element => {
      const era = element.dataset.composerCount;
      element.textContent = era === 'all' ? data.length : data.filter(person => person.era === era).length;
    });

    function results() {
      const term = fold(search.value.trim());
      return data.filter(person => {
        const text = fold(`${person.name} ${person.latin} ${person.country} ${person.style} ${person.works.join(' ')} ${labels.era[person.era]}`);
        return (state.era === 'all' || person.era === state.era) &&
          (state.region === 'all' || person.region === state.region) &&
          (state.relation === 'all' || person.relation === state.relation) &&
          (!term || text.includes(term));
      }).sort((a,b) => {
        if (state.sort === 'name') return a.name.localeCompare(b.name,'ko');
        if (state.sort === 'latin') return a.latin.localeCompare(b.latin,'en');
        return eraOrder[a.era] - eraOrder[b.era] || Number(a.id.slice(-2)) - Number(b.id.slice(-2));
      });
    }

    function syncUrl() {
      const next = new URLSearchParams();
      if (search.value.trim()) next.set('q',search.value.trim());
      Object.entries(state).forEach(([key,value]) => { if (value !== 'all' && value !== 'timeline') next.set(key,value); });
      history.replaceState(null,'',`${location.pathname}${next.size ? `?${next}` : ''}${location.hash}`);
    }

    function card(person,index) {
      const workLinks = person.works.map(work => `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(`${person.latin} ${work} classical guitar`)}" target="_blank" rel="noopener">${work} <span>↗</span></a>`).join('');
      return `<article class="composer-directory-card">
        <div class="composer-card-meta"><span>${String(index+1).padStart(2,'0')} · ${labels.era[person.era]}</span><span>${person.years}</span></div>
        <h3>${person.name}</h3><small>${person.latin} · ${person.country}</small>
        <p>${person.style}</p>
        <div class="composer-work-list"><b>대표작과 연주</b>${workLinks}</div>
        <div class="composer-card-footer"><span>${labels.relation[person.relation]}</span><a href="repertoire.html?q=${encodeURIComponent(person.latin)}">레퍼토리에서 찾기 →</a></div>
      </article>`;
    }

    function render({updateUrl=true}={}) {
      const list = results();
      grid.innerHTML = list.slice(0,visible).map(card).join('');
      if (count) count.textContent = `${list.length}명`;
      const active = [];
      if (state.era !== 'all') active.push(labels.era[state.era]);
      if (state.region !== 'all') active.push(labels.region[state.region]);
      if (state.relation !== 'all') active.push(labels.relation[state.relation]);
      if (search.value.trim()) active.push(`“${search.value.trim()}”`);
      if (summary) summary.textContent = active.length ? active.join(' · ') : '전체 작곡가';
      if (empty) empty.hidden = list.length > 0;
      if (more) {
        more.hidden = list.length <= visible;
        more.textContent = `${Math.min(12,list.length-visible)}명 더 보기 · ${Math.min(visible,list.length)}/${list.length}`;
      }
      document.querySelectorAll('[data-composer-era]').forEach(button => button.classList.toggle('active',button.dataset.composerEra === state.era));
      if (updateUrl) syncUrl();
    }

    document.querySelectorAll('[data-composer-era]').forEach(button => button.addEventListener('click',() => {
      state.era = button.dataset.composerEra;
      visible = 12;
      render();
    }));
    region?.addEventListener('change',() => {state.region=region.value;visible=12;render();});
    relation?.addEventListener('change',() => {state.relation=relation.value;visible=12;render();});
    sort?.addEventListener('change',() => {state.sort=sort.value;render();});
    search.addEventListener('input',() => {visible=12;render();});
    more?.addEventListener('click',() => {visible+=12;render({updateUrl:false});});
    document.querySelector('#composer-reset')?.addEventListener('click',() => {
      Object.assign(state,{era:'all',region:'all',relation:'all',sort:'timeline'});
      search.value='';
      if(region)region.value='all';
      if(relation)relation.value='all';
      if(sort)sort.value='timeline';
      visible=12;
      render();
      search.focus();
    });
    document.querySelector('#composer-random')?.addEventListener('click',() => {
      const list=results();
      if(!list.length)return;
      const pick=list[Math.floor(Math.random()*list.length)];
      search.value=pick.name;
      visible=12;
      render();
      grid.querySelector('article')?.scrollIntoView({behavior:'smooth',block:'center'});
    });
    render({updateUrl:false});
  }

  window.addEventListener('DOMContentLoaded',init);
})();
