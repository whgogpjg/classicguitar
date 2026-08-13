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
      title, composer, ensembleCategory:'keyboard-orchestral-transcription',
      status:'arrangement', video:'', query:[composer, title, 'classical guitar duo'].join(' ')
    }, meta, {title, composer}));
  };
  const pack = (meta, source) => source.split('~').filter(Boolean).forEach(row => {
    const [title, composer] = row.split('|');
    add(title, composer, meta);
  });

  for (let n = 1; n <= 24; n += 1) add('Prelude and Fugue No. ' + n + ', Op. 199', 'Mario Castelnuovo-Tedesco', {
    era:'modern', region:'italy', difficulty:'virtuoso', technique:'counterpoint', mood:'dramatic',
    source:'original', ensembleCategory:'original-modern', ensembleForm:'prelude-fugue', duration:7, status:'core'
  });
  [772,773,774,775,776,777,778,779,780,781,782,783,784,785,786].forEach((bwv, i) =>
    add('Two-Part Invention No. ' + (i + 1) + ', BWV ' + bwv, 'J. S. Bach', {
      era:'baroque', region:'central-europe', difficulty:'intermediate', technique:'counterpoint',
      mood:'bright', ensembleCategory:'baroque-transcription', ensembleForm:'invention', duration:3
    }));
  [1,9,18,27,30,32,87,96,141,162,173,204,209,213,239,263,277,280,322,380,386,420,422,430,431,455,466,481,492,516,519,525,531,544].forEach(n =>
    add('Sonata K. ' + n, 'Domenico Scarlatti', {
      era:'baroque', region:'italy', technique:'scales', mood:'bright',
      ensembleCategory:'baroque-transcription', ensembleForm:'sonata'
    }));

  pack({
    era:'baroque', region:'central-europe', technique:'counterpoint', mood:'dramatic',
    ensembleCategory:'baroque-transcription', ensembleForm:'suite', duration:12
  }, 'Chaconne from Partita No. 2, BWV 1004|J. S. Bach~Goldberg Variations, BWV 988|J. S. Bach~English Suite No. 1, BWV 806|J. S. Bach~English Suite No. 2, BWV 807|J. S. Bach~English Suite No. 3, BWV 808|J. S. Bach~English Suite No. 4, BWV 809|J. S. Bach~English Suite No. 5, BWV 810|J. S. Bach~English Suite No. 6, BWV 811|J. S. Bach~French Suite No. 1, BWV 812|J. S. Bach~French Suite No. 2, BWV 813|J. S. Bach~French Suite No. 3, BWV 814|J. S. Bach~French Suite No. 4, BWV 815|J. S. Bach~French Suite No. 5, BWV 816|J. S. Bach~French Suite No. 6, BWV 817|J. S. Bach~Concerto for Two Violins in D minor, BWV 1043|J. S. Bach~Brandenburg Concerto No. 3, BWV 1048|J. S. Bach~Passacaglia and Fugue in C minor, BWV 582|J. S. Bach~Toccata and Fugue in D minor, BWV 565|J. S. Bach~Prelude, Fugue and Allegro, BWV 998|J. S. Bach~Concerto in A minor, BWV 593|J. S. Bach~Passacaille, HWV 432|G. F. Handel~The Harmonious Blacksmith, HWV 430|G. F. Handel~Sonata in F major, HWV 427|G. F. Handel~Sonata in G minor, HWV 432|G. F. Handel~Adagio in G minor|Tomaso Albinoni / Remo Giazotto~Canon and Gigue in D major|Johann Pachelbel~Le Coucou|Louis-Claude Daquin~Canzona francese|Bernardo Pasquini~Sonata R. 84|Antonio Soler~Sonata R. 90|Antonio Soler');

  pack({
    era:'baroque', region:'france-uk', technique:'voicing', mood:'bright',
    ensembleCategory:'baroque-transcription'  }, 'Allemande from Suite in A minor|Jean-Philippe Rameau~Le Rappel des Oiseaux|Jean-Philippe Rameau~Les Tendres Plaintes|Jean-Philippe Rameau~Les Cyclopes|Jean-Philippe Rameau~Le Tambourin|Jean-Philippe Rameau~Les Sauvages|Jean-Philippe Rameau~La Poule|Jean-Philippe Rameau~Le Carillon de Cythère|François Couperin~Les Barricades mystérieuses|François Couperin~Les Bergeries|François Couperin~Les petits moulins à vent|François Couperin~Musette de Taverni|François Couperin~Le Tic-Toc-Choc|François Couperin~Le Rossignol-en-amour|François Couperin~La Follette|François Couperin~Les Timbres|François Couperin');

  pack({
    era:'classical', region:'spain', difficulty:'intermediate', technique:'counterpoint', mood:'bright',
    source:'original', ensembleCategory:'original-classical', ensembleForm:'ensemble', status:'core'
  }, 'L’Encouragement, Op. 34|Fernando Sor~Les Deux Amis, Op. 41|Fernando Sor~Six Waltzes, Op. 39|Fernando Sor~Six Easy Waltzes, Op. 44 bis|Fernando Sor~Divertissement, Op. 38|Fernando Sor~Divertissement militaire, Op. 49|Fernando Sor~Le premier pas vers moi, Op. 53|Fernando Sor~Trois petits divertissements, Op. 61|Fernando Sor~Souvenir de Russie, Op. 63|Fernando Sor~Fantaisie, Op. 54 bis|Fernando Sor~Duo, Op. 55 No. 1|Fernando Sor~Duo, Op. 55 No. 2|Fernando Sor~Duo, Op. 55 No. 3|Fernando Sor~Waltz, Op. 44 bis No. 1|Fernando Sor~Waltz, Op. 44 bis No. 2|Fernando Sor~Waltz, Op. 44 bis No. 3|Fernando Sor~Waltz, Op. 44 bis No. 4|Fernando Sor~Waltz, Op. 44 bis No. 5|Fernando Sor~Waltz, Op. 44 bis No. 6|Fernando Sor');

  pack({
    era:'classical', region:'italy', technique:'scales', mood:'bright',
    source:'original', ensembleCategory:'original-classical', ensembleForm:'ensemble', status:'core'
  }, 'Grand Variations Concertantes, Op. 35|Mauro Giuliani~Variations Concertantes, Op. 130|Mauro Giuliani~Tre Polonesi Concertanti, Op. 137|Mauro Giuliani~Le Avventure di amore, Op. 116|Mauro Giuliani~Grand Potpourri, Op. 67|Mauro Giuliani~Potpourri, Op. 53|Mauro Giuliani~Duo Concertant, Op. 25|Mauro Giuliani~Duo Concertant in A major, Op. 85|Mauro Giuliani~Polonaise Concertante, Op. 137 No. 1|Mauro Giuliani~Polonaise Concertante, Op. 137 No. 2|Mauro Giuliani~Polonaise Concertante, Op. 137 No. 3|Mauro Giuliani~Duo in G major, Op. 34|Ferdinando Carulli~Duo in A major, Op. 34 No. 2|Ferdinando Carulli~Three Serenades, Op. 96|Ferdinando Carulli~Serenade, Op. 96 No. 1|Ferdinando Carulli~Serenade, Op. 96 No. 2|Ferdinando Carulli~Serenade, Op. 96 No. 3|Ferdinando Carulli~Duo, Op. 62 No. 1|Ferdinando Carulli~Duo, Op. 62 No. 2|Ferdinando Carulli~Duo, Op. 62 No. 3|Ferdinando Carulli~Nocturne, Op. 189|Ferdinando Carulli~Duo Concertant No. 1, Op. 31|Antoine de Lhoyer~Duo Concertant No. 2, Op. 31|Antoine de Lhoyer~Duo Concertant No. 3, Op. 31|Antoine de Lhoyer~Duo Concertant, Op. 34 No. 1|Antoine de Lhoyer~Sonata in D major|Christian Gottlieb Scheidler~Grand Duo Concertant, Op. 34|Filippo Gragnani~Duetto in A minor|Filippo Gragnani~Grand Duo in E minor, Op. 31|Wenzel Thomas Matiegka');

  pack({
    era:'romantic', region:'central-europe', technique:'voicing', mood:'lyrical',
    source:'original', ensembleCategory:'original-romantic', ensembleForm:'character-piece', status:'core'
  }, 'Am Grabe der Geliebten|Johann Kaspar Mertz~Wasserfahrt am Traunsee|Johann Kaspar Mertz~Vespergang|Johann Kaspar Mertz~Unruhe|Johann Kaspar Mertz~Barcarole|Johann Kaspar Mertz~Tarantelle|Johann Kaspar Mertz~Mazurka|Johann Kaspar Mertz~Deutsche Weise|Johann Kaspar Mertz~Variations on a Favorite Theme, Op. 57|Anton Diabelli~Serenade No. 1, Op. 63|Anton Diabelli~Serenade No. 2, Op. 63|Anton Diabelli~Serenade No. 3, Op. 63|Anton Diabelli~Grand Serenade, Op. 100|Anton Diabelli~La Hongroise|Ida Presti~Étude fantastique|Ida Presti~Danse d’Avila|Ida Presti');

  pack({
    era:'romantic', region:'spain', technique:'rhythm', mood:'dance',
    ensembleCategory:'iberian-transcription', ensembleForm:'dance'
  }, 'Cataluña, Op. 47 No. 2|Isaac Albéniz~Cádiz, Op. 47 No. 4|Isaac Albéniz~Aragón, Op. 47 No. 6|Isaac Albéniz~Castilla, Op. 47 No. 7|Isaac Albéniz~Cuba, Op. 47 No. 8|Isaac Albéniz~Mallorca, Op. 202|Isaac Albéniz~Tango in D, Op. 165 No. 2|Isaac Albéniz~Capricho Catalán, Op. 165 No. 5|Isaac Albéniz~Evocación from Iberia|Isaac Albéniz~El Puerto from Iberia|Isaac Albéniz~El Albaicín from Iberia|Isaac Albéniz~Oriental, Op. 37 No. 2|Enrique Granados~Fandango, Op. 37 No. 3|Enrique Granados~Villanesca, Op. 37 No. 4|Enrique Granados~Rondalla Aragonesa, Op. 37 No. 6|Enrique Granados~Valenciana, Op. 37 No. 7|Enrique Granados~Valses Poéticos|Enrique Granados~Intermezzo from Goyescas|Enrique Granados~Danza de la Molinera|Manuel de Falla~Danza del Molinero|Manuel de Falla~Spanish Dance No. 1 from La vida breve|Manuel de Falla~Homenaje a Debussy|Manuel de Falla~Danza de la moza donosa|Alberto Ginastera');

  pack({
    era:'modern', region:'france-uk', technique:'voicing', mood:'meditative',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'suite'
  }, 'Petite Suite|Claude Debussy~En bateau from Petite Suite|Claude Debussy~Cortège from Petite Suite|Claude Debussy~Menuet from Petite Suite|Claude Debussy~Ballet from Petite Suite|Claude Debussy~Dolly Suite, Op. 56|Gabriel Fauré~Berceuse from Dolly Suite|Gabriel Fauré~Mi-a-ou from Dolly Suite|Gabriel Fauré~Le jardin de Dolly|Gabriel Fauré~Kitty-valse from Dolly Suite|Gabriel Fauré~Tendresse from Dolly Suite|Gabriel Fauré~Le pas espagnol from Dolly Suite|Gabriel Fauré~Ma mère l’Oye|Maurice Ravel~Pavane pour une infante défunte|Maurice Ravel~Suite bergamasque|Claude Debussy~Clair de lune|Claude Debussy~Arabesque No. 1|Claude Debussy~Arabesque No. 2|Claude Debussy~Gymnopédie No. 1|Erik Satie~Gnossienne No. 1|Erik Satie~Gnossienne No. 2|Erik Satie~Gnossienne No. 3|Erik Satie~Improvisation No. 12|Francis Poulenc~Deux Interludes|Jacques Ibert');

  pack({
    era:'modern', region:'france-uk', difficulty:'virtuoso', technique:'counterpoint', mood:'dramatic',
    source:'original', ensembleCategory:'original-modern', ensembleForm:'suite', status:'core'
  }, 'Sérénade pour deux guitares|André Jolivet~Élégie pour deux guitares|Jean-Yves Daniel-Lesur~Fuga Elegiaca|Mario Castelnuovo-Tedesco~Sonatina canonica, Op. 196|Mario Castelnuovo-Tedesco~Les Guitares bien tempérées, Op. 199|Mario Castelnuovo-Tedesco~Polish Sketches|Marek Pasieczny');

  pack({
    era:'modern', region:'latin-america', difficulty:'virtuoso', technique:'rhythm', mood:'dance',
    source:'original', ensembleCategory:'latin-tango', ensembleForm:'tango', genre:'jazz-world', status:'core'
  }, 'Tango Suite|Astor Piazzolla~Tango Suite I. Deciso|Astor Piazzolla~Tango Suite II. Andante|Astor Piazzolla~Tango Suite III. Allegro|Astor Piazzolla~Tres minutos con la realidad|Astor Piazzolla~Fugata|Astor Piazzolla~Zita|Astor Piazzolla~Café 1930|Astor Piazzolla~Nightclub 1960|Astor Piazzolla~Acentuado|Astor Piazzolla~Milonga del Ángel|Astor Piazzolla~La muerte del Ángel|Astor Piazzolla');

  pack({
    era:'modern', region:'latin-america', technique:'rhythm', mood:'dance',
    source:'original', ensembleCategory:'latin-brazilian', ensembleForm:'suite', genre:'jazz-world', status:'core'
  }, 'Suite Retratos|Radamés Gnattali~Retratos I. Pixinguinha|Radamés Gnattali~Retratos II. Ernesto Nazareth|Radamés Gnattali~Retratos III. Anacleto de Medeiros|Radamés Gnattali~Retratos IV. Chiquinha Gonzaga|Radamés Gnattali~Suite Brasileira No. 1|Sérgio Assad~Suite Brasileira No. 2|Sérgio Assad~Canção from Suite Brasileira No. 2|Sérgio Assad~Maracaípe|Sérgio Assad~Uarekena|Sérgio Assad~Tres Cenas Brasileiras|Sérgio Assad~Summer Garden Suite|Sérgio Assad~Summer Garden I. Opening|Sérgio Assad~Summer Garden II. Summer Garden|Sérgio Assad~Summer Garden III. Farewell|Sérgio Assad~Jobiniana No. 1|Sérgio Assad~Jobiniana No. 3|Sérgio Assad~Água e Vinho|Egberto Gismonti~Sete Anéis|Egberto Gismonti~Frevo|Egberto Gismonti~Tico-Tico no Fubá|Zequinha de Abreu');

  pack({
    era:'contemporary', region:'global', technique:'rhythm', mood:'dramatic',
    source:'original', ensembleCategory:'original-contemporary', ensembleForm:'suite', status:'core'
  }, 'Three Balkan Pieces|Dušan Bogdanović~Cantilena et Ricercare|Dušan Bogdanović~Rustem|Dušan Bogdanović~Jazz Sonatina|Dušan Bogdanović~Sonata Fantasia|Dušan Bogdanović~Sevdalinka|Dušan Bogdanović~Cambridge Suite|Nikita Koshkin~Humoresque from Cambridge Suite|Nikita Koshkin~Through the Looking Glass|Leo Brouwer~The Book of Signs|Leo Brouwer~The Book of Signs I|Leo Brouwer~The Book of Signs II|Leo Brouwer~The Book of Signs III|Leo Brouwer~Micropiezas|Leo Brouwer~Micropieza No. 1|Leo Brouwer~Micropieza No. 2|Leo Brouwer~Micropieza No. 3|Leo Brouwer~Micropieza No. 4|Leo Brouwer~Musique Incidente|Leo Brouwer~Aphorisms|Stephen Goss~Park of Idols|Stephen Goss~River Fragments|Stephen Goss~Generator|Stephen Dodgson~Northumbrian Suite|Stephen Dodgson~Promenade I|Stephen Dodgson~Promenade II|Stephen Dodgson~Wave Radiance|Phillip Houghton~Opals|Phillip Houghton~Three Duets|Phillip Houghton~Farewell to Stromness|Peter Maxwell Davies~Suite Italiana|Mario Gangi~Siete Pinturas de Frida Kahlo|Vincent Lindsey-Clark~Siete Pinturas de Frida Kahlo V|Vincent Lindsey-Clark~Continuum|Florian Colombet~Far and Near|Sergei Asanov~Story of One Bossa|Sergei Asanov~La Joie|Sören Sieg~Suite Africaine|Sören Sieg~Homecoming|Yvonne Bloor~Absent Friend|Yvonne Bloor');

  pack({
    era:'romantic', region:'global', technique:'voicing', mood:'lyrical',
    ensembleCategory:'keyboard-orchestral-transcription'  }, 'Overture to The Barber of Seville|Gioachino Rossini~Overture to La gazza ladra|Gioachino Rossini~Overture to Il pirata|Vincenzo Bellini~Piano Sonata No. 8 Pathétique, Op. 13|Ludwig van Beethoven~Piano Sonata No. 14 Moonlight, Op. 27 No. 2|Ludwig van Beethoven~Piano Sonata No. 23 Appassionata, Op. 57|Ludwig van Beethoven~Für Elise, WoO 59|Ludwig van Beethoven~Waltz in A minor, B. 150|Frédéric Chopin~Grande valse brillante, Op. 18|Frédéric Chopin~Waltz in C-sharp minor, Op. 64 No. 2|Frédéric Chopin~Nocturne in E-flat major, Op. 9 No. 2|Frédéric Chopin~Humoresque, Op. 101 No. 7|Antonín Dvořák~Slavonic Dance, Op. 46 No. 8|Antonín Dvořák~Hungarian Dance No. 5|Johannes Brahms~Intermezzo in A major, Op. 118 No. 2|Johannes Brahms~Ave Maria, D. 839|Franz Schubert~Moment musical No. 3, D. 780|Franz Schubert~Hora Staccato|Grigoraș Dinicu~Csárdás|Vittorio Monti~Rhapsody in Blue|George Gershwin~I Got Rhythm|George Gershwin');

  pack({
    era:'contemporary', region:'global', difficulty:'intermediate', technique:'voicing', mood:'lyrical',
    ensembleCategory:'film-animation', ensembleForm:'soundtrack', genre:'film'
  }, 'The Godfather Waltz|Nino Rota~Love Theme from The Godfather|Nino Rota~A Time for Us|Nino Rota~Theme from Schindler’s List|John Williams~Concerning Hobbits|Howard Shore~The Last of the Mohicans Theme|Trevor Jones~La vita è bella|Nicola Piovani~Por una Cabeza|Carlos Gardel~Merry Christmas Mr. Lawrence|Ryuichi Sakamoto~Una Mattina|Ludovico Einaudi~Comptine d’un autre été|Yann Tiersen~Nuovo Cinema Paradiso|Ennio Morricone~The Mission: Gabriel’s Oboe|Ennio Morricone~Casablanca|Max Steiner~Merry-Go-Round of Life|Joe Hisaishi~One Summer’s Day|Joe Hisaishi~Path of the Wind|Joe Hisaishi~The Wind Forest|Joe Hisaishi~Ashitaka and San|Joe Hisaishi~Castle in the Sky|Joe Hisaishi');

  pack({
    era:'contemporary', region:'global', difficulty:'intermediate', technique:'rhythm', mood:'bright',
    ensembleCategory:'pop-jazz-arrangement', ensembleForm:'song', genre:'pop'
  }, 'The Fool on the Hill|John Lennon & Paul McCartney~Penny Lane|John Lennon & Paul McCartney~Blackbird|John Lennon & Paul McCartney~While My Guitar Gently Weeps|George Harrison~Michelle|John Lennon & Paul McCartney~Something|George Harrison~Across the Universe|John Lennon & Paul McCartney~And I Love Her|John Lennon & Paul McCartney~Fields of Gold|Sting~Englishman in New York|Sting~Letter from Home|Pat Metheny~Fragile|Sting~Shape of My Heart|Sting~Spain|Chick Corea~Take Five|Paul Desmond~Blue Moon|Richard Rodgers~Summertime|George Gershwin~Fly Me to the Moon|Bart Howard~Wave|Antônio Carlos Jobim~Desafinado|Antônio Carlos Jobim~Chega de Saudade|Antônio Carlos Jobim~The Girl from Ipanema|Antônio Carlos Jobim~Manhã de Carnaval|Luiz Bonfá~Moliendo Café|Hugo Blanco');

  pack({
    era:'modern', region:'spain', difficulty:'virtuoso', technique:'rhythm', mood:'dance',
    source:'original', ensembleCategory:'original-modern', ensembleForm:'concerto', status:'core', duration:7
  }, 'Tonadilla for Two Guitars|Joaquín Rodrigo~Tonadilla I. Allegro ma non troppo|Joaquín Rodrigo~Tonadilla II. Minueto pomposo|Joaquín Rodrigo~Tonadilla III. Allegro vivace|Joaquín Rodrigo~Concierto Madrigal|Joaquín Rodrigo~Concierto Madrigal I. Fanfare|Joaquín Rodrigo~Concierto Madrigal II. Madrigal|Joaquín Rodrigo~Concierto Madrigal III. Entrada|Joaquín Rodrigo~Concierto Madrigal IV. Pastorcico|Joaquín Rodrigo~Concierto Madrigal V. Girardilla|Joaquín Rodrigo~Concierto Madrigal VI. Caccia a la española|Joaquín Rodrigo~Concierto Madrigal VII. Fandango|Joaquín Rodrigo~Concierto Madrigal VIII. Arietta|Joaquín Rodrigo~Concierto Madrigal IX. Zapateado|Joaquín Rodrigo~Concierto Madrigal X. Coda|Joaquín Rodrigo');

  pack({
    era:'baroque', region:'italy', difficulty:'advanced', technique:'counterpoint', mood:'bright',
    ensembleCategory:'baroque-transcription', ensembleForm:'concerto', duration:6
  }, 'Concerto for Two Mandolins in G major, RV 532|Antonio Vivaldi~Concerto RV 532 I. Allegro|Antonio Vivaldi~Concerto RV 532 II. Andante|Antonio Vivaldi~Concerto RV 532 III. Allegro|Antonio Vivaldi~Concerto in D major, RV 93|Antonio Vivaldi~Concerto RV 93 I. Allegro|Antonio Vivaldi~Concerto RV 93 II. Largo|Antonio Vivaldi~Concerto RV 93 III. Allegro|Antonio Vivaldi~Concerto for Two Violins in A minor, RV 522|Antonio Vivaldi~Concerto RV 522 I. Allegro|Antonio Vivaldi~Concerto RV 522 II. Larghetto|Antonio Vivaldi~Concerto RV 522 III. Allegro|Antonio Vivaldi');

  for (let n = 1; n <= 12; n += 1) add('Cançó i Dansa No. ' + n, 'Federico Mompou', {
    era:'modern', region:'spain', difficulty:'advanced', technique:'voicing', mood:'lyrical',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'dance'
  });
  ['Missing Moon','Staccato Beans','Herdboy’s Song','Blue Nun','Red Wilderness','Ancient Burial','Floating Clouds','Sunrain'].forEach((name, i) =>
    add('Eight Memories in Watercolor ' + (i + 1) + '. ' + name, 'Tan Dun', {
      era:'contemporary', region:'asia', difficulty:'advanced', technique:'voicing', mood:'meditative',
      ensembleCategory:'keyboard-orchestral-transcription'    }));

  pack({
    era:'modern', region:'global', difficulty:'advanced', technique:'voicing', mood:'dramatic',
    ensembleCategory:'keyboard-orchestral-transcription'  }, 'Prelude|Arno Babajanyan~Impromptu|Arno Babajanyan~Elegy|Arno Babajanyan~Bachianas Brasileiras No. 4: Prelúdio|Heitor Villa-Lobos~Bachianas Brasileiras No. 4: Coral|Heitor Villa-Lobos~Bachianas Brasileiras No. 4: Ária|Heitor Villa-Lobos~Bachianas Brasileiras No. 4: Dança|Heitor Villa-Lobos~Spanish Riders on Greek Horses|Carlo Domeniconi~The Argentine Knife Thrower|Carlo Domeniconi~Die Linde|Carlo Domeniconi~Toccata|Pierre Petit~Introduction and Fandango|Luigi Boccherini~Rhapsody in Blue|George Gershwin~Suite for Two Guitars|William Lawes');

  pack({
    era:'classical', region:'central-europe', difficulty:'advanced', technique:'counterpoint', mood:'bright',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'sonata', duration:7
  }, 'Piano Sonata K. 282 I. Adagio|W. A. Mozart~Piano Sonata K. 282 II. Menuetto I and II|W. A. Mozart~Piano Sonata K. 282 III. Allegro|W. A. Mozart~Eine kleine Nachtmusik, K. 525|W. A. Mozart~Rondo alla Turca, K. 331|W. A. Mozart~Sonata in C major, K. 545|W. A. Mozart~Fantasia in D minor, K. 397|W. A. Mozart');

  pack({
    era:'modern', region:'global', difficulty:'advanced', technique:'rhythm', mood:'dance',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'dance'
  }, 'Danzas Argentinas, Op. 2|Alberto Ginastera~Danzas Argentinas I. Danza del viejo boyero|Alberto Ginastera~Danzas Argentinas II. Danza de la moza donosa|Alberto Ginastera~Danzas Argentinas III. Danza del gaucho matrero|Alberto Ginastera~Mazurka|Alexandre Tansman~Cavatina|Alexandre Tansman~Suite in modo polonico|Alexandre Tansman~Toccatina, Op. 40 No. 3|Nikolai Kapustin~Prelude and Fugue, Op. 82|Nikolai Kapustin');

  /* Second candidate wave: standard duo repertoire and transcriptions that guitar duos
     actually program. Every entry still has to clear the YouTube verification audit. */

  pack({
    era:'baroque', region:'central-europe', difficulty:'advanced', technique:'counterpoint', mood:'bright',
    ensembleCategory:'baroque-transcription', ensembleForm:'canon', duration:8
  }, 'Canonic Sonata No. 1, TWV 40:118|Georg Philipp Telemann~Canonic Sonata No. 2, TWV 40:119|Georg Philipp Telemann~Canonic Sonata No. 3, TWV 40:120|Georg Philipp Telemann~Canonic Sonata No. 4, TWV 40:121|Georg Philipp Telemann~Canonic Sonata No. 5, TWV 40:122|Georg Philipp Telemann~Canonic Sonata No. 6, TWV 40:123|Georg Philipp Telemann');

  pack({
    era:'baroque', region:'central-europe', technique:'counterpoint', mood:'meditative',
    ensembleCategory:'baroque-transcription', ensembleForm:'character-piece', duration:4
  }, 'Sheep May Safely Graze, BWV 208|J. S. Bach~Badinerie from Suite No. 2, BWV 1067|J. S. Bach~Sicilienne, BWV 1031|J. S. Bach~Wachet auf, ruft uns die Stimme, BWV 645|J. S. Bach~Prelude in C major, BWV 846|J. S. Bach~Prelude from Cello Suite No. 1, BWV 1007|J. S. Bach~Arioso, BWV 156|J. S. Bach~Bourrée in E minor, BWV 996|J. S. Bach~Sarabande, HWV 437|G. F. Handel~Lascia ch’io pianga, HWV 7|G. F. Handel~Rondeau from Abdelazer, Z. 570|Henry Purcell~Minuet from String Quintet, Op. 11 No. 5|Luigi Boccherini');

  pack({
    era:'baroque', region:'italy', difficulty:'advanced', technique:'scales', mood:'dramatic',
    ensembleCategory:'baroque-transcription', ensembleForm:'variations', duration:9
  }, 'La Folia, Op. 5 No. 12|Arcangelo Corelli~Diferencias sobre Guárdame las Vacas|Luys de Narváez~Canarios|Gaspar Sanz~Españoleta|Gaspar Sanz');

  pack({
    era:'baroque', region:'italy', difficulty:'advanced', technique:'rhythm', mood:'bright',
    ensembleCategory:'baroque-transcription', ensembleForm:'concerto', duration:9
  }, 'The Four Seasons: Spring, RV 269|Antonio Vivaldi~The Four Seasons: Summer, RV 315|Antonio Vivaldi~The Four Seasons: Autumn, RV 293|Antonio Vivaldi~The Four Seasons: Winter, RV 297|Antonio Vivaldi~Concerto in D minor, BWV 974|J. S. Bach');

  pack({
    era:'classical', region:'italy', difficulty:'intermediate', technique:'scales', mood:'bright',
    source:'original', ensembleCategory:'original-classical', ensembleForm:'ensemble', status:'core'
  }, 'Duo Concertant, Op. 24|Francesco Molino~Nocturne, Op. 38|Francesco Molino~Duo in G major, Op. 146|Ferdinando Carulli~Petit Duo, Op. 128|Ferdinando Carulli~Duetto, Op. 8 No. 1|Filippo Gragnani~Duetto, Op. 8 No. 2|Filippo Gragnani~Grand Duo Concertant, Op. 62|Antoine de Lhoyer');

  pack({
    era:'romantic', region:'spain', technique:'tremolo', mood:'lyrical',
    ensembleCategory:'iberian-transcription', ensembleForm:'character-piece', duration:5
  }, 'Recuerdos de la Alhambra|Francisco Tárrega~Capricho Árabe|Francisco Tárrega~Gran Vals|Francisco Tárrega~Lágrima|Francisco Tárrega~Adelita|Francisco Tárrega~Danza Mora|Francisco Tárrega~María|Francisco Tárrega~Marieta|Francisco Tárrega~Romance Anónimo|Anónimo~Serenata Española|Joaquín Malats~Bolero|Julián Arcas~Guajira|Emilio Pujol~Tango Español|Emilio Pujol');

  pack({
    era:'romantic', region:'spain', difficulty:'advanced', technique:'rhythm', mood:'dance',
    ensembleCategory:'iberian-transcription', ensembleForm:'dance', duration:6
  }, 'Asturias (Leyenda), Op. 47 No. 5|Isaac Albéniz~Granada, Op. 47 No. 1|Isaac Albéniz~Sevilla, Op. 47 No. 3|Isaac Albéniz~Córdoba, Op. 232 No. 4|Isaac Albéniz~Torre Bermeja, Op. 92 No. 12|Isaac Albéniz~Rumores de la Caleta, Op. 71 No. 6|Isaac Albéniz~Danza Española No. 5, Andaluza|Enrique Granados~Danza Española No. 10, Melancólica|Enrique Granados~Zapateado|Enrique Granados~Danza Ritual del Fuego|Manuel de Falla~Canción del fuego fatuo|Manuel de Falla~Nana|Manuel de Falla~Asturiana|Manuel de Falla~Jota|Manuel de Falla~Polo|Manuel de Falla~Fandanguillo, Op. 36|Joaquín Turina~Sevillana, Op. 29|Joaquín Turina~Ráfaga, Op. 53|Joaquín Turina~Sonatina in A major|Federico Moreno Torroba~Madroños|Federico Moreno Torroba~Torija|Federico Moreno Torroba');

  pack({
    era:'modern', region:'latin-america', technique:'arpeggio', mood:'lyrical',
    ensembleCategory:'latin-hispanic', ensembleForm:'character-piece', duration:6
  }, 'La Catedral|Agustín Barrios Mangoré~Un Sueño en la Floresta|Agustín Barrios Mangoré~Julia Florida|Agustín Barrios Mangoré~Las Abejas|Agustín Barrios Mangoré~Contemplación|Agustín Barrios Mangoré~Estudio de Concierto|Agustín Barrios Mangoré~Villancico de Navidad|Agustín Barrios Mangoré~Estrellita|Manuel María Ponce~Scherzino Mexicano|Manuel María Ponce~Misionera|Jorge Morel');

  pack({
    era:'modern', region:'latin-america', technique:'rhythm', mood:'dance',
    ensembleCategory:'latin-hispanic', ensembleForm:'dance', duration:5
  }, 'Danza Paraguaya|Agustín Barrios Mangoré~Maxixe|Agustín Barrios Mangoré~Cueca|Agustín Barrios Mangoré~Aire de Zamba|Agustín Barrios Mangoré~Danza Brasilera|Jorge Morel~Seis por Derecho|Antonio Lauro~El Negrito|Antonio Lauro~La Gatica|Antonio Lauro~Carnavalito|Jorge Cardoso~Milonga|Jorge Cardoso');

  pack({
    era:'modern', region:'latin-america', technique:'voicing', mood:'lyrical',
    ensembleCategory:'latin-hispanic', ensembleForm:'waltz', duration:4
  }, 'Vals Venezolano No. 2, Andreína|Antonio Lauro~Vals Venezolano No. 3, Natalia|Antonio Lauro~Vals Venezolano No. 4, Yacambú|Antonio Lauro~El Marabino|Antonio Lauro~Angostura|Antonio Lauro~Vals, Op. 8 No. 3|Agustín Barrios Mangoré~Vals, Op. 8 No. 4|Agustín Barrios Mangoré~Mazurka Appassionata|Agustín Barrios Mangoré');

  pack({
    era:'modern', region:'latin-america', difficulty:'virtuoso', technique:'rhythm', mood:'dramatic',
    source:'original', ensembleCategory:'latin-tango', ensembleForm:'tango', genre:'jazz-world', status:'core', duration:6
  }, 'Oblivion|Astor Piazzolla~Adiós Nonino|Astor Piazzolla~Invierno Porteño|Astor Piazzolla~Otoño Porteño|Astor Piazzolla~Escualo|Astor Piazzolla~Michelangelo 70|Astor Piazzolla~Chiquilín de Bachín|Astor Piazzolla~Vuelvo al Sur|Astor Piazzolla~Suite Buenos Aires: Pompeya|Máximo Diego Pujol~Suite Buenos Aires: Palermo|Máximo Diego Pujol~Suite Buenos Aires: San Telmo|Máximo Diego Pujol~Suite Buenos Aires: Microcentro|Máximo Diego Pujol~Candombe|Máximo Diego Pujol~Elegía por la muerte de un tanguero|Máximo Diego Pujol~Preludio Tristón|Máximo Diego Pujol');

  pack({
    era:'modern', region:'latin-america', technique:'rhythm', mood:'bright',
    ensembleCategory:'latin-brazilian', ensembleForm:'choro', genre:'jazz-world', duration:4
  }, 'Odeon|Ernesto Nazareth~Brejeiro|Ernesto Nazareth~Apanhei-te Cavaquinho|Ernesto Nazareth~Carinhoso|Pixinguinha~Um a Zero|Pixinguinha~Noites Cariocas|Jacob do Bandolim~Se Ela Perguntar|Dilermando Reis~Choro da Saudade|Agustín Barrios Mangoré');

  pack({
    era:'modern', region:'latin-america', difficulty:'virtuoso', technique:'percussion', mood:'dance',
    source:'original', ensembleCategory:'latin-brazilian', ensembleForm:'dance', genre:'jazz-world', status:'core', duration:5
  }, 'Jongo|Paulo Bellinati~Um Amor de Valsa|Paulo Bellinati~Lamentos do Morro|Paulo Bellinati~Berimbau|Baden Powell~Samba em Prelúdio|Baden Powell~Canto de Ossanha|Baden Powell~Consolação|Baden Powell~Pacoca|Celso Machado~Quebra Queixo|Celso Machado~Sambossa|Celso Machado~Bate-Coxa|Marco Pereira~Loro|Egberto Gismonti~Palhaço|Egberto Gismonti~Prelude No. 1|Heitor Villa-Lobos~Chôros No. 1|Heitor Villa-Lobos~Bachianas Brasileiras No. 5: Ária|Heitor Villa-Lobos');

  pack({
    era:'romantic', region:'central-europe', difficulty:'advanced', technique:'rhythm', mood:'dance',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'dance', duration:6
  }, 'Romanian Folk Dances, Sz. 56|Béla Bartók~In the Hall of the Mountain King|Edvard Grieg~Morning Mood from Peer Gynt|Edvard Grieg~Holberg Suite, Op. 40|Edvard Grieg~Waltz of the Flowers|P. I. Tchaikovsky~Dance of the Sugar Plum Fairy|P. I. Tchaikovsky~Habanera from Carmen|Georges Bizet~Les Toréadors from Carmen|Georges Bizet~Sabre Dance|Aram Khachaturian~Polovtsian Dances|Alexander Borodin~Flight of the Bumblebee|Nikolai Rimsky-Korsakov');

  pack({
    era:'romantic', region:'global', technique:'voicing', mood:'lyrical',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'character-piece', duration:5
  }, 'Promenade from Pictures at an Exhibition|Modest Mussorgsky~The Great Gate of Kiev|Modest Mussorgsky~Jupiter from The Planets|Gustav Holst~Fantaisie-Impromptu, Op. 66|Frédéric Chopin~Prelude in E minor, Op. 28 No. 4|Frédéric Chopin~Serenade, D. 957|Franz Schubert~Sicilienne, Op. 78|Gabriel Fauré~Pavane, Op. 50|Gabriel Fauré~Rêverie|Claude Debussy~La fille aux cheveux de lin|Claude Debussy~Danse Macabre|Camille Saint-Saëns~Caprice No. 24, Op. 1|Niccolò Paganini~Ode to Joy|Ludwig van Beethoven');

  pack({
    era:'contemporary', region:'global', difficulty:'virtuoso', technique:'rhythm', mood:'dramatic',
    source:'original', ensembleCategory:'original-contemporary', ensembleForm:'character-piece', status:'core', duration:7
  }, 'Côté Nord|Roland Dyens~Rythmaginaire|Roland Dyens~Reflexões No. 6|Jaime Zenamon~The Fall of Birds|Nikita Koshkin~Andecy|Andrew York~Sunburst|Andrew York~Numbers|Andrew York~Danza Característica|Leo Brouwer~Guajira Criolla|Leo Brouwer');

  /* Third candidate wave: further standard duo programme material. */

  pack({
    era:'romantic', region:'spain', technique:'voicing', mood:'lyrical',
    ensembleCategory:'iberian-transcription', ensembleForm:'character-piece', duration:4
  }, 'El Testament d’Amèlia|Miguel Llobet~El Noi de la Mare|Miguel Llobet~Canço del Lladre|Miguel Llobet~La Filla del Marxant|Miguel Llobet~Plany|Miguel Llobet~Leonesa|Miguel Llobet~Variations on a Theme by Sor, Op. 15|Miguel Llobet~Scherzo-Vals|Miguel Llobet~Campanas del Alba|Eduardo Sáinz de la Maza~Zapateado|Regino Sáinz de la Maza~Habanera|Regino Sáinz de la Maza~Collectici Íntim|Vicente Asencio~Tango|Vicente Asencio~Sonata|Antonio José~Zambra Granadina|Isaac Albéniz~Bajo la palmera, Op. 232 No. 3|Isaac Albéniz');

  pack({
    era:'classical', region:'italy', difficulty:'intermediate', technique:'scales', mood:'bright',
    source:'original', ensembleCategory:'original-classical', ensembleForm:'ensemble', status:'core', duration:8
  }, 'Duo, Op. 21|Ferdinando Carulli~Duo, Op. 27|Ferdinando Carulli~Duo, Op. 65|Ferdinando Carulli~Duo, Op. 70|Ferdinando Carulli~Duo, Op. 104|Ferdinando Carulli~Duo, Op. 155|Ferdinando Carulli~Duo, Op. 190|Ferdinando Carulli~Variazioni Concertanti, Op. 66|Mauro Giuliani~Duo Concertante, Op. 74|Mauro Giuliani~Duettino Facile, Op. 77|Mauro Giuliani~Pièces Faciles, Op. 74|Mauro Giuliani~Duo, Op. 6|Dionisio Aguado~Duo Concertant, Op. 23|Luigi Legnani~Duo, Op. 34|Matteo Carcassi~Opern-Revue, Op. 8|Johann Kaspar Mertz~Ungarische Vaterlandsblüthen|Johann Kaspar Mertz');

  pack({
    era:'romantic', region:'global', difficulty:'advanced', technique:'voicing', mood:'dramatic',
    ensembleCategory:'keyboard-orchestral-transcription', ensembleForm:'character-piece', duration:5
  }, 'Nessun Dorma|Giacomo Puccini~O mio babbino caro|Giacomo Puccini~La donna è mobile|Giuseppe Verdi~Va, pensiero|Giuseppe Verdi~Hallelujah Chorus|G. F. Handel~Ombra mai fu|G. F. Handel~Panis Angelicus|César Franck~Swan Lake|P. I. Tchaikovsky~Andante Cantabile|P. I. Tchaikovsky~Finlandia, Op. 26|Jean Sibelius~Spring Song, Op. 62 No. 6|Felix Mendelssohn~Symphony No. 40, K. 550|W. A. Mozart~Divertimento, K. 136|W. A. Mozart~Chanson de Matin, Op. 15 No. 2|Edward Elgar~Après un rêve, Op. 7 No. 1|Gabriel Fauré~Zigeunerweisen, Op. 20|Pablo de Sarasate');

  pack({
    era:'modern', region:'latin-america', difficulty:'virtuoso', technique:'rhythm', mood:'dramatic',
    source:'original', ensembleCategory:'latin-tango', ensembleForm:'tango', genre:'jazz-world', status:'core', duration:6
  }, 'Milonga sin Palabras|Astor Piazzolla~Soledad|Astor Piazzolla~Años de Soledad|Astor Piazzolla~Bandoneón|Astor Piazzolla~Tristango en vos|Máximo Diego Pujol~Suite Mágica|Máximo Diego Pujol~El Choclo|Ángel Villoldo~La Cumparsita|Gerardo Matos Rodríguez');

  pack({
    era:'contemporary', region:'latin-america', difficulty:'virtuoso', technique:'rhythm', mood:'dramatic',
    source:'original', ensembleCategory:'original-contemporary', ensembleForm:'character-piece', status:'core', duration:6
  }, 'Un Día de Noviembre|Leo Brouwer~Canción de Cuna|Leo Brouwer~Paisaje Cubano con Campanas|Leo Brouwer~Elogio de la Danza|Leo Brouwer~Sonata for Two Guitars|Sérgio Assad~Fantasia Carioca|Sérgio Assad~Sones y Flores|Eduardo Martín~Bulgarian Dances|Atanas Ourkouzounov~Sonatina|Atanas Ourkouzounov~Hiroshima|Štěpán Rak~Temptation of the Renaissance|Štěpán Rak~Da Capo|Nikita Koshkin');

  pack({
    era:'contemporary', region:'global', difficulty:'virtuoso', technique:'rhythm', mood:'dance',
    ensembleCategory:'original-contemporary', ensembleForm:'character-piece', duration:5
  }, 'Tango en Skaï|Roland Dyens~Valse en Skaï|Roland Dyens~Libra Sonatine|Roland Dyens~Koyunbaba, Op. 19|Carlo Domeniconi~Prelude No. 3|Heitor Villa-Lobos~Etude No. 1|Heitor Villa-Lobos~Etude No. 11|Heitor Villa-Lobos~Sakura Variations|Yuquijiro Yocoh');

  /* Fourth candidate wave: short repertoire staples that guitar duos record most often. */

  pack({
    era:'baroque', region:'central-europe', technique:'counterpoint', mood:'meditative',
    ensembleCategory:'baroque-transcription', ensembleForm:'character-piece', duration:4
  }, 'Bist du bei mir, BWV 508|J. S. Bach~Ich ruf zu dir, BWV 639|J. S. Bach~Nun komm, der Heiden Heiland, BWV 659|J. S. Bach~Erbarme dich, BWV 244|J. S. Bach~Siciliano from Sonata BWV 1017|J. S. Bach~Gavotte en Rondeau, BWV 1006a|J. S. Bach~Prelude from Lute Suite, BWV 996|J. S. Bach~Menuet from Notebook for Anna Magdalena Bach|J. S. Bach~Brandenburg Concerto No. 5, BWV 1050|J. S. Bach~Concerto for Two Harpsichords, BWV 1061|J. S. Bach~Trio Sonata in G major, BWV 1039|J. S. Bach~Air with Variations|G. F. Handel~Sarabande in D minor|G. F. Handel~Dido’s Lament|Henry Purcell~Sarabanda|Arcangelo Corelli~Concerto in A minor, RV 356|Antonio Vivaldi');

  pack({
    era:'romantic', region:'spain', technique:'arpeggio', mood:'lyrical',
    ensembleCategory:'iberian-transcription', ensembleForm:'character-piece', duration:4
  }, 'Estudio Brillante|Francisco Tárrega~Pavana|Francisco Tárrega~Endecha|Francisco Tárrega~Oremus|Francisco Tárrega~Sueño|Francisco Tárrega~Rosita|Francisco Tárrega~Mazurka en Sol|Francisco Tárrega~Variations on a Theme of Mozart, Op. 9|Fernando Sor~Danza Española No. 1|Enrique Granados~Danza Española No. 3|Enrique Granados~Nocturno|Federico Moreno Torroba~Suite Castellana|Federico Moreno Torroba~Garrotín|Joaquín Turina~Soleares|Joaquín Turina~En los trigales|Joaquín Rodrigo~El Amor Brujo|Manuel de Falla~Greensleeves|Anónimo');

  pack({
    era:'modern', region:'latin-america', technique:'rhythm', mood:'dance',
    ensembleCategory:'latin-hispanic', ensembleForm:'dance', duration:4
  }, 'Malagueña|Ernesto Lecuona~Danza Lucumí|Ernesto Lecuona~La Comparsa|Ernesto Lecuona~Siboney|Ernesto Lecuona~Andalucía|Ernesto Lecuona~El Colibrí|Julio Sagreras~Vals Venezolano No. 1|Antonio Lauro~Carora|Antonio Lauro~María Luisa|Antonio Lauro~Preludio en Do menor|Agustín Barrios Mangoré~La Última Canción|Agustín Barrios Mangoré~Confesión|Agustín Barrios Mangoré~Madrigal|Agustín Barrios Mangoré~Nostálgico|Máximo Diego Pujol~Decarísimo|Astor Piazzolla~Fuga y Misterio|Astor Piazzolla');

  pack({
    era:'modern', region:'latin-america', technique:'rhythm', mood:'bright',
    ensembleCategory:'latin-brazilian', ensembleForm:'choro', genre:'jazz-world', duration:4
  }, 'Sons de Carrilhões|João Pernambuco~Interrogando|João Pernambuco~Brasileirinho|Waldir Azevedo~Delicado|Waldir Azevedo~Tico-Tico no Fubá|Zequinha de Abreu~Escorregando|Ernesto Nazareth~Ameno Resedá|Ernesto Nazareth');

  /* Checked in order, first substring hit wins, so put the narrow keywords above the broad
     ones ("sonatin" before "sonata", "prelude and fugue" before "prelude"). Anything that
     falls through lands in the character-piece bucket. */
  const formRules = [
    ['prelude and fugue','prelude-fugue'],['prelude, fugue','prelude-fugue'],
    ['sonatin','sonata'],['sonata','sonata'],['partita','suite'],['suite','suite'],
    ['concierto','concerto'],['concerto','concerto'],
    ['variation','variations'],['variazioni','variations'],['diferencias','variations'],
    ['chaconne','variations'],['ciaccona','variations'],['passacagl','variations'],['folia','variations'],
    ['canon','canon'],['invention','invention'],['fug','fugue'],['toccata','prelude'],
    ['prelud','prelude'],['preludio','prelude'],
    ['etude','etude'],['étude','etude'],['estudio','etude'],['study','etude'],
    ['nocturne','nocturne'],['nocturno','nocturne'],['berceuse','nocturne'],['barcarol','nocturne'],
    ['waltz','waltz'],['vals','waltz'],['valse','waltz'],['tango','tango'],['milonga','milonga'],
    ['choro','choro'],['chôro','choro'],['samba','choro'],['bossa','choro'],['baião','choro'],
    ['baiao','choro'],['frevo','choro'],['maxixe','choro'],['jongo','choro'],['candombe','choro'],
    ['overture','overture'],['obertura','overture'],
    ['minuet','dance'],['menuet','dance'],['gavotte','dance'],['bourrée','dance'],['bourree','dance'],
    ['sarabande','dance'],['gigue','dance'],['allemande','dance'],['courante','dance'],
    ['mazurka','dance'],['polonaise','dance'],['habanera','dance'],['bolero','dance'],
    ['fandango','dance'],['zapateado','dance'],['jota','dance'],['malaguena','dance'],
    ['malagueña','dance'],['sevillan','dance'],['guajira','dance'],['cueca','dance'],
    ['dance','dance'],['danza','dance'],['danse','dance'],['danças','dance'],['dances','dance'],
    ['divertiss','ensemble'],['divertimento','ensemble'],['duetto','ensemble'],['duet','ensemble'],
    ['serenade','serenade'],['serenata','serenade'],
    ['fant','fantasy'],['song','song'],['theme','soundtrack']
  ];
  catalog.filter(work => work.type === 'duo').forEach(work => {
    if (!work.ensembleCategory) {
      if (work.source === 'original') work.ensembleCategory = 'original-' + (work.era === 'classical' || work.era === 'romantic' || work.era === 'modern' ? work.era : 'contemporary');
      else if (['film','screen','anime','game'].includes(work.genre)) work.ensembleCategory = 'film-animation';
      else if (['pop','recent-pop','kpop'].includes(work.genre)) work.ensembleCategory = 'pop-jazz-arrangement';
      else if (work.region === 'latin-america') work.ensembleCategory = /Piazzolla|tango|milonga/i.test(work.composer + ' ' + work.title) ? 'latin-tango' : 'latin-brazilian';
      else if (work.era === 'baroque') work.ensembleCategory = 'baroque-transcription';
      else if (work.region === 'spain') work.ensembleCategory = 'iberian-transcription';
      else work.ensembleCategory = 'keyboard-orchestral-transcription';
    }
    if (!work.ensembleForm) {
      const text = work.title.toLowerCase();
      const match = formRules.find(rule => text.includes(rule[0]));
      work.ensembleForm = match ? match[1] : 'character-piece';
    }
  });
  window.repertoireCatalog = catalog;
})();
