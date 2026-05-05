/* ============================================================
   NutriTrack — app.js
   ============================================================ */

/* ════════════════════════════════════════════════════════════
   1. TRANSLATIONS  (EN / TH)
════════════════════════════════════════════════════════════ */
const I18N = {
  en: {
    /* Sidebar */
    profile: "Your Profile",
    weight: "Weight (kg)",
    height: "Height (cm)",
    age: "Age",
    gender: "Gender",
    activity: "Activity level",
    goal: "Goal",
    calcBtn: "Calculate my targets",
    dailyTargets: "Daily targets",

    /* Main */
    todayMeal: "Today's meal",
    subtitle: "Tick foods and enter amounts to track your nutrition",
    clearAll: "Clear all",
    foodLib: "Food library",
    searchPH: "Search foods...",

    /* Right panel */
    mealSummary: "Meal summary",
    noFoods: "No foods selected yet",
    dvTitle: "% of daily target",
    detailTitle: "Detailed nutrients",

    /* Macro tile labels */
    calories: "Calories",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",

    /* Target labels */
    tCal: "Calories",
    tPro: "Protein",
    tCarb: "Carbs",
    tFat: "Fat",
    tFiber: "Fiber",
    tSodium: "Sodium",

    /* Misc */
    foods: "foods",
    items: "items",
    of: "of",

    /* Select options */
    male: "Male",
    female: "Female",
    act1: "Sedentary (no exercise)",
    act2: "Light (1–3 days/week)",
    act3: "Moderate (3–5 days/week)",
    act4: "Active (6–7 days/week)",
    act5: "Very active (hard exercise)",
    lose: "Lose weight (−500 kcal)",
    maintain: "Maintain weight",
    gain: "Gain weight (+300 kcal)",

    /* BMI labels */
    bmiUnder: "Underweight",
    bmiNormal: "Normal",
    bmiOver: "Overweight",
    bmiObese: "Obese",

    /* Nutrient name arrays (order must match render logic) */
    dvNames: [
      "Calories",
      "Protein",
      "Carbs",
      "Fat",
      "Fiber",
      "Sodium",
      "Calcium",
      "Iron",
      "Vitamin C",
      "Vitamin D",
      "Potassium",
    ],
    detailNames: [
      "Fiber",
      "Sugar",
      "Sat. fat",
      "Cholesterol",
      "Sodium",
      "Potassium",
      "Calcium",
      "Iron",
      "Vitamin C",
      "Vitamin A",
      "Vitamin D",
      "Magnesium",
    ],

    /* Category labels */
    catAll: "All",
    cats: {
      "Thai Food": "Thai Food",
      Protein: "Protein",
      Grains: "Grains",
      Vegetables: "Vegetables",
      Fruits: "Fruits",
      Dairy: "Dairy",
      "Fats & Oils": "Fats & Oils",
      Legumes: "Legumes",
      "Nuts & Seeds": "Nuts & Seeds",
    },

    /* Countable unit words */
    proteinWord: "protein",
    unitEgg: "egg",
    unitEggs: "eggs",
    unitSlice: "slice",
    unitSlices: "slices",
    unitBanana: "banana",
    unitMango: "mango",
    unitOrange: "orange",
    unitApple: "apple",
    unitGuava: "guava",
    unitLongan: "longan",
    unitRambutan: "rambutan",
    unitPlate: "plate",
    unitPlates: "plates",

    alertProfile: "Please fill in weight, height, and age.",
  },

  th: {
    /* Sidebar */
    profile: "โปรไฟล์ของคุณ",
    weight: "น้ำหนัก (กก.)",
    height: "ส่วนสูง (ซม.)",
    age: "อายุ",
    gender: "เพศ",
    activity: "ระดับกิจกรรม",
    goal: "เป้าหมาย",
    calcBtn: "คำนวณเป้าหมายของฉัน",
    dailyTargets: "เป้าหมายรายวัน",

    /* Main */
    todayMeal: "มื้ออาหารวันนี้",
    subtitle: "ติ๊กอาหารและใส่ปริมาณเพื่อติดตามโภชนาการ",
    clearAll: "ล้างทั้งหมด",
    foodLib: "รายการอาหาร",
    searchPH: "ค้นหาอาหาร...",

    /* Right panel */
    mealSummary: "สรุปมื้ออาหาร",
    noFoods: "ยังไม่ได้เลือกอาหาร",
    dvTitle: "% ของเป้าหมายรายวัน",
    detailTitle: "สารอาหารละเอียด",

    /* Macro tile labels */
    calories: "แคลอรี่",
    protein: "โปรตีน",
    carbs: "คาร์โบไฮเดรต",
    fat: "ไขมัน",

    /* Target labels */
    tCal: "แคลอรี่",
    tPro: "โปรตีน",
    tCarb: "คาร์โบไฮเดรต",
    tFat: "ไขมัน",
    tFiber: "ใยอาหาร",
    tSodium: "โซเดียม",

    /* Misc */
    foods: "รายการ",
    items: "รายการ",
    of: "จาก",

    /* Select options */
    male: "ชาย",
    female: "หญิง",
    act1: "อยู่นิ่ง (ไม่ออกกำลังกาย)",
    act2: "เบา (1–3 วัน/สัปดาห์)",
    act3: "ปานกลาง (3–5 วัน/สัปดาห์)",
    act4: "หนัก (6–7 วัน/สัปดาห์)",
    act5: "หนักมาก",
    lose: "ลดน้ำหนัก (−500 kcal)",
    maintain: "รักษาน้ำหนัก",
    gain: "เพิ่มน้ำหนัก (+300 kcal)",

    /* BMI labels */
    bmiUnder: "ผอมเกินไป",
    bmiNormal: "ปกติ",
    bmiOver: "น้ำหนักเกิน",
    bmiObese: "อ้วน",

    /* Nutrient name arrays */
    dvNames: [
      "แคลอรี่",
      "โปรตีน",
      "คาร์โบไฮเดรต",
      "ไขมัน",
      "ใยอาหาร",
      "โซเดียม",
      "แคลเซียม",
      "เหล็ก",
      "วิตามิน C",
      "วิตามิน D",
      "โพแทสเซียม",
    ],
    detailNames: [
      "ใยอาหาร",
      "น้ำตาล",
      "ไขมันอิ่มตัว",
      "คอเลสเตอรอล",
      "โซเดียม",
      "โพแทสเซียม",
      "แคลเซียม",
      "เหล็ก",
      "วิตามิน C",
      "วิตามิน A",
      "วิตามิน D",
      "แมกนีเซียม",
    ],

    /* Category labels */
    catAll: "ทั้งหมด",
    cats: {
      "Thai Food": "🇹🇭 อาหารไทย",
      Protein: "โปรตีน",
      Grains: "ธัญพืช",
      Vegetables: "ผัก",
      Fruits: "ผลไม้",
      Dairy: "นมและผลิตภัณฑ์",
      "Fats & Oils": "ไขมันและน้ำมัน",
      Legumes: "ถั่ว",
      "Nuts & Seeds": "ถั่วและเมล็ด",
    },

    /* Countable unit words */
    proteinWord: "โปรตีน",
    unitEgg: "ฟอง",
    unitEggs: "ฟอง",
    unitSlice: "แผ่น",
    unitSlices: "แผ่น",
    unitBanana: "ผล",
    unitMango: "ผล",
    unitOrange: "ผล",
    unitApple: "ผล",
    unitGuava: "ผล",
    unitLongan: "เม็ด",
    unitRambutan: "ผล",
    unitPlate: "จาน",
    unitPlates: "จาน",

    alertProfile: "กรุณากรอกน้ำหนัก ส่วนสูง และอายุ",
  },
};

