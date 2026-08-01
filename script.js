const repertoire = [
  {type:'solo',typeKo:'솔로',era:'르네상스',level:'중급',title:'황제의 노래',composer:'Luys de Narváez',note:'비우엘라의 섬세한 변주',query:'Narvaez Cancion del Emperador classical guitar'},
  {type:'solo',typeKo:'솔로',era:'바로크',level:'최상급',title:'샤콘느 BWV 1004',composer:'J. S. Bach',note:'줄리언 브림 편곡·연주',video:'5z9Pld-4K4c'},
  {type:'solo',typeKo:'솔로',era:'고전',level:'고급',title:'모차르트 주제에 의한 변주곡',composer:'Fernando Sor',note:'고전주의 기타의 정수',query:'Fernando Sor Mozart Variations Op 9 classical guitar'},
  {type:'solo',typeKo:'솔로',era:'낭만',level:'초중급',title:'눈물 — 전주곡',composer:'Francisco Tárrega',note:'짧고 깊은 노래',query:'Francisco Tarrega Lagrima classical guitar'},
  {type:'solo',typeKo:'솔로',era:'낭만',level:'중급',title:'알함브라 궁전의 추억',composer:'Francisco Tárrega',note:'트레몰로의 대표작',video:'iJsZ7euzjNc'},
  {type:'solo',typeKo:'솔로',era:'민족주의',level:'고급',title:'아스투리아스 (전설)',composer:'Isaac Albéniz',note:'기타로 다시 태어난 피아노곡',video:'inBKFMB-yPg'},
  {type:'solo',typeKo:'솔로',era:'낭만',level:'초중급',title:'로망스 아노니모',composer:'Anonymous',note:'노래하는 아르페지오',query:'Romance Anonimo classical guitar Narciso Yepes'},
  {type:'solo',typeKo:'솔로',era:'20세기',level:'고급',title:'대성당',composer:'Agustín Barrios',note:'장엄한 3악장 서사',query:'Agustin Barrios La Catedral classical guitar'},
  {type:'solo',typeKo:'솔로',era:'20세기',level:'고급',title:'전주곡 1번',composer:'Heitor Villa-Lobos',note:'첼로를 닮은 깊은 저음',query:'Villa Lobos Prelude No 1 classical guitar'},
  {type:'solo',typeKo:'솔로',era:'현대',level:'고급',title:'검은 데카메론',composer:'Leo Brouwer',note:'세 개의 발라드로 된 서사',query:'Leo Brouwer El Decameron Negro guitar'},
  {type:'duo',typeKo:'듀오',era:'고전',level:'중급',title:'격려 Op.34',composer:'Fernando Sor',note:'우아한 고전주의의 균형',query:'Fernando Sor Encouragement Op 34 guitar duo'},
  {type:'duo',typeKo:'듀오',era:'고전',level:'중급',title:'협주적 변주곡 Op.130',composer:'Mauro Giuliani',note:'대화하듯 교차하는 기교',query:'Giuliani Variazioni Concertanti Op 130 guitar duo'},
  {type:'duo',typeKo:'듀오',era:'민족주의',level:'고급',title:'스페인 무곡 1번',composer:'Manuel de Falla',note:'리듬과 색채의 불꽃',query:'Falla Spanish Dance No 1 guitar duo'},
  {type:'duo',typeKo:'듀오',era:'현대',level:'고급',title:'탱고 모음곡',composer:'Astor Piazzolla',note:'두 기타의 날카로운 대화',query:'Duo Melis Piazzolla Tango Suite'},
  {type:'duo',typeKo:'듀오',era:'현대',level:'고급',title:'브라질 춤곡',composer:'Sérgio Assad',note:'리듬과 색채의 교차',query:'Sergio Assad Brazilian guitar duo'},
  {type:'duo',typeKo:'듀오',era:'현대',level:'중급',title:'푸가와 미스터리',composer:'Astor Piazzolla',note:'바로크 형식 속의 탱고',query:'Piazzolla Fuga y Misterio guitar duo'},
  {type:'trio',typeKo:'트리오',era:'바로크',level:'중급',title:'협주곡 라장조 RV 93',composer:'Antonio Vivaldi',note:'세 대의 기타로 듣는 바로크',query:'Vivaldi RV 93 three guitars trio'},
  {type:'trio',typeKo:'트리오',era:'고전',level:'중급',title:'디베르티멘토 K.136',composer:'W. A. Mozart',note:'맑고 투명한 성부',query:'Mozart K136 classical guitar trio'},
  {type:'trio',typeKo:'트리오',era:'민족주의',level:'고급',title:'카르멘 모음곡',composer:'Georges Bizet',note:'세 겹으로 번지는 극적 색채',query:'Carmen Suite classical guitar trio'},
  {type:'trio',typeKo:'트리오',era:'현대',level:'고급',title:'피아졸라나',composer:'Paulo Bellinati',note:'현대 브라질의 리듬',query:'Bellinati Piazzollana guitar trio'},
  {type:'quartet',typeKo:'콰르텟',era:'바로크',level:'중급',title:'브란덴부르크 협주곡 3번',composer:'J. S. Bach',note:'대위법의 입체적 흐름',query:'Bach Brandenburg 3 guitar quartet'},
  {type:'quartet',typeKo:'콰르텟',era:'인상주의',level:'고급',title:'달빛',composer:'Claude Debussy',note:'네 대가 만드는 빛과 그림자',query:'Debussy Clair de Lune guitar quartet'},
  {type:'quartet',typeKo:'콰르텟',era:'현대',level:'중급',title:'파헬벨 “Loose” Canon',composer:'LAGQ / Pachelbel',note:'유쾌하게 비튼 익숙한 캐논',video:'fHwccmEqI9A'},
  {type:'quartet',typeKo:'콰르텟',era:'현대',level:'고급',title:'쿠바의 풍경과 비',composer:'Leo Brouwer',note:'네 대의 기타가 그리는 폭풍',query:'Leo Brouwer Cuban Landscape with Rain guitar quartet'},
  {type:'quartet',typeKo:'콰르텟',era:'현대',level:'고급',title:'카르멘 모음곡',composer:'Georges Bizet / William Kanengiser',note:'오페라를 닮은 기타 오케스트라',query:'Los Angeles Guitar Quartet Carmen Suite'},
  {type:'quartet',typeKo:'콰르텟',era:'현대',level:'고급',title:'A Furiosa',composer:'Paulo Bellinati',note:'폭발적인 브라질 리듬',query:'Brazilian Guitar Quartet A Furiosa Bellinati'}
];

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
if (header && menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.desktop-nav a').forEach(link => link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), {threshold: .06});
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const grid = document.querySelector('#repertoire-grid');
const search = document.querySelector('#piece-search');
const empty = document.querySelector('#empty-state');
let activeFilter = 'all';

function renderPieces() {
  if (!grid || !search) return;
  const term = search.value.trim().toLowerCase();
  const items = repertoire.filter(piece =>
    (activeFilter === 'all' || piece.type === activeFilter) &&
    `${piece.title} ${piece.composer} ${piece.era} ${piece.note}`.toLowerCase().includes(term)
  );
  grid.innerHTML = items.map((piece, index) => {
    const thumb = piece.video ? `https://i.ytimg.com/vi/${piece.video}/hqdefault.jpg` : '';
    const style = thumb ? `style="background-image:url('${thumb}')"` : '';
    const action = piece.video
      ? `<button class="play-circle play-video" data-video="${piece.video}" data-title="${piece.title} — ${piece.composer}" aria-label="${piece.title} 영상 재생">▶</button>`
      : `<button class="play-circle search-youtube" data-query="${piece.query}" aria-label="${piece.title} YouTube에서 찾기">↗</button>`;
    return `<article class="piece-card ${piece.video ? 'has-video' : ''}" ${style}>
      <div class="piece-meta"><span>${String(index + 1).padStart(2, '0')} · ${piece.typeKo}</span><span>${piece.era}</span></div>
      <h3>${piece.title}</h3><p class="composer">${piece.composer}</p>
      <div class="piece-bottom"><span>${piece.level}<br>${piece.note}</span>${action}</div>
    </article>`;
  }).join('');
  if (empty) empty.hidden = items.length > 0;
}

if (grid && search) {
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
    renderPieces();
  }));
  search.addEventListener('input', renderPieces);
  renderPieces();
}

