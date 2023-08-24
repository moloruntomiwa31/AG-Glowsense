import image1 from "../src/assets/products/bodyScrub.jpg";
import image2 from "../src/assets/products/organicBodyButter.jpg";
import image3 from "../src/assets/products/product1.avif";
import image4 from "../src/assets/products/product2.avif";
import image5 from "../src/assets/products/product3.avif";
import image6 from "../src/assets/products/product4.avif";
import image7 from "../src/assets/products/product5.avif";
import carrot from "../src/assets/products/bodyScrub.jpg"
import fruity from "../src/assets/products/fruityBodyScrub.jpg"
import faceCleanser from "../src/assets/products/faceCleanser.jpg"
import herbalShampoo from "../src/assets/products/herbalShampoo.jpg"
import vivePack from "../src/assets/products/vivePack.jpg"
import hairButter from "../src/assets/products/hairButter.jpg"
import hairBoosterOil from "../src/assets/products/hairBooster.jpg"

const data = [
  {
    id: 42,
    image: carrot,
    name: "Carrot and Sugar Scrub",
    ingredients: "Carrot, sugar",
    product_type: "bodywash",
    desc: "Exfoliating, deep cleansing and brighter effect.",
    quantity: "5",
    size: "500ml",
    price: "10000",
    usage: "Use morning and night for a beautiful and glowing dark skin tone.",
  },
  {
    id: 53,
    image: fruity,
    name: "Fruity Body Scrub",
    ingredients: "Lemon and Aloe Vera",
    product_type: "bodywash",
    desc: "Exfoliating, deep cleansing and brighter effect.",
    quantity: "5",
    size: "250g",
    price: "10000",
    usage: "Use morning and night for a beautiful and glowing skin tone.",
  },
  {
    id: 65,
    image: faceCleanser,
    name: "Face Cleanser",
    ingredients: "Salicylic acid and Vitamin A",
    product_type: "facewash",
    desc: "Dries out acne and leaves skin feeling smooth",
    quantity: "5",
    size: "100ml",
    price: "10000",
    usage: "Use morning and night for a beautiful and glowing skin tone.",
  },
  {
    id: "1",
    image: image1,
    name: "Chocolate Glow shower gel",
    ingredients: "Lemon and Aloe Vera",
    product_type: "bodywash",
    desc: "Exfoliating, deep cleansing and brighter effect.",
    quantity: "5",
    size: "500ml",
    price: "10000",
    usage: "Use morning and night for a beautiful and glowing dark skin tone.",
  },
  {
    id: "2",
    image: image2,
    name: "Half cast shower gel",
    ingredients: "Alpha arbutin, glutathione, kojic dip, lemon",
    product_type: "bodywash",
    desc: "The extra whitening body wash with whitening natural extracts which moisturises the skin, prevents melanin formation, clears hyper pigmentation.",
    quantity: "5",
    size: "500ml",
    price: "9500",
    usage: "Use daily with AG Glowsense half cast lotion for amazing results.",
  },
  {
    id: "3",
    image: image3,
    name: "Lightening shower gel",
    ingredients: "Lemon and hojic acid",
    product_type: "bodywash",
    desc: "The blend of natural goodness lightens the skin, whitening anti-dark spots, removes pigment giving a clearer and brighter result.",
    quantity: "5",
    size: "500ml",
    price: "15000",
    usage: "Use morning and night for best result.",
  },
  {
    id: "4",
    image: image4,
    name: "Liquid black soap",
    ingredients: "Lemon, Aloe Vera, mulberry and koji acid",
    product_type: "bodywash",
    desc: "The blend of natural extracts makes the skin clearer, and fairer, giving a soft, smooth simple look.",
    quantity: "5",
    size: "500ml",
    price: "10000",
    usage: "Use morning and night for best result.",
  },
  {
    id: "5",
    image: image5,
    name: "Whitening face wash",
    ingredients: "Lemon, Aloe Vera, mulberry",
    product_type: "facewash",
    desc: "A powerful face wash that brightens dull facial skin. Infused with exfoliants to remove stubborn dead skin cells thereby revealing a cleaner and brighter face.",
    quantity: "5",
    size: "100ml",
    price: "8000",
    usage:
      "Pour a pea sized quantityon your wet palm, rub your hands together to make a lather, now wash your face, ear and neck. Use with our Clarifying toner for better result.",
  },
  {
    id: "6",
    image: image6,
    name: "Clarifying toner",
    ingredients: "Lemon, Aloe Vera, mulberry",
    product_type: "facewash",
    desc: "The clarifying toner has the ability to wipe off debrisleft on the face after cleansing.",
    quantity: "5",
    size: "100ml",
    price: "8000",
    usage:
      "Pour the desirable amount of the toner on a cotton ball and use on a washed and clean face, ear and neck, daily.",
  },
  {
    id: "7",
    image: image7,
    name: "Antibacterial face wash",
    ingredients: "Aloe vera extracts and licorice extract",
    product_type: "facewash",
    desc: "An aloe vera face wash formulated to gently fight acne causing bacteria, sooth sun burn on skin, smoothen and brighthens the face.",
    quantity: "5",
    size: "500ml",
    price: "7000",
    usage:
      "Wet your face with some water, pour quantity sufficient amount of the soap on your palm, rub palm together and wash your face for 60secs in circular motion. Rinse off and apply AG Glowsense face cleanser.",
  },
  {
    id: "8",
    image: herbalShampoo,
    name: "Herbal hair repair shampoo",
    ingredients: "African black soap, distilled water, sunflower oil extract.",
    product_type: "vive",
    desc: "The blend of natural extracts makes the skin clearer, and fairer.",
    quantity: "5",
    size: "500ml",
    price: "14000",
  },
  {
    id: "9",
    image: vivePack,
    name: "Hair food",
    ingredients: "Jamaican black closter oil, Vitamin E, Green tea extract",
    product_type: "vive",
    desc: "The blend of natural extracts makes the skin clearer, and fairer.",
    quantity: "5",
    size: "500ml",
    price: "13000",
    usage:
      "Apply daily on scalp and edges to treat receding hairline and dandruff.",
  },
  {
    id: "10",
    image: hairButter,
    name: "Herbal hair butter",
    ingredients: "Shea butter, cocoa butter, Organic herbs, and oils",
    product_type: "vive",
    desc: "The butter helps the hair lock in moisture, stops breakage, it gives hair the need for nourishment and growth.",
    quantity: "5",
    size: "250g",
    price: "15500",
  },
  {
    id: "11",
    image: hairBoosterOil,
    name: "Hair booster oil",
    ingredients: "Avocado oil, Almond oil, coster oil, vitamin E, coconut oil.",
    product_type: "vive",
    desc: "Gives hair great volume and strength, helps release dandruff, prevents scally scalp. Fast and rapid hair growth.",
    quantity: "5",
    size: "100ml",
    price: "10000",
    usage:
      "Can be used daily on hair length and can also be used once a week or twice a month as hot oil treatment to promote blood circulation on the scalp pores and encourage rapid growth.",
  },
];

export default data;