/* ════════════════════════════════════════════════════════════
   2. FOOD DATABASE
   Fields:
     id          – unique number
     name        – { en, th }
     cat         – category string (must match CATS_ORDER)
     unit        – 'g' or 'ml'
     countable   – true → use stepper (eggs, fruits, etc.)
     gPerUnit    – grams per 1 unit (only for countable foods)
     unitKey     – i18n key for singular unit label
     unitKeyPlural – i18n key for plural unit label
     per100      – nutrition per 100 g/ml
════════════════════════════════════════════════════════════ */
const FOODS = [
  /* ── Thai Food ─────────────────────────────────────────── */
  {
    id: 101,
    cat: "Thai Food",
    name: { en: "Pad Thai (pork)", th: "ผัดไทยหมู" },
    countable: true,
    gPerUnit: 320,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 141,
      pro: 6.5,
      carb: 18,
      fat: 5,
      fiber: 0.8,
      sugar: 3,
      satFat: 1.2,
      sodium: 420,
      chol: 28,
      potas: 120,
      calcium: 40,
      iron: 0.8,
      vitC: 1,
      vitA: 8,
      vitD: 0,
      mag: 18,
    },
  },
  {
    id: 102,
    cat: "Thai Food",
    name: { en: "Green curry chicken", th: "แกงเขียวหวานไก่" },
    countable: true,
    gPerUnit: 380,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 102,
      pro: 7,
      carb: 4,
      fat: 7,
      fiber: 0.9,
      sugar: 2,
      satFat: 5,
      sodium: 380,
      chol: 30,
      potas: 220,
      calcium: 35,
      iron: 1.2,
      vitC: 4,
      vitA: 55,
      vitD: 0,
      mag: 22,
    },
  },
  {
    id: 103,
    cat: "Thai Food",
    name: { en: "Tom Yum Kung", th: "ต้มยำกุ้ง" },
    countable: true,
    gPerUnit: 280,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 45,
      pro: 4.5,
      carb: 3,
      fat: 1.5,
      fiber: 0.5,
      sugar: 1.5,
      satFat: 0.3,
      sodium: 510,
      chol: 40,
      potas: 180,
      calcium: 30,
      iron: 0.6,
      vitC: 8,
      vitA: 12,
      vitD: 0,
      mag: 15,
    },
  },
  {
    id: 104,
    cat: "Thai Food",
    name: { en: "Khao Pad (fried rice)", th: "ข้าวผัด" },
    countable: true,
    gPerUnit: 330,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 155,
      pro: 4.5,
      carb: 24,
      fat: 4.8,
      fiber: 0.5,
      sugar: 1,
      satFat: 1,
      sodium: 350,
      chol: 45,
      potas: 95,
      calcium: 18,
      iron: 0.5,
      vitC: 1,
      vitA: 15,
      vitD: 0,
      mag: 14,
    },
  },
  {
    id: 105,
    cat: "Thai Food",
    name: { en: "Som Tum (papaya salad)", th: "ส้มตำ" },
    countable: true,
    gPerUnit: 180,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 52,
      pro: 1.5,
      carb: 9,
      fat: 1.2,
      fiber: 1.8,
      sugar: 5,
      satFat: 0.2,
      sodium: 480,
      chol: 8,
      potas: 230,
      calcium: 55,
      iron: 0.5,
      vitC: 35,
      vitA: 60,
      vitD: 0,
      mag: 18,
    },
  },
  {
    id: 106,
    cat: "Thai Food",
    name: { en: "Massaman curry beef", th: "มัสมั่นเนื้อ" },
    countable: true,
    gPerUnit: 350,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 145,
      pro: 8,
      carb: 8,
      fat: 9,
      fiber: 1.5,
      sugar: 3,
      satFat: 4.5,
      sodium: 420,
      chol: 35,
      potas: 310,
      calcium: 25,
      iron: 1.5,
      vitC: 2,
      vitA: 5,
      vitD: 0,
      mag: 25,
    },
  },
  {
    id: 107,
    cat: "Thai Food",
    name: { en: "Pad Kra Pao (basil stir-fry)", th: "ผัดกะเพรา" },
    countable: true,
    gPerUnit: 300,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 130,
      pro: 9,
      carb: 5,
      fat: 8,
      fiber: 0.8,
      sugar: 1.5,
      satFat: 2,
      sodium: 500,
      chol: 45,
      potas: 250,
      calcium: 30,
      iron: 1.2,
      vitC: 5,
      vitA: 20,
      vitD: 0,
      mag: 20,
    },
  },
  {
    id: 108,
    cat: "Thai Food",
    name: { en: "Tom Kha Gai", th: "ต้มข่าไก่" },
    countable: true,
    gPerUnit: 310,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 88,
      pro: 5,
      carb: 3.5,
      fat: 6.5,
      fiber: 0.5,
      sugar: 1.5,
      satFat: 5,
      sodium: 360,
      chol: 25,
      potas: 190,
      calcium: 20,
      iron: 0.8,
      vitC: 2,
      vitA: 5,
      vitD: 0,
      mag: 18,
    },
  },
  {
    id: 109,
    cat: "Thai Food",
    name: { en: "Khao Man Gai (chicken rice)", th: "ข้าวมันไก่" },
    countable: true,
    gPerUnit: 320,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 148,
      pro: 9,
      carb: 18,
      fat: 4,
      fiber: 0.3,
      sugar: 0.5,
      satFat: 1,
      sodium: 310,
      chol: 38,
      potas: 140,
      calcium: 12,
      iron: 0.6,
      vitC: 0,
      vitA: 5,
      vitD: 0,
      mag: 16,
    },
  },
  {
    id: 110,
    cat: "Thai Food",
    name: { en: "Larb Moo (minced pork salad)", th: "ลาบหมู" },
    countable: true,
    gPerUnit: 240,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 118,
      pro: 11,
      carb: 5,
      fat: 6,
      fiber: 0.5,
      sugar: 1,
      satFat: 2,
      sodium: 440,
      chol: 48,
      potas: 280,
      calcium: 25,
      iron: 1.4,
      vitC: 3,
      vitA: 8,
      vitD: 0,
      mag: 20,
    },
  },
  {
    id: 111,
    cat: "Thai Food",
    name: { en: "Mango sticky rice", th: "ข้าวเหนียวมะม่วง" },
    countable: true,
    gPerUnit: 280,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 178,
      pro: 2.5,
      carb: 37,
      fat: 3,
      fiber: 1.2,
      sugar: 18,
      satFat: 2.5,
      sodium: 80,
      chol: 0,
      potas: 130,
      calcium: 15,
      iron: 0.4,
      vitC: 10,
      vitA: 20,
      vitD: 0,
      mag: 18,
    },
  },
  {
    id: 112,
    cat: "Thai Food",
    name: { en: "Pad See Ew", th: "ผัดซีอิ๊ว" },
    countable: true,
    gPerUnit: 340,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 148,
      pro: 7,
      carb: 20,
      fat: 4.5,
      fiber: 0.8,
      sugar: 2,
      satFat: 1,
      sodium: 520,
      chol: 40,
      potas: 110,
      calcium: 35,
      iron: 0.9,
      vitC: 1,
      vitA: 10,
      vitD: 0,
      mag: 16,
    },
  },
  {
    id: 113,
    cat: "Thai Food",
    name: { en: "Khao Niao (sticky rice)", th: "ข้าวเหนียว" },
    countable: true,
    gPerUnit: 250,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 169,
      pro: 3.5,
      carb: 37,
      fat: 0.3,
      fiber: 1.7,
      sugar: 0,
      satFat: 0.1,
      sodium: 1,
      chol: 0,
      potas: 35,
      calcium: 9,
      iron: 0.3,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 14,
    },
  },
  {
    id: 114,
    cat: "Thai Food",
    name: { en: "Pork satay with sauce", th: "สะเต๊ะหมู" },
    countable: true,
    gPerUnit: 200,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 185,
      pro: 12,
      carb: 9,
      fat: 11,
      fiber: 0.8,
      sugar: 5,
      satFat: 3,
      sodium: 380,
      chol: 45,
      potas: 210,
      calcium: 20,
      iron: 1,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 22,
    },
  },
  {
    id: 115,
    cat: "Thai Food",
    name: { en: "Boat noodle soup", th: "ก๋วยเตี๋ยวเรือ" },
    countable: true,
    gPerUnit: 300,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 72,
      pro: 5.5,
      carb: 8,
      fat: 2,
      fiber: 0.4,
      sugar: 1,
      satFat: 0.5,
      sodium: 560,
      chol: 22,
      potas: 130,
      calcium: 18,
      iron: 1.1,
      vitC: 0,
      vitA: 5,
      vitD: 0,
      mag: 12,
    },
  },
  {
    id: 116,
    cat: "Thai Food",
    name: { en: "Kanom Krok (coconut pancakes)", th: "ขนมครก" },
    countable: true,
    gPerUnit: 160,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 198,
      pro: 4,
      carb: 24,
      fat: 10,
      fiber: 0.5,
      sugar: 8,
      satFat: 8.5,
      sodium: 120,
      chol: 20,
      potas: 110,
      calcium: 30,
      iron: 0.5,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 16,
    },
  },
  {
    id: 117,
    cat: "Thai Food",
    name: { en: "Gaeng Daeng (red curry)", th: "แกงเผ็ด" },
    countable: true,
    gPerUnit: 370,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 115,
      pro: 7,
      carb: 5,
      fat: 8,
      fiber: 1,
      sugar: 2.5,
      satFat: 5.5,
      sodium: 400,
      chol: 28,
      potas: 240,
      calcium: 28,
      iron: 1,
      vitC: 3,
      vitA: 40,
      vitD: 0,
      mag: 20,
    },
  },
  {
    id: 118,
    cat: "Thai Food",
    name: { en: "Pad Woon Sen (glass noodles)", th: "ผัดวุ้นเส้น" },
    countable: true,
    gPerUnit: 310,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 120,
      pro: 5,
      carb: 18,
      fat: 3.5,
      fiber: 0.5,
      sugar: 2,
      satFat: 0.8,
      sodium: 430,
      chol: 35,
      potas: 90,
      calcium: 22,
      iron: 0.7,
      vitC: 2,
      vitA: 8,
      vitD: 0,
      mag: 12,
    },
  },
  {
    id: 119,
    cat: "Thai Food",
    name: { en: "Khao Tom (rice porridge)", th: "ข้าวต้ม" },
    countable: true,
    gPerUnit: 350,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 55,
      pro: 2.5,
      carb: 10,
      fat: 0.5,
      fiber: 0.2,
      sugar: 0,
      satFat: 0.1,
      sodium: 220,
      chol: 8,
      potas: 55,
      calcium: 8,
      iron: 0.2,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 8,
    },
  },
  {
    id: 120,
    cat: "Thai Food",
    name: { en: "Panang curry pork", th: "พะแนงหมู" },
    countable: true,
    gPerUnit: 360,
    unitKey: "unitPlate",
    unitKeyPlural: "unitPlates",
    per100: {
      cal: 155,
      pro: 9,
      carb: 5,
      fat: 11,
      fiber: 1,
      sugar: 2,
      satFat: 7,
      sodium: 410,
      chol: 38,
      potas: 260,
      calcium: 30,
      iron: 1.1,
      vitC: 1,
      vitA: 15,
      vitD: 0,
      mag: 22,
    },
  },

  /* ── Protein ────────────────────────────────────────────── */
  {
    id: 1,
    cat: "Protein",
    unit: "g",
    name: { en: "Chicken breast", th: "อกไก่" },
    per100: {
      cal: 165,
      pro: 31,
      carb: 0,
      fat: 3.6,
      fiber: 0,
      sugar: 0,
      satFat: 1,
      sodium: 74,
      chol: 85,
      potas: 256,
      calcium: 11,
      iron: 0.7,
      vitC: 0,
      vitA: 9,
      vitD: 0.1,
      mag: 28,
    },
  },
  {
    id: 2,
    cat: "Protein",
    unit: "g",
    name: { en: "Salmon fillet", th: "ปลาแซลมอน" },
    per100: {
      cal: 208,
      pro: 20,
      carb: 0,
      fat: 13,
      fiber: 0,
      sugar: 0,
      satFat: 3,
      sodium: 59,
      chol: 63,
      potas: 363,
      calcium: 12,
      iron: 0.8,
      vitC: 0,
      vitA: 12,
      vitD: 11,
      mag: 27,
    },
  },
  {
    /* COUNTABLE — 1 egg ≈ 60 g */
    id: 3,
    cat: "Protein",
    unit: "g",
    name: { en: "Egg", th: "ไข่ไก่" },
    countable: true,
    gPerUnit: 60,
    unitKey: "unitEgg",
    unitKeyPlural: "unitEggs",
    per100: {
      cal: 155,
      pro: 13,
      carb: 1.1,
      fat: 11,
      fiber: 0,
      sugar: 1.1,
      satFat: 3.3,
      sodium: 124,
      chol: 373,
      potas: 126,
      calcium: 50,
      iron: 1.8,
      vitC: 0,
      vitA: 160,
      vitD: 2,
      mag: 10,
    },
  },
  {
    id: 4,
    cat: "Protein",
    unit: "g",
    name: { en: "Tofu (firm)", th: "เต้าหู้แข็ง" },
    per100: {
      cal: 76,
      pro: 8,
      carb: 1.9,
      fat: 4.8,
      fiber: 0.3,
      sugar: 0.6,
      satFat: 0.7,
      sodium: 7,
      chol: 0,
      potas: 121,
      calcium: 350,
      iron: 5.4,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 30,
    },
  },
  {
    id: 5,
    cat: "Protein",
    unit: "g",
    name: { en: "Pork loin", th: "สันหมู" },
    per100: {
      cal: 242,
      pro: 27,
      carb: 0,
      fat: 14,
      fiber: 0,
      sugar: 0,
      satFat: 5,
      sodium: 62,
      chol: 80,
      potas: 423,
      calcium: 19,
      iron: 0.9,
      vitC: 0,
      vitA: 2,
      vitD: 0.5,
      mag: 25,
    },
  },
  {
    id: 6,
    cat: "Protein",
    unit: "g",
    name: { en: "Shrimp", th: "กุ้ง" },
    per100: {
      cal: 99,
      pro: 24,
      carb: 0.2,
      fat: 0.3,
      fiber: 0,
      sugar: 0,
      satFat: 0.1,
      sodium: 111,
      chol: 189,
      potas: 259,
      calcium: 70,
      iron: 2.4,
      vitC: 0,
      vitA: 54,
      vitD: 0,
      mag: 35,
    },
  },
  {
    id: 7,
    cat: "Protein",
    unit: "g",
    name: { en: "Tuna (canned)", th: "ปลาทูน่ากระป๋อง" },
    per100: {
      cal: 116,
      pro: 26,
      carb: 0,
      fat: 1,
      fiber: 0,
      sugar: 0,
      satFat: 0.3,
      sodium: 337,
      chol: 49,
      potas: 237,
      calcium: 11,
      iron: 1.4,
      vitC: 0,
      vitA: 20,
      vitD: 0,
      mag: 31,
    },
  },

  /* ── Grains ─────────────────────────────────────────────── */
  {
    id: 8,
    cat: "Grains",
    unit: "g",
    name: { en: "White rice (cooked)", th: "ข้าวสวย" },
    per100: {
      cal: 130,
      pro: 2.7,
      carb: 28,
      fat: 0.3,
      fiber: 0.4,
      sugar: 0,
      satFat: 0.1,
      sodium: 1,
      chol: 0,
      potas: 35,
      calcium: 10,
      iron: 0.2,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 12,
    },
  },
  {
    id: 9,
    cat: "Grains",
    unit: "g",
    name: { en: "Brown rice (cooked)", th: "ข้าวกล้อง" },
    per100: {
      cal: 123,
      pro: 2.7,
      carb: 26,
      fat: 1,
      fiber: 1.8,
      sugar: 0,
      satFat: 0.2,
      sodium: 4,
      chol: 0,
      potas: 79,
      calcium: 10,
      iron: 0.5,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 44,
    },
  },
  {
    id: 10,
    cat: "Grains",
    unit: "g",
    name: { en: "Oats (dry)", th: "ข้าวโอ๊ต" },
    per100: {
      cal: 389,
      pro: 17,
      carb: 66,
      fat: 7,
      fiber: 10,
      sugar: 1,
      satFat: 1.2,
      sodium: 2,
      chol: 0,
      potas: 429,
      calcium: 54,
      iron: 4.7,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 177,
    },
  },
  {
    id: 11,
    cat: "Grains",
    unit: "g",
    name: { en: "Rice noodles (cooked)", th: "เส้นก๋วยเตี๋ยว" },
    per100: {
      cal: 109,
      pro: 1.8,
      carb: 25,
      fat: 0.2,
      fiber: 0.9,
      sugar: 0,
      satFat: 0,
      sodium: 4,
      chol: 0,
      potas: 14,
      calcium: 8,
      iron: 0.1,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 8,
    },
  },
  {
    /* COUNTABLE — 1 slice ≈ 30 g */
    id: 12,
    cat: "Grains",
    unit: "g",
    name: { en: "Whole wheat bread", th: "ขนมปังโฮลวีต" },
    countable: true,
    gPerUnit: 30,
    unitKey: "unitSlice",
    unitKeyPlural: "unitSlices",
    per100: {
      cal: 247,
      pro: 13,
      carb: 41,
      fat: 4.2,
      fiber: 7,
      sugar: 6,
      satFat: 0.5,
      sodium: 400,
      chol: 0,
      potas: 248,
      calcium: 161,
      iron: 3.6,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 76,
    },
  },

  /* ── Vegetables ─────────────────────────────────────────── */
  {
    id: 13,
    cat: "Vegetables",
    unit: "g",
    name: { en: "Broccoli", th: "บร็อคโคลี่" },
    per100: {
      cal: 34,
      pro: 2.8,
      carb: 7,
      fat: 0.4,
      fiber: 2.6,
      sugar: 1.7,
      satFat: 0.1,
      sodium: 33,
      chol: 0,
      potas: 316,
      calcium: 47,
      iron: 0.7,
      vitC: 89,
      vitA: 31,
      vitD: 0,
      mag: 21,
    },
  },
  {
    id: 14,
    cat: "Vegetables",
    unit: "g",
    name: { en: "Spinach", th: "ผักขม" },
    per100: {
      cal: 23,
      pro: 2.9,
      carb: 3.6,
      fat: 0.4,
      fiber: 2.2,
      sugar: 0.4,
      satFat: 0.1,
      sodium: 79,
      chol: 0,
      potas: 558,
      calcium: 99,
      iron: 2.7,
      vitC: 28,
      vitA: 469,
      vitD: 0,
      mag: 79,
    },
  },
  {
    id: 15,
    cat: "Vegetables",
    unit: "g",
    name: { en: "Morning glory (Pak Bung)", th: "ผักบุ้ง" },
    per100: {
      cal: 19,
      pro: 2.6,
      carb: 3.1,
      fat: 0.2,
      fiber: 2.1,
      sugar: 1,
      satFat: 0,
      sodium: 113,
      chol: 0,
      potas: 312,
      calcium: 77,
      iron: 1.7,
      vitC: 55,
      vitA: 315,
      vitD: 0,
      mag: 71,
    },
  },
  {
    id: 16,
    cat: "Vegetables",
    unit: "g",
    name: { en: "Thai eggplant", th: "มะเขือเปราะ" },
    per100: {
      cal: 25,
      pro: 1,
      carb: 6,
      fat: 0.2,
      fiber: 3,
      sugar: 2.5,
      satFat: 0,
      sodium: 2,
      chol: 0,
      potas: 229,
      calcium: 9,
      iron: 0.2,
      vitC: 2.2,
      vitA: 1,
      vitD: 0,
      mag: 14,
    },
  },
  {
    id: 17,
    cat: "Vegetables",
    unit: "g",
    name: { en: "Carrot", th: "แครอท" },
    per100: {
      cal: 41,
      pro: 0.9,
      carb: 10,
      fat: 0.2,
      fiber: 2.8,
      sugar: 4.7,
      satFat: 0,
      sodium: 69,
      chol: 0,
      potas: 320,
      calcium: 33,
      iron: 0.3,
      vitC: 6,
      vitA: 835,
      vitD: 0,
      mag: 12,
    },
  },
  {
    id: 18,
    cat: "Vegetables",
    unit: "g",
    name: { en: "Sweet potato", th: "มันเทศ" },
    per100: {
      cal: 86,
      pro: 1.6,
      carb: 20,
      fat: 0.1,
      fiber: 3,
      sugar: 4.2,
      satFat: 0,
      sodium: 55,
      chol: 0,
      potas: 337,
      calcium: 30,
      iron: 0.6,
      vitC: 2.4,
      vitA: 961,
      vitD: 0,
      mag: 25,
    },
  },

  /* ── Fruits (all countable) ─────────────────────────────── */
  {
    id: 19,
    cat: "Fruits",
    unit: "g",
    name: { en: "Banana", th: "กล้วยหอม" },
    countable: true,
    gPerUnit: 118,
    unitKey: "unitBanana",
    unitKeyPlural: "unitBanana",
    per100: {
      cal: 89,
      pro: 1.1,
      carb: 23,
      fat: 0.3,
      fiber: 2.6,
      sugar: 12,
      satFat: 0.1,
      sodium: 1,
      chol: 0,
      potas: 358,
      calcium: 5,
      iron: 0.3,
      vitC: 8.7,
      vitA: 3,
      vitD: 0,
      mag: 27,
    },
  },
  {
    id: 20,
    cat: "Fruits",
    unit: "g",
    name: { en: "Mango", th: "มะม่วง" },
    countable: true,
    gPerUnit: 200,
    unitKey: "unitMango",
    unitKeyPlural: "unitMango",
    per100: {
      cal: 60,
      pro: 0.8,
      carb: 15,
      fat: 0.4,
      fiber: 1.6,
      sugar: 14,
      satFat: 0.1,
      sodium: 1,
      chol: 0,
      potas: 168,
      calcium: 11,
      iron: 0.2,
      vitC: 36,
      vitA: 54,
      vitD: 0,
      mag: 10,
    },
  },
  {
    id: 21,
    cat: "Fruits",
    unit: "g",
    name: { en: "Papaya", th: "มะละกอ" },
    per100: {
      cal: 43,
      pro: 0.5,
      carb: 11,
      fat: 0.3,
      fiber: 1.7,
      sugar: 7.8,
      satFat: 0.1,
      sodium: 8,
      chol: 0,
      potas: 182,
      calcium: 20,
      iron: 0.3,
      vitC: 62,
      vitA: 47,
      vitD: 0,
      mag: 21,
    },
  },
  {
    id: 22,
    cat: "Fruits",
    unit: "g",
    name: { en: "Longan", th: "ลำไย" },
    countable: true,
    gPerUnit: 10,
    unitKey: "unitLongan",
    unitKeyPlural: "unitLongan",
    per100: {
      cal: 60,
      pro: 1.3,
      carb: 15,
      fat: 0.1,
      fiber: 1.1,
      sugar: 15,
      satFat: 0,
      sodium: 0,
      chol: 0,
      potas: 266,
      calcium: 1,
      iron: 0.1,
      vitC: 84,
      vitA: 0,
      vitD: 0,
      mag: 10,
    },
  },
  {
    id: 23,
    cat: "Fruits",
    unit: "g",
    name: { en: "Rambutan", th: "เงาะ" },
    countable: true,
    gPerUnit: 30,
    unitKey: "unitRambutan",
    unitKeyPlural: "unitRambutan",
    per100: {
      cal: 68,
      pro: 0.9,
      carb: 16,
      fat: 0.2,
      fiber: 0.9,
      sugar: 15,
      satFat: 0,
      sodium: 11,
      chol: 0,
      potas: 42,
      calcium: 22,
      iron: 0.4,
      vitC: 4.9,
      vitA: 0,
      vitD: 0,
      mag: 7,
    },
  },
  {
    id: 24,
    cat: "Fruits",
    unit: "g",
    name: { en: "Guava", th: "ฝรั่ง" },
    countable: true,
    gPerUnit: 150,
    unitKey: "unitGuava",
    unitKeyPlural: "unitGuava",
    per100: {
      cal: 68,
      pro: 2.6,
      carb: 14,
      fat: 1,
      fiber: 5.4,
      sugar: 9,
      satFat: 0.3,
      sodium: 2,
      chol: 0,
      potas: 417,
      calcium: 18,
      iron: 0.3,
      vitC: 228,
      vitA: 31,
      vitD: 0,
      mag: 22,
    },
  },
  {
    id: 25,
    cat: "Fruits",
    unit: "g",
    name: { en: "Orange", th: "ส้ม" },
    countable: true,
    gPerUnit: 130,
    unitKey: "unitOrange",
    unitKeyPlural: "unitOrange",
    per100: {
      cal: 47,
      pro: 0.9,
      carb: 12,
      fat: 0.1,
      fiber: 2.4,
      sugar: 9.4,
      satFat: 0,
      sodium: 0,
      chol: 0,
      potas: 181,
      calcium: 40,
      iron: 0.1,
      vitC: 53,
      vitA: 11,
      vitD: 0,
      mag: 10,
    },
  },
  {
    id: 26,
    cat: "Fruits",
    unit: "g",
    name: { en: "Apple", th: "แอปเปิ้ล" },
    countable: true,
    gPerUnit: 182,
    unitKey: "unitApple",
    unitKeyPlural: "unitApple",
    per100: {
      cal: 52,
      pro: 0.3,
      carb: 14,
      fat: 0.2,
      fiber: 2.4,
      sugar: 10,
      satFat: 0,
      sodium: 1,
      chol: 0,
      potas: 107,
      calcium: 6,
      iron: 0.1,
      vitC: 4.6,
      vitA: 3,
      vitD: 0,
      mag: 5,
    },
  },

  /* ── Dairy ──────────────────────────────────────────────── */
  {
    id: 27,
    cat: "Dairy",
    unit: "ml",
    name: { en: "Whole milk", th: "นมสด" },
    per100: {
      cal: 61,
      pro: 3.2,
      carb: 4.8,
      fat: 3.3,
      fiber: 0,
      sugar: 5.1,
      satFat: 1.9,
      sodium: 43,
      chol: 10,
      potas: 132,
      calcium: 113,
      iron: 0,
      vitC: 0,
      vitA: 46,
      vitD: 1.2,
      mag: 10,
    },
  },
  {
    id: 28,
    cat: "Dairy",
    unit: "g",
    name: { en: "Greek yogurt", th: "โยเกิร์ตกรีก" },
    per100: {
      cal: 59,
      pro: 10,
      carb: 3.6,
      fat: 0.4,
      fiber: 0,
      sugar: 3.2,
      satFat: 0.1,
      sodium: 36,
      chol: 5,
      potas: 141,
      calcium: 110,
      iron: 0,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 11,
    },
  },

  /* ── Fats & Oils ────────────────────────────────────────── */
  {
    id: 29,
    cat: "Fats & Oils",
    unit: "ml",
    name: { en: "Coconut milk", th: "กะทิ" },
    per100: {
      cal: 230,
      pro: 2.3,
      carb: 5.5,
      fat: 24,
      fiber: 2.2,
      sugar: 3.3,
      satFat: 21,
      sodium: 15,
      chol: 0,
      potas: 263,
      calcium: 16,
      iron: 3.3,
      vitC: 1.5,
      vitA: 0,
      vitD: 0,
      mag: 37,
    },
  },
  {
    id: 30,
    cat: "Fats & Oils",
    unit: "ml",
    name: { en: "Olive oil", th: "น้ำมันมะกอก" },
    per100: {
      cal: 884,
      pro: 0,
      carb: 0,
      fat: 100,
      fiber: 0,
      sugar: 0,
      satFat: 14,
      sodium: 2,
      chol: 0,
      potas: 1,
      calcium: 1,
      iron: 0.6,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 0,
    },
  },
  {
    id: 31,
    cat: "Fats & Oils",
    unit: "ml",
    name: { en: "Coconut oil", th: "น้ำมันมะพร้าว" },
    per100: {
      cal: 862,
      pro: 0,
      carb: 0,
      fat: 100,
      fiber: 0,
      sugar: 0,
      satFat: 87,
      sodium: 0,
      chol: 0,
      potas: 0,
      calcium: 0,
      iron: 0,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 0,
    },
  },

  /* ── Legumes ────────────────────────────────────────────── */
  {
    id: 32,
    cat: "Legumes",
    unit: "g",
    name: { en: "Black beans (cooked)", th: "ถั่วดำ" },
    per100: {
      cal: 132,
      pro: 8.9,
      carb: 24,
      fat: 0.5,
      fiber: 8.7,
      sugar: 0.3,
      satFat: 0.1,
      sodium: 1,
      chol: 0,
      potas: 355,
      calcium: 27,
      iron: 2.1,
      vitC: 0,
      vitA: 1,
      vitD: 0,
      mag: 60,
    },
  },
  {
    id: 33,
    cat: "Legumes",
    unit: "g",
    name: { en: "Lentils (cooked)", th: "ถั่วเลนทิล" },
    per100: {
      cal: 116,
      pro: 9,
      carb: 20,
      fat: 0.4,
      fiber: 7.9,
      sugar: 1.8,
      satFat: 0.1,
      sodium: 2,
      chol: 0,
      potas: 369,
      calcium: 19,
      iron: 3.3,
      vitC: 1.5,
      vitA: 1,
      vitD: 0,
      mag: 36,
    },
  },

  /* ── Nuts & Seeds ───────────────────────────────────────── */
  {
    id: 34,
    cat: "Nuts & Seeds",
    unit: "g",
    name: { en: "Almonds", th: "อัลมอนด์" },
    per100: {
      cal: 579,
      pro: 21,
      carb: 22,
      fat: 50,
      fiber: 12.5,
      sugar: 4.4,
      satFat: 3.8,
      sodium: 1,
      chol: 0,
      potas: 733,
      calcium: 264,
      iron: 3.7,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 270,
    },
  },
  {
    id: 35,
    cat: "Nuts & Seeds",
    unit: "g",
    name: { en: "Peanuts", th: "ถั่วลิสง" },
    per100: {
      cal: 567,
      pro: 26,
      carb: 16,
      fat: 49,
      fiber: 8.5,
      sugar: 4,
      satFat: 7,
      sodium: 18,
      chol: 0,
      potas: 705,
      calcium: 92,
      iron: 4.6,
      vitC: 0,
      vitA: 0,
      vitD: 0,
      mag: 168,
    },
  },
];

