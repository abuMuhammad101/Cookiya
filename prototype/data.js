// Data ported 1:1 from the web app (aaj-kya-banayein.html) so recipes/pantry/translations stay identical.

export const UR = {
  chicken:'Murgh', beef_mince:'Qeema', eggs:'Anday', chana_daal:'Chana Daal', chickpeas:'Channay',
  onion:'Pyaz', tomato:'Tamatar', potato:'Aloo', green_chili:'Hari Mirch', ginger_garlic_paste:'Adrak Lehsan Paste',
  spinach:'Palak', coriander_leaves:'Hara Dhania', mint_leaves:'Podina', mixed_veg:'Mix Sabziyan',
  yogurt:'Dahi', cream:'Malai', ghee:'Ghee', milk:'Doodh', rice:'Chawal', flour:'Atta', besan:'Besan',
  suji:'Suji', sugar:'Cheeni', cooking_oil:'Khana Pakane Ka Tel', biryani_masala:'Biryani Masala',
  food_color:'Khanay Wala Rang', dry_fruits:'Meva'
};

export const RECIPES = [
  {
    id:'chicken-karahi', name:'Chicken Karahi', emoji:'🍗', time:40, servings:4, difficulty:'Medium',
    tags:['Curry'], videoId:'DiEv4eqfAQw', videoTitle:'Highway Style Chicken Karahi — Food Fusion',
    ingredients:[
      {key:'chicken', label:'Chicken, curry cut', ur:'Murgh, curry cut', qty:'1 kg'},
      {key:'tomato', label:'Tomatoes', ur:'Tamatar', qty:'4 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tbsp'},
      {key:'green_chili', label:'Green chillies', ur:'Hari mirch', qty:'4-5'},
      {key:'yogurt', label:'Yogurt', ur:'Dahi', qty:'2 tbsp'},
      {key:'cooking_oil', label:'Cooking oil', ur:'Cooking tel', qty:'1/2 cup'},
      {key:'coriander_leaves', label:'Fresh coriander', ur:'Taaza hara dhania', qty:'a handful'},
      {staple:true, label:'Salt, red chilli, cumin, black pepper', ur:'Namak, lal mirch, zeera, kali mirch'},
    ],
    steps:[
      'Heat oil in a wok and sear the chicken on high heat for a few minutes until it changes colour.',
      'Add ginger garlic paste and cook for a couple of minutes until the raw smell fades.',
      'Add roughly chopped tomatoes, cover and simmer on low heat until they break down completely, about 20 minutes.',
      'Uncover, mash the tomatoes in and cook on high heat until oil separates at the edges.',
      'Lower the heat and stir in the yogurt until fully mixed in.',
      'Finish with slit green chillies, julienned ginger and fresh coriander, then cook on high heat for a final couple of minutes.',
      'Serve hot with naan or steamed rice.'
    ],
    source:'Inspired by Food Fusion\'s "Highway Style Chicken Karahi" — tap Video below to watch it.'
  },
  {
    id:'daal-chawal', name:'Chana Daal with Rice', emoji:'🍛', time:35, servings:4, difficulty:'Easy',
    tags:['Vegetarian'], videoId:'xhHuGoAtoZo', videoTitle:'Chana Daal Fry Restaurant Style — Food Fusion',
    ingredients:[
      {key:'chana_daal', label:'Chana daal, soaked', ur:'Chana daal, bhigi hui', qty:'1 cup'},
      {key:'onion', label:'Onion, sliced', ur:'Pyaz, cut ki hui', qty:'1 large'},
      {key:'tomato', label:'Tomato, chopped', ur:'Tamatar, kaata hua', qty:'1 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tsp'},
      {key:'rice', label:'Rice', ur:'Chawal', qty:'1.5 cups'},
      {key:'ghee', label:'Ghee', ur:'Ghee', qty:'2 tbsp'},
      {staple:true, label:'Salt, turmeric, cumin seeds', ur:'Namak, haldi, zeera'},
    ],
    steps:[
      'Boil the soaked chana daal with turmeric and salt until soft but still holding its shape.',
      'In a separate pan, fry sliced onion in ghee until golden, then set half aside for the tarka.',
      'Add ginger garlic paste and chopped tomato to the pan and cook until soft and pulpy.',
      'Add the boiled daal along with its water, mix well and simmer for 8-10 minutes.',
      'Top with the reserved fried onion as a finishing tarka.',
      'Separately cook the rice until fluffy and serve alongside the daal.'
    ],
    source:'Inspired by Food Fusion\'s "Chana Daal Fry Restaurant Style" — tap Video below to watch it.'
  },
  {
    id:'chicken-biryani', name:'Chicken Biryani', emoji:'🍚', time:70, servings:5, difficulty:'Medium',
    tags:['Rice & Biryani'], videoId:'GZm7cmKK1bk', videoTitle:'Simplest Biryani Recipe — Food Fusion',
    ingredients:[
      {key:'chicken', label:'Chicken', ur:'Murgh', qty:'1 kg'},
      {key:'rice', label:'Basmati rice', ur:'Basmati chawal', qty:'3 cups'},
      {key:'onion', label:'Onion, fried', ur:'Tali hui pyaz', qty:'2 large'},
      {key:'tomato', label:'Tomatoes', ur:'Tamatar', qty:'3 medium'},
      {key:'yogurt', label:'Yogurt', ur:'Dahi', qty:'1 cup'},
      {key:'biryani_masala', label:'Biryani masala', ur:'Biryani masala', qty:'3 tbsp'},
      {key:'mint_leaves', label:'Mint leaves', ur:'Podina', qty:'a handful'},
      {key:'coriander_leaves', label:'Fresh coriander', ur:'Taaza hara dhania', qty:'a handful'},
      {key:'food_color', label:'Yellow/orange food colour', ur:'Zarda rang', qty:'a pinch'},
      {staple:true, label:'Salt, whole spices, ginger garlic paste', ur:'Namak, sabut garam masala, adrak lehsan paste'},
    ],
    steps:[
      'Parboil the rice with whole spices and salt until about three-quarters done, then drain.',
      'Cook the chicken with onion, tomatoes, yogurt and biryani masala into a thick gravy.',
      'Layer half the rice over the chicken gravy, then top with fried onion, mint and coriander.',
      'Add the remaining rice as a final layer and sprinkle dissolved food colour on top.',
      'Cover tightly and steam on very low heat (dum) for 12-15 minutes.',
      'Gently fold the layers together just before serving with raita and salad.'
    ],
    source:'Inspired by Food Fusion\'s "Simplest Biryani Recipe" — tap Video below to watch it.'
  },
  {
    id:'aloo-keema', name:'Aloo Keema', emoji:'🥔', time:35, servings:4, difficulty:'Easy',
    tags:['Curry'], videoId:'ewat8Dt52l8', videoTitle:'Dhaba Style Aloo Keema — Food Fusion',
    ingredients:[
      {key:'beef_mince', label:'Beef mince (qeema)', ur:'Qeema', qty:'500 g'},
      {key:'potato', label:'Potatoes, cubed', ur:'Aloo, cubes mein cut kiye hue', qty:'2 medium'},
      {key:'onion', label:'Onion, chopped', ur:'Pyaz, kaati hui', qty:'1 medium'},
      {key:'tomato', label:'Tomato, chopped', ur:'Tamatar, kaata hua', qty:'2 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tbsp'},
      {key:'green_chili', label:'Green chillies', ur:'Hari mirch', qty:'2-3'},
      {staple:true, label:'Salt, red chilli, turmeric, cumin, coriander powder', ur:'Namak, lal mirch, haldi, zeera, dhania powder'},
    ],
    steps:[
      'Sauté the chopped onion until soft, then add ginger garlic paste and cook briefly.',
      'Add the mince and break it up well, cooking until it changes colour.',
      'Stir in the tomatoes and spices, then cover and cook until the mince is tender and the oil separates.',
      'Add the cubed potatoes with a little water, cover and simmer until the potatoes are fully cooked.',
      'Finish with green chillies and fresh coriander, then serve with roti.'
    ],
    source:'Inspired by Food Fusion\'s "Dhaba Style Aloo Keema" — tap Video below to watch it.'
  },
  {
    id:'vegetable-pulao', name:'Vegetable Pulao', emoji:'🥕', time:35, servings:4, difficulty:'Easy',
    tags:['Vegetarian','Rice & Biryani'], videoId:'xVKqauZjwXE', videoTitle:'Mix Vegetable Tehari/Pulao — Food Fusion',
    ingredients:[
      {key:'rice', label:'Rice', ur:'Chawal', qty:'2 cups'},
      {key:'mixed_veg', label:'Mixed vegetables (peas, carrot, beans)', ur:'Mix sabziyan (matar, gajar, phaliyan)', qty:'1.5 cups'},
      {key:'onion', label:'Onion, sliced', ur:'Pyaz, cut ki hui', qty:'1 medium'},
      {key:'ghee', label:'Ghee', ur:'Ghee', qty:'3 tbsp'},
      {staple:true, label:'Salt, whole garam masala, cumin', ur:'Namak, sabut garam masala, zeera'},
    ],
    steps:[
      'Heat ghee and fry whole spices until fragrant, then add sliced onion and cook until golden.',
      'Add the mixed vegetables and stir-fry for a few minutes.',
      'Add washed rice and gently mix so the grains are coated in ghee without breaking.',
      'Pour in measured hot water and salt, bring to a boil, then cover.',
      'Cook on low heat until the rice is tender and the water is absorbed, then rest for 5 minutes before fluffing.'
    ],
    source:'Inspired by Food Fusion\'s "Mix Vegetable Tehari/Pulao" — tap Video below to watch it.'
  },
  {
    id:'anda-curry', name:'Anda Curry (Egg Curry)', emoji:'🥚', time:25, servings:3, difficulty:'Easy',
    tags:['Curry'], videoId:'sCJmfjSQWqI', videoTitle:'Dhaba Anda (Egg) Recipe — Food Fusion',
    ingredients:[
      {key:'eggs', label:'Eggs, boiled', ur:'Ubaley huye anday', qty:'6'},
      {key:'onion', label:'Onion, chopped', ur:'Pyaz, kaati hui', qty:'1 medium'},
      {key:'tomato', label:'Tomato, chopped', ur:'Tamatar, kaata hua', qty:'2 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tsp'},
      {key:'yogurt', label:'Yogurt', ur:'Dahi', qty:'2 tbsp'},
      {staple:true, label:'Salt, red chilli, turmeric, coriander powder', ur:'Namak, lal mirch, haldi, dhania powder'},
    ],
    steps:[
      'Fry the chopped onion until golden, then add ginger garlic paste and cook briefly.',
      'Add tomatoes and spices, cooking until the mixture turns into a soft, thick masala.',
      'Whisk in the yogurt on low heat so it doesn\'t split, then add a little water for a curry consistency.',
      'Lightly score the boiled eggs and add them to the curry, simmering for 5-7 minutes so they soak up the flavour.',
      'Garnish with fresh coriander and serve with rice or roti.'
    ],
    source:'Inspired by Food Fusion\'s "Dhaba Anda (Egg) Recipe" — tap Video below to watch it.'
  },
  {
    id:'seekh-kebab', name:'Beef Seekh Kebab', emoji:'🍢', time:40, servings:4, difficulty:'Medium',
    tags:['Kebab & BBQ'], videoId:'CF8uV9u8P9U', videoTitle:'Beef Seekh Kabab (Bakra Eid Special) — Food Fusion',
    ingredients:[
      {key:'beef_mince', label:'Beef mince, fine', ur:'Baareek qeema', qty:'500 g'},
      {key:'onion', label:'Onion, grated & squeezed dry', ur:'Pyaz, kaddukas aur pani nichoda hua', qty:'1 small'},
      {key:'green_chili', label:'Green chillies, chopped', ur:'Hari mirch, kaati hui', qty:'2-3'},
      {key:'coriander_leaves', label:'Fresh coriander, chopped', ur:'Hara dhania, kaata hua', qty:'a handful'},
      {key:'besan', label:'Roasted gram flour (besan)', ur:'Bhuna hua besan', qty:'2 tbsp'},
      {staple:true, label:'Salt, red chilli, cumin, garam masala', ur:'Namak, lal mirch, zeera, garam masala'},
    ],
    steps:[
      'Combine the mince with grated onion, green chillies, coriander, roasted besan and spices.',
      'Knead the mixture well by hand for a few minutes until it becomes sticky and holds together.',
      'Cover and rest in the fridge for at least 30 minutes so the kebabs hold their shape on skewers.',
      'Mould the mixture onto skewers into long kebab shapes.',
      'Grill or pan-sear, turning occasionally, until browned and cooked through.',
      'Serve with naan, chutney and sliced onions.'
    ],
    source:'Inspired by Food Fusion\'s "Beef Seekh Kabab (Bakra Eid Special)" — tap Video below to watch it.'
  },
  {
    id:'chicken-handi', name:'Chicken Handi', emoji:'🍲', time:45, servings:4, difficulty:'Medium',
    tags:['Curry'], videoId:'43IGojUAkKg', videoTitle:'Chicken Reshmi Handi — Food Fusion',
    ingredients:[
      {key:'chicken', label:'Chicken', ur:'Murgh', qty:'1 kg'},
      {key:'yogurt', label:'Yogurt', ur:'Dahi', qty:'1/2 cup'},
      {key:'cream', label:'Cream', ur:'Malai', qty:'1/4 cup'},
      {key:'tomato', label:'Tomatoes', ur:'Tamatar', qty:'3 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tbsp'},
      {key:'dry_fruits', label:'Cashews, ground', ur:'Kaju, pisa hua', qty:'a small handful'},
      {staple:true, label:'Salt, red chilli, garam masala, kasuri methi', ur:'Namak, lal mirch, garam masala, kasuri methi'},
    ],
    steps:[
      'Cook the chicken with ginger garlic paste until it changes colour and releases its juices.',
      'Add pureed tomatoes and spices, then cover and simmer until the oil separates.',
      'Stir in the ground cashews and yogurt on low heat, mixing continuously so it stays smooth.',
      'Add cream and a pinch of crushed kasuri methi, then simmer for a final few minutes.',
      'Garnish with julienned ginger and coriander, and serve with naan.'
    ],
    source:'Inspired by Food Fusion\'s "Chicken Reshmi Handi" — tap Video below to watch it.'
  },
  {
    id:'chana-masala', name:'Chana Masala', emoji:'🫘', time:30, servings:4, difficulty:'Easy',
    tags:['Vegetarian'], videoId:'A7be7MxdTY8', videoTitle:'Chana Masala & Poori — Food Fusion',
    ingredients:[
      {key:'chickpeas', label:'Chickpeas, boiled', ur:'Ubaley huye channay', qty:'2 cups'},
      {key:'onion', label:'Onion, chopped', ur:'Pyaz, kaati hui', qty:'1 medium'},
      {key:'tomato', label:'Tomato, chopped', ur:'Tamatar, kaata hua', qty:'2 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tsp'},
      {key:'coriander_leaves', label:'Fresh coriander', ur:'Taaza hara dhania', qty:'a handful'},
      {staple:true, label:'Salt, red chilli, turmeric, coriander & cumin powder', ur:'Namak, lal mirch, haldi, dhania aur zeera powder'},
    ],
    steps:[
      'Fry the onion until golden, then add ginger garlic paste and cook briefly.',
      'Add tomatoes and spices, cooking down into a thick, well-cooked masala.',
      'Add the boiled chickpeas along with a little of their cooking water and simmer for 10 minutes.',
      'Lightly mash a few chickpeas to thicken the gravy naturally.',
      'Finish with fresh coriander and a squeeze of lemon, then serve with rice or naan.'
    ],
    source:'Inspired by Food Fusion\'s "Chana Masala & Poori" — tap Video below to watch it.'
  },
  {
    id:'aloo-palak', name:'Aloo Palak', emoji:'🥬', time:30, servings:4, difficulty:'Easy',
    tags:['Vegetarian'], videoId:'BGu5jE-abUw', videoTitle:'Jhatpat Aloo Palak — Food Fusion',
    ingredients:[
      {key:'potato', label:'Potatoes, cubed', ur:'Aloo, cubes mein cut kiye hue', qty:'2 medium'},
      {key:'spinach', label:'Spinach, chopped', ur:'Palak, kaati hui', qty:'1 large bunch'},
      {key:'onion', label:'Onion, chopped', ur:'Pyaz, kaati hui', qty:'1 medium'},
      {key:'tomato', label:'Tomato, chopped', ur:'Tamatar, kaata hua', qty:'1 medium'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tsp'},
      {staple:true, label:'Salt, red chilli, turmeric, cumin seeds', ur:'Namak, lal mirch, haldi, zeera'},
    ],
    steps:[
      'Fry cumin seeds in oil, then add chopped onion and cook until soft.',
      'Add ginger garlic paste, tomato and spices, cooking until it forms a soft masala.',
      'Add the cubed potatoes, mix well, cover and cook until nearly tender.',
      'Add the chopped spinach and a splash of water, then cover and cook until the spinach wilts down and the potatoes finish cooking.',
      'Mash lightly for a homely texture and serve with roti.'
    ],
    source:'Inspired by Food Fusion\'s "Jhatpat Aloo Palak" — tap Video below to watch it.'
  },
  {
    id:'chicken-pulao', name:'Chicken Pulao', emoji:'🍗', time:50, servings:4, difficulty:'Medium',
    tags:['Rice & Biryani'], videoId:'QaZWOGs82Nw', videoTitle:'Chicken Yakhni Pulao — Food Fusion',
    ingredients:[
      {key:'chicken', label:'Chicken', ur:'Murgh', qty:'750 g'},
      {key:'rice', label:'Rice', ur:'Chawal', qty:'2.5 cups'},
      {key:'onion', label:'Onion, sliced', ur:'Pyaz, cut ki hui', qty:'1 large'},
      {key:'yogurt', label:'Yogurt', ur:'Dahi', qty:'2 tbsp'},
      {staple:true, label:'Salt, whole garam masala, ginger garlic paste', ur:'Namak, sabut garam masala, adrak lehsan paste'},
    ],
    steps:[
      'Fry sliced onion until golden brown and set aside for garnish.',
      'In the same oil, cook the chicken with ginger garlic paste and whole spices until lightly browned.',
      'Add water to make a light stock, simmer until the chicken is tender, then strain and reserve the stock.',
      'Add washed rice to the measured stock along with yogurt, bring to a boil, then cover.',
      'Cook on low heat until the rice absorbs the stock and is fully done, then fold the chicken back in.',
      'Top with fried onion before serving.'
    ],
    source:'Inspired by Food Fusion\'s "Chicken Yakhni Pulao" — tap Video below to watch it.'
  },
  {
    id:'aloo-paratha', name:'Aloo Paratha', emoji:'🫓', time:30, servings:4, difficulty:'Easy',
    tags:['Breakfast'], videoId:'5xLl6urVixg', videoTitle:'Aloo Ka Paratha — Food Fusion',
    ingredients:[
      {key:'flour', label:'Wheat flour (atta)', ur:'Atta', qty:'2 cups'},
      {key:'potato', label:'Potatoes, boiled & mashed', ur:'Aloo, ubaley aur mashed', qty:'3 medium'},
      {key:'onion', label:'Onion, finely chopped', ur:'Pyaz, baareek kaati hui', qty:'1 small'},
      {key:'green_chili', label:'Green chillies, chopped', ur:'Hari mirch, kaati hui', qty:'2'},
      {key:'coriander_leaves', label:'Fresh coriander', ur:'Taaza hara dhania', qty:'a handful'},
      {key:'cooking_oil', label:'Oil or ghee for frying', ur:'Talne ke liye tel ya ghee', qty:'as needed'},
      {staple:true, label:'Salt, red chilli, ajwain', ur:'Namak, lal mirch, ajwain'},
    ],
    steps:[
      'Knead the flour into a soft dough with water and a little oil, then rest for 15 minutes.',
      'Mix the mashed potato with onion, green chillies, coriander and spices to make the filling.',
      'Roll out a small disc of dough, place a portion of filling in the centre and seal it into a stuffed ball.',
      'Roll the stuffed ball out gently into a paratha, being careful not to let the filling burst out.',
      'Cook on a hot griddle with a little oil or ghee on both sides until golden and crisp.',
      'Serve hot with yogurt, pickle or chai.'
    ],
    source:'Inspired by Food Fusion\'s "Aloo Ka Paratha" — tap Video below to watch it.'
  },
  {
    id:'suji-halwa', name:'Suji ka Halwa', emoji:'🍮', time:25, servings:4, difficulty:'Easy',
    tags:['Dessert'], videoId:'ayhzvHw4NrU', videoTitle:'Suji Ka Doodh Wala Halwa — Food Fusion',
    ingredients:[
      {key:'suji', label:'Semolina (suji)', ur:'Suji', qty:'1 cup'},
      {key:'sugar', label:'Sugar', ur:'Cheeni', qty:'1 cup'},
      {key:'ghee', label:'Ghee', ur:'Ghee', qty:'1/2 cup'},
      {key:'milk', label:'Milk', ur:'Doodh', qty:'1 cup'},
      {key:'dry_fruits', label:'Chopped dry fruits', ur:'Kaate huye meve', qty:'a handful'},
      {staple:true, label:'A pinch of cardamom powder', ur:'Thori si elaichi powder'},
    ],
    steps:[
      'Roast the semolina in ghee on low heat until it turns light golden and fragrant.',
      'Meanwhile, warm the milk with an equal amount of water and dissolve the sugar into it.',
      'Slowly pour the warm liquid into the roasted semolina while stirring constantly to avoid lumps.',
      'Add cardamom powder and cook on low heat until the mixture thickens and leaves the sides of the pan.',
      'Garnish with chopped dry fruits and serve warm.'
    ],
    source:'Inspired by Food Fusion\'s "Suji Ka Doodh Wala Halwa" — tap Video below to watch it.'
  },
  {
    id:'malai-boti', name:'Chicken Malai Boti', emoji:'🍖', time:45, servings:4, difficulty:'Medium',
    tags:['Kebab & BBQ'], videoId:'DL0w2dmBgTc', videoTitle:'Chicken Malai Boti — Food Fusion',
    ingredients:[
      {key:'chicken', label:'Chicken boneless, cubed', ur:'Boneless murgh, cubes mein cut kiya hua', qty:'750 g'},
      {key:'cream', label:'Cream', ur:'Malai', qty:'1/4 cup'},
      {key:'yogurt', label:'Yogurt', ur:'Dahi', qty:'1/4 cup'},
      {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:'Adrak lehsan paste', qty:'1 tbsp'},
      {key:'cooking_oil', label:'Cooking oil', ur:'Cooking tel', qty:'2 tbsp'},
      {staple:true, label:'Salt, white pepper, garam masala', ur:'Namak, safed mirch, garam masala'},
    ],
    steps:[
      'Combine cream, yogurt, ginger garlic paste, oil and spices into a smooth marinade.',
      'Coat the chicken cubes thoroughly and marinate in the fridge for at least 2 hours, ideally overnight.',
      'Thread the chicken onto skewers, leaving a little space between pieces for even cooking.',
      'Grill or pan-sear on medium-high heat, turning and basting occasionally, until charred spots appear and the chicken is cooked through.',
      'Serve with mint chutney, naan and salad.'
    ],
    source:'Inspired by Food Fusion\'s "Chicken Malai Boti" — tap Video below to watch it.'
  },
];

export const PANTRY_ITEMS = [
  {key:'chicken', label:'Chicken', ur:UR.chicken, cat:'Proteins'},
  {key:'beef_mince', label:'Beef mince (qeema)', ur:UR.beef_mince, cat:'Proteins'},
  {key:'eggs', label:'Eggs', ur:UR.eggs, cat:'Proteins'},
  {key:'chana_daal', label:'Chana daal', ur:UR.chana_daal, cat:'Proteins'},
  {key:'chickpeas', label:'Chickpeas (channay)', ur:UR.chickpeas, cat:'Proteins'},
  {key:'onion', label:'Onion', ur:UR.onion, cat:'Vegetables'},
  {key:'tomato', label:'Tomatoes', ur:UR.tomato, cat:'Vegetables'},
  {key:'potato', label:'Potatoes', ur:UR.potato, cat:'Vegetables'},
  {key:'green_chili', label:'Green chillies', ur:UR.green_chili, cat:'Vegetables'},
  {key:'ginger_garlic_paste', label:'Ginger garlic paste', ur:UR.ginger_garlic_paste, cat:'Vegetables'},
  {key:'spinach', label:'Spinach (palak)', ur:UR.spinach, cat:'Vegetables'},
  {key:'coriander_leaves', label:'Fresh coriander', ur:UR.coriander_leaves, cat:'Vegetables'},
  {key:'mint_leaves', label:'Mint leaves', ur:UR.mint_leaves, cat:'Vegetables'},
  {key:'mixed_veg', label:'Mixed vegetables (peas/carrot)', ur:UR.mixed_veg, cat:'Vegetables'},
  {key:'yogurt', label:'Yogurt', ur:UR.yogurt, cat:'Dairy'},
  {key:'cream', label:'Cream', ur:UR.cream, cat:'Dairy'},
  {key:'ghee', label:'Ghee', ur:UR.ghee, cat:'Dairy'},
  {key:'milk', label:'Milk', ur:UR.milk, cat:'Dairy'},
  {key:'rice', label:'Rice', ur:UR.rice, cat:'Pantry'},
  {key:'flour', label:'Wheat flour (atta)', ur:UR.flour, cat:'Pantry'},
  {key:'besan', label:'Gram flour (besan)', ur:UR.besan, cat:'Pantry'},
  {key:'suji', label:'Semolina (suji)', ur:UR.suji, cat:'Pantry'},
  {key:'sugar', label:'Sugar', ur:UR.sugar, cat:'Pantry'},
  {key:'cooking_oil', label:'Cooking oil', ur:UR.cooking_oil, cat:'Pantry'},
  {key:'biryani_masala', label:'Biryani masala', ur:UR.biryani_masala, cat:'Spice mixes'},
  {key:'food_color', label:'Food colour', ur:UR.food_color, cat:'Spice mixes'},
  {key:'dry_fruits', label:'Dry fruits / nuts', ur:UR.dry_fruits, cat:'Spice mixes'},
];

export const CATEGORIES = ['All','Curry','Rice & Biryani','Kebab & BBQ','Vegetarian','Breakfast','Dessert'];

export const DEFAULT_PANTRY = {onion:true, tomato:true, ginger_garlic_paste:true, cooking_oil:true, potato:true, rice:true};
