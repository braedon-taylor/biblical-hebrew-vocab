export interface Word {
  h: string; // Hebrew
  e: string; // English
  c: string; // Category
  v?: string; // Verse context
}

export const vocabData: Record<string, Word[]> = {
  "Ch 3": [
    { h: "אָב", e: "father", c: "1N M", v: "Gen 2:24 - Therefore a man shall leave his father..." },
    { h: "אָדָם", e: "mankind / Adam", c: "1N M", v: "Gen 1:27 - So God created man in his own image..." },
    { h: "אֵל", e: "God / god", c: "1N M", v: "Gen 14:18 - And Melchizedek... was priest of God Most High." },
    { h: "אֱלֹהִים", e: "God / gods", c: "1N MP", v: "Gen 1:1 - In the beginning God created the heavens..." },
    { h: "אֶרֶץ", e: "earth / land", c: "1N F", v: "Gen 1:10 - God called the dry land Earth..." },
    { h: "בַּיִת", e: "house", c: "1N M", v: "Gen 7:1 - Go into the ark, you and all your household." },
    { h: "בֶּן", e: "son", c: "1N M", v: "Gen 4:25 - And she bore a son and called his name Seth." },
    { h: "דָּבָר", e: "word / matter", c: "1N M", v: "Gen 15:1 - The word of the LORD came to Abram..." },
    { h: "יְהוָה", e: "Yahweh", c: "1N M", v: "Gen 2:4 - In the day that the LORD God made the earth..." },
    { h: "יום", e: "day", c: "1N M", v: "Gen 1:5 - God called the light Day..." },
    { h: "יְרוּשָׁלַיִם", e: "Jerusalem", c: "1N M", v: "Ps 122:3 - Jerusalem—built as a city that is bound firmly together." },
    { h: "יִשרָאֵל", e: "Israel", c: "1N M", v: "Gen 32:28 - Your name shall no longer be called Jacob, but Israel." },
    { h: "מֶלֶךְ", e: "king", c: "1N M", v: "Ps 2:6 - As for me, I have set my King on Zion..." },
    { h: "מִצְרַיִם", e: "Egypt", c: "1N M", v: "Gen 12:10 - Now there was a famine... Abram went down to Egypt." },
    { h: "מֹשֶׁה", e: "Moses", c: "1N M", v: "Ex 2:10 - She named him Moses, 'Because,' she said, 'I drew him out...'" },
    { h: "סוס", e: "horse", c: "1N M", v: "Ex 15:1 - The horse and his rider he has thrown into the sea." },
    { h: "עֶבֶד", e: "servant", c: "1N M", v: "Gen 24:2 - And Abraham said to his servant, the oldest of his household..." },
    { h: "פַּרְעֹה", e: "Pharaoh", c: "1N M", v: "Ex 5:1 - Afterward Moses and Aaron went and said to Pharaoh..." },
    { h: "שם", e: "name", c: "1N M", v: "Gen 2:19 - Whatever the man called every living creature, that was its name." },
    { h: "שָׁנָה", e: "year", c: "1N M", v: "Gen 5:3 - When Adam had lived 130 years, he fathered a son." }
  ],
  "Ch 4": [
    { h: "אֲדֹנָי", e: "lord / master", c: "2N M", v: "Gen 15:2 - But Abram said, 'O Lord GOD, what will you give me?'" },
    { h: "אָח", e: "brother", c: "2N M", v: "Gen 4:2 - And again, she bore his brother Abel." },
    { h: "איש", e: "man / husband", c: "2N M", v: "Gen 2:23 - She shall be called Woman, because she was taken out of Man." },
    { h: "אִשָּׁה", e: "woman / wife", c: "2N F", v: "Gen 2:24 - A man leaves his father and mother and holds fast to his wife." },
    { h: "בַּת", e: "daughter", c: "2N F", v: "Gen 5:4 - The days of Adam after he fathered Seth were 800 years... and daughters." },
    { h: "גוי", e: "nation", c: "2N M", v: "Gen 12:2 - And I will make of you a great nation..." },
    { h: "דֶרֶך", e: "way", c: "2N M", v: "Gen 3:24 - ...to guard the way to the tree of life." },
    { h: "הַר", e: "mountain", c: "2N M", v: "Gen 8:4 - The ark came to rest on the mountains of Ararat." },
    { h: "כֹּהֵן", e: "priest", c: "2N M", v: "Gen 14:18 - Melchizedek king of Salem... was priest of God Most High." },
    { h: "לֵב", e: "heart", c: "2N M", v: "Gen 6:5 - ...every intention of the thoughts of his heart was only evil." },
    { h: "מים", e: "water", c: "2N M", v: "Gen 1:2 - And the Spirit of God was hovering over the face of the waters." },
    { h: "נָבִיא", e: "prophet", c: "2N M", v: "Gen 20:7 - Return the man's wife, for he is a prophet..." },
    { h: "נֶפֶשׁ", e: "soul", c: "2N F", v: "Gen 2:7 - ...breathed into his nostrils the breath of life, and the man became a living creature (soul)." },
    { h: "סֵפֶר", e: "book", c: "2N M", v: "Gen 5:1 - This is the book of the generations of Adam." },
    { h: "עַיִן", e: "eye", c: "2N F", v: "Gen 3:5 - God knows that when you eat of it your eyes will be opened." },
    { h: "עִיר", e: "city", c: "2N F", v: "Gen 4:17 - He built a city, and called the name of the city after his son." },
    { h: "צָבָא", e: "army", c: "2N M", v: "Gen 2:1 - Thus the heavens and the earth were finished, and all the host (army) of them." },
    { h: "קול", e: "voice", c: "2N M", v: "Gen 3:8 - They heard the sound (voice) of the LORD God walking in the garden." },
    { h: "ראש", e: "head", c: "2N M", v: "Gen 3:15 - He shall bruise your head, and you shall bruise his heel." },
    { h: "תּוֹרָה", e: "law", c: "2N F", v: "Ex 13:9 - ...that the law of the LORD may be in your mouth." }
  ],
  "Ch 5": [
    { h: "אֵשׁ", e: "fire", c: "3N F", v: "Gen 15:17 - ...a smoking fire pot and a flaming torch passed between these pieces." },
    { h: "הֵיכָל", e: "temple", c: "3N M", v: "1 Sam 1:9 - Eli the priest was sitting on the seat by the doorpost of the temple." },
    { h: "זָהָב", e: "gold", c: "3N M", v: "Gen 2:11 - The name of the first is the Pishon... where there is gold." },
    { h: "חי", e: "life", c: "3N M", v: "Gen 2:7 - ...the LORD God breathed into his nostrils the breath of life." },
    { h: "חֶרֶב", e: "sword", c: "3N F", v: "Gen 3:24 - ...at the east of the garden of Eden he placed... a flaming sword." },
    { h: "יֶלֶד", e: "boy", c: "3N M", v: "Gen 21:8 - And the child grew and was weaned." },
    { h: "יָם", e: "sea", c: "3N M", v: "Gen 1:10 - ...the waters that were gathered together he called Seas." },
    { h: "כֶסֶף", e: "silver", c: "3N M", v: "Gen 13:2 - Abram was very rich in livestock, in silver, and in gold." },
    { h: "מִזְבֵּחַ", e: "altar", c: "3N M", v: "Gen 8:20 - Then Noah built an altar to the LORD..." },
    { h: "מָקוֹם", e: "place", c: "3N M", v: "Gen 1:9 - Let the waters... be gathered together into one place." },
    { h: "מִשְׁפָּט", e: "judgment", c: "3N M", v: "Gen 18:19 - ...by doing righteousness and justice (judgment)." },
    { h: "נְאֻם", e: "utterance", c: "3N M", v: "Gen 22:16 - By myself I have sworn, declares (utterance of) the LORD..." },
    { h: "עוֹלָם", e: "forever", c: "3N M", v: "Gen 3:22 - ...lest he reach out his hand and take also... and live forever." },
    { h: "עָנָן", e: "clouds", c: "3N M", v: "Gen 9:13 - I have set my bow in the cloud..." },
    { h: "רוּחַ", e: "spirit", c: "3N F", v: "Gen 1:2 - ...and the Spirit of God was hovering over the face of the waters." },
    { h: "שָׁמַיִם", e: "heaven", c: "3N M", v: "Gen 1:1 - In the beginning, God created the heavens and the earth." },
    { h: "שַׁעַר", e: "gate", c: "3N M", v: "Gen 19:1 - The two angels came to Sodom... Lot was sitting in the gate." },
    { h: "שר", e: "leader", c: "3N M", v: "Gen 12:15 - And when the princes (leaders) of Pharaoh saw her..." }
  ],
  "Ch 6": [
    { h: "חָכְסָח", e: "wisdom", c: "4N F", v: "Ex 28:3 - ...whom I have filled with a spirit of skill (wisdom)." },
    { h: "מִצְוָה", e: "commandment", c: "4N F", v: "Gen 26:5 - Abraham obeyed my voice and kept my charge, my commandments..." },
    { h: "פֶה", e: "mouth", c: "4N M", v: "Gen 4:11 - ...the ground, which has opened its mouth to receive your brother's blood." },
    { h: "שָׂדֶה", e: "field", c: "4N M", v: "Gen 2:5 - When no bush of the field was yet in the land..." },
    { h: "אֶת־", e: "object marker", c: "4P", v: "Gen 1:1 - In the beginning God created (direct object) the heavens." },
    { h: "אַחַר", e: "after", c: "4P", v: "Gen 9:28 - After the flood Noah lived 350 years." },
    { h: "אֶל", e: "to", c: "4P", v: "Gen 3:2 - And the woman said to the serpent..." },
    { h: "את", e: "with", c: "4P", v: "Gen 5:22 - Enoch walked with God after he fathered Methuselah." },
    { h: "בְּ", e: "in", c: "4P", v: "Gen 1:1 - In the beginning, God created..." },
    { h: "בֵּין", e: "between", c: "4P", v: "Gen 1:4 - And God separated the light from (between) the darkness." },
    { h: "בְּתוֹךְ", e: "midst", c: "4P", v: "Gen 1:6 - Let there be an expanse in the midst of the waters." },
    { h: "כְּ", e: "like", c: "4P", v: "Gen 3:5 - ...and you will be like God, knowing good and evil." },
    { h: "ל", e: "for", c: "4P", v: "Gen 1:14 - Let them be for signs and for seasons..." },
    { h: "לִפְנֵי", e: "before", c: "4P", v: "Gen 6:11 - Now the earth was corrupt in God's sight (before God)." },
    { h: "מן", e: "from", c: "4P", v: "Gen 2:2 - On the seventh day God finished his work... and rested from all his work." },
    { h: "עַד", e: "until", c: "4P", v: "Gen 3:19 - ...till you return to the ground, for out of it you were taken." },
    { h: "עַל", e: "on", c: "4P", v: "Gen 1:2 - Darkness was over (on) the face of the deep." },
    { h: "עם", e: "with", c: "4P", v: "Gen 18:23 - Will you indeed sweep away the righteous with the wicked?" },
    { h: "תַּחַת", e: "under", c: "4P", v: "Gen 1:7 - ...separated the waters that were under the expanse." }
  ],
  "Ch 7": [
    { h: "זָקֵן", e: "elder", c: "5N M", v: "Gen 18:11 - Now Abraham and Sarah were old (elders), advanced in years." },
    { h: "קֹדֶשׁ", e: "holy", c: "5N M", v: "Ex 3:5 - ...the place on which you are standing is holy ground." },
    { h: "אֶחָד", e: "one", c: "5A", v: "Gen 1:5 - And there was evening and there was morning, the first (one) day." },
    { h: "גָּדוֹל", e: "great", c: "5A", v: "Gen 1:16 - And God made the two great lights..." },
    { h: "חָכָם", e: "wise", c: "5A", v: "Gen 41:33 - Now therefore let Pharaoh select a discerning and wise man..." },
    { h: "טוב", e: "good", c: "5A", v: "Gen 1:4 - And God saw that the light was good." },
    { h: "יָפֶה", e: "beautiful", c: "5A", v: "Gen 12:11 - I know that you are a woman beautiful in appearance." },
    { h: "צַדִיק", e: "righteous", c: "5A", v: "Gen 6:9 - Noah was a righteous man, blameless in his generation." },
    { h: "קָדוֹשׁ", e: "holy", c: "5A", v: "Lev 11:45 - You shall therefore be holy, for I am holy." },
    { h: "רב", e: "many", c: "5A", v: "Gen 21:34 - And Abraham sojourned many days in the land of the Philistines." },
    { h: "רע", e: "evil", c: "5A", v: "Gen 2:9 - ...the tree of the knowledge of good and evil." },
    { h: "עַתָּה", e: "now", c: "5a", v: "Gen 3:22 - And now, lest he reach out his hand and take also of the tree of life..." }
  ],
  "Ch 8": [
    { h: "אֹהֶל", e: "tent", c: "6N M", v: "Gen 9:21 - Noah... became drunk and lay uncovered in his tent." },
    { h: "אֶלֶף", e: "thousand", c: "6N M", v: "Gen 20:16 - To Sarah he said, 'Behold, I have given your brother a thousand pieces of silver.'" },
    { h: "בְּהֵמָה", e: "cattle", c: "6N F", v: "Gen 1:24 - Let the earth bring forth living creatures... livestock (cattle)." },
    { h: "דָם", e: "blood", c: "6N M", v: "Gen 4:10 - The voice of your brother's blood is crying to me from the ground." },
    { h: "שֶׁמֶן", e: "oil", c: "6N M", v: "Gen 28:18 - Jacob... took the stone... and poured oil on the top of it." },
    { h: "טָהוֹר", e: "pure", c: "6A", v: "Gen 7:2 - Take with you seven pairs of all clean (pure) animals." },
    { h: "כְּסִיל", e: "stupid", c: "6A", v: "Ps 92:6 - The stupid man cannot know; the fool cannot understand this." },
    { h: "מָה", e: "what", c: "6a", v: "Gen 3:13 - Then the LORD God said to the woman, 'What is this that you have done?'" },
    { h: "אַשֶׁר", e: "which", c: "6p", v: "Gen 1:31 - And God saw everything that (which) he had made." },
    { h: "מי", e: "who", c: "6p", v: "Gen 3:11 - He said, 'Who told you that you were naked?'" },
    { h: "כִּי", e: "because", c: "6C", v: "Gen 3:14 - Because you have done this, cursed are you above all livestock." }
  ],
  "Ch 9": [
    { h: "אַף", e: "anger", c: "7N M", v: "Gen 27:45 - ...until your brother's anger turns away from you." },
    { h: "בֹקֶר", e: "morning", c: "7N M", v: "Gen 1:5 - And there was evening and there was morning, the first day." },
    { h: "בָּקָר", e: "herd", c: "7N M", v: "Gen 12:16 - And for her sake he dealt well with Abram; and he had... herds." },
    { h: "בְּרָכָה", e: "blessing", c: "7N F", v: "Gen 12:2 - ...and I will bless you and make your name great, so that you will be a blessing." },
    { h: "חַטָאת", e: "sin", c: "7N F", v: "Gen 4:7 - If you do not do well, sin is crouching at the door." },
    { h: "כָּבוֹד", e: "glory", c: "7N M", v: "Ex 24:17 - Now the appearance of the glory of the LORD was like a devouring fire." },
    { h: "לֶחֶם", e: "bread", c: "7N M", v: "Gen 3:19 - By the sweat of your face you shall eat bread." },
    { h: "מִלְחָמָה", e: "war", c: "7N F", v: "Gen 14:2 - ...these kings made war with Bera king of Sodom." },
    { h: "עַם", e: "people", c: "7N M", v: "Gen 11:6 - Behold, they are one people, and they have all one language." },
    { h: "יֵשׁ", e: "there is", c: "7V", v: "Gen 28:16 - Surely the LORD is (there is Yahweh) in this place, and I did not know it." },
    { h: "אַיִן", e: "there is not", c: "7V", v: "Gen 2:5 - ...and there was no (not) man to work the ground." }
  ],
  "Ch 10": [
    { h: "אֶבֶן", e: "stone", c: "8N F", v: "Gen 28:11 - ...he took one of the stones of the place and put it under his head." },
    { h: "בְּרִית", e: "covenant", c: "8N F", v: "Gen 9:9 - Behold, I establish my covenant with you and your offspring." },
    { h: "בָּשָׂר", e: "flesh", c: "8N M", v: "Gen 2:23 - This at last is bone of my bones and flesh of my flesh." },
    { h: "חֶסֶד", e: "loyalty", c: "8N M", v: "Gen 24:12 - O LORD... show steadfast love (loyalty) to my master Abraham." },
    { h: "יָד", e: "hand", c: "8N F", v: "Gen 3:22 - ...lest he reach out his hand and take also of the tree of life." },
    { h: "מִדְבָּר", e: "wilderness", c: "8N M", v: "Gen 16:7 - The angel of the LORD found her by a spring... in the wilderness." },
    { h: "מָוֶת", e: "death", c: "8N M", v: "Gen 21:16 - ...for she said, 'Let me not look on the death of the child.'" },
    { h: "עֵת", e: "time", c: "8N F", v: "Gen 8:11 - And the dove came back to him in the evening (time of evening)." },
    { h: "פָּנִים", e: "face", c: "8N MP", v: "Gen 1:2 - And darkness was over the face of the deep." },
    { h: "צאן", e: "flock", c: "8N M", v: "Gen 4:2 - Now Abel was a keeper of sheep (flocks)." },
    { h: "רֶגֶל", e: "foot", c: "8N F", v: "Gen 8:9 - ...the dove found no place to set her foot." }
  ],
  "Ch 11": [
    { h: "זֶרַע", e: "seed", c: "9N M", v: "Gen 1:11 - ...fruit trees bearing fruit... in which is their seed." },
    { h: "לַיְלָה", e: "night", c: "9N M", v: "Gen 1:5 - ...and the darkness he called Night." },
    { h: "מוֹעֵד", e: "appointed time", c: "9N M", v: "Gen 1:14 - ...and let them be for signs and for seasons (appointed times)." },
    { h: "מַלְאָךְ", e: "messenger", c: "9N M", v: "Gen 16:7 - The angel (messenger) of the LORD found her by a spring." },
    { h: "נַחֲלָה", e: "inheritance", c: "9N F", v: "Gen 31:14 - Is there any portion or inheritance left to us in our father's house?" },
    { h: "נַעַר", e: "youth", c: "9N M", v: "Gen 14:24 - I will take nothing but what the young men (youths) have eaten." },
    { h: "עָוֹן", e: "iniquity", c: "9N M", v: "Gen 4:13 - Cain said to the LORD, 'My punishment (iniquity) is greater than I can bear.'" },
    { h: "שָׁלוֹם", e: "peace", c: "9N M", v: "Gen 15:15 - As for you, you shall go to your fathers in peace." }
  ],
  "Ch 12": [
    { h: "אָכַל", e: "to eat", c: "10V Q", v: "Gen 2:16 - You may surely eat of every tree of the garden." },
    { h: "אָמַר", e: "to say", c: "10V Q", v: "Gen 1:3 - And God said, 'Let there be light.'" },
    { h: "הָיָה", e: "to be", c: "10V Q", v: "Gen 1:3 - ...and there was (became/was) light." },
    { h: "הָלַךְ", e: "to go", c: "10V Q", v: "Gen 3:14 - ...on your belly you shall go, and dust you shall eat." },
    { h: "יָצָא", e: "to go out", c: "10V Q", v: "Gen 2:10 - A river flowed (went out) from Eden to water the garden." },
    { h: "נָתַן", e: "to give", c: "10V Q", v: "Gen 1:17 - And God set (gave) them in the expanse of the heavens." },
    { h: "עָשָׂה", e: "to do", c: "10V Q", v: "Gen 1:7 - And God made the expanse..." },
    { h: "רָאָה", e: "to see", c: "10V Q", v: "Gen 1:4 - And God saw that the light was good." },
    { h: "שָׁמַע", e: "to hear", c: "10V Q", v: "Gen 3:8 - And they heard the sound of the LORD God walking..." }
  ],
  "Ch 13": [
    { h: "בָּרַךְ", e: "to bless", c: "11V", v: "Gen 1:22 - And God blessed them, saying, 'Be fruitful and multiply...'" },
    { h: "זָכַר", e: "to remember", c: "11V", v: "Gen 8:1 - But God remembered Noah and all the beasts..." },
    { h: "יָדַע", e: "to know", c: "11V", v: "Gen 3:5 - ...and you will be like God, knowing good and evil." },
    { h: "כָּבֵד", e: "to be heavy", c: "11V", v: "Gen 12:10 - ...for the famine was severe (heavy) in the land." },
    { h: "כָּתַב", e: "to write", c: "11V", v: "Ex 17:14 - Write this as a memorial in a book..." },
    { h: "מָלֵא", e: "to be full", c: "11V", v: "Gen 1:22 - ...and fill the waters in the seas." },
    { h: "מָלַךְ", e: "to reign", c: "11V", v: "Gen 36:31 - These are the kings who reigned in the land of Edom." },
    { h: "מָצָא", e: "to find", c: "11V", v: "Gen 6:8 - But Noah found favor in the eyes of the LORD." },
    { h: "פָּקַד", e: "to visit", c: "11V", v: "Gen 21:1 - The LORD visited Sarah as he had said..." },
    { h: "שָׁלַח", e: "to send", c: "11V", v: "Gen 3:22 - ...lest he reach out (send) his hand and take also of the tree of life." },
    { h: "שָׁמַר", e: "to keep", c: "11V", v: "Gen 2:15 - The LORD God took the man... to work it and keep it." }
  ],
  "Ch 14": [
    { h: "בוֹא", e: "to enter", c: "12V", v: "Gen 6:18 - ...and you shall come into the ark, you, your sons..." },
    { h: "בָּנָה", e: "to build", c: "12V", v: "Gen 2:22 - And the rib... the LORD God fashioned (built) into a woman." },
    { h: "יָלַד", e: "to bear", c: "12V", v: "Gen 4:1 - ...and she conceived and bore Cain." },
    { h: "יָרֵא", e: "to fear", c: "12V", v: "Gen 3:10 - I heard the sound of you... and I was afraid." },
    { h: "יָרַד", e: "to go down", c: "12V", v: "Gen 11:5 - And the LORD came down to see the city and the tower." },
    { h: "לָקַח", e: "to take", c: "12V", v: "Gen 2:15 - The LORD God took the man and put him in the garden." },
    { h: "מות", e: "to die", c: "12V", v: "Gen 2:17 - ...in the day that you eat of it you shall surely die." },
    { h: "נָפַל", e: "to fall", c: "12V", v: "Gen 2:21 - So the LORD God caused a deep sleep to fall upon the man." },
    { h: "נָשָׂא", e: "to lift", c: "12V", v: "Gen 13:10 - And Lot lifted up his eyes and saw that the Jordan Valley..." },
    { h: "עָבַר", e: "to pass over", c: "12V", v: "Gen 15:17 - ...a flaming torch passed between these pieces." },
    { h: "עָלָה", e: "to go up", c: "12V", v: "Gen 2:6 - ...and a mist was going up from the land..." },
    { h: "קוּם", e: "to arise", c: "12V", v: "Gen 13:17 - Arise, walk through the length and the breadth of the land." },
    { h: "שוב", e: "to return", c: "12V", v: "Gen 3:19 - ...till you return to the ground, for out of it you were taken." },
    { h: "שים", e: "to set", c: "12V", v: "Gen 2:8 - ...and there he put (set) the man whom he had formed." }
  ],
  "Ch 15": [
    { h: "חָיָה", e: "to live", c: "13V", v: "Gen 3:22 - ...and take also of the tree of life and eat, and live forever." },
    { h: "יָכֹל", e: "to be able", c: "13V", v: "Gen 13:6 - ...their possessions were so great that they could not dwell together." },
    { h: "כָּרַת", e: "to covenant", c: "13V", v: "Gen 15:18 - On that day the LORD made (cut) a covenant with Abram." },
    { h: "סור", e: "to turn", c: "13V", v: "Gen 19:2 - ...and turn aside to your servant's house and spend the night." },
    { h: "עָבַד", e: "to serve", c: "13V", v: "Gen 2:5 - ...and there was no man to work (serve) the ground." },
    { h: "עָנָה", e: "to answer", c: "13V", v: "Gen 41:16 - Joseph answered Pharaoh, 'It is not in me; God will give Pharaoh a favorable answer.'" },
    { h: "אֹזֶן", e: "ear", c: "13N F", v: "Gen 23:10 - ...in the hearing (ears) of the Hittites, of all who went in at the gate." },
    { h: "גבּוֹר", e: "mighty", c: "13N M", v: "Gen 6:4 - These were the mighty men who were of old, the men of renown." },
    { h: "צְדָקָה", e: "righteousness", c: "13N F", v: "Gen 15:6 - And he believed the LORD, and he counted it to him as righteousness." }
  ],
  "Ch 16": [
    { h: "גָּאַל", e: "to redeem", c: "14V", v: "Gen 48:16 - ...the angel who has redeemed me from all evil..." },
    { h: "חָטָא", e: "to sin", c: "14V", v: "Gen 20:6 - ...it was I who kept you from sinning against me." },
    { h: "יָסַף", e: "to add", c: "14V", v: "Gen 4:2 - And again (added), she bore his brother Abel." },
    { h: "יָרַשׁ", e: "to inherit", c: "14V", v: "Gen 15:3 - Behold, you have given me no offspring, and a member of my household will be my heir (inherit)." },
    { h: "כָּפַר", e: "to cover", c: "14V", v: "Gen 6:14 - ...and cover (atone/pitch) it inside and out with pitch." },
    { h: "נָטָה", e: "to stretch out", c: "14V", v: "Gen 12:8 - ...he pitched (stretched) his tent, with Bethel on the west and Ai on the east." },
    { h: "עָזַב", e: "to leave", c: "14V", v: "Gen 2:24 - Therefore a man shall leave his father and his mother..." },
    { h: "קָרַב", e: "to draw near", c: "14V", v: "Gen 12:11 - When he was about to enter (draw near) Egypt..." },
    { h: "שָׁתָה", e: "to drink", c: "14V", v: "Gen 9:21 - He drank of the wine and became drunk." }
  ],
  "Ch 17": [
    { h: "אָבַד", e: "to perish", c: "15V", v: "Deut 4:26 - ...you will soon utterly perish from the land." },
    { h: "אָהַב", e: "to love", c: "15V", v: "Gen 22:2 - Take your son... whom you love, and go to the land of Moriah." },
    { h: "אָסַף", e: "to gather", c: "15V", v: "Gen 25:8 - Abraham breathed his last and died... and was gathered to his people." },
    { h: "בּعַר", e: "to burn", c: "15V", v: "Ex 3:2 - ...and behold, the bush was burning, yet it was not consumed." },
    { h: "גָּלָה", e: "to reveal", c: "15V", v: "Gen 35:7 - ...because there God had revealed himself to him when he fled from his brother." },
    { h: "טָהֵר", e: "to be clean", c: "15V", v: "Gen 35:2 - ...Put away the foreign gods... and purify (clean) yourselves." },
    { h: "כָּכלָה", e: "to finish", c: "15V", v: "Gen 2:1 - Thus the heavens and the earth were finished..." },
    { h: "רוּם", e: "to be high", c: "15V", v: "Gen 7:17 - ...the waters increased and bore up the ark, and it rose (was high) above the earth." },
    { h: "שָׁפַט", e: "to judge", c: "15V", v: "Gen 16:5 - May the LORD judge between me and you!" }
  ],
  "Ch 18": [
    { h: "בָּחַר", e: "to choose", c: "16V", v: "Gen 13:11 - So Lot chose for himself all the Jordan Valley." },
    { h: "בִּין", e: "to understand", c: "16V", v: "Deut 32:7 - Consider the years of many generations..." },
    { h: "דְרַשׁ", e: "to seek", c: "16V", v: "Gen 25:22 - ...so she went to inquire (seek) of the LORD." },
    { h: "הָרַג", e: "to kill", c: "16V", v: "Gen 4:8 - ...Cain rose up against his brother Abel and killed him." },
    { h: "חָפֵץ", e: "to delight", c: "16V", v: "Gen 34:19 - ...because he delighted in Jacob's daughter." },
    { h: "קָדַשׁ", e: "to be holy", c: "16V", v: "Gen 2:3 - So God blessed the seventh day and made it holy." },
    { h: "שָׁאֵל", e: "to ask", c: "16V", v: "Gen 24:47 - Then I asked her, 'Whose daughter are you?'" },
    { h: "בַּעַל", e: "owner / Baal", c: "16N M", v: "Gen 14:13 - ...these were allies (masters/baals) of Abram." }
  ],
  "Ch 19": [
    { h: "בָּטַח", e: "to trust", c: "17V", v: "Ps 22:4 - In you our fathers trusted; they trusted, and you delivered them." },
    { h: "בָּכָה", e: "to weep", c: "17V", v: "Gen 21:16 - ...and lifted up her voice and wept." },
    { h: "לָבַשׁ", e: "to clothe", c: "17V", v: "Gen 3:21 - And the LORD God made for Adam and for his wife garments of skins and clothed them." },
    { h: "שָׁלֵם", e: "to be whole", c: "17V", v: "Gen 15:16 - ...for the iniquity of the Amorites is not yet complete (whole)." },
    { h: "שָׂרַף", e: "to burn", c: "17V", v: "Gen 38:24 - ...And Judah said, 'Bring her out, and let her be burned.'" },
    { h: "דוֹר", e: "generation", c: "17N M", v: "Gen 6:9 - Noah was a righteous man, blameless in his generation." }
  ],
  "Ch 20": [
    { h: "אָחַז", e: "to seize", c: "18V", v: "Gen 22:13 - ...behold, a ram, caught (seized) in a thicket by his horns." },
    { h: "טָמֵא", e: "to be unclean", c: "18V", v: "Lev 11:24 - ...whoever touches their carcass shall be unclean until the evening." },
    { h: "יָצַר", e: "to form", c: "18V", v: "Gen 2:7 - Then the LORD God formed the man of dust from the ground." },
    { h: "נוס", e: "to flee", c: "18V", v: "Gen 16:6 - ...and she fled from her." },
    { h: "סָבַב", e: "to surround", c: "18V", v: "Gen 2:11 - ...it is the one that flowed around (surrounded) the whole land of Havilah." },
    { h: "שָׁבַר", e: "to break", c: "18V", v: "Gen 19:9 - ...and came near to break the door." },
    { h: "מין", e: "wine", c: "18N M", v: "Gen 9:21 - He drank of the wine and became drunk." }
  ],
  "Ch 21": [
    { h: "זָבַח", e: "to slaughter", c: "19V", v: "Gen 31:54 - And Jacob offered a sacrifice (slaughtered) in the hill country." },
    { h: "חָנָה", e: "to encamp", c: "19V", v: "Gen 26:17 - So Isaac departed from there and encamped in the Valley of Gerar." },
    { h: "נוּחַ", e: "to rest", c: "19V", v: "Gen 8:4 - ...the ark came to rest on the mountains of Ararat." },
    { h: "נָסַע", e: "to depart", c: "19V", v: "Gen 12:9 - And Abram journeyed (departed) on, still going toward the Negeb." },
    { h: "פָּנָה", e: "to turn", c: "19V", v: "Gen 18:22 - So the men turned from there and went toward Sodom." },
    { h: "פָּתַח", e: "to open", c: "19V", v: "Gen 7:11 - ...and the windows of the heavens were opened." },
    { h: "רָדַף", e: "to pursue", c: "19V", v: "Gen 14:14 - ...he led forth his trained men... and went in pursuit as far as Dan." },
    { h: "שָׁאֵר", e: "to remain", c: "19V", v: "Gen 7:23 - Only Noah was left (remained), and those who were with him in the ark." }
  ],
  "Ch 22": [
    { h: "בוש", e: "to be ashamed", c: "20V", v: "Gen 2:25 - And the man and his wife were both naked and were not ashamed." },
    { h: "גָּדַל", e: "to be strong", c: "20V", v: "Gen 21:8 - And the child grew and was weaned." },
    { h: "חָשַׁב", e: "to think", c: "20V", v: "Gen 15:6 - ...and he counted (thought/reckoned) it to him as righteousness." },
    { h: "לָכָד", e: "to capture", c: "20V", v: "Josh 10:1 - ...how Joshua had captured Ai and had devoted it to destruction." },
    { h: "נָגַשׁ", e: "to approach", c: "20V", v: "Gen 18:23 - Then Abraham drew near (approached) and said..." },
    { h: "קָבַץ", e: "to gather", c: "20V", v: "Gen 41:35 - And let them gather all the food of these good years that are coming." },
    { h: "קָבַר", e: "to bury", c: "20V", v: "Gen 23:4 - ...Give me a possession among you for a burying place, that I may bury my dead." },
    { h: "שָׁפַךְ", e: "to pour out", c: "20V", v: "Gen 9:6 - Whoever sheds (pours out) the blood of man, by man shall his blood be shed." }
  ],
  "Ch 23": [
    { h: "אור", e: "light", c: "21N M", v: "Gen 1:3 - And God said, 'Let there be light,' and there was light." },
    { h: "בְּכֹר", e: "firstborn", c: "21N M", v: "Gen 4:4 - ...Abel also brought of the firstborn of his flock." },
    { h: "חֵמָה", e: "rage", c: "21N F", v: "Gen 27:44 - ...and stay with him a while, until your brother's fury (rage) turns away." },
    { h: "לָשׁוֹן", e: "tongue", c: "21N M", v: "Gen 10:5 - ...each with his own language (tongue), by their clans." },
    { h: "עֶצֶם", e: "bone", c: "21N M", v: "Gen 2:23 - This at last is bone of my bones and flesh of my flesh." },
    { h: "קָהָל", e: "assembly", c: "21N M", v: "Gen 28:3 - ...may you become a company (assembly) of peoples." }
  ],
  "Ch 24": [
    { h: "אָמֵן", e: "to be faithful", c: "22V Ni", v: "Gen 15:6 - And he believed (trusted/was faithful) the LORD." },
    { h: "יָשַׁע", e: "to be saved", c: "22V Ni", v: "Ex 14:30 - Thus the LORD saved Israel that day from the hand of the Egyptians." },
    { h: "לָחַם", e: "to fight", c: "22V Ni", v: "Ex 14:14 - The LORD will fight for you, and you have only to be silent." },
    { h: "נָחַם", e: "to repent", c: "22V Ni", v: "Gen 6:6 - And the LORD regretted (repented) that he had made man on the earth." },
    { h: "שָׁחַת", e: "to destroy", c: "22V Hi", v: "Gen 6:12 - ...for all flesh had corrupted (destroyed) their way on the earth." },
    { h: "שָׁמַד", e: "to be destroyed", c: "22V Ni", v: "Gen 34:30 - ...I shall be destroyed, I and my household." }
  ],
  "Ch 25": [
    { h: "הָפַךְ", e: "to turn", c: "23V", v: "Gen 19:21 - ...that I will not overthrow (turn over) the city of which you have spoken." },
    { h: "זָנָה", e: "to play harlot", c: "23V", v: "Gen 38:24 - ...'Tamar your daughter-in-law has played the prostitute (harlot).'" },
    { h: "חָרָה", e: "to be angry", c: "23V", v: "Gen 4:6 - The LORD said to Cain, 'Why are you angry?'" },
    { h: "שָׁכַח", e: "to forget", c: "23V", v: "Gen 40:23 - Yet the chief cupbearer did not remember Joseph, but forgot him." },
    { h: "שָׁמֵם", e: "to be desolate", c: "23V", v: "Lev 26:31 - ...and I will make your sanctuaries desolate." },
    { h: "זָכָר", e: "male", c: "23N M", v: "Gen 1:27 - ...male and female he created them." }
  ],
  "Ch 26": [
    { h: "בָּקַשׁ", e: "to seek", c: "24V Pi", v: "Gen 37:15 - ...The man asked him, 'What are you seeking?'" },
    { h: "דָּבָר", e: "to speak", c: "24V Pi", v: "Gen 8:15 - Then God spoke to Noah, saying..." },
    { h: "הָלֵל", e: "to praise", c: "24V Pi", v: "Gen 12:15 - ...the princes of Pharaoh saw her and praised her to Pharaoh." },
    { h: "כָּסָה", e: "to cover", c: "24V Pi", v: "Gen 7:19 - ...and all the high mountains... were covered." },
    { h: "צָוָה", e: "to command", c: "24V Pi", v: "Gen 2:16 - And the LORD God commanded the man, saying..." },
    { h: "שָׁרַת", e: "to serve", c: "24V Pi", v: "Gen 39:4 - So Joseph found favor in his sight and attended (served) him." }
  ],
  "Ch 27": [
    { h: "גור", e: "to sojourn", c: "25V", v: "Gen 12:10 - ...Abram went down to Egypt to sojourn there." },
    { h: "לָמַד", e: "learn | teach", c: "25V Q|Pi", v: "Deut 4:1 - ...and the rules that I am teaching you, and do them." },
    { h: "מָשַׁל", e: "to rule", c: "25V", v: "Gen 1:18 - ...and to rule over the day and over the night." },
    { h: "עָנָה", e: "answer | oppress", c: "25V Q|Pi", v: "Gen 15:13 - ...and they will be servants there, and they will be afflicted (oppressed) for 400 years." },
    { h: "קָנָה", e: "to buy", c: "25V", v: "Gen 4:1 - ...I have gotten (bought/acquired) a man with the help of the LORD." },
    { h: "אָחוֹת", e: "sister", c: "25N F", v: "Gen 4:22 - ...The sister of Tubal-cain was Naamah." }
  ],
  "Ch 28": [
    { h: "אָסָר", e: "to bind", c: "26V", v: "Gen 42:24 - ...And he took Simeon from them and bound him before their eyes." },
    { h: "הָנַן", e: "to be gracious", c: "26V", v: "Gen 33:5 - ...'The children whom God has graciously given your servant.'" },
    { h: "זָעַק", e: "to cry out", c: "26V", v: "Ex 2:23 - ...the people of Israel groaned because of their slavery and cried out for help." },
    { h: "חָזָה", e: "to see", c: "26V", v: "Ex 24:11 - ...they beheld (saw) God, and ate and drank." },
    { h: "מָאַס", e: "to reject", c: "26V", v: "1 Sam 15:23 - Because you have rejected the word of the LORD, he has also rejected you from being king." },
    { h: "רָחַץ", e: "to wash", c: "26V", v: "Gen 18:4 - Let a little water be brought, and wash your feet." }
  ],
  "Ch 29": [
    { h: "לין", e: "to spend night", c: "27V", v: "Gen 19:2 - ...and turn aside to your servant's house and spend the night." },
    { h: "מָשַׁח", e: "to anoint", c: "27V", v: "Gen 31:13 - I am the God of Bethel, where you anointed a pillar..." },
    { h: "נָצַר", e: "to guard", c: "27V", v: "Ps 119:2 - Blessed are those who keep (guard) his testimonies." },
    { h: "גר", e: "sojourner", c: "27N M", v: "Gen 15:13 - ...your offspring will be sojourners in a land that is not theirs." },
    { h: "שִׂמְחָה", e: "joy", c: "27N F", v: "Gen 31:27 - ...so that I might have sent you away with mirth (joy) and songs." }
  ],
  "Ch 30": [
    { h: "נָגַד", e: "to report", c: "28V Hi", v: "Gen 3:11 - ...'Who told (reported) you that you were naked?'" },
    { h: "שָׁבַע", e: "swear | plead", c: "28V Ni|Hi", v: "Gen 21:23 - Now therefore swear to me here by God..." },
    { h: "דַּעַת", e: "knowledge", c: "28N F", v: "Gen 2:9 - ...the tree of the knowledge of good and evil." },
    { h: "מַלְכּוּת", e: "dominion", c: "28N F", v: "1 Chron 29:11 - Yours, O LORD, is the greatness... and the kingdom (dominion)." }
  ],
  "Ch 31": [
    { h: "אות", e: "sign", c: "29N M", v: "Gen 1:14 - ...and let them be for signs and for seasons..." },
    { h: "יְשׁוּעָה", e: "salvation", c: "29N F", v: "Gen 49:18 - I wait for your salvation, O LORD." },
    { h: "קֶדֶם", e: "east", c: "29N M", v: "Gen 2:8 - And the LORD God planted a garden in Eden, in the east." }
  ],
  "Ch 32-35": [
    { h: "צור", e: "rock", c: "30N M", v: "Ex 17:6 - Behold, I will stand before you there on the rock at Horeb." },
    { h: "קֶרֶן", e: "horn", c: "30N F", v: "Gen 22:13 - ...behold, a ram, caught in a thicket by his horns." },
    { h: "שׁוֹפָר", e: "trumpet", c: "32N M", v: "Ex 19:16 - ...and a very loud trumpet blast, so that all the people... trembled." },
    { h: "פָּלַל", e: "to pray", c: "32V Ht", v: "Gen 20:7 - ...for he is a prophet, and he will pray for you, and you shall live." },
    { h: "תְּפִלָה", e: "prayer", c: "33N F", v: "1 Kings 8:28 - ...listening to the cry and to the prayer that your servant prays before you." }
  ]
};