/* Category order for pills */
const CATS_ORDER = [
  "All",
  "Thai Food",
  "Protein",
  "Grains",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Fats & Oils",
  "Legumes",
  "Nuts & Seeds",
];

/* ════════════════════════════════════════════════════════════
   3. APP STATE
════════════════════════════════════════════════════════════ */
let lang = "en";
let activeCat = "All";
let selected = {}; // { [foodId]: { food, amt } }
let targets = {
  // daily targets (updated by calcTargets)
  cal: 2000,
  pro: 50,
  carb: 275,
  fat: 78,
  fiber: 28,
  sodium: 2300,
  calcium: 1300,
  iron: 18,
  vitC: 90,
  vitD: 20,
  potas: 4700,
};

/* ════════════════════════════════════════════════════════════
   4. HELPERS
════════════════════════════════════════════════════════════ */

/** Translate a key */
const tr = (k) => I18N[lang][k] || I18N.en[k] || k;

/** Get the food name in the current language */
const fname = (f) => f.name[lang] || f.name.en;

/** Category pill label */
const catLabel = (c) => (c === "All" ? tr("catAll") : tr("cats")[c] || c);

/**
 * Effective grams consumed.
 * Countable foods: multiply gPerUnit × count.
 * Weighed foods: the number entered is already grams.
 */
