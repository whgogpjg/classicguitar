# Claude 작업 인수인계

마지막 갱신: 2026-08-10 (KST)

## 현재 상태

- 정적 HTML/CSS/JavaScript로 만든 클래식 기타 아카이브다. 별도 빌드 도구나 패키지 설치는 필요 없다.
- 브랜치는 `main`이며, 인수인계 문서를 만들기 직전 `HEAD`와 `origin/main`은 모두 `d758c1d`였다.
- `d758c1d Refresh duo catalog metadata`까지 원격에 반영되어 있다. 그 이후의 중주 분류 일반화 작업은 아직 미커밋 상태다.
- 세부 분류 필드는 듀오 전용 `duoCategory`/`duoForm`에서 중주 공통 `ensembleCategory`/`ensembleForm`으로 일반화되었고, 트리오·콰르텟도 같은 필터·카드 태그를 쓴다.
- 현재 공개 카탈로그는 총 807곡이다.
  - 솔로 445곡
  - 듀오 304곡
  - 트리오 19곡
  - 콰르텟 39곡
- ID 중복은 없고, 중주 362곡은 `ensemble-verified` 상태다.

## 최근 완료한 작업

1. 클래식 기타 듀오 후보를 대폭 확장했다.
2. YouTube 공개 검색 결과에서 곡명·작곡가·2대 클래식 기타 편성을 판정해, 고유 실연 영상이 2건 이상인 곡만 공개 데이터에 남겼다.
3. 중주에 `ensembleCategory`, `ensembleForm`, `youtubePerformanceCount`, `youtubeChannelCount`, `youtubePopularity`, `ensembleVideos`를 붙였다.
4. 중주 세부 분류/형식/인기도 필터, YouTube 인기순 정렬, 검증 영상 모달과 빠른 추천 UI를 추가했다.
5. 카탈로그 설명과 정적 메타데이터를 현재 수치(807곡, 중주 362곡) 및 최대 5개 검색식 기준으로 갱신했다.
6. (미커밋) 듀오 전용 `duoCategory`/`duoForm`을 `ensembleCategory`/`ensembleForm`으로 개명하고, `ensemble-classification-data.js`로 트리오 19곡·콰르텟 39곡에 같은 분류를 부여했다. 필터·카드 태그·검색 인덱스·검증 스크립트를 중주 전체로 확장했다.
7. (미커밋) 듀오 후보를 571 → 859곡으로 확장하고 4차에 걸쳐 감사해 공개 듀오를 237 → 304곡으로 늘렸다. 추가 축은 스페인 정통(Tárrega·Llobet·Torroba·Turina·Sanz), 라틴(Barrios·Lauro·Pujol·Morel·Lecuona), 브라질(Bellinati·Nazareth·Pernambuco), 관현악 전사(Bartók·Grieg·Mussorgsky·Puccini), 19세기 듀오 원곡(Carulli·Giuliani·Molino), 현대 원곡(Dyens·Ourkouzounov·Rak)이다.
8. (미커밋) 분류를 세분화했다. `latin-hispanic` 카테고리를 신설하고 형식에 카논·서곡·전주곡·왈츠·밀롱가·쇼루를 추가했으며, 폴백 키워드 규칙을 17개에서 60여 개로 늘려 '성격소품' 뭉치를 줄였다. 듀오 탱고·스페인·바로크·원곡 빠른 추천 버튼도 추가했다.
9. (미커밋) 감사 매처의 오탐 두 가지를 고쳤다. `Invention n4`처럼 공백 없는 서수 표기를 인식하지 못하던 문제와, 기타+오르간/하프시코드 등 타악기 조합 듀오를 걸러내지 못하던 문제다. 반대로 `2GUITARS`처럼 공백 없는 편성 표기는 인식하도록 넓혔다.

관련 커밋:

- `d758c1d` Refresh duo catalog metadata
- `7554a22` Expand and verify classical guitar duo catalog
- `c9395e8` Expand verified ensemble repertoire
- `d82118d` Verify ensemble repertoire videos

## 핵심 파일

- `repertoire.html`: 레퍼토리 페이지 마크업, 정적 카운트와 설명, 스크립트 로드 순서
- `catalog.js`: 필터/정렬/카드/악보 및 검증 영상 모달 동작
- `catalog.css`: 레퍼토리 카탈로그 전용 스타일
- `repertoire-data.js`: 기본 레퍼토리 데이터
- `repertoire-expansion.js`: 확장 데이터
- `duo-expansion-data.js`: 듀오 후보와 세부 분류 데이터. 분류가 비어 있는 듀오에는 제목 키워드 폴백 규칙을 적용한다.
- `ensemble-classification-data.js`: 트리오·콰르텟에 `ensembleCategory`/`ensembleForm`을 부여한다. `type|title|composer` 키로 매칭하므로 폴백 없이 전곡을 명시적으로 덮어야 한다.
- `ensemble-verification-data.js`: 검증을 통과한 중주만 남기고 증거 영상 및 인기도 지표를 주입하는 생성 파일
- `ensemble-youtube-audit.json`: 전체 검색 감사 결과(약 6.5 MB)
- `scripts/audit-youtube-ensembles.mjs`: YouTube 공개 검색 감사 및 위 두 검증 파일 생성
- `scripts/discover-duo-repertoire.mjs`: 추가 듀오 후보 탐색. 실행하면 루트에 `duo-discovery-results.json`을 만든다.
- `scripts/validate-ensemble-catalog.mjs`: 공개 중주 데이터(듀오·트리오·콰르텟)의 필수 조건 검증

