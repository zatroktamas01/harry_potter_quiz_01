// A Question interfész meghatározza a kérdések szerkezetét (angol és magyar kérdések és válaszok).
export interface Question {
  questionEn: string; // Az angol kérdés szövege
  questionHu: string; // A magyar kérdés szövege
  optionsEn: string[]; // Az angol válaszlehetőségek listája
  optionsHu: string[]; // A magyar válaszlehetőségek listája
  correctAnswerEn: string; // Az angol helyes válasz
  correctAnswerHu: string; // A magyar helyes válasz
}
  // Kérdések angol és magyar verzióval, minden egyes kérdés az interfész szerint definiálva
  export const questions: Question[] = [
    {
      questionEn: "Which house does the Sorting Hat place Harry Potter in?",
      questionHu: "Melyik házba sorolja be a Teszlek Süveg Harry Pottert?",
      optionsEn: ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"],
      optionsHu: ["Mardekár", "Hugrabug", "Hollóhát", "Griffendél"],
      correctAnswerEn: "Gryffindor", // Az angol helyes válasz
      correctAnswerHu: "Griffendél", // Az magyar helyes válasz
    },
    {
      questionEn: "What is Harry Potter's Patronus?",
      questionHu: "Mi Harry Potter patrónusa?",
      optionsEn: ["Rabbit", "Wolf", "Stag", "Cat"],
      optionsHu: ["Nyúl", "Farkas", "Szarvas", "Macska"],
      correctAnswerEn: "Stag",
      correctAnswerHu: "Szarvas",
    },
    {
      questionEn: "Which spell opens locked doors?",
      questionHu: "Melyik varázsige nyitja ki a titkos ajtókat?",
      optionsEn: ["Alohomora", "Expelliarmus", "Wingardium Leviosa", "Crucio"],
      optionsHu: ["Alohomora", "Expelliarmus", "Wingardium Leviosa", "Crucio"],
      correctAnswerEn: "Alohomora",
      correctAnswerHu: "Alohomora",
    },
    {
      questionEn: "What is Hagrid's favorite magical creature?",
      questionHu: "Melyik varázslény Hagrid kedvence?",
      optionsEn: ["Aragog", "Buckbeak", "Norbert", "Fang"],
      optionsHu: ["Aragog", "Csikócsőr", "Norbert", "Hablaty"],
      correctAnswerEn: "Buckbeak",
      correctAnswerHu: "Csikócsőr",
    },
    {
      questionEn: "What is Voldemort's real name?",
      questionHu: "Mi Voldemort igazi neve?",
      optionsEn: ["Tom Riddle", "Albus Dumbledore", "Sirius Black", "Remus Lupin"],
      optionsHu: ["Tom Denem", "Albus Dumbledore", "Sirius Black", "Remus Lupin"],
      correctAnswerEn: "Tom Riddle",
      correctAnswerHu: "Tom Denem",
    },
    {
      questionEn: "Which platform at King's Cross does the Hogwarts Express depart from?",
      questionHu: "Melyik peronról indul a Roxfort Expressz a King's Cross állomásról?",
      optionsEn: ["Platform 9", "Platform 10", "Platform 9 3/4", "Platform 8"],
      optionsHu: ["9-es peron", "10-es peron", "9 és 3/4. peron", "8-as peron"],
      correctAnswerEn: "Platform 9 3/4",
      correctAnswerHu: "9 és 3/4. peron",
    },
    {
      questionEn: "What position does Harry play on the Quidditch team?",
      questionHu: "Harry milyen pozícióban játszik a kviddicscsapatban?",
      optionsEn: ["Chaser", "Beater", "Seeker", "Keeper"],
      optionsHu: ["Hajtó", "Ütő", "Fogó", "Őrző"],
      correctAnswerEn: "Seeker",
      correctAnswerHu: "Fogó",
    },
    {
      questionEn: "What does the Marauder's Map show?",
      questionHu: "Mit mutat a Tekergők Térképe?",
      optionsEn: [
        "Hidden passages in Hogwarts",
        "The locations of everyone at Hogwarts",
        "The location of Horcruxes",
        "The history of Hogwarts",
      ],
      optionsHu: [
        "Rejtett átjárók a Roxfortban",
        "Mindenki tartózkodási helye a Roxfortban",
        "A horcruxok helye",
        "A Roxfort története",
      ],
      correctAnswerEn: "The locations of everyone at Hogwarts",
      correctAnswerHu: "Mindenki tartózkodási helye a Roxfortban",
    },
    {
      questionEn: "What is the core of Harry's wand?",
      questionHu: "Mi Harry pálcájának magja?",
      optionsEn: [
        "Dragon heartstring",
        "Phoenix feather",
        "Unicorn hair",
        "Basilisk fang",
      ],
      optionsHu: [
        "Sárkányszívizomhúr",
        "Főnix toll",
        "Egyszarvú szőr",
        "Baziliszkusz fog",
      ],
      correctAnswerEn: "Phoenix feather",
      correctAnswerHu: "Főnix toll",
    },
    {
      questionEn: "Who killed Dumbledore?",
      questionHu: "Ki ölte meg Dumbledore-t?",
      optionsEn: ["Severus Snape", "Bellatrix Lestrange", "Draco Malfoy", "Voldemort"],
      optionsHu: ["Perselus Piton", "Bellatrix Lestrange", "Draco Malfoy", "Voldemort"],
      correctAnswerEn: "Severus Snape",
      correctAnswerHu: "Perselus Piton",
    },
    {
      questionEn: "What shape is the scar on Harry Potter's forehead?",
      questionHu: "Milyen alakú Harry Potter sebhelye a homlokán?",
      optionsEn: ["A circle", "A star", "A bolt of lightning", "A crescent moon"],
      optionsHu: ["Kör", "Csillag", "Villám", "Félhold"],
      correctAnswerEn: "A bolt of lightning",
      correctAnswerHu: "Villám",
    },
    {
      questionEn: "Which object must be caught to end a Quidditch match?",
      questionHu: "Melyik tárgyat kell elkapni, hogy véget érjen a kviddicsmérkőzés?",
      optionsEn: ["Bludger", "Quaffle", "Golden Snitch", "Beater's bat"],
      optionsHu: ["Gurkó", "Cikesz", "Aranycikesz", "Ütő"],
      correctAnswerEn: "Golden Snitch",
      correctAnswerHu: "Aranycikesz",
    },
    {
      questionEn: "Who is the Half-Blood Prince?",
      questionHu: "Ki a Félvér Herceg?",
      optionsEn: ["Voldemort", "Sirius Black", "Remus Lupin", "Severus Snape"],
      optionsHu: ["Voldemort", "Sirius Black", "Remus Lupin", "Perselus Piton"],
      correctAnswerEn: "Severus Snape",
      correctAnswerHu: "Perselus Piton",
    },
    {
      questionEn: "What is the name of Harry Potter's owl?",
      questionHu: "Mi Harry Potter bagolyának neve?",
      optionsEn: ["Crookshanks", "Fawkes", "Scabbers", "Hedwig"],
      optionsHu: ["Mordan", "Fawkes", "Makesz", "Hedvig"],
      correctAnswerEn: "Hedwig",
      correctAnswerHu: "Hedvig",
    },
    {
      questionEn: "What is the symbol of the Deathly Hallows?",
      questionHu: "Mi a Halál ereklyéinek szimbóluma?",
      optionsEn: [
        "A circle, a line, and a triangle",
        "A lightning bolt",
        "A skull with a snake",
        "A snake coiled around a wand",
      ],
      optionsHu: [
        "Egy kör, egy vonal és egy háromszög",
        "Villám",
        "Koponya és kígyó",
        "Egy pálca köré tekeredett kígyó",
      ],
      correctAnswerEn: "A circle, a line, and a triangle",
      correctAnswerHu: "Egy kör, egy vonal és egy háromszög",
    },
  ];
  