function effectiveGrams(food, amt) {
  return food.countable ? food.gPerUnit * amt : amt;
}

/**
 * Human-readable amount label for meal summary.
 * e.g. "2 eggs" or "200 g"
 */
function amtLabel(food, amt) {
  if (!food.countable) return `${amt} ${food.unit}`;
  const unitWord = amt === 1 ? tr(food.unitKey) : tr(food.unitKeyPlural);
  return `${amt} ${unitWord}`;
}

/* ════════════════════════════════════════════════════════════
   5. LANGUAGE
════════════════════════════════════════════════════════════ */
function setLang(l) {
  lang = l;
  document.body.className = l === "th" ? "th" : "";
  document.getElementById("btnEN").className =
    "lang-btn" + (l === "en" ? " active" : "");
  document.getElementById("btnTH").className =
    "lang-btn" + (l === "th" ? " active" : "");
  applyI18N();
  rebuildCats();
  renderList();
  render();
}

/** Apply translations to all elements with data-i18n / data-i18n-opt / data-i18n-placeholder */
function applyI18N() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = tr(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = tr(el.getAttribute("data-i18n-placeholder"));
  });
  document.querySelectorAll("[data-i18n-opt]").forEach((el) => {
    el.textContent = tr(el.getAttribute("data-i18n-opt"));
  });

  /* Refresh macro tile "of X" captions */
  document.getElementById("mCalTarget").textContent =
    `${tr("of")} ${targets.cal.toLocaleString()} kcal`;
  document.getElementById("mProTarget").textContent =
    `${tr("of")} ${targets.pro} g`;
  document.getElementById("mCarbTarget").textContent =
    `${tr("of")} ${targets.carb} g`;
  document.getElementById("mFatTarget").textContent =
    `${tr("of")} ${targets.fat} g`;
}

