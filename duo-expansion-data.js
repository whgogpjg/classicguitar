(() => {
  const catalog = window.repertoireCatalog || [];
  const keys = new Set(catalog.map(work => [work.type, work.title, work.composer].join('|')));
  const add = (title, composer, meta) => {
    const key = ['duo', title, composer].join('|');
    if (keys.has(key)) return;
    keys.add(key);
    catalog.push(Object.assign({
      type:'duo', era:'modern', difficulty:'advanced', region:'global', technique:'voicing',
      mood:'lyrical', source:'transcription', genre:'classical', year:null, duration:5,
      title, composer, duoCategory:'keyboard-orchestral-transcription', duoForm:'character-piece',
      status:'arrangement', video:'', query:[composer, title, 'classical guitar duo'].join(' ')
    }, meta, {title, composer}));
  };
  const pack = (meta, source) => source.split('~').filter(Boolean).forEach(row => {
    const [title, composer] = row.split('|');
    add(title, composer, meta);
  });

  for (let n = 1; n <= 24; n += 1) add('Prelude and Fugue No. ' + n + ', Op. 199', 'Mario Castelnuovo-Tedesco', {
    era:'modern', region:'italy', difficulty:'virtuoso', technique:'counterpoint', mood:'dramatic',
    source:'original', duoCategory:'original-modern', duoForm:'prelude-fugue', duration:7, status:'core'
  });
  [772,773,774,775,776,777,778,779,780,781,782,783,784,785,786].forEach((bwv, i) =>
    add('Two-Part Invention No. ' + (i + 1) + ', BWV ' + bwv, 'J. S. Bach', {
      era:'baroque', region:'central-europe', difficulty:'intermediate', technique:'counterpoint',
      mood:'bright', duoCategory:'baroque-transcription', duoForm:'invention', duration:3
    }));
  [1,9,18,27,30,32,87,96,141,162,173,204,209,213,239,263,277,280,322,380,386,420,422,430,431,455,466,481,492,516,519,525,531,544].forEach(n =>
    add('Sonata K. ' + n, 'Domenico Scarlatti', {
      era:'baroque', region:'italy', technique:'scales', mood:'bright',
      duoCategory:'baroque-transcription', duoForm:'sonata'
    }));

  pack({
    era:'baroque', region:'central-europe', technique:'counterpoint', mood:'dramatic',
    duoCategory:'baroque-transcription', duoForm:'suite', duration:12
  }, 'Chaconne from Partita No. 2, BWV 1004|J. S. Bach~Goldberg Variations, BWV 988|J. S. Bach~English Suite No. 1, BWV 806|J. S. Bach~English Suite No. 2, BWV 807|J. S. Bach~English Suite No. 3, BWV 808|J. S. Bach~English Suite No. 4, BWV 809|J. S. Bach~English Suite No. 5, BWV 810|J. S. Bach~English Suite No. 6, BWV 811|J. S. Bach~French Suite No. 1, BWV 812|J. S. Bach~French Suite No. 2, BWV 813|J. S. Bach~French Suite No. 3, BWV 814|J. S. Bach~French Suite No. 4, BWV 815|J. S. Bach~French Suite No. 5, BWV 816|J. S. Bach~French Suite No. 6, BWV 817|J. S. Bach~Concerto for Two Violins in D minor, BWV 1043|J. S. Bach~Brandenburg Concerto No. 3, BWV 1048|J. S. Bach~Passacaglia and Fugue in C minor, BWV 582|J. S. Bach~Toccata and Fugue in D minor, BWV 565|J. S. Bach~Prelude, Fugue and Allegro, BWV 998|J. S. Bach~Concerto in A minor, BWV 593|J. S. Bach~Passacaille, HWV 432|G. F. Handel~The Harmonious Blacksmith, HWV 430|G. F. Handel~Sonata in F major, HWV 427|G. F. Handel~Sonata in G minor, HWV 432|G. F. Handel~Adagio in G minor|Tomaso Albinoni / Remo Giazotto~Canon and Gigue in D major|Johann Pachelbel~Le Coucou|Louis-Claude Daquin~Canzona francese|Bernardo Pasquini~Sonata R. 84|Antonio Soler~Sonata R. 90|Antonio Soler');

  pack({
    era:'baroque', region:'france-uk', technique:'voicing', mood:'bright',
    duoCategory:'baroque-transcription', duoForm:'character-piece'
  }, 'Allemande from Suite in A minor|Jean-Philippe Rameau~Le Rappel des Oiseaux|Jean-Philippe Rameau~Les Tendres Plaintes|Jean-Philippe Rameau~Les Cyclopes|Jean-Philippe Rameau~Le Tambourin|Jean-Philippe Rameau~Les Sauvages|Jean-Philippe Rameau~La Poule|Jean-Philippe Rameau~Le Carillon de Cythère|François Couperin~Les Barricades mystérieuses|François Couperin~Les Bergeries|François Couperin~Les petits moulins à vent|François Couperin~Musette de Taverni|François Couperin~Le Tic-Toc-Choc|François Couperin~Le Rossignol-en-amour|François Couperin~La Follette|François Couperin~Les Timbres|François Couperin');

  pack({
    era:'classical', region:'spain', difficulty:'intermediate', technique:'counterpoint', mood:'bright',
    source:'original', duoCategory:'original-classical', duoForm:'duo', status:'core'
  }, 'L’Encouragement, Op. 34|Fernando Sor~Les Deux Amis, Op. 41|Fernando Sor~Six Waltzes, Op. 39|Fernando Sor~Six Easy Waltzes, Op. 44 bis|Fernando Sor~Divertissement, Op. 38|Fernando Sor~Divertissement militaire, Op. 49|Fernando Sor~Le premier pas vers moi, Op. 53|Fernando Sor~Trois petits divertissements, Op. 61|Fernando Sor~Souvenir de Russie, Op. 63|Fernando Sor~Fantaisie, Op. 54 bis|Fernando Sor~Duo, Op. 55 No. 1|Fernando Sor~Duo, Op. 55 No. 2|Fernando Sor~Duo, Op. 55 No. 3|Fernando Sor~Waltz, Op. 44 bis No. 1|Fernando Sor~Waltz, Op. 44 bis No. 2|Fernando Sor~Waltz, Op. 44 bis No. 3|Fernando Sor~Waltz, Op. 44 bis No. 4|Fernando Sor~Waltz, Op. 44 bis No. 5|Fernando Sor~Waltz, Op. 44 bis No. 6|Fernando Sor');

  pack({
    era:'classical', region:'italy', technique:'scales', mood:'bright',
    source:'original', duoCategory:'original-classical', duoForm:'duo', status:'core'
  }, 'Grand Variations Concertantes, Op. 35|Mauro Giuliani~Variations Concertantes, Op. 130|Mauro Giuliani~Tre Polonesi Concertanti, Op. 137|Mauro Giuliani~Le Avventure di amore, Op. 116|Mauro Giuliani~Grand Potpourri, Op. 67|Mauro Giuliani~Potpourri, Op. 53|Mauro Giuliani~Duo Concertant, Op. 25|Mauro Giuliani~Duo Concertant in A major, Op. 85|Mauro Giuliani~Polonaise Concertante, Op. 137 No. 1|Mauro Giuliani~Polonaise Concertante, Op. 137 No. 2|Mauro Giuliani~Polonaise Concertante, Op. 137 No. 3|Mauro Giuliani~Duo in G major, Op. 34|Ferdinando Carulli~Duo in A major, Op. 34 No. 2|Ferdinando Carulli~Three Serenades, Op. 96|Ferdinando Carulli~Serenade, Op. 96 No. 1|Ferdinando Carulli~Serenade, Op. 96 No. 2|Ferdinando Carulli~Serenade, Op. 96 No. 3|Ferdinando Carulli~Duo, Op. 62 No. 1|Ferdinando Carulli~Duo, Op. 62 No. 2|Ferdinando Carulli~Duo, Op. 62 No. 3|Ferdinando Carulli~Nocturne, Op. 189|Ferdinando Carulli~Duo Concertant No. 1, Op. 31|Antoine de Lhoyer~Duo Concertant No. 2, Op. 31|Antoine de Lhoyer~Duo Concertant No. 3, Op. 31|Antoine de Lhoyer~Duo Concertant, Op. 34 No. 1|Antoine de Lhoyer~Sonata in D major|Christian Gottlieb Scheidler~Grand Duo Concertant, Op. 34|Filippo Gragnani~Duetto in A minor|Filippo Gragnani~Grand Duo in E minor, Op. 31|Wenzel Thomas Matiegka');

  pack({
    era:'romantic', region:'central-europe', technique:'voicing', mood:'lyrical',
    source:'original', duoCategory:'original-romantic', duoForm:'character-piece', status:'core'
  }, 'Am Grabe der Geliebten|Johann Kaspar Mertz~Wasserfahrt am Traunsee|Johann Kaspar Mertz~Vespergang|Johann Kaspar Mertz~Unruhe|Johann Kaspar Mertz~Barcarole|Johann Kaspar Mertz~Tarantelle|Johann Kaspar Mertz~Mazurka|Johann Kaspar Mertz~Deutsche Weise|Johann Kaspar Mertz~Variations on a Favorite Theme, Op. 57|Anton Diabelli~Serenade No. 1, Op. 63|Anton Diabelli~Serenade No. 2, Op. 63|Anton Diabelli~Serenade No. 3, Op. 63|Anton Diabelli~Grand Serenade, Op. 100|Anton Diabelli~La Hongroise|Ida Presti~Étude fantastique|Ida Presti~Danse d’Avila|Ida Presti');

  pack({
    era:'romantic', region:'spain', technique:'rhythm', mood:'dance',
    duoCategory:'iberian-transcription', duoForm:'dance'
  }, 'Cataluña, Op. 47 No. 2|Isaac Albéniz~Cádiz, Op. 47 No. 4|Isaac Albéniz~Aragón, Op. 47 No. 6|Isaac Albéniz~Castilla, Op. 47 No. 7|Isaac Albéniz~Cuba, Op. 47 No. 8|Isaac Albéniz~Mallorca, Op. 202|Isaac Albéniz~Tango in D, Op. 165 No. 2|Isaac Albéniz~Capricho Catalán, Op. 165 No. 5|Isaac Albéniz~Evocación from Iberia|Isaac Albéniz~El Puerto from Iberia|Isaac Albéniz~El Albaicín from Iberia|Isaac Albéniz~Oriental, Op. 37 No. 2|Enrique Granados~Fandango, Op. 37 No. 3|Enrique Granados~Villanesca, Op. 37 No. 4|Enrique Granados~Rondalla Aragonesa, Op. 37 No. 6|Enrique Granados~Valenciana, Op. 37 No. 7|Enrique Granados~Valses Poéticos|Enrique Granados~Intermezzo from Goyescas|Enrique Granados~Danza de la Molinera|Manuel de Falla~Danza del Molinero|Manuel de Falla~Spanish Dance No. 1 from La vida breve|Manuel de Falla~Homenaje a Debussy|Manuel de Falla~Danza de la moza donosa|Alberto Ginastera');

  pack({
    era:'modern', region:'france-uk', technique:'voicing', mood:'meditative',
    duoCategory:'keyboard-orchestral-transcription', duoForm:'suite'
  }, 'Petite Suite|Claude Debussy~En bateau from Petite Suite|Claude Debussy~Cortège from Petite Suite|Claude Debussy~Menuet from Petite Suite|Claude Debussy~Ballet from Petite Suite|Claude Debussy~Dolly Suite, Op. 56|Gabriel Fauré~Berceuse from Dolly Suite|Gabriel Fauré~Mi-a-ou from Dolly Suite|Gabriel Fauré~Le jardin de Dolly|Gabriel Fauré~Kitty-valse from Dolly Suite|Gabriel Fauré~Tendresse from Dolly Suite|Gabriel Fauré~Le pas espagnol from Dolly Suite|Gabriel Fauré~Ma mère l’Oye|Maurice Ravel~Pavane pour une infante défunte|Maurice Ravel~Suite bergamasque|Claude Debussy~Clair de lune|Claude Debussy~Arabesque No. 1|Claude Debussy~Arabesque No. 2|Claude Debussy~Gymnopédie No. 1|Erik Satie~Gnossienne No. 1|Erik Satie~Gnossienne No. 2|Erik Satie~Gnossienne No. 3|Erik Satie~Improvisation No. 12|Francis Poulenc~Deux Interludes|Jacques Ibert');

  pack({
    era:'modern', region:'france-uk', difficulty:'virtuoso', technique:'counterpoint', mood:'dramatic',
    source:'original', duoCategory:'original-modern', duoForm:'suite', status:'core'
  }, 'Sérénade pour deux guitares|André Jolivet~Élégie pour deux guitares|Jean-Yves Daniel-Lesur~Fuga Elegiaca|Mario Castelnuovo-Tedesco~Sonatina canonica, Op. 196|Mario Castelnuovo-Tedesco~Les Guitares bien tempérées, Op. 199|Mario Castelnuovo-Tedesco~Polish Sketches|Marek Pasieczny');

  pack({
    era:'modern', region:'latin-america', difficulty:'virtuoso', technique:'rhythm', mood:'dance',
    source:'original', duoCategory:'latin-tango', duoForm:'tango', genre:'jazz-world', status:'core'
  }, 'Tango Suite|Astor Piazzolla~Tango Suite I. Deciso|Astor Piazzolla~Tango Suite II. Andante|Astor Piazzolla~Tango Suite III. Allegro|Astor Piazzolla~Tres minutos con la realidad|Astor Piazzolla~Fugata|Astor Piazzolla~Zita|Astor Piazzolla~Café 1930|Astor Piazzolla~Nightclub 1960|Astor Piazzolla~Acentuado|Astor Piazzolla~Milonga del Ángel|Astor Piazzolla~La muerte del Ángel|Astor Piazzolla');

  pack({
    era:'modern', region:'latin-america', technique:'rhythm', mood:'dance',
    source:'original', duoCategory:'latin-brazilian', duoForm:'suite', genre:'jazz-world', status:'core'
  }, 'Suite Retratos|Radamés Gnattali~Retratos I. Pixinguinha|Radamés Gnattali~Retratos II. Ernesto Nazareth|Radamés Gnattali~Retratos III. Anacleto de Medeiros|Radamés Gnattali~Retratos IV. Chiquinha Gonzaga|Radamés Gnattali~Suite Brasileira No. 1|Sérgio Assad~Suite Brasileira No. 2|Sérgio Assad~Canção from Suite Brasileira No. 2|Sérgio Assad~Maracaípe|Sérgio Assad~Uarekena|Sérgio Assad~Tres Cenas Brasileiras|Sérgio Assad~Summer Garden Suite|Sérgio Assad~Summer Garden I. Opening|Sérgio Assad~Summer Garden II. Summer Garden|Sérgio Assad~Summer Garden III. Farewell|Sérgio Assad~Jobiniana No. 1|Sérgio Assad~Jobiniana No. 3|Sérgio Assad~Água e Vinho|Egberto Gismonti~Sete Anéis|Egberto Gismonti~Frevo|Egberto Gismonti~Tico-Tico no Fubá|Zequinha de Abreu');

  pack({
    era:'contemporary', region:'global', technique:'rhythm', mood:'dramatic',
    source:'original', duoCategory:'original-contemporary', duoForm:'suite', status:'core'
  }, 'Three Balkan Pieces|Dušan Bogdanović~Cantilena et Ricercare|Dušan Bogdanović~Rustem|Dušan Bogdanović~Jazz Sonatina|Dušan Bogdanović~Sonata Fantasia|Dušan Bogdanović~Sevdalinka|Dušan Bogdanović~Cambridge Suite|Nikita Koshkin~Humoresque from Cambridge Suite|Nikita Koshkin~Through the Looking Glass|Leo Brouwer~The Book of Signs|Leo Brouwer~The Book of Signs I|Leo Brouwer~The Book of Signs II|Leo Brouwer~The Book of Signs III|Leo Brouwer~Micropiezas|Leo Brouwer~Micropieza No. 1|Leo Brouwer~Micropieza No. 2|Leo Brouwer~Micropieza No. 3|Leo Brouwer~Micropieza No. 4|Leo Brouwer~Musique Incidente|Leo Brouwer~Aphorisms|Stephen Goss~Park of Idols|Stephen Goss~River Fragments|Stephen Goss~Generator|Stephen Dodgson~Northumbrian Suite|Stephen Dodgson~Promenade I|Stephen Dodgson~Promenade II|Stephen Dodgson~Wave Radiance|Phillip Houghton~Opals|Phillip Houghton~Three Duets|Phillip Houghton~Farewell to Stromness|Peter Maxwell Davies~Suite Italiana|Mario Gangi~Siete Pinturas de Frida Kahlo|Vincent Lindsey-Clark~Siete Pinturas de Frida Kahlo V|Vincent Lindsey-Clark~Continuum|Florian Colombet~Far and Near|Sergei Asanov~Story of One Bossa|Sergei Asanov~La Joie|Sören Sieg~Suite Africaine|Sören Sieg~Homecoming|Yvonne Bloor~Absent Friend|Yvonne Bloor');

  pack({
    era:'romantic', region:'global', technique:'voicing', mood:'lyrical',
    duoCategory:'keyboard-orchestral-transcription', duoForm:'character-piece'
  }, 'Overture to The Barber of Seville|Gioachino Rossini~Overture to La gazza ladra|Gioachino Rossini~Overture to Il pirata|Vincenzo Bellini~Piano Sonata No. 8 Pathétique, Op. 13|Ludwig van Beethoven~Piano Sonata No. 14 Moonlight, Op. 27 No. 2|Ludwig van Beethoven~Piano Sonata No. 23 Appassionata, Op. 57|Ludwig van Beethoven~Für Elise, WoO 59|Ludwig van Beethoven~Waltz in A minor, B. 150|Frédéric Chopin~Grande valse brillante, Op. 18|Frédéric Chopin~Waltz in C-sharp minor, Op. 64 No. 2|Frédéric Chopin~Nocturne in E-flat major, Op. 9 No. 2|Frédéric Chopin~Humoresque, Op. 101 No. 7|Antonín Dvořák~Slavonic Dance, Op. 46 No. 8|Antonín Dvořák~Hungarian Dance No. 5|Johannes Brahms~Intermezzo in A major, Op. 118 No. 2|Johannes Brahms~Ave Maria, D. 839|Franz Schubert~Moment musical No. 3, D. 780|Franz Schubert~Hora Staccato|Grigoraș Dinicu~Csárdás|Vittorio Monti~Rhapsody in Blue|George Gershwin~I Got Rhythm|George Gershwin');

  pack({
    era:'contemporary', region:'global', difficulty:'intermediate', technique:'voicing', mood:'lyrical',
    duoCategory:'film-animation', duoForm:'soundtrack', genre:'film'
  }, 'The Godfather Waltz|Nino Rota~Love Theme from The Godfather|Nino Rota~A Time for Us|Nino Rota~Theme from Schindler’s List|John Williams~Concerning Hobbits|Howard Shore~The Last of the Mohicans Theme|Trevor Jones~La vita è bella|Nicola Piovani~Por una Cabeza|Carlos Gardel~Merry Christmas Mr. Lawrence|Ryuichi Sakamoto~Una Mattina|Ludovico Einaudi~Comptine d’un autre été|Yann Tiersen~Nuovo Cinema Paradiso|Ennio Morricone~The Mission: Gabriel’s Oboe|Ennio Morricone~Casablanca|Max Steiner~Merry-Go-Round of Life|Joe Hisaishi~One Summer’s Day|Joe Hisaishi~Path of the Wind|Joe Hisaishi~The Wind Forest|Joe Hisaishi~Ashitaka and San|Joe Hisaishi~Castle in the Sky|Joe Hisaishi');

  pack({
    era:'contemporary', region:'global', difficulty:'intermediate', technique:'rhythm', mood:'bright',
    duoCategory:'pop-jazz-arrangement', duoForm:'song', genre:'pop'
  }, 'The Fool on the Hill|John Lennon & Paul McCartney~Penny Lane|John Lennon & Paul McCartney~Blackbird|John Lennon & Paul McCartney~While My Guitar Gently Weeps|George Harrison~Michelle|John Lennon & Paul McCartney~Something|George Harrison~Across the Universe|John Lennon & Paul McCartney~And I Love Her|John Lennon & Paul McCartney~Fields of Gold|Sting~Englishman in New York|Sting~Letter from Home|Pat Metheny~Fragile|Sting~Shape of My Heart|Sting~Spain|Chick Corea~Take Five|Paul Desmond~Blue Moon|Richard Rodgers~Summertime|George Gershwin~Fly Me to the Moon|Bart Howard~Wave|Antônio Carlos Jobim~Desafinado|Antônio Carlos Jobim~Chega de Saudade|Antônio Carlos Jobim~The Girl from Ipanema|Antônio Carlos Jobim~Manhã de Carnaval|Luiz Bonfá~Moliendo Café|Hugo Blanco');

  pack({
    era:'modern', region:'spain', difficulty:'virtuoso', technique:'rhythm', mood:'dance',
    source:'original', duoCategory:'original-modern', duoForm:'concerto', status:'core', duration:7
  }, 'Tonadilla for Two Guitars|Joaquín Rodrigo~Tonadilla I. Allegro ma non troppo|Joaquín Rodrigo~Tonadilla II. Minueto pomposo|Joaquín Rodrigo~Tonadilla III. Allegro vivace|Joaquín Rodrigo~Concierto Madrigal|Joaquín Rodrigo~Concierto Madrigal I. Fanfare|Joaquín Rodrigo~Concierto Madrigal II. Madrigal|Joaquín Rodrigo~Concierto Madrigal III. Entrada|Joaquín Rodrigo~Concierto Madrigal IV. Pastorcico|Joaquín Rodrigo~Concierto Madrigal V. Girardilla|Joaquín Rodrigo~Concierto Madrigal VI. Caccia a la española|Joaquín Rodrigo~Concierto Madrigal VII. Fandango|Joaquín Rodrigo~Concierto Madrigal VIII. Arietta|Joaquín Rodrigo~Concierto Madrigal IX. Zapateado|Joaquín Rodrigo~Concierto Madrigal X. Coda|Joaquín Rodrigo');

  pack({
    era:'baroque', region:'italy', difficulty:'advanced', technique:'counterpoint', mood:'bright',
    duoCategory:'baroque-transcription', duoForm:'concerto', duration:6
  }, 'Concerto for Two Mandolins in G major, RV 532|Antonio Vivaldi~Concerto RV 532 I. Allegro|Antonio Vivaldi~Concerto RV 532 II. Andante|Antonio Vivaldi~Concerto RV 532 III. Allegro|Antonio Vivaldi~Concerto in D major, RV 93|Antonio Vivaldi~Concerto RV 93 I. Allegro|Antonio Vivaldi~Concerto RV 93 II. Largo|Antonio Vivaldi~Concerto RV 93 III. Allegro|Antonio Vivaldi~Concerto for Two Violins in A minor, RV 522|Antonio Vivaldi~Concerto RV 522 I. Allegro|Antonio Vivaldi~Concerto RV 522 II. Larghetto|Antonio Vivaldi~Concerto RV 522 III. Allegro|Antonio Vivaldi');

  for (let n = 1; n <= 12; n += 1) add('Cançó i Dansa No. ' + n, 'Federico Mompou', {
    era:'modern', region:'spain', difficulty:'advanced', technique:'voicing', mood:'lyrical',
    duoCategory:'keyboard-orchestral-transcription', duoForm:'dance'
  });
  ['Missing Moon','Staccato Beans','Herdboy’s Song','Blue Nun','Red Wilderness','Ancient Burial','Floating Clouds','Sunrain'].forEach((name, i) =>
    add('Eight Memories in Watercolor ' + (i + 1) + '. ' + name, 'Tan Dun', {
      era:'contemporary', region:'asia', difficulty:'advanced', technique:'voicing', mood:'meditative',
      duoCategory:'keyboard-orchestral-transcription', duoForm:'character-piece'
    }));

  pack({
    era:'modern', region:'global', difficulty:'advanced', technique:'voicing', mood:'dramatic',
    duoCategory:'keyboard-orchestral-transcription', duoForm:'character-piece'
  }, 'Prelude|Arno Babajanyan~Impromptu|Arno Babajanyan~Elegy|Arno Babajanyan~Bachianas Brasileiras No. 4: Prelúdio|Heitor Villa-Lobos~Bachianas Brasileiras No. 4: Coral|Heitor Villa-Lobos~Bachianas Brasileiras No. 4: Ária|Heitor Villa-Lobos~Bachianas Brasileiras No. 4: Dança|Heitor Villa-Lobos~Spanish Riders on Greek Horses|Carlo Domeniconi~The Argentine Knife Thrower|Carlo Domeniconi~Die Linde|Carlo Domeniconi~Toccata|Pierre Petit~Introduction and Fandango|Luigi Boccherini~Rhapsody in Blue|George Gershwin~Suite for Two Guitars|William Lawes');

  pack({
    era:'classical', region:'central-europe', difficulty:'advanced', technique:'counterpoint', mood:'bright',
    duoCategory:'keyboard-orchestral-transcription', duoForm:'sonata', duration:7
  }, 'Piano Sonata K. 282 I. Adagio|W. A. Mozart~Piano Sonata K. 282 II. Menuetto I and II|W. A. Mozart~Piano Sonata K. 282 III. Allegro|W. A. Mozart~Eine kleine Nachtmusik, K. 525|W. A. Mozart~Rondo alla Turca, K. 331|W. A. Mozart~Sonata in C major, K. 545|W. A. Mozart~Fantasia in D minor, K. 397|W. A. Mozart');

  pack({
    era:'modern', region:'global', difficulty:'advanced', technique:'rhythm', mood:'dance',
    duoCategory:'keyboard-orchestral-transcription', duoForm:'dance'
  }, 'Danzas Argentinas, Op. 2|Alberto Ginastera~Danzas Argentinas I. Danza del viejo boyero|Alberto Ginastera~Danzas Argentinas II. Danza de la moza donosa|Alberto Ginastera~Danzas Argentinas III. Danza del gaucho matrero|Alberto Ginastera~Mazurka|Alexandre Tansman~Cavatina|Alexandre Tansman~Suite in modo polonico|Alexandre Tansman~Toccatina, Op. 40 No. 3|Nikolai Kapustin~Prelude and Fugue, Op. 82|Nikolai Kapustin');

  const formRules = [
    ['sonata','sonata'],['suite','suite'],['concerto','concerto'],['variation','variations'],
    ['fug','fugue'],['waltz','waltz'],['vals','waltz'],['tango','tango'],['milonga','milonga'],
    ['dance','dance'],['danza','dance'],['serenade','serenade'],['prelude','prelude'],
    ['nocturne','nocturne'],['fant','fantasy'],['song','song'],['theme','soundtrack']
  ];
  catalog.filter(work => work.type === 'duo').forEach(work => {
    if (!work.duoCategory) {
      if (work.source === 'original') work.duoCategory = 'original-' + (work.era === 'classical' || work.era === 'romantic' || work.era === 'modern' ? work.era : 'contemporary');
      else if (['film','screen','anime','game'].includes(work.genre)) work.duoCategory = 'film-animation';
      else if (['pop','recent-pop','kpop'].includes(work.genre)) work.duoCategory = 'pop-jazz-arrangement';
      else if (work.region === 'latin-america') work.duoCategory = /Piazzolla|tango|milonga/i.test(work.composer + ' ' + work.title) ? 'latin-tango' : 'latin-brazilian';
      else if (work.era === 'baroque') work.duoCategory = 'baroque-transcription';
      else if (work.region === 'spain') work.duoCategory = 'iberian-transcription';
      else work.duoCategory = 'keyboard-orchestral-transcription';
    }
    if (!work.duoForm) {
      const text = work.title.toLowerCase();
      const match = formRules.find(rule => text.includes(rule[0]));
      work.duoForm = match ? match[1] : 'character-piece';
    }
  });
  window.repertoireCatalog = catalog;
})();
