(() => {
  const catalog = window.repertoireCatalog || [];
  const index = new Map();
  const assign = (type, ensembleCategory, ensembleForm, source) => source.split('~').filter(Boolean).forEach(row => {
    const [title, composer] = row.split('|');
    index.set([type, title, composer].join('|'), {ensembleCategory, ensembleForm});
  });

  assign('trio', 'baroque-transcription', 'canon', 'Canon in D|Johann Pachelbel');
  assign('trio', 'baroque-transcription', 'prelude-fugue', 'Toccata and Fugue in D minor, BWV 565|J. S. Bach');
  assign('trio', 'original-classical', 'ensemble', 'Trio in F major, Op. 12|Filippo Gragnani');
  assign('trio', 'original-contemporary', 'suite', 'China West Suite|Chen Yi');
  assign('trio', 'iberian-transcription', 'suite', 'Estampas|Federico Moreno Torroba / Manuel Barrueco');
  assign('trio', 'iberian-transcription', 'dance', 'Ritual Fire Dance|Manuel de Falla~Sevilla, Op. 47 No. 3|Isaac Albéniz');
  assign('trio', 'keyboard-orchestral-transcription', 'suite', 'Carmen Suite|Georges Bizet');
  assign('trio', 'keyboard-orchestral-transcription', 'serenade', 'Eine kleine Nachtmusik, K. 525|W. A. Mozart');
  assign('trio', 'keyboard-orchestral-transcription', 'overture', 'William Tell Overture|Gioachino Rossini');
  assign('trio', 'keyboard-orchestral-transcription', 'dance', 'Hungarian Dance No. 5|Johannes Brahms~Slavonic Dance, Op. 46 No. 8|Antonín Dvořák~Boléro|Maurice Ravel');
  assign('trio', 'latin-tango', 'tango', 'Fuga y Misterio|Astor Piazzolla~Libertango|Astor Piazzolla');
  assign('trio', 'latin-brazilian', 'character-piece', 'Água e Vinho|Egberto Gismonti');
  assign('trio', 'latin-brazilian', 'dance', 'Tico-Tico no Fubá|Zequinha de Abreu');
  assign('trio', 'pop-jazz-arrangement', 'song', 'Bohemian Rhapsody|Queen');
  assign('trio', 'film-animation', 'soundtrack', 'Gabriel’s Oboe|Ennio Morricone');

  assign('quartet', 'original-classical', 'variations', 'Air varié et dialogue|Antoine de Lhoyer');
  assign('quartet', 'baroque-transcription', 'concerto', 'Brandenburg Concerto No. 3|J. S. Bach');
  assign('quartet', 'baroque-transcription', 'canon', '“Loose” Canon|J. Pachelbel / LAGQ');
  assign('quartet', 'baroque-transcription', 'prelude-fugue', 'Toccata and Fugue in D minor, BWV 565|J. S. Bach');
  assign('quartet', 'baroque-transcription', 'fugue', 'Little Fugue in G minor, BWV 578|J. S. Bach');
  assign('quartet', 'baroque-transcription', 'character-piece', 'Arrival of the Queen of Sheba|G. F. Handel');
  assign('quartet', 'keyboard-orchestral-transcription', 'character-piece', 'Clair de lune|Claude Debussy');
  assign('quartet', 'keyboard-orchestral-transcription', 'suite', 'Carmen Suite|Georges Bizet / William Kanengiser~The Nutcracker Suite|P. I. Tchaikovsky');
  assign('quartet', 'keyboard-orchestral-transcription', 'serenade', 'Eine kleine Nachtmusik, K. 525|W. A. Mozart');
  assign('quartet', 'keyboard-orchestral-transcription', 'overture', 'William Tell Overture|Gioachino Rossini');
  assign('quartet', 'keyboard-orchestral-transcription', 'dance', 'Hungarian Dance No. 5|Johannes Brahms~Pavane pour une infante défunte|Maurice Ravel');
  assign('quartet', 'keyboard-orchestral-transcription', 'waltz', 'Waltz No. 2|Dmitri Shostakovich');
  assign('quartet', 'iberian-transcription', 'dance', 'Danza del molinero|Manuel de Falla~Spanish Dance No. 1 from La vida breve|Manuel de Falla~Ritual Fire Dance|Manuel de Falla');
  assign('quartet', 'original-contemporary', 'character-piece', 'Cuban Landscape with Rain|Leo Brouwer~Acerca del cielo, el aire y la sonrisa|Leo Brouwer~Toccata|Leo Brouwer~Quiccan|Andrew York~The Lotus Eaters|Andrew York~Hidden Realm|Andrew York~Pacific Coast Highway|Andrew York~Passage|Andrew York~Spin|Andrew York~Hamsa|Roland Dyens~Pluck, Strum and Hammer|Bryan Johanson');
  assign('quartet', 'original-contemporary', 'dance', 'Cuban Landscape with Rumba|Leo Brouwer~Bantu|Andrew York');
  assign('quartet', 'latin-brazilian', 'dance', 'A Furiosa|Paulo Bellinati~Baião de Gude|Paulo Bellinati~Danças Nativas|Clarice Assad');
  assign('quartet', 'latin-brazilian', 'character-piece', 'Uarekena|Sérgio Assad');
  assign('quartet', 'latin-tango', 'tango', 'Primavera Porteña|Astor Piazzolla~Libertango|Astor Piazzolla');
  assign('quartet', 'pop-jazz-arrangement', 'variations', 'Labyrinth on a Theme of Led Zeppelin|Ian Krouse');
  assign('quartet', 'pop-jazz-arrangement', 'song', 'Bohemian Rhapsody|Queen');
  assign('quartet', 'film-animation', 'soundtrack', 'Merry-Go-Round of Life|Joe Hisaishi');

  catalog.forEach(work => {
    const match = index.get([work.type, work.title, work.composer].join('|'));
    if (match) Object.assign(work, match);
  });
})();
