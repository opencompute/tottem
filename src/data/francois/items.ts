import { Item } from '../../types'

const items: Item[] = [
    // influencers
    {
        collectionId: '11',
        type: 'people',
        author: 'Logician & Mathematician',
        imageUrl: '/images/people/godel.jpg',
        title: 'Kurt Gödel',
        productUrl: 'https://en.wikipedia.org/wiki/Kurt_G%C3%B6del',
    },
    {
        collectionId: '11',
        type: 'people',
        author: 'Entrepreneur',
        imageUrl: '/images/people/colin.jpg',
        title: 'Nicolas Colin',
        productUrl: 'https://medium.com/@Nicolas_Colin',
    },
    {
        collectionId: '11',
        type: 'people',
        author: 'Entrepreneur',
        imageUrl: '/images/people/verdier.jpg',
        title: 'Henri Verdier',
        productUrl: 'http://www.henriverdier.com/',
    },
    {
        collectionId: '11',
        type: 'people',
        author: 'Data journalist',
        imageUrl: '/images/people/bryl.jpg',
        title: 'Nicolas Kayser-Bril',
        productUrl: 'https://blog.nkb.fr/',
    },
    {
        collectionId: '11',
        type: 'people',
        author: 'Philosopher',
        imageUrl: '/images/people/serres.jpg',
        title: 'Michel Serres',
        productUrl: 'https://en.wikipedia.org/wiki/Michel_Serres',
    },
    // non-influencers
    {
        collectionId: '12',
        type: 'people',
        author: 'Entrepreneur',
        imageUrl: '/images/people/alexandre.jpg',
        title: 'Laurent Alexandre',
        productUrl: 'https://en.wikipedia.org/wiki/Laurent_Alexandre',
    },
    // science
    {
        collectionId: '13',
        type: 'paper',
        author: 'Nature Machine Intelligence',
        imageUrl: '/images/articles/nature.jpg',
        title: 'Learnability can be undecidable',
        productUrl: 'https://www.nature.com/articles/s42256-018-0002-3',
    },
    {
        collectionId: '13',
        type: 'paper',
        author: 'Skymind',
        imageUrl: '/images/articles/skymind.jpg',
        title: 'Word2Vec',
        productUrl: 'https://skymind.ai/wiki/word2vec',
    },
    // directors
    {
        collectionId: '21',
        type: 'people',
        author: '',
        imageUrl: '/images/people/allen.jpg',
        title: 'Woody Allen',
        productUrl: 'https://www.imdb.com/name/nm0000095/',
    },
    {
        collectionId: '21',
        type: 'people',
        author: '',
        imageUrl: '/images/people/rohmer.jpg',
        title: 'Eric Rohmer',
        productUrl: 'https://www.imdb.com/name/nm0006445',
    },
    {
        collectionId: '21',
        type: 'people',
        author: '',
        imageUrl: '/images/people/kubrick.jpg',
        title: 'Stanley Kubrick',
        productUrl: 'https://www.imdb.com/name/nm0000040',
    },
    {
        collectionId: '21',
        type: 'people',
        author: '',
        imageUrl: '/images/people/audiard.jpg',
        title: 'Jacques Audiard',
        productUrl: 'https://www.imdb.com/name/nm0002191/',
    },
    {
        collectionId: '21',
        type: 'people',
        author: '',
        imageUrl: '/images/people/klapisch.jpg',
        title: 'Cedric Klapish',
        productUrl: 'https://www.imdb.com/name/nm0458251/',
    },
    // movies
    {
        collectionId: '22',
        type: 'movie',
        author: 'Pablo Berger',
        imageUrl: '/images/movies/blancanieves.jpg',
        productUrl: 'https://www.imdb.com/title/tt1854513/',
        title: 'Blancanieves',
    },
    {
        collectionId: '22',
        type: 'movie',
        author: 'Anne Fontaine',
        imageUrl: '/images/movies/innocentes.jpg',
        productUrl: 'https://www.imdb.com/title/tt4370784/',
        title: 'Les innocentes',
    },
    {
        collectionId: '22',
        type: 'movie',
        author: 'Blancanieves',
        imageUrl: '/images/movies/winter.jpg',
        productUrl: 'https://www.imdb.com/title/tt1399683/',
        title: "Winter's Bones",
    },
    {
        collectionId: '22',
        type: 'movie',
        author: 'Quentin Tarantino',
        imageUrl: '/images/movies/pulpfiction.jpg',
        productUrl: 'https://www.imdb.com/title/tt0110912',
        title: 'Pulp Fiction',
    },
    // TV series
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/americains.jpg',
        productUrl: 'https://www.imdb.com/title/tt2149175',
        title: 'The Americans',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/breakingbad.jpg',
        productUrl: 'https://www.imdb.com/title/tt0903747',
        title: 'Breaking bad',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/bureaulegendes.jpg',
        productUrl: 'https://www.imdb.com/title/tt4063800',
        title: 'Le bureau des légendes',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/guyane.jpg',
        productUrl: 'https://www.imdb.com/title/tt5904172',
        title: 'Guyane',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/got.jpg',
        productUrl: 'https://www.imdb.com/title/tt0944947',
        title: 'Game of thrones',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/goodwife.jpg',
        productUrl: 'https://www.imdb.com/title/tt1442462',
        title: 'The good wife',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/housecards.jpg',
        productUrl: 'https://www.imdb.com/title/tt1856010',
        title: 'House of cards',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/baronnoir.jpg',
        productUrl: 'https://www.imdb.com/title/tt4835480',
        title: 'Le baron noir',
    },
    {
        collectionId: '23',
        type: 'movie',
        author: '',
        imageUrl: '/images/movies/hippocrate.jpg',
        productUrl: 'https://www.imdb.com/title/tt9350920',
        title: 'Hippocrate',
    },
    // Books
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/murakami.jpg',
        title: 'Haruki Murakami',
        productUrl: 'https://en.wikipedia.org/wiki/Haruki_Murakami',
    },
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/yan.jpg',
        title: 'Mo Yan',
        productUrl: 'https://en.wikipedia.org/wiki/Mo_Yan',
    },
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/auster.jpg',
        title: 'Paul Auster',
        productUrl: 'https://en.wikipedia.org/wiki/Paul_Auster',
    },
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/roth.jpg',
        title: 'Philip Roth',
        productUrl: 'https://en.wikipedia.org/wiki/Philip_Roth',
    },
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/ernaux.jpg',
        title: 'Annie Ernaux',
        productUrl: 'https://en.wikipedia.org/wiki/Annie_Ernaux',
    },
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/aragon.jpg',
        title: 'Louis Aragon',
        productUrl: 'https://en.wikipedia.org/wiki/Louis_Aragon',
    },
    {
        collectionId: '31',
        type: 'people',
        author: '',
        imageUrl: '/images/people/houellebecq.jpg',
        title: 'Michel Houellebecq',
        productUrl: 'https://en.wikipedia.org/wiki/Michel_Houellebecq',
    },
    {
        collectionId: '32',
        type: 'people',
        author: '',
        imageUrl: '/images/people/levy.jpg',
        title: 'Marc Levy',
        productUrl: 'https://en.wikipedia.org/wiki/Marc_Levy',
    },
    {
        collectionId: '32',
        type: 'people',
        author: '',
        imageUrl: '/images/people/musso.jpg',
        title: 'Guillaume Musso',
        productUrl: 'https://en.wikipedia.org/wiki/Guillaume_Musso',
    },
    {
        collectionId: '32',
        type: 'people',
        author: '',
        imageUrl: '/images/people/bussi.jpg',
        title: 'Michel Bussi',
        productUrl: 'https://en.wikipedia.org/wiki/Michel_Bussi',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Barbara Demick',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51lGYttHnOL._SX322_BO1,204,203,200_.jpg',
        title: 'Nothing to envy',
        productUrl:
            'https://www.amazon.com/Nothing-Envy-Ordinary-Lives-North/dp/0385523912',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Tara Westover',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41dIDDpGepL._SX342_.jpg',
        title: 'Educated: A Memoir',
        productUrl: 'https://www.amazon.com/Educated-A-Memoir/dp/B075F68BFV',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Michel Serres',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/511eVp6FvEL._SX334_BO1,204,203,200_.jpg',
        title: "C'était mieux avant",
        productUrl:
            'https://www.amazon.fr/C%C3%A9tait-mieux-avant-Serres-Michel/dp/2746512882',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Jacques Attali',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41XIMdM%2BvpL._SX347_BO1,204,203,200_.jpg',
        title: "Homo Deus, Une brève histoire de l'avenir",
        productUrl:
            'https://www.amazon.fr/Homo-Deus-brève-histoire-lavenir/dp/2226393870',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Nicolas Kayser-Bryl',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51gfpmUwgTL._SX298_BO1,204,203,200_.jpg',
        title: 'Bouffes Bluffantes',
        productUrl:
            'https://www.amazon.fr/Bouffes-Bluffantes-Kayser-Bril-Nicolas/dp/2955966053',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Patrick Boucheron',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41C3F1N3H8L._SX367_BO1,204,203,200_.jpg',
        title: 'Histoire Mondiale de la France',
        productUrl:
            'https://www.amazon.fr/Histoire-mondiale-France-Patrick-Boucheron/dp/275787442X',
    },
    {
        collectionId: '33',
        type: 'book',
        author: "Cathy O'Neil",
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51eUw-v0X%2BL._SX329_BO1,204,203,200_.jpg',
        title: 'Weapons of math destruction',
        productUrl:
            'https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Casey Cep',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51zs%2BFHRxzL.jpg',
        title: 'Furious hours',
        productUrl:
            'https://www.amazon.com/Furious-Hours-Murder-Fraud-Harper-ebook/dp/B07H724GFW',
    },
    {
        collectionId: '33',
        type: 'book',
        author: 'Jerôme Fourquet',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/410Cw0MoOBL._SX317_BO1,204,203,200_.jpg',
        title: "L'archipel français",
        productUrl:
            'https://www.amazon.fr/Larchipel-fran%C3%A7ais-Jerome-Fourquet/dp/2021406024',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Paul Auster',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61QskWbk0TL._SX322_BO1,204,203,200_.jpg',
        title: '4321',
        productUrl: 'https://www.amazon.com/4321-Paul-Auster/dp/9023454871',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Alice Zeniter',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41GVp9ypp5L._SX327_BO1,204,203,200_.jpg',
        title: "L'art de perdre",
        productUrl:
            'https://www.amazon.fr/Art-perdre-Prix-Goncourt-Lyc%C3%A9ens/dp/2081395533',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Haruki Murakami',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41qmUR-cXbL._SX303_BO1,204,203,200_.jpg',
        title: 'Kafka sur le rivage',
        productUrl:
            'https://www.amazon.fr/Kafka-sur-rivage-Haruki-Murakami/dp/2264056169',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Negar Djavadi',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31-u4GP7jIL._SX331_BO1,204,203,200_.jpg',
        title: 'Désorientale',
        productUrl:
            'https://www.amazon.fr/Désorientale-Négar-Djavadi/dp/2867468345',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Tom Rachman',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61p437Cqo6L.jpg',
        title: 'The Italian teacher',
        productUrl:
            'https://www.amazon.com/Italian-Teacher-Tom-Rachman-ebook/dp/B073TJD2VH',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Nicolas Mathieu',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Wpl27pILL._SX300_BO1,204,203,200_.jpg',
        title: 'Leurs enfants après eux',
        productUrl:
            'https://www.amazon.fr/Leurs-enfants-apr%C3%A8s-Nicolas-Mathieu/dp/2330108710',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Oyinkan Braithwaite',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51vuypfCpsL._SX342_.jpg',
        title: 'My sister, the Serial Killer',
        productUrl:
            'https://www.amazon.com/My-Sister-Serial-Killer-Novel/dp/B07GDQ4Y6J',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Tom Rachman',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51BzS%2Bvz13L._SX324_BO1,204,203,200_.jpg',
        title: 'The imperferctionists',
        productUrl:
            'https://www.amazon.fr/Imperfectionists-Tom-Rachman/dp/1849160317',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Mo Yan',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41y5WVa-2NL._SX259_BO1,204,203,200_.jpg',
        title: 'Le clan du sorgho',
        productUrl: 'https://www.amazon.fr/clan-du-sorgho-Yan-Mo/dp/2868695477',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Miguel de Cervantès',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51nBHIQv6zL._SX332_BO1,204,203,200_.jpg',
        title: 'Don Quichotte',
        productUrl:
            'https://www.amazon.com/Quixote-Penguin-Classics-Cervantes-Saavedra/dp/0142437239',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Annie Ernaux',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41Qh-Z3kO0L._SX302_BO1,204,203,200_.jpg',
        title: 'La place',
        productUrl: 'https://www.amazon.fr/Place-Annie-Ernaux/dp/2070377229',
    },
    {
        collectionId: '34',
        type: 'book',
        author: 'Homère',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/410Cw0MoOBL._SX317_BO1,204,203,200_.jpg',
        title: 'The Iliad',
        productUrl:
            'https://www.amazon.com/Iliad-Wordsworth-Classics-Homer-dp-1853262420/dp/1853262420',
    },
    // Music
    {
        collectionId: '41',
        type: 'people',
        author: '',
        imageUrl: '/images/people/offenbach.jpg',
        productUrl: 'https://open.spotify.com/artist/4OihBPCQzR4GfbzqOY69Xm',
        title: 'Jacques Offenbach',
    },
    {
        collectionId: '41',
        type: 'people',
        author: '',
        imageUrl: '/images/people/brassens.jpg',
        productUrl: 'https://open.spotify.com/artist/5UWyW1PcEM8coxeqg3RIHr',
        title: 'Georges Brassens',
    },
    {
        collectionId: '41',
        type: 'people',
        author: '',
        imageUrl: '/images/people/brel.jpg',
        productUrl: 'https://open.spotify.com/artist/4RN2vlFWepLa46qQIU2PHs',
        title: 'Jacques Brel',
    },
    {
        collectionId: '41',
        type: 'people',
        author: '',
        imageUrl: '/images/people/aznavour.jpg',
        productUrl: 'https://open.spotify.com/artist/2hgP9Ap2tc10R5jrQaEpMT',
        title: 'Charles Aznavour',
    },
    {
        collectionId: '41',
        type: 'people',
        author: '',
        imageUrl: '/images/people/dessay.jpg',
        productUrl: 'https://open.spotify.com/artist/4jCfIA4UDHUWpc45H7A4ud',
        title: 'Nathalie Dessay',
    },
    {
        collectionId: '42',
        type: 'album',
        author: 'The Beatles',
        imageUrl: '/images/albums/beatles.jpg',
        productUrl: 'https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL',
        title: 'The Beatles',
    },
]

export default items
