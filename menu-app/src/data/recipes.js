import ItalianImg from "../assets/Cuisines/Italian.jpg";
import NorthIndianImg from "../assets/Cuisines/NorthIndian.jpg";
import SouthIndianImg from "../assets/Cuisines/South Indian.jpg";
import ChineseImg from "../assets/Cuisines/Chinese.jpg";
import ThaiImg from "../assets/Cuisines/Thai.jpg";
import MexicanImg from "../assets/Cuisines/Mexican.jpg";
import JapaneseImg from "../assets/Cuisines/Japanese.jpg";

const recipes = [
  // ---------------- ITALIAN ----------------
  
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "20 mins",
    difficulty: "Medium",
    image: "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil"],
    steps: [
      "Preheat oven to 500°F (260°C).",
      "Stretch dough and add sauce, mozzarella and basil.",
      "Bake until crust is golden and cheese is bubbly."
    ],
    video: "https://www.youtube.com/watch?v=vcfNpDtVqOw",
    fav: true
  },
  {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    veg: false,
    tags: ["Lunch", "High protein"],
    cookingTime: "25 mins",
    difficulty: "Medium",
    image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Pepper"],
    steps: [
      "Cook pasta al dente.",
      "Fry pancetta until crisp.",
      "Toss pasta with eggs, cheese and pancetta off the heat."
    ],
    video: "https://www.youtube.com/watch?v=3AAdKl1UYZs",
    fav: false
  },
  {
    id: "fettuccine-alfredo",
    title: "Fettuccine Alfredo",
    cuisine: "Italian",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "20 mins",
    difficulty: "Easy",
    image: "https://www.simplyrecipes.com/thmb/M8XKDSLRjM-zGL90tk-o2Tj6bAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Copycat-Olive-Garden-Alfredo-LEAD-4-8f75111d3a324a0abb1ee46906f27417.jpg",
    ingredients: ["Fettuccine pasta", "Butter", "Heavy cream", "Parmesan cheese", "Garlic", "Black pepper"],
    steps: [
      "Cook fettuccine until al dente.",
      "Prepare sauce with butter, garlic, and cream.",
      "Toss pasta with sauce and parmesan."
    ],
    video: "https://www.youtube.com/watch?v=Sk9HCxfIREo",
    fav: true
  },
  {
    id: "bruschetta",
    title: "Bruschetta",
    cuisine: "Italian",
    veg: true,
    tags: ["Snacks"],
    cookingTime: "15 mins",
    difficulty: "Easy",
    image: "https://www.simplyorganic.com/media/wysiwyg/tmp/simply-oragnic-Roasted-Tomato-Bruschetta-1080x1080-thumbnail.jpg",
    ingredients: ["Bread slices", "Tomatoes", "Garlic", "Olive oil", "Basil", "Salt"],
    steps: [
      "Toast bread slices until crisp.",
      "Mix chopped tomatoes with garlic and olive oil.",
      "Top bread with tomato mixture and basil."
    ],
    video: "https://www.youtube.com/watch?v=7vZxvH3t3Zg"
  },
  {
    id: "risotto-mushroom",
    title: "Mushroom Risotto",
    cuisine: "Italian",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "40 mins",
    difficulty: "Hard",
    image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x1536/sd-aspect-1504128527-delish-mushroom-risotto.jpg?resize=1200:*",
    ingredients: ["Arborio rice", "Mushrooms", "Vegetable stock", "Onion", "Butter", "Parmesan cheese"],
    steps: [
      "Sauté onions and mushrooms.",
      "Add rice and gradually add stock while stirring.",
      "Finish with butter and parmesan."
    ],
    video: "https://www.youtube.com/watch?v=NKtR3KpS83w"
  },
  {
    id: "gnocchi",
    title: "Potato Gnocchi",
    cuisine: "Italian",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "60 mins",
    difficulty: "Hard",
    image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2025-02/Potato-Gnocchi_2025_Lifestyle_ALT_H_045.jpg?itok=bYYFrg-L",
    ingredients: ["Potatoes", "Flour", "Egg", "Salt", "Butter", "Sage"],
    steps: [
      "Boil and mash potatoes.",
      "Mix with flour and egg to form dough.",
      "Shape gnocchi and boil until they float."
    ],
    video: "https://www.youtube.com/watch?v=ZbK9Qf1g2X8"
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    cuisine: "North Indian",
    veg: false,
    tags: ["Lunch", "High protein"],
    cookingTime: "45 mins",
    difficulty: "Medium",
    image: NorthIndianImg,
    ingredients: ["Chicken", "Butter", "Tomato puree", "Cream", "Garam masala", "Ginger garlic paste"],
    steps: [
      "Marinate chicken and grill until cooked.",
      "Prepare tomato-based gravy with butter and spices.",
      "Add chicken and cream, simmer until rich and smooth."
    ],
    video: "https://www.youtube.com/watch?v=a03U45jFxOI"
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    cuisine: "North Indian",
    veg: true,
    tags: ["Lunch", "High protein"],
    cookingTime: "35 mins",
    difficulty: "Medium",
    image: NorthIndianImg,
    ingredients: ["Paneer", "Butter", "Tomatoes", "Cashews", "Cream", "Spices"],
    steps: [
      "Blend tomatoes and cashews into a smooth paste.",
      "Cook paste with butter and spices.",
      "Add paneer cubes and cream, simmer gently."
    ],
    video: "https://www.youtube.com/watch?v=bUounn_Bmy4"
  },
  {
    id: "veg-fried-rice",
    title: "Veg Fried Rice",
    cuisine: "Chinese",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "20 mins",
    difficulty: "Easy",
    image: "https://www.flavoursonplate.com/wp-content/uploads/2019/05/Veg-fried-rice.jpg",
    ingredients: ["Cooked rice", "Carrot", "Beans", "Spring onions", "Garlic", "Soy sauce"],
    steps: [
      "Heat oil and sauté garlic.",
      "Add vegetables and stir-fry on high heat.",
      "Add rice and soy sauce, toss well."
    ],
    video: "https://www.youtube.com/watch?v=8ZkqvZ2u7nA"
  },
  {
    id: "veg-hakka-noodles",
    title: "Veg Hakka Noodles",
    cuisine: "Chinese",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "25 mins",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop",
    ingredients: ["Hakka noodles", "Cabbage", "Carrot", "Capsicum", "Soy sauce", "Vinegar"],
    steps: [
      "Boil noodles and drain.",
      "Stir-fry vegetables on high heat.",
      "Add noodles and sauces, toss well."
    ],
    video: "https://www.youtube.com/watch?v=2bFJX7Bv0NQ"
  },
  {
    id: "veg-manchurian",
    title: "Veg Manchurian",
    cuisine: "Chinese",
    veg: true,
    tags: ["Snacks", "Spicy"],
    cookingTime: "40 mins",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&h=600&fit=crop",
    ingredients: ["Cabbage", "Carrot", "Cornflour", "Garlic", "Ginger", "Soy sauce", "Chili sauce"],
    steps: [
      "Prepare vegetable balls and deep fry.",
      "Make Manchurian sauce in a wok.",
      "Toss fried balls in sauce."
    ],
    video: "https://www.youtube.com/watch?v=J9d4zBvN5G4"
  },
  {
    id: "chilli-paneer",
    title: "Chilli Paneer",
    cuisine: "Chinese",
    veg: true,
    tags: ["Snacks", "Spicy", "High protein"],
    cookingTime: "30 mins",
    difficulty: "Medium",
    image: "https://howtomakerecipes.com/wp-content/uploads/2023/01/chilli-paneer-starter-recipe1.jpg",
    ingredients: ["Paneer", "Capsicum", "Onions", "Soy sauce", "Chili sauce", "Cornflour"],
    steps: [
      "Fry paneer cubes until golden.",
      "Stir-fry vegetables and sauces.",
      "Add paneer and toss well."
    ],
    video: "https://www.youtube.com/watch?v=0jKz0yL8fH4"
  },
  {
    id: "spring-rolls",
    title: "Veg Spring Rolls",
    cuisine: "Chinese",
    veg: true,
    tags: ["Snacks"],
    cookingTime: "45 mins",
    difficulty: "Hard",
    image: "https://www.womansworld.com/wp-content/uploads/2023/09/airfryer13.jpg?quality=86&strip=all",
    ingredients: ["Spring roll wrappers", "Cabbage", "Carrot", "Beans", "Garlic", "Soy sauce"],
    steps: [
      "Prepare vegetable filling.",
      "Fill and roll wrappers tightly.",
      "Deep fry until crisp and golden."
    ],
    video: "https://www.youtube.com/watch?v=Yc5yQ5wGm9k"
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    cuisine: "Thai",
    veg: false,
    tags: ["Lunch", "High protein"],
    cookingTime: "30 mins",
    difficulty: "Medium",
    image: ThaiImg,
    ingredients: ["Rice noodles", "Tofu", "Eggs", "Bean sprouts", "Spring onions", "Peanuts", "Tamarind paste", "Fish sauce / Soy sauce"],
    steps: [
      "Soak rice noodles until soft.",
      "Stir-fry tofu and eggs in a wok.",
      "Add noodles, sauce, and toss well.",
      "Top with peanuts and spring onions."
    ],
    video: "https://www.youtube.com/watch?v=b7YnoRFuZ9o"
  },
  {
    id: "green-curry",
    title: "Thai Green Curry",
    cuisine: "Thai",
    veg: true,
    tags: ["Lunch", "Spicy"],
    cookingTime: "35 mins",
    difficulty: "Medium",
    image: ThaiImg,
    ingredients: ["Green curry paste", "Coconut milk", "Vegetables", "Basil leaves", "Soy sauce", "Sugar"],
    steps: [
      "Heat curry paste in a pan.",
      "Add coconut milk and simmer.",
      "Add vegetables and cook until tender.",
      "Finish with basil leaves."
    ],
    video: "https://www.youtube.com/watch?v=LIbKVpBQKJI"
  },
  {
    id: "veg-tacos",
    title: "Veg Tacos",
    cuisine: "Mexican",
    veg: true,
    tags: ["Lunch", "Spicy"],
    cookingTime: "25 mins",
    difficulty: "Easy",
    image: MexicanImg,
    ingredients: ["Taco shells", "Bell peppers", "Onions", "Beans", "Corn", "Cheese", "Taco seasoning"],
    steps: [
      "Sauté vegetables with taco seasoning.",
      "Warm taco shells.",
      "Fill shells with vegetables and cheese."
    ],
    video: "https://www.youtube.com/watch?v=7D6CqI5z1Xs"
  },
  {
    id: "quesadilla",
    title: "Cheese Quesadilla",
    cuisine: "Mexican",
    veg: true,
    tags: ["Snacks"],
    cookingTime: "15 mins",
    difficulty: "Easy",
    image: MexicanImg,
    ingredients: ["Tortillas", "Cheese", "Bell peppers", "Onions", "Butter"],
    steps: [
      "Place cheese and vegetables on tortilla.",
      "Fold and cook on pan until golden.",
      "Serve hot with salsa."
    ],
    video: "https://www.youtube.com/watch?v=0l4gF8tC0H8"
  },
  {
    id: "veg-sushi",
    title: "Veg Sushi Rolls",
    cuisine: "Japanese",
    veg: true,
    tags: ["Lunch", "Snacks"],
    cookingTime: "50 mins",
    difficulty: "Hard",
    image: JapaneseImg,
    ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Carrot", "Avocado", "Rice vinegar"],
    steps: [
      "Prepare sushi rice with vinegar.",
      "Place rice on nori sheet.",
      "Add vegetables and roll tightly.",
      "Slice into pieces."
    ],
    video: "https://www.youtube.com/watch?v=I1UDS2kgqY8"
  },
  {
    id: "veg-ramen",
    title: "Veg Ramen",
    cuisine: "Japanese",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "30 mins",
    difficulty: "Medium",
    image: JapaneseImg,
    ingredients: ["Ramen noodles", "Vegetable broth", "Mushrooms", "Spring onions", "Soy sauce", "Sesame oil"],
    steps: [
      "Boil ramen noodles separately.",
      "Simmer broth with soy sauce and sesame oil.",
      "Add noodles and vegetables.",
      "Garnish with spring onions."
    ],
    video: "https://www.youtube.com/watch?v=VnMZ7mV2u5A"
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    cuisine: "South Indian",
    veg: true,
    tags: ["Breakfast"],
    cookingTime: "30 mins",
    difficulty: "Medium",
    image: SouthIndianImg,
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Curry leaves"],
    steps: [
      "Prepare spiced potato filling.",
      "Spread dosa batter thin on hot tawa.",
      "Place filling inside dosa and fold."
    ],
    video: "https://www.youtube.com/watch?v=CCab5oh0ZOc"
  },
  {
    id: "idli-sambar",
    title: "Idli Sambar",
    cuisine: "South Indian",
    veg: true,
    tags: ["Breakfast", "High protein"],
    cookingTime: "40 mins",
    difficulty: "Medium",
    image: SouthIndianImg,
    ingredients: ["Idli batter", "Toor dal", "Vegetables", "Tamarind", "Sambar powder"],
    steps: [
      "Steam idlis until soft and fluffy.",
      "Cook dal with vegetables and spices.",
      "Add tamarind and simmer into sambar."
    ],
    video: "https://www.youtube.com/watch?v=5a0j7jY5FzM"
  },
  {
    id: "upma",
    title: "Upma",
    cuisine: "South Indian",
    veg: true,
    tags: ["Breakfast"],
    cookingTime: "15 mins",
    difficulty: "Easy",
    image: SouthIndianImg,
    ingredients: ["Rava (semolina)", "Onions", "Green chilies", "Mustard seeds", "Curry leaves", "Ginger"],
    steps: [
      "Dry roast rava until aromatic.",
      "Temper mustard seeds, curry leaves, and onions.",
      "Add water and slowly mix in rava.",
      "Cook until soft and fluffy."
    ],
    video: "https://www.youtube.com/watch?v=I8G6M5K0f3A"
  },
  {
    id: "medu-vada",
    title: "Medu Vada",
    cuisine: "South Indian",
    veg: true,
    tags: ["Breakfast", "Snacks", "High protein"],
    cookingTime: "45 mins",
    difficulty: "Hard",
    image: SouthIndianImg,
    ingredients: ["Urad dal", "Onions", "Green chilies", "Ginger", "Curry leaves"],
    steps: [
      "Soak and grind urad dal into thick batter.",
      "Add spices and shape into vadas.",
      "Deep fry until golden and crispy."
    ],
    video: "https://www.youtube.com/watch?v=1lH3QZb9ZJY"
  },
  {
    id: "pongal",
    title: "Ven Pongal",
    cuisine: "South Indian",
    veg: true,
    tags: ["Breakfast"],
    cookingTime: "30 mins",
    difficulty: "Easy",
    image: SouthIndianImg,
    ingredients: ["Rice", "Moong dal", "Black pepper", "Cumin seeds", "Ghee", "Cashews"],
    steps: [
      "Cook rice and dal together until soft.",
      "Temper pepper, cumin, and cashews in ghee.",
      "Mix tempering into cooked rice-dal."
    ],
    video: "https://www.youtube.com/watch?v=3cF3VwZ9WfM"
  },
  {
    id: "uttapam",
    title: "Uttapam",
    cuisine: "South Indian",
    veg: true,
    tags: ["Breakfast"],
    cookingTime: "25 mins",
    difficulty: "Easy",
    image: SouthIndianImg,
    ingredients: ["Dosa batter", "Onions", "Tomatoes", "Green chilies", "Coriander leaves"],
    steps: [
      "Pour thick dosa batter onto hot pan.",
      "Top with chopped vegetables.",
      "Cook until golden on both sides."
    ],
    video: "https://www.youtube.com/watch?v=0pN5t9K8Hq4"
  },
  {
    id: "rasam",
    title: "Rasam",
    cuisine: "South Indian",
    veg: true,
    tags: ["Lunch"],
    cookingTime: "20 mins",
    difficulty: "Easy",
    image: SouthIndianImg,
    ingredients: ["Tamarind", "Tomatoes", "Rasam powder", "Mustard seeds", "Curry leaves"],
    steps: [
      "Boil tamarind water with tomatoes and spices.",
      "Prepare tempering with mustard seeds and curry leaves.",
      "Add tempering to rasam and simmer briefly."
    ],
    video: "https://www.youtube.com/watch?v=8R6g3B8s8kM"
  }


];

export default recipes;