/* ════════════════════════════════════════════════════════════
   6. CATEGORY PILLS
════════════════════════════════════════════════════════════ */
function rebuildCats() {
  const tabs = document.getElementById("catTabs");
  tabs.innerHTML = "";
  CATS_ORDER.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "cat-pill" + (c === activeCat ? " on" : "");
    btn.textContent = catLabel(c);
    btn.onclick = () => {
      activeCat = c;
      document
        .querySelectorAll(".cat-pill")
        .forEach((x) => x.classList.remove("on"));
      btn.classList.add("on");
      renderList();
    };
    tabs.appendChild(btn);
  });
}

/* ════════════════════════════════════════════════════════════
   7. FOOD LIST
════════════════════════════════════════════════════════════ */
function filterFoods() {
  renderList();
}

function renderList() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const filtered = FOODS.filter(
    (f) =>
      (activeCat === "All" || f.cat === activeCat) &&
      fname(f).toLowerCase().includes(q),
  );

  document.getElementById("foodCount").textContent =
    `${filtered.length} ${tr("foods")}`;

  const list = document.getElementById("foodList");
  if (!filtered.length) {
    list.innerHTML = `<div class="no-foods">${tr("noFoods")}</div>`;
    return;
  }

  list.innerHTML = filtered
    .map((f) => {
      const sel = selected[f.id];
      const isThai = f.cat === "Thai Food";
      const isCountable = !!f.countable;
      const amt = sel ? sel.amt : isCountable ? 1 : 100;

      /* Build quantity control */
      let qtyHTML;
      if (isCountable) {
        const unitWord = amt === 1 ? tr(f.unitKey) : tr(f.unitKeyPlural);
        qtyHTML = `
        <div class="stepper" onclick="event.stopPropagation()">
          <button class="stepper-btn" onclick="stepAmt(${f.id}, -1)">−</button>
          <span class="stepper-count" id="sc${f.id}">${amt}</span>
          <button class="stepper-btn" onclick="stepAmt(${f.id},  1)">+</button>
        </div>
        <span class="unit-badge" id="ub${f.id}">${unitWord}</span>
      `;
      } else {
        qtyHTML = `
        <div class="food-qty-wrap" onclick="event.stopPropagation()">
          <input class="gram-input" type="number" min="1" max="9999" value="${amt}"
            onchange="setAmt(${f.id}, this.value)"
            oninput="setAmt(${f.id}, this.value)" />
          <span class="unit-lbl">${f.unit}</span>
        </div>
      `;
      }

      /* Sub-label: kcal per unit or per 100g */
      const subText = isCountable
        ? `${Math.round((f.per100.cal * f.gPerUnit) / 100)} kcal · ` +
          `${((f.per100.pro * f.gPerUnit) / 100).toFixed(1)}g ${tr("proteinWord")} per 1`
        : `${f.per100.cal} kcal · ${f.per100.pro}g ${tr("proteinWord")} / 100${f.unit}`;

      return `
      <div class="food-item${sel ? " selected" : ""}" id="fi${f.id}" onclick="toggleFood(${f.id})">
        <div class="food-cb">
          <svg class="food-cb-check" viewBox="0 0 10 10">
            <polyline points="1.5,5 4,7.5 8.5,2.5"/>
          </svg>
        </div>
        <div class="food-info">
          <div class="food-name-text">${isThai ? '<span class="food-tag">🇹🇭</span>' : ""}${fname(f)}</div>
          <div class="food-name-sub">${subText}</div>
        </div>
        ${qtyHTML}
      </div>
    `;
    })
    .join("");
}

