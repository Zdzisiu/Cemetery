class Item {
   constructor(name,state,dates = (null,null),desc=null,link=null,version=null) {
      this.name = name;
      this.dates = dates;
      this.desc = desc;
      this.link = link;
      this.version = version;
      this.state = state;
   }

   listAll() {
      console.log(this.name + " " + this.dates + " " + this.desc + " " + this.link + " " + this.version + " " + this.state)
   }
}


const ghosts = [
   new Item("MiniDev","released",["03/07/2020","10/04/2021"],"MiniDev is a little robot software, meant to assist you throughout the day. He has various functions and is customizable.","https://github.com/Zdzisiu/MiniDev/blob/main/MiniDev.nar","1.1.2"),
   new Item("Antistress Blob","released",["23/09/2022","25/09/2022"],"Poke It","https://github.com/Zdzisiu/Antistress-Blob/releases/","1.0.2"),
   new Item("Witching Hour","released",["19/05/2023","22/05/2023"],"Make potions and torment your apprentice.","https://github.com/Zdzisiu/Witching-Hour/releases/","1.0.1"),
   new Item("Mailbox","released",["25/06/2023",null],"A lone mailbox stands in a field.","https://github.com/Zdzisiu/Mailbox/releases/","1.0.0"),
   new Item("Model Skeleton","released",["19/06/2023",null],"Click his bones<br>Made in collaboration with <a href='https://ecclysium.github.io/'>Ecclysium</a>.","","1.0.0"),
   new Item("Cat","released",["08/07/2020","09/10/2020"],"He purrs. He meows. Nothing less. Nothing more","https://github.com/Zdzisiu/Cat/blob/main/cat.nar","1.0.3"),
   new Item("Hydrate","released",["20/08/2020","26/08/2022"],"Hydrate yourself!<br>Made in collaboration with <a href='https://ukagaka.zichqec.com'>Zichqec</a>.","https://ukagaka.zichqec.com/ghost/index","1.2.1"),
   new Item("The Maze","released",["09/11/2023","09/11/2023"],"Go on a maze adventure narrated by Gamma!","https://github.com/Zdzisiu/The-Maze/releases/","0.0.2"),
   //beta
   new Item("A.R.I Pets","in beta"),
   //progress
   new Item("Forest Hermit","in progress"),
   new Item("Stuff","in progress"),
   new Item("Plant","in progress"),
   new Item("Moonfrost Mountain","in progress"),
   new Item("Gian","in progress"),
   new Item("World Planner","in progress"),
   new Item("Art Challenge ","in progress"),
   new Item("Shell Master","in progress"),
   new Item("Secret Q ghost","in progress"),
   //brainrot ideas
   new Item("Feltin Wool","planned"),
   new Item("Detective","planned"),
   new Item("Cooking for Dummies","planned"),
   new Item("Virtual Garden","planned"),
   new Item("Jar","planned"),
   new Item("Phone to Nowhere","planned"),
   new Item("Live Paintings","planned")
];

const shells = [
   //december maddness
   new Item("Wine","Hydrate","31/12/2023","Wine, 3 variations",""),
   new Item("1 Liter Mug","Hydrate","31/12/2023","Big mug",""),
   new Item("Air Freshener","Hydrate","31/12/2023","Very fresh, comes in colors",""),
   new Item("Battery Acid","Hydrate","31/12/2023","Tasty",""),
   new Item("Bone Hurt Juice","Hydrate","31/12/2023","Bone hurt :(",""),
   new Item("Bowl of water","Hydrate","31/12/2023","An ugly bowl",""),
   new Item("Bread Bowl","Hydrate","31/12/2023","Bread bowl!!!! Comes with soup!!!!",""),
   new Item("Bucket of paint","Hydrate","31/12/2023","Have fun scrolling through 267 colors",""),
   new Item("Bucket","Hydrate","31/12/2023","A bucket, comes in colors",""),
   new Item("Cactus","Hydrate","31/12/2023","Cactus full of tasty cactus juice",""),
   new Item("Champagne","Hydrate","31/12/2023","Champagne",""),
   new Item("Condiments","Hydrate","31/12/2023","Condiments, 3 variations",""),
   new Item("Cup Slice","Hydrate","31/12/2023","A Would you like a slice of cup?",""),
   new Item("Dish Soap","Hydrate","31/12/2023","Dish soap, comes in colors",""),
   new Item("Flowers","Hydrate","31/12/2023","Flowers :D",""),
   new Item("Hand Soap","Hydrate","31/12/2023","Hand soap, comes in colors",""),
   new Item("Ice Cream Coffee","Hydrate","31/12/2023","Ice Cream Coffee",""),
   new Item("Internet Teacup","Hydrate","31/12/2023","Don't keep me there for too long tho, I have stuff to do",""),
   new Item("Jar","Hydrate","31/12/2023","A jar",""),
   new Item("Juicer","Hydrate","31/12/2023","Jucier with juice and fruit",""),
   new Item("Melting Snowman","Hydrate","31/12/2023","Very sad",""),
   new Item("Muk","Hydrate","31/12/2023","He's liquid so I stand by this decision",""),
   new Item("Paint Cup","Hydrate","31/12/2023","An ugly cup",""),
   new Item("Perfume","Hydrate","31/12/2023","a bottle of perfume",""),
   new Item("Pet Bowl","Hydrate","31/12/2023","You will be judged for using it",""),
   new Item("Puddle","Hydrate","31/12/2023","A puddle :D",""),
   new Item("Suspicious Stew","Hydrate","31/12/2023","Very suspicious",""),
   new Item("Teacup v2","Hydrate","31/12/2023","Yet another teacup",""),
   new Item("Watercolor Brush Pen","Hydrate","31/12/2023","Brush pen",""),
   new Item("Wet Sponge","Hydrate","31/12/2023","Very wet",""),
   new Item("Whisky","Hydrate","31/12/2023","Whisky",""),
   //regular shells
   new Item("Alkohol","Hydrate","29/12/2020","colorful",""),
   new Item("A bottle of souls","Hydrate","21/08/2022","Don't ask where I got them",""),
   new Item("Fishbowl","Hydrate","10/09/2021 ","Comes with fish",""),
   new Item("Teacup","Hydrate","29/12/2020","A teacup :D",""),
   new Item("Lava in a Cup","Hydrate","10/09/2021 ","Careful: Hot",""),
   new Item("Potion","Hydrate","03/01/2021","Heal yourself",""),
   new Item("Poison","Hydrate","03/01/2021","Kill someone",""),
   new Item("Bleach","Hydrate","31/01/2021","Tasty",""),
   new Item("Martini Gore","Hydrate","10/09/2021 ","It's looking at you",""),
   new Item("Ink","Hydrate","03/01/2022","Ink",""),
   new Item("Paint Tube","Hydrate","04/01/2022","Paint, yum",""),
   new Item("Ghost Jam","Hydrate","23/05/2023","Made from 100% real ghosts",""),
   new Item("Clear Remake","Hydrate","23/05/2023","A remake :D",""),
   new Item("Biblically Accurate Angel","Hydrate","16/11/2023","FEAR NOT MORTAL",""),
   //squid
   new Item("Biblically Accurate Angel","Squid","09/04/2023","FEAR NOT MORTAL",""),
   //Needle
   new Item("Felting Needle","Needle","11/11/2023","Stab the wool",""),
   //cat
   new Item("Sketchy","Cat","11/11/2023","A sketchy cat",""),
   new Item("Black Cat","Cat","08/10/2020","He sleep",""),
   //MiniDev
   new Item("M-z","Minidev","29/11/2020","M-z model provided by A.R.I","")
];

