(() => {
  const catalog = [];
  const add = (type, era, difficulty, region, technique, mood, source, works) => {
    works.forEach(([title, composer, duration, video = '']) => catalog.push({
      id: `work-${String(catalog.length + 1).padStart(3, '0')}`,
      type, era, difficulty, region, technique, mood, source,
      title, composer, duration, video,
      query: `${composer} ${title} classical guitar ${type}`
    }));
  };

  // Solo · Renaissance and Baroque
  add('solo','renaissance','intermediate','spain','voicing','meditative','original',[
    ['파반 1번','Luis de Milán',4],['판타지아 X','Luis de Milán',5],
    ['황제의 노래','Luys de Narváez',4],['Guardame las vacas','Luys de Narváez',4],
    ['판타지아 X','Alonso Mudarra',4]
  ]);
  add('solo','renaissance','intermediate','france-uk','voicing','dark','transcription',[
    ['Lachrimae Pavan','John Dowland',5],['The Frog Galliard','John Dowland',3]
  ]);
  add('solo','baroque','intermediate','spain','rhythm','dance','original',[
    ['Canarios','Gaspar Sanz',4],['Españoleta','Gaspar Sanz',4]
  ]);
  add('solo','baroque','beginner','france-uk','voicing','lyrical','transcription',[
    ['Menuet in D minor','Robert de Visée',3]
  ]);
  add('solo','baroque','advanced','france-uk','voicing','meditative','transcription',[
    ['Suite in D minor','Robert de Visée',13]
  ]);
  add('solo','baroque','advanced','central-europe','counterpoint','meditative','transcription',[
    ['Fantasia','S. L. Weiss',6],['Passacaglia','S. L. Weiss',8]
  ]);
  add('solo','baroque','intermediate','central-europe','counterpoint','bright','transcription',[
    ['Bourrée, BWV 996','J. S. Bach',4],['Prelude, BWV 999','J. S. Bach',3]
  ]);
  add('solo','baroque','virtuoso','central-europe','counterpoint','dramatic','transcription',[
    ['Chaconne, BWV 1004','J. S. Bach',14,'5z9Pld-4K4c']
  ]);

  // Solo · Classical and Romantic
  add('solo','classical','beginner','spain','voicing','bright','original',[
    ['Study, Op. 60 No. 1','Fernando Sor',2],['Study, Op. 35 No. 1','Fernando Sor',2]
  ]);
  add('solo','classical','intermediate','spain','voicing','lyrical','original',[
    ['Study, Op. 35 No. 22','Fernando Sor',3],['Study, Op. 6 No. 11','Fernando Sor',4]
  ]);
  add('solo','classical','advanced','spain','scales','dramatic','original',[
    ['모차르트 주제에 의한 변주곡, Op. 9','Fernando Sor',9],['Grand Solo, Op. 14','Fernando Sor',10],
    ['Fantaisie élégiaque, Op. 59','Fernando Sor',15]
  ]);
  add('solo','classical','beginner','italy','scales','bright','original',[
    ['Allegro, Op. 50 No. 13','Mauro Giuliani',2],['Waltz in G, Op. 121 No. 1','Ferdinando Carulli',2],
    ['Andantino, Op. 241 No. 5','Ferdinando Carulli',2]
  ]);
  add('solo','classical','intermediate','italy','arpeggio','bright','original',[
    ['Study, Op. 60 No. 3','Matteo Carcassi',3],['Andantino, Op. 60 No. 1','Matteo Carcassi',2]
  ]);
  add('solo','classical','advanced','italy','scales','dramatic','original',[
    ['Grand Overture, Op. 61','Mauro Giuliani',8],['Sonata, Op. 15','Mauro Giuliani',13],
    ['Variations on a Theme by Handel, Op. 107','Mauro Giuliani',9],['Rondo Brillante, Op. 2 No. 2','Dionisio Aguado',9]
  ]);
  add('solo','classical','virtuoso','italy','scales','dramatic','original',[
    ['Rossiniana No. 1, Op. 119','Mauro Giuliani',15]
  ]);
  add('solo','romantic','advanced','france-uk','voicing','dark','original',[
    ['Le Départ, Op. 31','Napoléon Coste',8]
  ]);
  add('solo','romantic','virtuoso','italy','arpeggio','lyrical','original',[
    ['Rêverie-Nocturne, Op. 19','Giulio Regondi',10],['Introduction et Caprice, Op. 23','Giulio Regondi',9]
  ]);
  add('solo','romantic','advanced','central-europe','voicing','dark','original',[
    ['Élégie','J. K. Mertz',9],['Unruhe — Bardenklänge','J. K. Mertz',4]
  ]);
  add('solo','romantic','virtuoso','central-europe','scales','dance','original',[
    ['Tarantelle','J. K. Mertz',7]
  ]);
  add('solo','romantic','intermediate','spain','voicing','lyrical','original',[
    ['Lágrima','Francisco Tárrega',2],['Adelita','Francisco Tárrega',2],['María Luisa','Julio S. Sagreras',4]
  ]);
  add('solo','romantic','advanced','spain','arpeggio','lyrical','original',[
    ['Capricho Árabe','Francisco Tárrega',6],['Sueño','Francisco Tárrega',7],['Gran Vals','Francisco Tárrega',4]
  ]);
  add('solo','romantic','advanced','spain','tremolo','meditative','original',[
    ['알함브라 궁전의 추억','Francisco Tárrega',5,'iJsZ7euzjNc'],['El Testament d’Amèlia','Miguel Llobet',4]
  ]);
  add('solo','romantic','intermediate','global','arpeggio','lyrical','original',[
    ['Romance Anónimo','Anonymous',3]
  ]);

  // Solo · Spanish, Latin-American and contemporary pillars
  add('solo','modern','advanced','spain','scales','dramatic','transcription',[
    ['Asturias (Leyenda)','Isaac Albéniz',7,'inBKFMB-yPg'],['Sevilla','Isaac Albéniz',5]
  ]);
  add('solo','modern','intermediate','spain','voicing','lyrical','transcription',[
    ['Granada','Isaac Albéniz',5],['Danza Española No. 5 — Andaluza','Enrique Granados',5]
  ]);
  add('solo','modern','advanced','spain','voicing','dark','original',[
    ['Homenaje pour le tombeau de Debussy','Manuel de Falla',4],['Fandanguillo','Joaquín Turina',6]
  ]);
  add('solo','modern','virtuoso','spain','rhythm','dramatic','original',[
    ['Sonata, Op. 61','Joaquín Turina',12],['Invocación y Danza','Joaquín Rodrigo',9]
  ]);
  add('solo','modern','advanced','spain','scales','bright','original',[
    ['En los trigales','Joaquín Rodrigo',4]
  ]);
  add('solo','modern','advanced','latin-america','voicing','lyrical','original',[
    ['Sonata III','Manuel M. Ponce',15],['Scherzino Mexicano','Manuel M. Ponce',3]
  ]);
  add('solo','modern','virtuoso','latin-america','counterpoint','dramatic','original',[
    ['Variations and Fugue on La Folia','Manuel M. Ponce',25],['La Catedral','Agustín Barrios',12],
    ['Un Sueño en la Floresta','Agustín Barrios',7]
  ]);
  add('solo','modern','advanced','latin-america','tremolo','meditative','original',[
    ['Una Limosna por el Amor de Dios','Agustín Barrios',4]
  ]);
  add('solo','modern','intermediate','latin-america','voicing','lyrical','original',[
    ['Julia Florida','Agustín Barrios',4],['Vals, Op. 8 No. 4','Agustín Barrios',4],['Natalia','Antonio Lauro',3]
  ]);
  add('solo','modern','advanced','latin-america','rhythm','dance','original',[
    ['Danza Paraguaya','Agustín Barrios',4],['El Marabino','Antonio Lauro',2],['Danza Característica','Leo Brouwer',3]
  ]);
  add('solo','modern','intermediate','latin-america','voicing','meditative','original',[
    ['Prelude No. 1','Heitor Villa-Lobos',5],['Prelude No. 3','Heitor Villa-Lobos',6]
  ]);
  add('solo','modern','advanced','latin-america','arpeggio','dramatic','original',[
    ['Etude No. 1','Heitor Villa-Lobos',3],['Etude No. 7','Heitor Villa-Lobos',4],['Etude No. 11','Heitor Villa-Lobos',4]
  ]);
  add('solo','modern','virtuoso','latin-america','percussion','dramatic','original',[
    ['Sonata, Op. 47','Alberto Ginastera',13]
  ]);
  add('solo','modern','advanced','latin-america','rhythm','dark','original',[
    ['Elogio de la Danza','Leo Brouwer',6],['El Decamerón Negro','Leo Brouwer',18]
  ]);
  add('solo','contemporary','virtuoso','latin-america','voicing','dramatic','original',[
    ['Sonata','Leo Brouwer',24],['Aquarelle','Sérgio Assad',17]
  ]);
  add('solo','contemporary','advanced','asia','harmonics','meditative','original',[
    ['All in Twilight','Tōru Takemitsu',14],['Equinox','Tōru Takemitsu',5]
  ]);
  add('solo','modern','virtuoso','france-uk','voicing','dark','original',[
    ['Nocturnal after John Dowland, Op. 70','Benjamin Britten',19],['Five Bagatelles','William Walton',13]
  ]);
  add('solo','contemporary','advanced','france-uk','rhythm','dance','original',[
    ['Tango en Skaï','Roland Dyens',3],['Saudade No. 3','Roland Dyens',7]
  ]);
  add('solo','contemporary','virtuoso','france-uk','voicing','dramatic','original',[
    ['Libra Sonatine','Roland Dyens',12]
  ]);
  add('solo','contemporary','advanced','central-europe','slurs','meditative','original',[
    ['Koyunbaba, Op. 19','Carlo Domeniconi',13]
  ]);
  add('solo','contemporary','virtuoso','central-europe','percussion','dark','original',[
    ['Usher Waltz','Nikita Koshkin',9],['Jazz Sonata','Dušan Bogdanović',13]
  ]);
  add('solo','contemporary','intermediate','global','voicing','bright','original',[
    ['Home','Andrew York',4],['Vagabond','Maria Linnemann',3]
  ]);
  add('solo','contemporary','advanced','global','scales','bright','original',[
    ['Sunburst','Andrew York',4]
  ]);
  add('solo','contemporary','advanced','latin-america','rhythm','dance','original',[
    ['Jongo','Paulo Bellinati',5]
  ]);

  add('solo','classical','beginner','spain','voicing','bright','original',[
    ['Andante, Op. 31 No. 1','Fernando Sor',2],['Waltz, Op. 51 No. 1','Fernando Sor',2]
  ]);
  add('solo','classical','beginner','italy','scales','bright','original',[
    ['Allegretto, Op. 50 No. 1','Mauro Giuliani',2],['Country Dance','Ferdinando Carulli',2],
    ['Etude, Op. 60 No. 2','Matteo Carcassi',2]
  ]);
  add('solo','classical','beginner','central-europe','voicing','lyrical','original',[
    ['Arietta','Joseph Küffner',2]
  ]);
  add('solo','modern','beginner','spain','rhythm','dance','original',[
    ['Vals','Bartolomé Calatayud',2]
  ]);

  // Solo · Further landmarks and wider geographies
  add('solo','renaissance','advanced','italy','counterpoint','meditative','transcription',[
    ['Fantasia No. 30','Francesco da Milano',4]
  ]);
  add('solo','baroque','intermediate','italy','arpeggio','meditative','transcription',[
    ['Toccata Arpeggiata','Giovanni G. Kapsberger',4]
  ]);
  add('solo','baroque','advanced','central-europe','voicing','meditative','transcription',[
    ['Sarabande, BWV 1002','J. S. Bach',4],['Prelude, BWV 1007','J. S. Bach',3]
  ]);
  add('solo','baroque','intermediate','central-europe','voicing','dark','transcription',[
    ['Sarabande, HWV 437','G. F. Handel',4]
  ]);
  add('solo','classical','advanced','central-europe','voicing','bright','original',[
    ['Sonata in C major, Op. 29 No. 1','Anton Diabelli',12]
  ]);
  add('solo','classical','advanced','italy','scales','dramatic','original',[
    ['Caprice No. 4, Op. 26','Matteo Carcassi',4],['Variations sur les Folies d’Espagne, Op. 45','Mauro Giuliani',8]
  ]);
  add('solo','classical','advanced','spain','scales','dramatic','original',[
    ['Introduction et variations, Op. 28','Fernando Sor',9]
  ]);
  add('solo','romantic','virtuoso','italy','scales','dramatic','original',[
    ['Caprice No. 36, Op. 20','Luigi Legnani',5],['Rondo des Fées, Op. 25','Marco Aurelio Zani de Ferranti',9]
  ]);
  add('solo','romantic','advanced','spain','rhythm','dramatic','original',[
    ['Fantasía sobre La traviata','Julián Arcas',8]
  ]);
  add('solo','romantic','intermediate','spain','rhythm','dance','original',[
    ['Danza Mora','Francisco Tárrega',4]
  ]);
  add('solo','romantic','advanced','spain','voicing','lyrical','original',[
    ['Variaciones sobre un tema de Sor','Miguel Llobet',9]
  ]);
  add('solo','modern','virtuoso','spain','voicing','dramatic','original',[
    ['Sonata para guitarra','Antonio José',23]
  ]);
  add('solo','modern','advanced','spain','rhythm','bright','original',[
    ['Sonatina','Federico Moreno Torroba',12],['Suite Compostelana','Federico Mompou',15]
  ]);
  add('solo','modern','advanced','spain','tremolo','meditative','original',[
    ['Campanas del alba','Eduardo Sainz de la Maza',5]
  ]);
  add('solo','modern','advanced','central-europe','voicing','lyrical','original',[
    ['Cavatina','Alexandre Tansman',15],['Quatre pièces brèves','Frank Martin',11]
  ]);
  add('solo','modern','advanced','france-uk','voicing','dramatic','original',[
    ['Sonatina, Op. 52 No. 1','Lennox Berkeley',12]
  ]);
  add('solo','modern','virtuoso','central-europe','voicing','dark','original',[
    ['Royal Winter Music — Sonata I','Hans Werner Henze',25]
  ]);
  add('solo','modern','virtuoso','france-uk','harmonics','dramatic','original',[
    ['Tiento','Maurice Ohana',8]
  ]);
  add('solo','contemporary','advanced','central-europe','harmonics','meditative','original',[
    ['Serenade for Guitar','Sofia Gubaidulina',4]
  ]);
  add('solo','contemporary','intermediate','asia','voicing','lyrical','transcription',[
    ['Sakura Variations','Traditional / Yūjirō Yocoh',7]
  ]);

  // Duo
  add('duo','classical','intermediate','spain','voicing','lyrical','original',[
    ['L’Encouragement, Op. 34','Fernando Sor',12]
  ]);
  add('duo','classical','advanced','spain','scales','dramatic','original',[
    ['Fantaisie, Op. 54 bis','Fernando Sor',11]
  ]);
  add('duo','classical','advanced','italy','scales','bright','original',[
    ['Variazioni Concertanti, Op. 130','Mauro Giuliani',11],['Serenade, Op. 96','Ferdinando Carulli',15]
  ]);
  add('duo','baroque','advanced','italy','counterpoint','bright','transcription',[
    ['Concerto in G major, RV 532','Antonio Vivaldi',11],['Sonata K. 141','Domenico Scarlatti',4]
  ]);
  add('duo','modern','advanced','spain','voicing','lyrical','transcription',[
    ['Córdoba','Isaac Albéniz',6],['Oriental','Enrique Granados',5],['Canción y Danza No. 6','Federico Mompou',5]
  ]);
  add('duo','modern','virtuoso','spain','rhythm','dramatic','transcription',[
    ['Danza Española No. 1','Manuel de Falla',4]
  ]);
  add('duo','modern','advanced','spain','rhythm','bright','original',[
    ['Tonadilla','Joaquín Rodrigo',13]
  ]);
  add('duo','modern','advanced','italy','counterpoint','bright','original',[
    ['Sonatina Canonica, Op. 196','Mario Castelnuovo-Tedesco',12]
  ]);
  add('duo','modern','virtuoso','italy','counterpoint','dramatic','original',[
    ['Les Guitares bien tempérées — 발췌','Mario Castelnuovo-Tedesco',15]
  ]);
  add('duo','contemporary','advanced','latin-america','rhythm','dance','original',[
    ['Tango Suite','Astor Piazzolla',17],['Fuga y Misterio','Astor Piazzolla',5],
    ['Histoire du Tango','Astor Piazzolla',22],['Jobiniana No. 1','Sérgio Assad',7],
    ['Três Cenas Brasileiras','Sérgio Assad',12],['Jongo','Paulo Bellinati',5]
  ]);
  add('duo','contemporary','intermediate','latin-america','voicing','bright','original',[
    ['Micropiezas','Leo Brouwer',9]
  ]);
  add('duo','contemporary','advanced','latin-america','voicing','dramatic','original',[
    ['Tríptico','Leo Brouwer',14],['Summer Garden Suite','Sérgio Assad',16]
  ]);
  add('duo','modern','advanced','france-uk','harmonics','meditative','transcription',[
    ['Clair de lune','Claude Debussy',5],['Pavane pour une infante défunte','Maurice Ravel',6]
  ]);

  add('duo','baroque','intermediate','central-europe','counterpoint','bright','transcription',[
    ['Invention No. 8, BWV 779','J. S. Bach',2]
  ]);
  add('duo','baroque','advanced','france-uk','scales','dramatic','transcription',[
    ['Les Cyclopes','Jean-Philippe Rameau',4]
  ]);
  add('duo','baroque','intermediate','italy','voicing','bright','transcription',[
    ['Sonata K. 380','Domenico Scarlatti',5]
  ]);
  add('duo','modern','advanced','spain','rhythm','dance','transcription',[
    ['Tango, Op. 165 No. 2','Isaac Albéniz',3]
  ]);
  add('duo','modern','advanced','france-uk','rhythm','dance','original',[
    ['Danse d’Avila','Ida Presti',6]
  ]);
  add('duo','modern','intermediate','latin-america','rhythm','bright','original',[
    ['Música incidental campesina','Leo Brouwer',10]
  ]);
  add('duo','contemporary','advanced','north-america','voicing','meditative','original',[
    ['Sanzen-in','Andrew York',7]
  ]);
  add('duo','contemporary','advanced','latin-america','rhythm','dance','transcription',[
    ['Lo que vendrá','Astor Piazzolla',5]
  ]);

  // Trio
  add('trio','classical','advanced','france-uk','counterpoint','bright','original',[
    ['Trio Concertant, Op. 29','Antoine de Lhoyer',18]
  ]);
  add('trio','baroque','advanced','italy','counterpoint','bright','transcription',[
    ['Concerto in D major, RV 93','Antonio Vivaldi',10]
  ]);
  add('trio','baroque','advanced','central-europe','counterpoint','dramatic','transcription',[
    ['Brandenburg Concerto No. 3','J. S. Bach',11],['Canon in D','Johann Pachelbel',5]
  ]);
  add('trio','classical','intermediate','central-europe','voicing','bright','transcription',[
    ['Divertimento, K. 136','W. A. Mozart',13]
  ]);
  add('trio','romantic','advanced','italy','scales','dramatic','transcription',[
    ['The Barber of Seville Overture','Gioachino Rossini',8]
  ]);
  add('trio','modern','advanced','france-uk','rhythm','dramatic','transcription',[
    ['Carmen Suite','Georges Bizet',14]
  ]);
  add('trio','modern','virtuoso','spain','rhythm','dance','transcription',[
    ['Ritual Fire Dance','Manuel de Falla',4]
  ]);
  add('trio','modern','advanced','spain','voicing','lyrical','transcription',[
    ['Estampas','Federico Moreno Torroba / Manuel Barrueco',13]
  ]);
  add('trio','contemporary','advanced','asia','percussion','dramatic','original',[
    ['China West Suite','Chen Yi',16]
  ]);

  add('trio','classical','advanced','france-uk','counterpoint','bright','original',[
    ['Trio No. 2 in C major, Op. 42','Antoine de Lhoyer',16]
  ]);
  add('trio','baroque','advanced','central-europe','counterpoint','bright','transcription',[
    ['Italian Concerto, BWV 971','J. S. Bach',13]
  ]);
  add('trio','modern','advanced','spain','voicing','lyrical','transcription',[
    ['Castillos de España — 발췌','Federico Moreno Torroba',12]
  ]);
  add('trio','contemporary','advanced','latin-america','rhythm','dramatic','transcription',[
    ['Revirado','Astor Piazzolla',4]
  ]);
  add('trio','modern','advanced','france-uk','voicing','meditative','transcription',[
    ['Ma mère l’Oye — 발췌','Maurice Ravel',13]
  ]);
  add('trio','contemporary','advanced','latin-america','voicing','dramatic','original',[
    ['The Enchanted Island','Sérgio Assad',10]
  ]);
  add('trio','modern','intermediate','global','voicing','bright','transcription',[
    ['Chaplin Medley','Charlie Chaplin / Manuel Barrueco',8]
  ]);

  // Quartet
  add('quartet','classical','advanced','france-uk','voicing','bright','original',[
    ['Air varié et dialogue','Antoine de Lhoyer',12]
  ]);
  add('quartet','baroque','advanced','central-europe','counterpoint','dramatic','transcription',[
    ['Brandenburg Concerto No. 3','J. S. Bach',11],['“Loose” Canon','J. Pachelbel / LAGQ',6,'fHwccmEqI9A']
  ]);
  add('quartet','modern','advanced','france-uk','harmonics','meditative','transcription',[
    ['Clair de lune','Claude Debussy',5]
  ]);
  add('quartet','modern','virtuoso','france-uk','rhythm','dramatic','transcription',[
    ['Carmen Suite','Georges Bizet / William Kanengiser',16],['The Nutcracker Suite','P. I. Tchaikovsky',20]
  ]);
  add('quartet','contemporary','advanced','latin-america','voicing','meditative','original',[
    ['Cuban Landscape with Rain','Leo Brouwer',8],['Acerca del cielo, el aire y la sonrisa','Leo Brouwer',10]
  ]);
  add('quartet','contemporary','virtuoso','latin-america','rhythm','dramatic','original',[
    ['Cuban Landscape with Rumba','Leo Brouwer',7],['Toccata','Leo Brouwer',6],
    ['A Furiosa','Paulo Bellinati',7],['Baião de Gude','Paulo Bellinati',5]
  ]);
  add('quartet','contemporary','advanced','global','percussion','dance','original',[
    ['Bantu','Andrew York',7],['Quiccan','Andrew York',6]
  ]);
  add('quartet','contemporary','advanced','global','voicing','meditative','original',[
    ['The Lotus Eaters','Andrew York',8],['Hidden Realm','Andrew York',9]
  ]);

  add('quartet','contemporary','advanced','north-america','rhythm','bright','original',[
    ['Pacific Coast Highway','Andrew York',8],['Passage','Andrew York',12],['Spin','Andrew York',7]
  ]);
  add('quartet','contemporary','intermediate','north-america','percussion','dance','original',[
    ['Monster Beat','Andrew York',8]
  ]);
  add('quartet','contemporary','advanced','north-america','rhythm','dramatic','original',[
    ['Intergalactic Express','Andrew York',11]
  ]);
  add('quartet','contemporary','advanced','central-europe','percussion','dramatic','original',[
    ['Changing the Guard','Nikita Koshkin',8]
  ]);
  add('quartet','contemporary','advanced','latin-america','voicing','meditative','transcription',[
    ['Canciones remotas','Leo Brouwer / Canadian Guitar Quartet',12]
  ]);
  add('quartet','modern','advanced','spain','rhythm','dance','transcription',[
    ['Danza del molinero','Manuel de Falla',4]
  ]);
  add('quartet','romantic','advanced','central-europe','voicing','bright','transcription',[
    ['Holberg Suite — 발췌','Edvard Grieg',15],['Pictures at an Exhibition — 발췌','Modest Mussorgsky',18]
  ]);

  window.repertoireCatalog = catalog;
})();