/* ════════════════════════════════════════════════════════════
   8. SELECT / DESELECT FOOD
════════════════════════════════════════════════════════════ */
function toggleFood(id) {
  if (selected[id]) {
    delete selected[id];
  } else {
    const food = FOODS.find((f) => f.id === id);
    const countEl = document.getElementById("sc" + id);
    const gramEl = document.querySelector(`#fi${id} .gram-input`);
    let amt;
    if (food.countable) {
      amt = countEl ? parseInt(countEl.textContent) || 1 : 1;
    } else {
      amt = gramEl ? parseFloat(gramEl.value) || 100 : 100;
    }
    selected[id] = { food, amt };
  }

  const el = document.getElementById("fi" + id);
  if (el) el.className = "food-item" + (selected[id] ? " selected" : "");
  render();
}

/** Step a countable food ± 1 */
function stepAmt(id, delta) {
  const food = FOODS.find((f) => f.id === id);
  const countEl = document.getElementById("sc" + id);
  const ubEl = document.getElementById("ub" + id);
  if (!food || !countEl) return;

  let val = parseInt(countEl.textContent) || 1;
  val = Math.max(1, val + delta);
  countEl.textContent = val;

  if (ubEl) {
    ubEl.textContent = val === 1 ? tr(food.unitKey) : tr(food.unitKeyPlural);
  }
  if (selected[id]) {
    selected[id].amt = val;
    render();
  }
}

