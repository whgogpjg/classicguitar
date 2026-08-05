(() => {
  const catalog = window.repertoireCatalog || [];
  const packs = [
    { genre:'film', region:'global', technique:'voicing', mood:'lyrical', items:[
      ['Gabriel’s Oboe','Ennio Morricone',1986,4],['Cinema Paradiso','Ennio Morricone',1988,4],['Love Theme from Cinema Paradiso','Ennio Morricone',1988,4],['Deborah’s Theme','Ennio Morricone',1984,5],['Chi Mai','Ennio Morricone',1971,4],
      ['Once Upon a Time in the West','Ennio Morricone',1968,5],['The Ecstasy of Gold','Ennio Morricone',1966,4],['Theme from Schindler’s List','John Williams',1993,5],['Across the Stars','John Williams',2002,5],['Hedwig’s Theme','John Williams',2001,4],
      ['Jurassic Park Theme','John Williams',1993,4],['Princess Leia’s Theme','John Williams',1977,5],['Cavatina','Stanley Myers',1970,4],['Speak Softly, Love','Nino Rota',1972,3],['Love Theme from Romeo and Juliet','Nino Rota',1968,4],
      ['Merry Christmas Mr. Lawrence','Ryuichi Sakamoto',1983,5],['Bibo no Aozora','Ryuichi Sakamoto',1996,5],['The Last Emperor','Ryuichi Sakamoto',1987,5],['Comptine d’un autre été','Yann Tiersen',2001,3],['La Valse d’Amélie','Yann Tiersen',2001,3],
      ['Time','Hans Zimmer',2010,5],['Cornfield Chase','Hans Zimmer',2014,3],['Interstellar Main Theme','Hans Zimmer',2014,5],['Now We Are Free','Hans Zimmer & Lisa Gerrard',2000,5],['He’s a Pirate','Klaus Badelt',2003,3],
      ['A Way of Life','Hans Zimmer',2003,6],['For the Love of a Princess','James Horner',1995,4],['My Heart Will Go On','James Horner & Will Jennings',1997,5],['Concerning Hobbits','Howard Shore',2001,3],['May It Be','Enya',2001,4],
      ['Nuvole Bianche','Ludovico Einaudi',2004,5],['Experience','Ludovico Einaudi',2013,5],['Una Mattina','Ludovico Einaudi',2004,4],['The Shape of Water','Alexandre Desplat',2017,4],['The Imitation Game','Alexandre Desplat',2014,3],
      ['Feather Theme from Forrest Gump','Alan Silvestri',1994,3],['Somewhere in Time','John Barry',1980,4],['Love Story Theme','Francis Lai',1970,4],['The Pink Panther Theme','Henry Mancini',1963,3],['Mission: Impossible Theme','Lalo Schifrin',1966,3]
    ]},
    { genre:'screen', region:'global', technique:'arpeggio', mood:'lyrical', items:[
      ['Moon River','Henry Mancini & Johnny Mercer',1961,3],['Over the Rainbow','Harold Arlen',1939,4],['City of Stars','Justin Hurwitz',2016,3],['Mia & Sebastian’s Theme','Justin Hurwitz',2016,3],['Audition (The Fools Who Dream)','Justin Hurwitz',2016,4],
      ['Shallow','Lady Gaga, Mark Ronson, Anthony Rossomando & Andrew Wyatt',2018,4],['The Sound of Music','Richard Rodgers',1959,4],['Edelweiss','Richard Rodgers',1959,3],['My Favorite Things','Richard Rodgers',1959,3],['Memory','Andrew Lloyd Webber',1981,4],
      ['The Music of the Night','Andrew Lloyd Webber',1986,5],['All I Ask of You','Andrew Lloyd Webber',1986,4],['Don’t Cry for Me Argentina','Andrew Lloyd Webber',1976,5],['Somewhere','Leonard Bernstein',1957,4],['Maria','Leonard Bernstein',1957,3],
      ['Tonight','Leonard Bernstein',1957,4],['Send in the Clowns','Stephen Sondheim',1973,4],['On My Own','Claude-Michel Schönberg',1980,4],['I Dreamed a Dream','Claude-Michel Schönberg',1980,4],['Bring Him Home','Claude-Michel Schönberg',1980,4],
      ['Once Upon a December','Stephen Flaherty',1997,3],['Beauty and the Beast','Alan Menken',1991,4],['A Whole New World','Alan Menken',1992,4],['Part of Your World','Alan Menken',1989,4],['Can You Feel the Love Tonight','Elton John',1994,4],
      ['Remember Me','Kristen Anderson-Lopez & Robert Lopez',2017,3],['Dos Oruguitas','Lin-Manuel Miranda',2021,4],['We Don’t Talk About Bruno','Lin-Manuel Miranda',2021,4],['Let It Go','Kristen Anderson-Lopez & Robert Lopez',2013,4],['Into the Unknown','Kristen Anderson-Lopez & Robert Lopez',2019,4],
      ['Game of Thrones Main Title','Ramin Djawadi',2011,3],['Light of the Seven','Ramin Djawadi',2016,6],['The Rains of Castamere','Ramin Djawadi',2012,4],['Succession Main Title','Nicholas Britell',2018,3],['The Crown Main Title','Hans Zimmer',2016,3],
      ['Stranger Things Theme','Kyle Dixon & Michael Stein',2016,3],['Bella Ciao (Money Heist)','Traditional',2017,3],['The Mandalorian Theme','Ludwig Göransson',2019,4],['Wednesday: Paint It Black','The Rolling Stones / Danny Elfman arrangement',2022,4],['The Last of Us: Long Long Time','Gary White',2023,4]
    ]},
    { genre:'game', region:'global', technique:'voicing', mood:'dramatic', items:[
      ['Super Mario Bros. Main Theme','Koji Kondo',1985,3],['Super Mario Bros. Underground Theme','Koji Kondo',1985,2],['Dire, Dire Docks','Koji Kondo',1996,4],['Gusty Garden Galaxy','Mahito Yokota',2007,4],['Zelda’s Lullaby','Koji Kondo',1991,3],
      ['Lost Woods','Koji Kondo',1998,3],['Song of Storms','Koji Kondo',1998,3],['Gerudo Valley','Koji Kondo',1998,4],['Great Fairy Fountain','Koji Kondo',1998,3],['Kakariko Village','Koji Kondo',1998,4],
      ['Ballad of the Goddess','Hajime Wakai',2011,4],['Breath of the Wild Main Theme','Manaka Kataoka',2017,4],['Final Fantasy Prelude','Nobuo Uematsu',1987,4],['Final Fantasy Main Theme','Nobuo Uematsu',1987,4],['To Zanarkand','Nobuo Uematsu',2001,4],
      ['Aerith’s Theme','Nobuo Uematsu',1997,5],['Eyes on Me','Nobuo Uematsu',1999,5],['Suteki da ne','Nobuo Uematsu',2001,5],['Melodies of Life','Nobuo Uematsu',2000,5],['Corridors of Time','Yasunori Mitsuda',1995,4],
      ['Frog’s Theme','Yasunori Mitsuda',1995,3],['Dearly Beloved','Yoko Shimomura',2002,4],['Simple and Clean','Hikaru Utada',2002,5],['The Last of Us Main Theme','Gustavo Santaolalla',2013,4],['Nate’s Theme','Greg Edmonson',2007,3],
      ['Dragonborn','Jeremy Soule',2011,4],['Secunda','Jeremy Soule',2011,3],['Sweden','C418',2011,4],['Wet Hands','C418',2011,2],['Mice on Venus','C418',2011,4],
      ['Megalovania','Toby Fox',2015,3],['Fallen Down','Toby Fox',2015,3],['Undertale','Toby Fox',2015,4],['Dirtmouth','Christopher Larkin',2017,3],['Greenpath','Christopher Larkin',2017,4],
      ['Liyue','Yu-Peng Chen',2020,4],['Rex Incognito','Yu-Peng Chen',2020,4],['Weight of the World','Keiichi Okabe',2017,5],['Beneath the Mask','Shoji Meguro',2016,5],['Sogno di Volare','Christopher Tin',2016,4]
    ]},
    { genre:'anime', region:'asia', technique:'arpeggio', mood:'lyrical', items:[
      ['My Neighbor Totoro','Joe Hisaishi',1988,4],['Path of the Wind','Joe Hisaishi',1988,4],['A Town with an Ocean View','Joe Hisaishi',1989,4],['On a Clear Day','Joe Hisaishi',1989,3],['One Summer’s Day','Joe Hisaishi',2001,4],
      ['Always with Me','Yumi Kimura',2001,4],['Merry-Go-Round of Life','Joe Hisaishi',2004,5],['Princess Mononoke Theme','Joe Hisaishi',1997,4],['Ashitaka and San','Joe Hisaishi',1997,5],['Nausicaä Requiem','Joe Hisaishi',1984,3],
      ['Carrying You','Joe Hisaishi',1986,4],['Ponyo on the Cliff by the Sea','Joe Hisaishi',2008,3],['Bygone Days','Joe Hisaishi',1992,5],['Country Roads (Whisper of the Heart)','John Denver / Yuji Nomi',1995,4],['A Journey (The Wind Rises)','Joe Hisaishi',2013,4],
      ['Unravel','TK from Ling tosite sigure',2014,4],['Gurenge','LiSA',2019,4],['Homura','Yuki Kajiura',2020,5],['Kamado Tanjiro no Uta','Go Shiina',2019,5],['Blue Bird','Ikimono-gakari',2008,4],
      ['Silhouette','KANA-BOON',2014,4],['Sadness and Sorrow','Toshio Masuda',2002,4],['Again','YUI',2009,4],['A Cruel Angel’s Thesis','Hidetoshi Sato',1995,4],['Fly Me to the Moon (Evangelion)','Bart Howard',1995,4],
      ['Sparkle','RADWIMPS',2016,5],['Nandemonaiya','RADWIMPS',2016,5],['Zenzenzense','RADWIMPS',2016,4],['Suzume','RADWIMPS feat. Toaka',2022,4],['Hikaru Nara','Goose house',2014,4],
      ['Secret Base (Kimi ga Kureta Mono)','ZONE',2001,5],['We Are!','Hiroshi Kitadani',1999,4],['Binks’ Sake','Kohei Tanaka',2007,4],['Moonlight Densetsu','DALI',1992,3],['Tank!','Yoko Kanno',1998,4],
      ['The Real Folk Blues','Yoko Kanno',1998,5],['Lilium','Kayo Konishi & Yukio Kondo',2004,4],['Sincerely','TRUE',2018,4],['Idol','YOASOBI',2023,4],['Kick Back','Kenshi Yonezu',2022,4]
    ]},
    { genre:'pop', region:'global', technique:'arpeggio', mood:'lyrical', items:[
      ['Yesterday','The Beatles',1965,3],['Blackbird','The Beatles',1968,3],['Here Comes the Sun','The Beatles',1969,3],['Let It Be','The Beatles',1970,4],['In My Life','The Beatles',1965,3],
      ['Michelle','The Beatles',1965,3],['Something','George Harrison',1969,3],['While My Guitar Gently Weeps','George Harrison',1968,4],['Bohemian Rhapsody','Queen',1975,6],['Love of My Life','Queen',1975,4],
      ['Somebody to Love','Queen',1976,5],['Who Wants to Live Forever','Brian May',1986,5],['Shape of My Heart','Sting & Dominic Miller',1993,5],['Fragile','Sting',1987,4],['Every Breath You Take','Sting',1983,4],
      ['Fields of Gold','Sting',1993,4],['Tears in Heaven','Eric Clapton & Will Jennings',1992,5],['Wonderful Tonight','Eric Clapton',1977,4],['Stairway to Heaven','Jimmy Page & Robert Plant',1971,7],['Babe I’m Gonna Leave You','Anne Bredon',1969,6],
      ['Nothing Else Matters','James Hetfield & Lars Ulrich',1991,6],['Wish You Were Here','David Gilmour & Roger Waters',1975,5],['Hotel California','Don Felder, Don Henley & Glenn Frey',1976,6],['Desperado','Don Henley & Glenn Frey',1973,4],['The Sound of Silence','Paul Simon',1964,4],
      ['Bridge over Troubled Water','Paul Simon',1970,5],['Hallelujah','Leonard Cohen',1984,5],['Piano Man','Billy Joel',1973,5],['Your Song','Elton John & Bernie Taupin',1970,4],['How Deep Is Your Love','Bee Gees',1977,4],
      ['Can’t Help Falling in Love','Hugo Peretti, Luigi Creatore & George Weiss',1961,3],['Careless Whisper','George Michael & Andrew Ridgeley',1984,5],['Take On Me','A-ha',1985,4],['Time After Time','Cyndi Lauper & Rob Hyman',1983,4],['Sweet Child o’ Mine','Guns N’ Roses',1987,5],
      ['Creep','Radiohead',1992,4],['No Surprises','Radiohead',1997,4],['Wonderwall','Oasis',1995,4],['Don’t Look Back in Anger','Noel Gallagher',1995,5],['Scarborough Fair / Canticle','Traditional / Paul Simon',1966,4]
    ]},
    { genre:'recent-pop', region:'global', technique:'voicing', mood:'lyrical', items:[
      ['Yellow','Coldplay',2000,4],['The Scientist','Coldplay',2002,5],['Viva la Vida','Coldplay',2008,4],['Fix You','Coldplay',2005,5],['Paradise','Coldplay',2011,4],
      ['Perfect','Ed Sheeran',2017,4],['Photograph','Ed Sheeran',2014,4],['Thinking Out Loud','Ed Sheeran',2014,5],['Someone Like You','Adele',2011,5],['Easy on Me','Adele',2021,4],
      ['Just the Way You Are','Bruno Mars',2010,4],['When I Was Your Man','Bruno Mars',2012,4],['All of Me','John Legend',2013,5],['I’m Yours','Jason Mraz',2008,4],['Love Story','Taylor Swift',2008,4],
      ['Cardigan','Taylor Swift',2020,4],['Anti-Hero','Taylor Swift',2022,4],['Lovely','Billie Eilish & Khalid',2018,4],['What Was I Made For?','Billie Eilish',2023,4],['Birds of a Feather','Billie Eilish',2024,4],
      ['From the Start','Laufey',2023,3],['Valentine','Laufey',2022,3],['Until I Found You','Stephen Sanchez',2021,3],['Golden Hour','JVKE',2022,4],['Beautiful Things','Benson Boone',2024,4],
      ['Lose Control','Teddy Swims',2023,4],['Die with a Smile','Lady Gaga & Bruno Mars',2024,4],['APT.','ROSÉ & Bruno Mars',2024,3],['A Bar Song (Tipsy)','Shaboozey',2024,3],['Espresso','Sabrina Carpenter',2024,3],
      ['Man I Need','Olivia Dean',2025,4],['Luther','Kendrick Lamar & SZA',2024,3],['Ordinary','Alex Warren',2025,3],['Messy','Lola Young',2024,4],['That’s So True','Gracie Abrams',2024,3],
      ['Sailor Song','Gigi Perez',2024,4],['Azizam','Ed Sheeran',2025,3],['Anxiety','Doechii',2025,4],['Bad Thing (Bunny Hop)','Ariana Grande',2026,3],['Hate That I Made You Love Me','Ariana Grande',2026,4]
    ]},
    { genre:'kpop', region:'asia', technique:'rhythm', mood:'bright', items:[
      ['Spring Day','BTS',2017,5],['Dynamite','BTS',2020,4],['Butter','BTS',2021,3],['Fake Love','BTS',2018,4],['Boy with Luv','BTS feat. Halsey',2019,4],
      ['Life Goes On','BTS',2020,4],['Black Swan','BTS',2020,4],['DNA','BTS',2017,4],['Seven','Jung Kook feat. Latto',2023,3],['Standing Next to You','Jung Kook',2023,4],
      ['Stay','BLACKPINK',2016,4],['Lovesick Girls','BLACKPINK',2020,4],['How You Like That','BLACKPINK',2020,3],['On the Ground','ROSÉ',2021,3],['Gone','ROSÉ',2021,4],
      ['Through the Night','IU',2017,5],['Love Poem','IU',2019,5],['Blueming','IU',2019,4],['Eight','IU feat. SUGA',2020,4],['Love Wins All','IU',2024,5],
      ['Ditto','NewJeans',2022,4],['Hype Boy','NewJeans',2022,3],['Super Shy','NewJeans',2023,3],['OMG','NewJeans',2023,4],['Next Level','aespa',2021,4],
      ['Drama','aespa',2023,4],['Supernova','aespa',2024,3],['LOVE DIVE','IVE',2022,3],['I AM','IVE',2023,4],['Perfect Night','LE SSERAFIM',2023,3],
      ['ANTIFRAGILE','LE SSERAFIM',2022,3],['What Is Love?','TWICE',2018,4],['Feel Special','TWICE',2019,4],['How Can I Love the Heartbreak','AKMU',2019,5],['Fine','TAEYEON',2017,4],
      ['You Were Beautiful','DAY6',2017,5],['Drowning','WOODZ',2023,4],['Golden','HUNTR/X',2025,4],['Soda Pop','Saja Boys',2025,3],['Your Idol','Saja Boys',2025,3]
    ]},
    { genre:'jazz-world', region:'global', technique:'rhythm', mood:'dance', items:[
      ['Autumn Leaves','Joseph Kosma',1945,5],['Fly Me to the Moon','Bart Howard',1954,4],['Misty','Erroll Garner',1954,5],['Blue Moon','Richard Rodgers',1934,4],['My Funny Valentine','Richard Rodgers',1937,5],
      ['All the Things You Are','Jerome Kern',1939,5],['Summertime','George Gershwin',1935,5],['Take Five','Paul Desmond',1959,5],['Round Midnight','Thelonious Monk',1944,5],['The Girl from Ipanema','Antônio Carlos Jobim',1962,5],
      ['Wave','Antônio Carlos Jobim',1967,5],['Corcovado','Antônio Carlos Jobim',1960,4],['Desafinado','Antônio Carlos Jobim',1959,5],['Chega de Saudade','Antônio Carlos Jobim',1958,4],['Manhã de Carnaval','Luiz Bonfá',1959,5],
      ['A Felicidade','Antônio Carlos Jobim',1959,4],['One Note Samba','Antônio Carlos Jobim',1959,4],['Bésame Mucho','Consuelo Velázquez',1940,4],['Historia de un Amor','Carlos Eleta Almarán',1955,4],['¿Quizás, Quizás, Quizás?','Osvaldo Farrés',1947,4],
      ['La Cumparsita','Gerardo Matos Rodríguez',1916,4],['Por una Cabeza','Carlos Gardel',1935,4],['El Choclo','Ángel Villoldo',1903,4],['Libertango','Astor Piazzolla',1974,4],['Greensleeves','Traditional English',1580,4],
      ['Amazing Grace','Traditional / John Newton',1779,4],['Danny Boy','Traditional Irish',1913,4],['The Water Is Wide','Traditional Scottish',1600,4],['Shenandoah','Traditional American',1800,4],['Auld Lang Syne','Traditional Scottish',1788,3],
      ['Arirang','Traditional Korean',1920,4],['El Cóndor Pasa','Daniel Alomía Robles',1913,4],['Hava Nagila','Traditional Hebrew',1918,4],['Guantanamera','Joseíto Fernández',1929,4],['Cielito Lindo','Quirino Mendoza y Cortés',1882,4],
      ['La Llorona','Traditional Mexican',1900,5],['Kalinka','Ivan Larionov',1860,3],['Sway (¿Quién Será?)','Pablo Beltrán Ruiz',1953,4],['What a Wonderful World','Bob Thiele & George David Weiss',1967,4],['Moonlight Serenade','Glenn Miller',1939,4]
    ]}
  ];

  catalog.forEach(work => {
    work.genre ||= 'classical';
    work.year ??= null;
    work.status ||= 'core';
  });

  packs.forEach(pack => pack.items.forEach(([title, composer, year, duration], index) => {
    const recent = year >= 2024;
    const moodCycle = [pack.mood, 'lyrical', 'meditative', 'dramatic', 'bright', 'dance'];
    const techniqueCycle = [pack.technique, 'arpeggio', 'voicing', 'rhythm', 'harmonics'];
    catalog.push({
      type: 'solo', era: 'contemporary',
      difficulty: index % 9 === 8 ? 'advanced' : index % 5 === 0 ? 'beginner' : 'intermediate',
      region: pack.region, technique: techniqueCycle[index % techniqueCycle.length], mood: moodCycle[index % moodCycle.length],
      source: 'transcription', genre: pack.genre, year, duration, title, composer,
      status: recent ? 'recent' : 'popular', video: '',
      query: `${composer} ${title} classical guitar arrangement`
    });
  }));

  catalog.forEach((work, index) => { work.id = `work-${String(index + 1).padStart(3, '0')}`; });
  if (catalog.length !== 520) console.warn(`Expected 520 works, found ${catalog.length}`);
  window.repertoireCatalog = catalog;
})();
