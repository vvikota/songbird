const questions = [
  {category: `Dendy games`,
    data: [       
      {
        id: 1,
        name: 'Contra',
        species: '1988 год, Konami',
        description: 'Прибывшие на метеорите пришельцы грозятся уничтожить Землю через подконтрольную организацию «Красный сокол», и только бойцы элитного спецотряда могут остановить наглых инопланетян вместе с их приспешниками.',
        image: 'Contra.jpg',
        audio: 'Contra.mp3'
      },
      {
        id: 2,
        name: 'Chip n Dale Rescue Rangers',
        species: '1990 и 1993 годы, Capcom',
        description: 'Вот, снова Capcom. И снова — одна из самых лучших игр для «Денди», точнее даже две игры. «Чип и Дейл» удивительно четко попали в мультипликационный образ. Даже музыка была точь-в-точь как в сериале. А как классно переданы характеры всех героев, от второстепенных до главных. И для Вжика место нашлось!',
        image: 'Chip.png',
        audio: 'Chip.mp3'
      },
      {
        id: 3,
        name: 'Teenage Mutant Ninja Turtles 3',
        species: '1991 год, Konami',
        description: 'Третьи «Черепашки» не давали заскучать, потому что кардинально менялись каждые пять минут. Вот ты идешь по пляжу, потом серфишь по воде, а вот палуба корабля, разрушенный мост, городской парк, вокзал, лифт! Разнообразие так и прет, причем игра не переусложнена, но по сравнению с приставочными проектами тех времен длится очень долго.',
        image: 'TMN3.jpeg',
        audio: 'TMN3.mp3'
      },
      {
        id: 4,
        name: 'Battletoads and Double Dragon',
        species: '1993 год, Rare',
        description: 'Боевые жабы! Была ли лучше хоть одна игра на NES? Да, была, но только одна, о которой ниже. Кстати, Battletoads and Double Dragon разрабатывала та же студия, которая сейчас «допиливает» Sea of Thieves. Что ж, четверть века назад у ребят получалось намного лучше.',
        image: 'BT-DD.jpg',
        audio: 'BT-DD.mp3'
      },
      {
        id: 5,
        name: 'Super Mario Bros.',
        species: '1985, Nintendo',
        description: 'О «Супер Марио» слышали все, даже те, кто никогда не видел ни одной игровой консоли и понятия не имеет о жестоком противостоянии сантехника и черепаходракона. Популярность игры вышла далеко за пределы геймерского сообщества, а название проекта давно стало нарицательным.',
        image: 'super-mario.jpg',
        audio: 'super-mario.mp3'
      },
      {
        id: 6,
        name: 'Batle city (Танчики)',
        species: '1985 год, Namco',
        description: 'Какая еще Battle City? Эту игру все знали и знают как «Танчики». Да-да, они самые, настоящие, а не World of Tanks. Сверхпопулярный проект, один из пробивных тайтлов для только-только появившейся NES.',
        image: 'batle-city.jpeg',
        audio: 'batle-city.mp3'
      }
    ]
  },

  {category: `Фильмы 90-х`,
   data:  [
    {
      id: 1,
      name: 'Терминатор 2: Судный день',
      species: '1991',
      description: 'Продолжение 1-й части',
      image: 'Terminator2.jpg',
      audio: 'Terminator2.mp3'
    },
    {
      id: 2,
      name: 'Криминальное чтиво,',
      species: '1994',
      description: 'Независимо от того, сколько раз вы уже смотрели этот шедевр Тарантино и на каком моменте его включили, гремучая смесь из черной комедии, динамичного триллера и нео-нуара обязательно вас затянет и вы посмотрите его еще раз. Проверено!',
      image: 'pulp_fiction.jpg',
      audio: 'pulp_fiction.mp3'
    },
    {
      id: 3,
      name: 'Такси',
      species: '1998',
      description: 'Молодой таксист Даниэль помешан на быстрой езде. Как ураган, проносится он по извилистым улицам Марселя на своём мощном ревущем звере «Пежо», пугая пассажиров и прохожих.',
      image: 'taxi.jpg',
      audio: 'taxi.mp3'
    },
    {
      id: 4,
      name: 'Один дома',
      species: '1990',
      description: 'Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей.',
      image: 'home_alone.jpg',
      audio: 'home_alone.mp3'
    },
    {
      id: 5,
      name: 'Титаник',
      species: '1997',
      description: 'В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту.',
      image: 'titanik.jpg',
      audio: 'titanik.mp3'
    },
    {
      id: 6,
      name: 'Робокоп 2',
      species: '1990',
      description: 'Робот-полицейский продолжает патрулировать улицы Детройта.',
      image: 'robokop2.jpg',
      audio: 'robokop2.mp3'
    }
    ]
  },

  {category: `Фильмы 2000-е`,
   data: [
    {
      id: 1,
      name: 'Бумер',
      species: '2003',
      description: 'Никаких законов... Никаких правил... Никого не жалко... Никто не прав... И если мы пока еще не сталкивались с этим в жизни, это еще не значит, что этого не существует. Скорее это значит, что нам пока везло...',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Пираты Карибского моря',
      species: '2003',
      description: 'Мегапопулярный пиратский экшн с первоклассным составом участников, увлекательным сценарием, отличным юмором, красивыми костюмами, масштабными декорациями и неподражаемым Джонни Деппом в роли...',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 3,
      name: 'Бригада',
      species: '2002',
      description: '«Бригада» — российский криминальный телесериал 2002 года. Сериал состоит из 15 серий, охватывающих события с 1989 по 2000 год.',
      image: 'brigada.jpg',
      audio: 'brigada.mp3'
    },
    {
      id: 4,
      name: 'Большой куш',
      species: '2000',
      description: 'британо-американский комедийный фильм режиссёра Гая Ричи. Удостоен высоких оценок мировой кинопрессы и ряда наград. Фильм вышел в Великобритании 1 сентября 2000 года.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 5,
      name: '11 друзей Оушена',
      species: '2001',
      description: 'После выхода из тюрьмы вора Дэнни Оушена не проходит и 24 часов, а он уже планирует организовать самое сложное ограбление казино в истории. Он хочет украсть 160 млн американских долларов из трёх самых преуспевающих казино Лас-Вегаса',
      image: 'oceans11.jpg',
      audio: 'oceans11.mp3'
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    }
    ]
  },

  { category: `Певчие птицы`,
    data: [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
    }
    ]
  },  

  { category: `Хищные птицы`,
    data: [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    }
    ]
  },

  { category: `Морские птицы`,
    data: [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },    
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/7885/46523771945_9496c2a191.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
    ]
  }  
];

export default questions;