const modal = document.querySelector('#video-modal');
const frame = document.querySelector('#video-frame');
const videoTitle = document.querySelector('#video-title');
document.addEventListener('click', event => {
  const play = event.target.closest('.play-video');
  const youtubeSearch = event.target.closest('.search-youtube');
  if (play && modal && frame) {
    if (videoTitle) videoTitle.textContent = play.dataset.title;
    frame.src = `https://www.youtube-nocookie.com/embed/${play.dataset.video}?autoplay=1&rel=0`;
    modal.showModal();
  }
  if (youtubeSearch) window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeSearch.dataset.query)}`, '_blank', 'noopener');
});

function closeVideo() {
  if (frame) frame.src = '';
  if (modal?.open) modal.close();
}
document.querySelector('#close-modal')?.addEventListener('click', closeVideo);
modal?.addEventListener('click', event => { if (event.target === modal) closeVideo(); });

const practiceVideos = [
  {category:'routine',label:'루틴 설계',title:'워밍업과 기술 루틴은 다르다',channel:'This is Classical Guitar',duration:'6 MIN',video:'NlE2UtqGExY',summary:'공연 전 몸과 감각을 깨우는 짧은 워밍업과, 약점을 개선하는 기술 훈련을 구분합니다.',apply:'오늘의 5분 워밍업과 장기 기술 목표를 따로 적어 보세요.'},
  {category:'routine',label:'따라 하기',title:'15분 클래식 기타 워밍업',channel:'Uroš Barič · Guitarise',duration:'15 MIN',video:'h3d_ieNbL_Q',summary:'양손을 단계적으로 깨우는 완성형 워밍업을 실제 템포로 함께 진행합니다.',apply:'처음에는 영상 속도의 절반으로, 힘이 들어가기 전까지만 반복하세요.'},
  {category:'routine',label:'연습 설계',title:'피해야 할 연습 실수 5가지',channel:'Brandon Acker',duration:'15 MIN',video:'HkaBsEZU8Pw',summary:'너무 빠르게 하기, 메트로놈을 쓰지 않기, 곡 전체만 반복하기, 목표와 구조가 없는 연습을 짚습니다.',apply:'연습 전 목표를 한 문장으로 쓰고 가장 어려운 두 마디부터 시작하세요.'},
  {category:'right',label:'오른손',title:'i–m 교대 탄현과 워킹',channel:'This is Classical Guitar',duration:'LESSON',video:'89J7kgEup0w',summary:'검지와 중지가 줄을 건너갈 때도 교대 순서와 손 모양을 유지하는 기본 훈련입니다.',apply:'개방현에서 음량과 음색이 같은지 듣고, 줄을 건너며 속도를 올리세요.'},
  {category:'right',label:'오른손',title:'아르페지오 민첩성과 균형',channel:'TCDG Guitar Lessons',duration:'LESSON',video:'Q5UVNPFwheA',summary:'반복 아르페지오 안에서 손가락 독립, 일정한 박, 고른 음량을 함께 훈련합니다.',apply:'베이스·중간음·최고음에 번갈아 악센트를 주며 성부 조절을 연습하세요.'},
  {category:'left',label:'왼손',title:'초급 슬러 — 해머링과 풀링',channel:'This is Classical Guitar',duration:'LESSON',video:'qOEIRMJJTc4',summary:'수직·수평 이동을 사용해 해머링과 풀링의 정확도, 이완, 고른 음량을 만듭니다.',apply:'힘으로 누르지 말고 프렛 가까이에서 빠르고 작은 동작을 사용하세요.'},
  {category:'reading',label:'초견',title:'클래식 기타 초견의 기준',channel:'David Hartley',duration:'LESSON',video:'_WQ137_IiJM',summary:'멈추지 않기, 리듬과 박 유지하기, 충분히 쉬운 악보와 느린 템포를 선택하는 방법을 다룹니다.',apply:'현재 연주 수준보다 두 단계 쉬운 악보를 매일 처음 보는 상태로 5분 읽으세요.'},
  {category:'reading',label:'곡 연습',title:'메트로놈으로 아주 느리게 연습하기',channel:'This is Classical Guitar',duration:'LESSON',video:'YllpgZjPhm0',summary:'새 곡을 실제로 얼마나 느리게 시작해야 하는지와 템포를 점진적으로 올리는 과정을 보여줍니다.',apply:'실수 없는 시작 속도를 기록하고 3회 성공할 때만 2–4bpm 올리세요.'}
];

const practiceGrid = document.querySelector('#practice-video-grid');
let practiceFilter = 'all';
function renderPracticeVideos() {
  if (!practiceGrid) return;
  const videos = practiceVideos.filter(item => practiceFilter === 'all' || item.category === practiceFilter);
  practiceGrid.innerHTML = videos.map((item, index) => `<article class="lesson-card">
    <div class="lesson-thumb" style="background-image:url('https://i.ytimg.com/vi/${item.video}/hqdefault.jpg')">
      <span>${item.label}</span><button class="play-circle play-video" data-video="${item.video}" data-title="${item.title} — ${item.channel}" aria-label="${item.title} 재생">▶</button>
    </div>
    <div class="lesson-copy"><div class="lesson-meta"><span>${String(index + 1).padStart(2, '0')} · ${item.channel}</span><b>${item.duration}</b></div><h3>${item.title}</h3><p>${item.summary}</p><small><b>적용</b> ${item.apply}</small></div>
  </article>`).join('');
}
if (practiceGrid) {
  document.querySelectorAll('[data-practice-filter]').forEach(button => button.addEventListener('click', () => {
    practiceFilter = button.dataset.practiceFilter;
    document.querySelectorAll('[data-practice-filter]').forEach(item => item.classList.toggle('active', item === button));
    renderPracticeVideos();
  }));
  renderPracticeVideos();
}

const routines = {
  20:[['02','몸·자세·조율','어깨와 손의 긴장을 풀고 오늘의 목표를 정합니다.'],['04','워밍업','개방현 교대와 느린 아르페지오로 음색을 맞춥니다.'],['05','한 가지 기술','오늘 곡에 직접 필요한 기술만 선택합니다.'],['07','곡의 두 마디','청킹과 느린 반복 후 앞뒤 마디를 연결합니다.'],['02','한 번 연주·메모','멈추지 않고 연주한 뒤 다음 시작점을 적습니다.']],
  40:[['03','몸·자세·조율','호흡, 착좌, 악기 지지와 양손 모양을 확인합니다.'],['07','종합 워밍업','스케일·아르페지오·슬러를 낮은 강도로 연주합니다.'],['08','기술 초점','약점 한 가지를 리듬 변형이나 버스트로 훈련합니다.'],['15','곡 연습','새 구간 7분, 어려운 구간 8분으로 나눕니다.'],['05','수행·기록','한 구간을 멈추지 않고 녹음하고 한 줄을 기록합니다.']],
  60:[['05','준비','몸·자세·조율과 오늘의 구체적 목표를 확인합니다.'],['10','기초 기술','교대·스케일·아르페지오·슬러를 순환합니다.'],['10','맞춤 기술','현재 레퍼토리에 필요한 기술 하나를 깊게 다룹니다.'],['15','새 구간','손을 분리하고 짧은 단위로 읽고 연결합니다.'],['12','기존 곡','음악적 표현, 암보, 불안한 연결부를 점검합니다.'],['05','초견','쉬운 새 악보를 멈추지 않고 읽습니다.'],['03','녹음·기록','한 번 연주하고 내일의 첫 과제를 남깁니다.']]
};
const routineDisplay = document.querySelector('#routine-display');
function renderRoutine(minutes = '20') {
  if (!routineDisplay) return;
  routineDisplay.innerHTML = routines[minutes].map((step, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span><strong>${step[0]}분</strong><b>${step[1]}</b><p>${step[2]}</p></div>`).join('');
}
if (routineDisplay) {
  document.querySelectorAll('[data-routine]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-routine]').forEach(item => item.classList.toggle('active', item === button));
    renderRoutine(button.dataset.routine);
  }));
  renderRoutine();
}

const sideLinks = [...document.querySelectorAll('.side-index a[href^="#"]')];
if (sideLinks.length) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) sideLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }), {rootMargin: '-20% 0px -65% 0px'});
  sideLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) sectionObserver.observe(section);
  });
}
