(() => {
  const composers = [];
  const add = (era, region, relation, entries) => entries.forEach(([name, latin, years, country, style, works]) => composers.push({
    id: `composer-${String(composers.length + 1).padStart(2, '0')}`,
    era, region, relation, name, latin, years, country, style, works
  }));

  add('renaissance','iberia','performer',[
    ['루이스 데 밀란','Luis de Milán','c.1500–c.1561','스페인','비우엘라의 여러 성부를 노래처럼 연결하고 즉흥적인 판타지아 형식을 정교하게 다듬었습니다.',['El Maestro','Pavanas','Fantasías']],
    ['루이스 데 나르바에스','Luys de Narváez','c.1500–after 1550','스페인','성악 다성음악의 전사와 디페렌시아스 변주기법을 통해 르네상스 현악기의 표현 범위를 넓혔습니다.',['Canción del Emperador','Guardame las vacas','Los seys libros del Delphín']],
    ['알론소 무다라','Alonso Mudarra','c.1510–1580','스페인','대담한 불협화음과 리듬으로 비우엘라 음악에 극적인 긴장과 실험성을 더했습니다.',['Fantasia X','Tres libros de música','Conde Claros']]
  ]);
  add('renaissance','france-uk','performer',[
    ['존 다울런드','John Dowland','1563–1626','영국','류트의 섬세한 대위법과 엘리자베스 시대의 멜랑콜리를 결합했으며 기타 전사곡의 핵심 원천입니다.',['Lachrimae Pavan','The Frog Galliard','A Fancy']]
  ]);

  add('baroque','iberia','performer',[
    ['가스파르 산스','Gaspar Sanz','1640–1710','스페인','라스게아도와 푼테아도를 함께 기록해 바로크 기타의 춤곡·반주·독주 어법을 전했습니다.',['Canarios','Españoleta','Pavanas']]
  ]);
  add('baroque','france-uk','performer',[
    ['로베르 드 비제','Robert de Visée','c.1655–c.1732','프랑스','프랑스 궁정무곡의 장식과 우아한 프레이징을 테오르보와 바로크 기타에 담았습니다.',['Suite in D minor','Chaconne','Menuet']]
  ]);
  add('baroque','central-europe','performer',[
    ['실비우스 레오폴트 바이스','S. L. Weiss','1687–1750','독일','장대한 모음곡과 자유로운 프렐류드로 후기 바로크 류트의 화성·성부·음역을 극대화했습니다.',['Fantasia','Passacaglia','Lute Sonatas']]
  ]);
  add('baroque','central-europe','source',[
    ['요한 제바스티안 바흐','J. S. Bach','1685–1750','독일','류트·바이올린·첼로 작품이 기타로 전사되며 대위법, 성부 독립, 장기적인 형식 설계의 기준이 되었습니다.',['Chaconne, BWV 1004','Bourrée, BWV 996','Prelude, BWV 999']]
  ]);

  add('classical','france-uk','performer',[
    ['앙투안 드 루아예','Antoine de Lhoyer','1768–1852','프랑스','두 대 이상 기타를 위한 초기 실내악에서 각 파트를 독립된 성부로 다뤘습니다.',['Trio Concertant, Op. 29','Air varié et dialogué','Duos concertants']]
  ]);
  add('classical','italy','performer',[
    ['페르디난도 카룰리','Ferdinando Carulli','1770–1841','이탈리아','교육용 소품과 듀오·협주 작품을 통해 6현 기타의 문법을 유럽 전역에 보급했습니다.',['Méthode, Op. 27','Serenade, Op. 96','Sonatas']],
    ['마우로 줄리아니','Mauro Giuliani','1781–1829','이탈리아','빈 고전주의의 형식에 오페라적 선율과 비르투오소 스케일·아르페지오를 결합했습니다.',['Guitar Concerto No. 1, Op. 30','Grand Overture, Op. 61','Rossiniana No. 1']],
    ['마테오 카르카시','Matteo Carcassi','1792–1853','이탈리아','선율성과 단계적인 기교를 결합한 연습곡으로 고전 기타 교육의 표준을 만들었습니다.',['25 Études, Op. 60','Méthode, Op. 59','Fantaisie, Op. 31']]
  ]);
  add('classical','iberia','performer',[
    ['페르난도 소르','Fernando Sor','1778–1839','스페인','기타 한 대에서 화성·선율·내성이 동시에 설득력 있게 움직이는 고전주의적 작법을 확립했습니다.',['Mozart Variations, Op. 9','Grand Solo, Op. 14','Fantaisie élégiaque, Op. 59']],
    ['디오니시오 아구아도','Dionisio Aguado','1784–1849','스페인','명료한 발음과 체계적인 운지법을 연구하고 화려한 론도·연습곡으로 이를 음악화했습니다.',['Nuevo método para guitarra','Rondo Brillante, Op. 2 No. 2','Études']]
  ]);

  add('romantic','france-uk','performer',[
    ['나폴레옹 코스트','Napoléon Coste','1805–1883','프랑스','소르의 고전적 유산을 낭만주의 화성과 7현 기타의 넓은 음역으로 확장했습니다.',['Le Départ, Op. 31','Les Soirées d’Auteuil','25 Études, Op. 38']],
    ['줄리오 레곤디','Giulio Regondi','1822–1872','스위스·영국','긴 호흡의 칸틸레나와 고난도 레가토·아르페지오로 기타의 낭만적 환상을 구현했습니다.',['Rêverie-Nocturne, Op. 19','Introduction et Caprice, Op. 23','Ten Études']]
  ]);
  add('romantic','central-europe','performer',[
    ['요한 카스파르 메르츠','J. K. Mertz','1806–1856','오스트리아 제국','피아노와 가곡의 낭만적 질감, 극적인 화성 전개를 기타에 옮겼습니다.',['Élégie','Bardenklänge','Tarantelle']]
  ]);
  add('romantic','iberia','performer',[
    ['훌리안 아르카스','Julián Arcas','1832–1882','스페인','연주·작곡·편곡을 통해 타레가 이전 스페인 기타의 춤곡과 오페라 판타지를 발전시켰습니다.',['Fantasía sobre La traviata','Bolero','Minuetto']],
    ['프란시스코 타레가','Francisco Tárrega','1852–1909','스페인','근대 기타의 자세·운지·음색 미학을 정리하고 짧은 성격소품과 전사 레퍼토리를 확립했습니다.',['Recuerdos de la Alhambra','Capricho Árabe','Lágrima']],
    ['미겔 료베트','Miguel Llobet','1878–1938','스페인','카탈루냐 민요 편곡과 섬세한 음색·하모닉스로 타레가의 언어를 20세기로 연결했습니다.',['Cançons populars catalanes','Scherzo-Vals','Variaciones sobre un tema de Sor']]
  ]);

  add('modern','iberia','source',[
    ['이사크 알베니스','Isaac Albéniz','1860–1909','스페인','피아노로 그린 스페인의 리듬과 색채가 기타 전사를 통해 대표 레퍼토리로 자리 잡았습니다.',['Asturias','Sevilla','Granada']],
    ['엔리케 그라나도스','Enrique Granados','1867–1916','스페인','피아노의 노래하는 선율과 스페인 무곡이 기타의 음색 대비와 자연스럽게 만납니다.',['Andaluza','Oriental','Danzas españolas']]
  ]);
  add('modern','iberia','composer',[
    ['마누엘 데 파야','Manuel de Falla','1876–1946','스페인','플라멩코의 긴장, 절제된 음향, 인상주의 화성을 결합해 최초의 중요한 현대 기타 작품 중 하나를 남겼습니다.',['Homenaje pour le tombeau de Debussy','Danza del molinero','Ritual Fire Dance']],
    ['호아킨 투리나','Joaquín Turina','1882–1949','스페인','안달루시아의 리듬과 프랑스에서 익힌 형식 감각을 화려하고 압축된 기타곡에 담았습니다.',['Sonata, Op. 61','Fandanguillo','Ráfaga']],
    ['페데리코 모레노 토로바','Federico Moreno Torroba','1891–1982','스페인','서정적인 스페인 민족주의와 명료한 형식을 독주·콰르텟 작품으로 확장했습니다.',['Sonatina','Castillos de España','Estampas']],
    ['호아킨 로드리고','Joaquín Rodrigo','1901–1999','스페인','신고전주의적 명료함과 스페인적 리듬을 결합해 기타 협주곡의 세계적 표준을 세웠습니다.',['Concierto de Aranjuez','Invocación y Danza','En los trigales']]
  ]);
  add('modern','latin-america','composer',[
    ['마누엘 마리아 퐁세','Manuel M. Ponce','1882–1948','멕시코','세고비아와의 협업을 통해 바로크 모방부터 낭만적 소나타, 멕시코 민요까지 폭넓은 기타 어법을 구축했습니다.',['Sonata III','Variations and Fugue on La Folia','Sonata romántica']],
    ['에이토르 빌라로부스','Heitor Villa-Lobos','1887–1959','브라질','바흐적 구조, 브라질 리듬, 개방현과 포지션 이동을 결합해 현대 기타 기법의 핵심 문헌을 남겼습니다.',['12 Études','5 Preludes','Suite populaire brésilienne']],
    ['알베르토 히나스테라','Alberto Ginastera','1916–1983','아르헨티나','팜파스의 리듬과 전위적 음색·타악적 주법을 단 하나의 강렬한 기타 소나타에 압축했습니다.',['Guitar Sonata, Op. 47']]
  ]);
  add('modern','latin-america','performer',[
    ['아구스틴 바리오스 망고레','Agustín Barrios Mangoré','1885–1944','파라과이','유럽 낭만주의와 남미의 춤·민요, 기타에 자연스러운 운지를 결합했습니다.',['La Catedral','Un Sueño en la Floresta','Julia Florida']],
    ['안토니오 라우로','Antonio Lauro','1917–1986','베네수엘라','베네수엘라 왈츠의 교차 리듬과 노래하는 선율을 기타의 대표적 민족 레퍼토리로 만들었습니다.',['Valses venezolanos','Sonata','Seis por derecho']]
  ]);
  add('modern','italy','composer',[
    ['마리오 카스텔누오보테데스코','Mario Castelnuovo-Tedesco','1895–1968','이탈리아','세고비아와의 협업 속에서 고전 형식, 문학적 표제, 정교한 대위법을 방대한 기타 작품에 담았습니다.',['Sonata, Op. 77','Capriccio diabolico, Op. 85','Tarantella, Op. 87a']]
  ]);
  add('modern','france-uk','composer',[
    ['벤저민 브리튼','Benjamin Britten','1913–1976','영국','다울런드의 노래를 변주와 역행 구조로 해체하며 20세기 기타의 가장 치밀한 대형 작품을 만들었습니다.',['Nocturnal, Op. 70','Songs from the Chinese']],
    ['윌리엄 월턴','William Walton','1902–1983','영국','간결한 형식 안에 재치, 서정, 날카로운 리듬을 배치해 현대 기타의 다채로운 성격소품을 남겼습니다.',['Five Bagatelles','Anon in Love']]
  ]);
  add('modern','asia','composer',[
    ['도루 다케미쓰','Tōru Takemitsu','1930–1996','일본','침묵과 잔향, 미세한 음색 변화를 작곡의 일부로 삼아 기타를 공간적인 악기로 들리게 했습니다.',['All in Twilight','Equinox','In the Woods']]
  ]);

  add('contemporary','latin-america','performer',[
    ['레오 브라우어','Leo Brouwer','1939–','쿠바','아프로쿠바 리듬, 전위적 음색, 미니멀한 반복과 후기의 서정성을 통해 현대 기타의 지평을 넓혔습니다.',['El Decamerón Negro','Elogio de la Danza','Cuban Landscape with Rain']],
    ['세르지우 아사드','Sérgio Assad','1952–','브라질','브라질 리듬과 복잡한 대위법, 연주자 친화적인 운지를 독주와 기타 앙상블에 정교하게 결합합니다.',['Aquarelle','Fantasia Carioca','Summer Garden Suite']],
    ['파울루 벨리나티','Paulo Bellinati','1950–','브라질','브라질 전통 리듬을 클래식 기타의 음색과 앙상블 구조로 재해석했습니다.',['Jongo','A Furiosa','Baião de Gude']]
  ]);
  add('contemporary','france-uk','performer',[
    ['롤랑 디앙스','Roland Dyens','1955–2016','프랑스','클래식, 재즈, 즉흥연주와 편곡 감각을 결합해 무대에서 살아 움직이는 기타 음악을 만들었습니다.',['Libra Sonatine','Tango en Skaï','Saudade No. 3']]
  ]);
  add('contemporary','italy','performer',[
    ['카를로 도메니코니','Carlo Domeniconi','1947–','이탈리아','터키를 비롯한 비서구 음악의 선법·리듬과 변칙조율을 현대 기타 어법에 통합했습니다.',['Koyunbaba, Op. 19','Variations on an Anatolian Folk Song','Hommage à Jimi Hendrix']],
    ['안젤로 질라르디노','Angelo Gilardino','1941–2022','이탈리아','연주자·교육자·편집자로 활동하며 서사적인 소나타와 고난도 연습곡의 방대한 체계를 구축했습니다.',['Studi di virtuosità e trascendenza','Ikonostas','Sonata Mediterranea']]
  ]);
  add('contemporary','central-europe','performer',[
    ['두샨 보그다노비치','Dušan Bogdanović','1955–','세르비아·미국','발칸 리듬, 재즈 화성, 르네상스 대위법을 결합한 독창적인 크로스오버 언어를 발전시켰습니다.',['Jazz Sonata','Balkan Miniatures','Ricercare']],
    ['니키타 코시킨','Nikita Koshkin','1956–','러시아','확장주법과 극적 서사를 결합해 기타 한 대로 인물과 장면이 움직이는 음악극을 만듭니다.',['Usher Waltz','The Prince’s Toys','Changing the Guard']]
  ]);
  add('contemporary','north-america','performer',[
    ['앤드루 요크','Andrew York','1958–','미국','명료한 선율, 비대칭 리듬, 재즈적 화성을 독주와 기타 콰르텟 모두에 친숙하게 풀어냅니다.',['Sunburst','Into Dark','Hidden Realm of Light']]
  ]);

  window.composerCatalog = composers;
})();