const balloons = [
   new Item("Cloth","released","18/06/2023","An old balloon made for an abandoned ghost.",""),
   new Item("Forest","released","26/12/2020","An old balloon made for as of yet unreleased ghost, 'Plant'.",""),
   new Item("Journal","released","26/12/2020","An old balloon made for as of yet unreleased ghost, 'Gian'.",""),
   new Item("Mail","released","25/06/2023","A bunch of stained mail.",""),
   new Item("Old Paper","released","26/12/2020","An old balloon made for as of yet unreleased ghost, 'World Planner'.",""),
   new Item("Pixel","released","03/07/2020","Carefull, it's glitching.",""),
   new Item("Simple Black","released","26/12/2020","An old balloon made for as of yet unreleased ghost, 'Stuff'.",""),
   new Item("Simple Pets","released","25/04/2021","Simple, with paws.",""),
   new Item("Cat Paws","released","08/07/2020","Purple, with paws.","")
]

const code = [
   new Item("ARRAYADD","Function","22/10/2021","adds all elements in an array (works only for integers).","project/code/ARRAYADD.txt"),
   new Item("ARRAYSEARCH","Function","25/10/2021","This function is basically ASEARCH, it searches for the position of the element in an array but you can make it case insensitive and it works for simple arrays.","project/code/ARRAYSEARCH.txt"),
   new Item("CHARSPLIT","Function","26/10/2021","SPLIT() refused to split a word into single characters so I made my own function for that.","project/code/CHARSPLIT.txt"),
   new Item("CENSOR","Function","22/10/2021","Censor whatever naughty words you are using.","project/code/CENSOR.txt"),
   new Item("ARRAYSWITCH","Function","18/08/2023","Function allowing moving in the array forward or backwards.","project/code/ARRAYSWITCH.txt"),
   new Item("FakeWord","Function","25/10/2021","Generate a fake word by stringing letters/syllabs according to some weird rules.","project/code/FakeWord.txt"),
   new Item("OWO","Function","24/11/2021","It's cursed.","project/code/OWO.txt"),
   new Item("RemoveArrayFromArray","Function","23/06/2023","Remove and array from another array.","project/code/RemoveArrayFromArray.txt"),
   new Item("Decision Tree Framework","Framework","09/11/2023","Decision Tree Framework for all your text adventure needs! A simple 'framework' (like 2 functions) that allows you to make text adventure/visual novel style ghosts/dialogue trees! Demo Ghost: <a href='https://github.com/Zdzisiu/The-Maze/releases/'>Gamma</a>.","project/code/Decision_Tree_Framework.dic")
]

const other = [
   new Item("Achievements","Plugin","05/06/2023","Allows the devs to add achievements and the users to see them!","https://github.com/Zdzisiu/Achievements-Plugin/releases"),
   new Item("Image Manipulation Saori","Saori Basic","27/04/2023","A saori basic allowing for manipulating images in various ways.","https://github.com/Zdzisiu/Color-Saori/releases"),
   new Item("Catlendar","Calendar Skin","24/09/2023","Cat + Calendar (Etc. Jam 2023 Submission).","https://github.com/Zdzisiu/Catlendar/releases")
]