/** Update gram amount when user types in the input */
function setAmt(id, val) {
  const amt = parseFloat(val) || 0;
  if (selected[id]) {
    selected[id].amt = amt;
    render();
  }
}

/** Clear all selected foods */
function clearAll() {
  selected = {};
  document.getElementById("searchInput").value = "";
  activeCat = "All";
  rebuildCats();
  renderList();
  render();
}

/* ════════════════════════════════════════════════════════════
   9. PROFILE & TARGETS
════════════════════════════════════════════════════════════ */
function calcTargets() {
  const w = parseFloat(document.getElementById("weight").value);
  const h = parseFloat(document.getElementById("height").value);
  const a = parseFloat(document.getElementById("age").value);
  const g = document.getElementById("gender").value;
  const act = parseFloat(document.getElementById("activity").value);
  const goal = document.getElementById("goal").value;

  if (!w || !h || !a) {
    alert(tr("alertProfile"));
    return;
  }

  /* BMR via Mifflin-St Jeor */
  let bmr =
    g === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
  let tdee = bmr * act;
  if (goal === "lose") tdee -= 500;
  else if (goal === "gain") tdee += 300;

  /* Macros */
  const pro = Math.round(w * 1.6); // 1.6 g protein per kg
  const fatCal = tdee * 0.28;
  const fat = Math.round(fatCal / 9);
  const carbCal = tdee - pro * 4 - fatCal;
  const carb = Math.round(carbCal / 4);
  const fiber = g === "male" ? 38 : 25;

  /* BMI */
  const bmi = w / (h / 100) ** 2;
  const bmiStr = bmi.toFixed(1);
  const bmiKey =
    bmi < 18.5
      ? "bmiUnder"
      : bmi < 25
        ? "bmiNormal"
        : bmi < 30
          ? "bmiOver"
          : "bmiObese";
  const bmiClass =
    bmi < 18.5
      ? "bmi-un"
      : bmi < 25
        ? "bmi-ok"
        : bmi < 30
          ? "bmi-ov"
          : "bmi-ob";

  /* Update state */
  targets = {
    cal: Math.round(tdee),
    pro,
    carb,
    fat,
    fiber,
    sodium: 2300,
    calcium: 1300,
    iron: 18,
    vitC: 90,
    vitD: 20,
    potas: 4700,
  };

  /* Update DOM — sidebar */
  document.getElementById("tBMI").textContent = bmiStr;
  document.getElementById("tBMIbadge").textContent = tr(bmiKey);
  document.getElementById("tBMIbadge").className = "tbadge " + bmiClass;
  document.getElementById("tCalVal").textContent =
    targets.cal.toLocaleString() + " kcal";
  document.getElementById("tProVal").textContent = targets.pro + " g";
  document.getElementById("tCarbVal").textContent = targets.carb + " g";
  document.getElementById("tFatVal").textContent = targets.fat + " g";
  document.getElementById("tFiberVal").textContent = targets.fiber + " g";
  document.getElementById("tSodiumVal").textContent = "2,300 mg";

  /* Update DOM — macro tile captions */
  const of = tr("of");
  document.getElementById("mCalTarget").textContent =
    `${of} ${targets.cal.toLocaleString()} kcal`;
  document.getElementById("mProTarget").textContent = `${of} ${targets.pro} g`;
  document.getElementById("mCarbTarget").textContent =
    `${of} ${targets.carb} g`;
  document.getElementById("mFatTarget").textContent = `${of} ${targets.fat} g`;

  render();
}