브라우저 데이터 로드 순서는 반드시 다음을 유지한다.

`repertoire-data.js` → `repertoire-expansion.js` → `duo-expansion-data.js` → `ensemble-classification-data.js` → `ensemble-verification-data.js` → `catalog.js`

## 검증 결과와 명령

감사 결과에는 982개 후보가 있고 362개가 통과했다. 편성별로는 듀오 859개 검색/304개 통과, 트리오 57/19, 콰르텟 66/39다. 현재 프로토콜은 작품당 최대 5개 검색식, 후보 표본 최대 180개, 통과 기준 고유 실연 2개 이상이다. `youtubePerformanceCount`는 YouTube 전체 조회량이나 전체 영상 수가 아니라 이 공개 검색 표본에서 확인한 최소 수치다.

감사는 4차에 걸쳐 누적했다. 매 회 `--merge-reports`로 이전 리포트를 병합하고 `--audit-missing=true`로 신규 후보만 새로 검색했다. 매처를 고친 뒤에는 `--merge-only=true --rejudge=true`로 네트워크 없이 저장된 후보 영상만 재판정했다. 재판정은 무료이므로 판정 로직을 바꿨으면 반드시 실행할 것.

빠른 로컬 검증:

```powershell
node scripts\validate-ensemble-catalog.mjs
```

현재 기대 출력:

```json
{
  "ensembles": 362,
  "byType": {
    "duo": 304,
    "trio": 19,
    "quartet": 39
  },
  "popularity": {
    "very-high": 2,
    "high": 24,
    "medium": 78,
    "niche": 258
  }
}
```

로컬 화면 확인:

```powershell
python -m http.server 8000
```

그 뒤 `http://localhost:8000/repertoire.html`에서 검색, 편성/중주 세부 필터, 인기순 정렬, 더 보기, 악보 모달, 검증 영상 모달, 모바일 레이아웃을 확인한다.

## 주의할 점

- `scripts/audit-youtube-ensembles.mjs`는 네트워크를 사용하며 기본적으로 `ensemble-youtube-audit.json`과 `ensemble-verification-data.js`를 덮어쓴다. 옵션과 대상 범위를 확인하지 않고 재실행하지 말 것.
- YouTube 검색 결과는 시간·지역·접속 상태에 따라 달라질 수 있다. 재감사 후에는 반드시 검증 스크립트와 브라우저 확인을 다시 수행할 것.
- 듀오 게시 상한은 400곡이다. 생성 스크립트는 `--duo-cap` 옵션(기본 400)으로, 검증 스크립트는 하드코딩 값으로 갖고 있으니 바꾸면 둘 다 맞출 것.
- 듀오 후보를 더 늘릴 때 통과율은 영역에 따라 크게 다르다. 스페인 전사와 바로크 소품은 40~50%지만, `genre`가 `classical`이 아닌 항목(팝·영화·`jazz-world`)은 `classicalDuoIdentity` 게이트를 통과해야 해서 10% 안팎이다. 통과율을 올리려면 클래식 장르 레퍼토리를 먼저 채울 것.
- 후보를 추가할 때 그룹에 `ensembleForm`을 일괄 지정하면 '성격소품' 뭉치가 커진다. 그룹 전체가 같은 형식일 때만 지정하고, 아니면 생략해 제목 키워드 규칙이 곡별로 분류하게 둘 것.
- 정적 카운트/설명은 `catalog.js`가 런타임에 일부 갱신하지만, SEO 메타 설명과 `repertoire.html`의 초기 문구도 데이터 변경 시 함께 맞춰야 한다.
- 감사 결과의 `channelCount`는 참고 지표일 뿐 통과 조건은 고유 영상 2건이다. UI 문구도 이 의미를 유지해야 한다.
- 저장소에는 자동화된 브라우저 테스트나 패키지 기반 테스트 러너가 없다. 스크립트 없이 DOM 동작을 확인하려면 저장소 밖(예: 임시 디렉터리)에 `jsdom`을 설치해 `repertoire.html`을 로드하는 임시 스크립트를 쓰고, 저장소에는 `node_modules`를 만들지 않는다.
- `ensembleForm`/`ensembleCategory` 값을 새로 만들면 세 곳을 함께 고쳐야 한다. `catalog.js`의 `labels`, `repertoire.html`의 `#piece-ensembleForm`·`#piece-ensembleCategory` 옵션, 그리고 데이터 파일이다. 라벨이 없으면 카드 태그와 검색 색인에서 조용히 누락된다.

## 다음 세션 시작 순서

1. `git status --short --branch`와 `git log -5 --oneline`으로 이 기록 이후 변경을 확인한다.
2. `node scripts\validate-ensemble-catalog.mjs`를 실행한다.
3. 사용자가 새 목표를 주지 않았다면 임의로 대규모 YouTube 재감사를 시작하지 말고, 먼저 원하는 다음 작업 범위를 확인한다.
4. 데이터나 UI를 변경하면 카탈로그 수치, SEO 문구, 검증 데이터, 브라우저 동작을 한 세트로 점검한다.
