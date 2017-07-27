console.log('you are in clay.js');

var FuzzyDuck = function(origTranslate) {
    var yiddishText = {
    "and":"agus",
    "with": "le",
    "the": "a '",
    "too": "cuideachd",
    "to": "gu",
    "out": "a-mach",
    "all": "a h-uile",
    "of": "de",
    "by": "le bhith a '",
    "I": "Tha mi a '",
    "also": "cuideachd",
    "not": "chan eil",
    "on": "air a '",
    "can": "urrainn",
    "up": "suas",
    "be": "a bhith",
    "a": "a",
    "that": "a",
    "you": "thu",
    "your": "agaibh",
    "you're": "thu",
    "us": "dhuinn",
    "this": "seo",
    "is": "tha",
    "one": "aon",
    "two": "dhà",
    "three": "trì",
    "four": "ceithir",
    "five": "còig",
    "six": "sia",
    "seven": "seachd",
    "eight": "ochd",
    "nine": "naoi",
    "ten": "deich",
    "eleven": "aon-deug",
    "twelve": "dhà-dheug",
    "merry": "merry",
    "christmas": "Nollaig",
    "happy": "sona",
    "new": "ùr",
    "year": "bliadhna",
    "lots": "lotaichean",
    "love": "gràdh",
    "joy": "aoibhneas",
    "happiness": "sonas",
    "have": "tha",
    "yourself": "fhèin",
    "holiday": "saor-làithean",
    "season": "ràith",
    "trimmings": "trimmings",
    "wishing": "a tha ag iarraidh",
    "magical": "draoidheach",
    "decorate": "sgeadachadh",
    "god": "dia",
    "bless": "beannaich",
    "lord": "thighearna",
    "everyone": "h-uile duine",
    "hope": "dòchas",
    "wonder": "Saoil",
    "peace": "sìth",
    "holidays": "saor-làithean",
    "unwrap": "unwrap",
    "wrap": "paisg",
    "joyful": "aoibhneach",
    "holly": "cuileann",
    "jolly": "Jolly",
    "best": "as fheàrr",
    "present": "-diugh",
    "spend": "a 'cur seachad",
    "time": "ùine",
    "little": "beag",
    "let": "leig",
    "heart": "chridhe",
    "light": "solas",
    "gay": "gay",
    "most": "chuid as motha",
    "wonderful": "mìorbhaileach",
    "May": "A' Chèitean",
    "thinking": "a 'smaoineachadh",
    "warmly": "blàth",
    "extra": "a bharrachd",
    "measure": "thomhas",
    "good": "math",
    "cheer": "iollach",
    "whatever": "ge bith dè",
    "beautiful": "bòidheach",
    "meaningful": "brìoghmhor",
    "sum": "sum",
    "earth": "talamh",
    "goodwill": "deagh-ghean",
    "men": "fir",
    "women": "boireannaich",
    "children": "clann",
    "batteries": "bataraidhean",
    "included": "gabhail a-steach",
    "fruitcake": "fruitcake",
    "stress": "cuideim",
    "free": "Saor an-asgaidh",
    "tell": "innse",
    "lot": "crannchur",
    "about": "mu dheidhinn",
    "person": "neach",
    "way": "slighe",
    "they": "iad a '",
    "handle": "làimhseachadh",
    "things": "rudan",
    "rainy": "fliuch",
    "day": "latha",
    "lost": "chaill",
    "luggage": "treallaich-turais",
    "tangled": "steigte",
    "lights": "lights",
    "crazy": "crazy",
    "baby": "naoidhean",
    "cold": "fuar",
    "outside": "taobh a-muigh",
    "fa": "Fa",
    "la": "la",
    "ho": "ho",
    "enjoy": "a 'gabhail tlachd",
    "cherish": "altrum",
    "together": "còmhla",
    "cookies": "cookies",
    "dreidel": "dreidel",
    "menorah": "menorah",
    "spin": "Cuairtean",
    "latke": "latke",
    "festival": "fèis",
    "hugs": "Hugs",
    "kisses": "phògan",
    "friends": "caraidean",
    "friend": "caraid",
    "hoping": "dòchas",
    "see": "fhaicinn",
    "soon": "a dh'aithghearr",
    "warm": "blàth",
    "regards": "thaobh",
    "greetings": "soraidh",
    "another": "eile",
    "great": "sgoinneil",
    "hanukah": "hanukah",
    "chanukah": "chanukah",
    "candles": "coinnlean",
    "nights": "oidhcheannan",
    "heath": "heath",
    "family": "teaghlach",
    "shine": "Shine",
    "down": "sìos",
    "upon": "air",
    "miracle": "Miracle",
    "guides": "iùil",
    "through": "tro",
    "tough": "cruaidh",
    "times": "amannan",
    "celebration": "comharrachadh",
    "special": "sònraichte",
    "here": "an seo",
    "made": "a dhèanamh",
    "clay": "crèadha"
  };
    origTranslate.translateToYiddish = function(input) {
        return yiddishText[input];
    };
    return origTranslate;
}(FuzzyDuck);