/* ════════════════════════════════════════════════════════════
   10. NUTRITION CALCULATION
════════════════════════════════════════════════════════════ */
function calcTotals() {
  const t = {
    cal: 0,
    pro: 0,
    carb: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    satFat: 0,
    sodium: 0,
    chol: 0,
    potas: 0,
    calcium: 0,
    iron: 0,
    vitC: 0,
    vitA: 0,
    vitD: 0,
    mag: 0,
  };

  Object.values(selected).forEach(({ food, amt }) => {
    const g = effectiveGrams(food, amt);
    const r = g / 100;
    Object.keys(t).forEach((k) => {
      t[k] += (food.per100[k] || 0) * r;
    });
  });

  return t;
}

/** Convert value to % of daily target, capped at 150 */
function pct(val, dv) {
  return Math.min(Math.round((val / dv) * 100), 150);
}

/** Progress bar colour: green → amber → red */
function barC(p) {
  return p >= 100 ? "#f87171" : p >= 75 ? "#fbbf24" : "#4ade80";
}

/* ════════════════════════════════════════════════════════════
   11. RENDER RESULTS
════════════════════════════════════════════════════════════ */
function render() {
  const tot = calcTotals();
  const keys = Object.keys(selected);

  /* ── Macro tiles ── */
  document.getElementById("mCal").textContent = Math.round(tot.cal);
  document.getElementById("mPro").textContent = tot.pro.toFixed(1);
  document.getElementById("mCarb").textContent = tot.carb.toFixed(1);
  document.getElementById("mFat").textContent = tot.fat.toFixed(1);

  const setBar = (barId, val, tgt) => {
    document.getElementById(barId).style.width =
      Math.min(Math.round((val / tgt) * 100), 100) + "%";
  };
  setBar("mCalBar", tot.cal, targets.cal);
  setBar("mProBar", tot.pro, targets.pro);
  setBar("mCarbBar", tot.carb, targets.carb);
  setBar("mFatBar", tot.fat, targets.fat);

  /* ── Meal summary ── */
  document.getElementById("itemCount").textContent =
    `${keys.length} ${tr("items")}`;

  const mealEl = document.getElementById("mealList");
  if (!keys.length) {
    mealEl.innerHTML = `<div class="meal-empty">${tr("noFoods")}</div>`;
  } else {
    mealEl.innerHTML = Object.values(selected)
      .map(({ food, amt }) => {
        const g = effectiveGrams(food, amt);
        const c = Math.round((food.per100.cal * g) / 100);
        return `
        <div class="meal-row">
          <div>
            <div class="mr-name">${fname(food)}</div>
            <div class="mr-amt">${amtLabel(food, amt)}</div>
          </div>
          <div class="mr-cal">${c} kcal</div>
        </div>
      `;
      })
      .join("");
  }

  /* ── % of daily target bars ── */
  const dvNames = tr("dvNames");
  const dvVals = [
    tot.cal,
    tot.pro,
    tot.carb,
    tot.fat,
    tot.fiber,
    tot.sodium,
    tot.calcium,
    tot.iron,
    tot.vitC,
    tot.vitD,
    tot.potas,
  ];
  const dvTgts = [
    targets.cal,
    targets.pro,
    targets.carb,
    targets.fat,
    targets.fiber,
    targets.sodium,
    targets.calcium,
    targets.iron,
    targets.vitC,
    targets.vitD,
    targets.potas,
  ];
  const dvUnits = [
    "kcal",
    "g",
    "g",
    "g",
    "g",
    "mg",
    "mg",
    "mg",
    "mg",
    "mcg",
    "mg",
  ];

  document.getElementById("dvList").innerHTML = dvVals
    .map((val, i) => {
      const p = pct(val, dvTgts[i]);
      const col = barC(p);
      const dv = val < 10 ? val.toFixed(1) : Math.round(val);
      return `
      <div class="dv-item">
        <div class="dv-top">
          <span class="dv-name">${dvNames[i]}</span>
          <div class="dv-right">
            <span class="dv-nums">${dv} / ${dvTgts[i]} ${dvUnits[i]}</span>
            <span class="dv-pct-badge" style="background:${col}22;color:${col}">${p}%</span>
          </div>
        </div>
        <div class="dv-track">
          <div class="dv-fill" style="width:${Math.min(p, 100)}%;background:${col};"></div>
        </div>
      </div>
    `;
    })
    .join("");

  /* ── Detailed nutrient grid ── */
  const dn = tr("detailNames");
  const details = [
    [dn[0], tot.fiber.toFixed(1) + "g"],
    [dn[1], tot.sugar.toFixed(1) + "g"],
    [dn[2], tot.satFat.toFixed(1) + "g"],
    [dn[3], Math.round(tot.chol) + "mg"],
    [dn[4], Math.round(tot.sodium) + "mg"],
    [dn[5], Math.round(tot.potas) + "mg"],
    [dn[6], Math.round(tot.calcium) + "mg"],
    [dn[7], tot.iron.toFixed(1) + "mg"],
    [dn[8], tot.vitC.toFixed(1) + "mg"],
    [dn[9], Math.round(tot.vitA) + "mcg"],
    [dn[10], tot.vitD.toFixed(1) + "mcg"],
    [dn[11], Math.round(tot.mag) + "mg"],
  ];

  document.getElementById("detailGrid").innerHTML = details
    .map(
      ([n, v]) => `
      <div class="dn-row">
        <span class="dn-name">${n}</span>
        <span class="dn-val">${v}</span>
      </div>
    `,
    )
    .join("");
}

/* ════════════════════════════════════════════════════════════
   12. INIT
════════════════════════════════════════════════════════════ */
rebuildCats();
renderList();
render();
applyI18N();
