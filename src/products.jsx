import Birthday1 from './assets/images/download.jpeg';
import romantic from './assets/images/romantic.jpeg'
import ring from './assets/images/ring.jpeg'
import ceiling from './assets/images/ceiling.jpeg'
import adult from './assets/images/18th.jpeg'
import mini from './assets/images/minimal.jpeg'
import jungle from './assets/images/wp1.png'
import thirty from './assets/images/30th Happy Birthday Decorations.jpeg'
import baby from './assets/images/baby.jpg'
import boy from './assets/images/a boy.jpg'
import girl from './assets/images/a girl.jpg'
import ohbaby from './assets/images/oh baby.jpg'
import glided from './assets/images/glided.jpg'
import premium from './assets/images/premium.jpg'
import bear from './assets/images/bear.jpg'
import rustic from './assets/images/rustic.jpg'
import pink from './assets/images/pink.jpg'
import chic from './assets/images/chic.jpg'
import retro from './assets/images/retro.jpg'


const products = [
  // ===== BIRTHDAY DECORATIONS (12 products) =====
  {
    id: 1,
    name: "Colorful & Beautiful Balloon Ring",
    category: "birthday",
    subCategory: "25th Birthday",
    price: 2800,
    originalPrice: 3500,
    image: ring,
    description: "Stunning balloon ring perfect for birthdays",
    fullDescription: "Transform your 25th birthday celebration into a vibrant and unforgettable experience with our stunning rainbow balloon arch. This eye-catching decoration piece serves as the perfect backdrop for your special day.",
    features: ["Premium quality latex balloons in multiple vibrant colors", "Professionally designed arch structure spanning 8-10 feet", "Customizable color scheme to match your party theme", "Includes installation and removal service", "Perfect for photo opportunities and social media moments", "Durable design that lasts throughout the event"],
    includes: "Balloon arch setup, color consultation, on-site installation team, and cleanup service",
    setupTime: "2-3 hours",
    rating: 4.5,
    ratingCount: 45,
    discount: 20
  },
  {
    id: 4,
    name: "Ceiling Balloons Setup",
    category: "birthday",
    subCategory: "1st Birthday",
    price: 2200,
    originalPrice: 2800,
    image: ceiling,
    description: "Beautiful floating ceiling balloon arrangement",
    fullDescription: "Create a magical wonderland for your little one's first birthday with our enchanting ceiling balloon setup.",
    features: ["Safe, non-toxic helium-filled balloons", "Age-appropriate color schemes", "Ceiling coverage creating a canopy effect", "Mix of solid colors and themed prints", "Ground balloon clusters for added decoration", "Complimentary first birthday banner"],
    includes: "Helium-filled balloons, ceiling attachment, themed accessories, and safety-compliant materials",
    setupTime: "2 hours",
    rating: 4.6,
    ratingCount: 51,
    discount: 21
  },
  {
    id: 6,
    name: "Minimal & Elegant Birthday",
    category: "birthday",
    subCategory: "Birthday",
    price: 1599,
    originalPrice: 2000,
    image: mini,
    description: "Sophisticated minimalist birthday decoration",
    fullDescription: "Celebrate your birthday with our sophisticated minimalist birthday decoration.",
    features: ["Clean, modern aesthetic design", "Elegant color palette selection", "Premium quality minimal decorations", "Strategic placement for maximum impact", "Sophisticated balloon arrangements", "Classy table centerpieces"],
    includes: "Curated minimal decor elements, color-coordinated setup, and elegant finishing touches",
    setupTime: "2 hours",
    rating: 4.4,
    ratingCount: 33,
    discount: 20
  },
  {
    id: 101,
    name: "Grand 60th Birthday Celebration",
    category: "birthday",
    subCategory: "60th Birthday",
    price: 4200,
    originalPrice: 5000,
    image: Birthday1,
    description: "Luxurious golden themed 60th birthday decoration",
    fullDescription: "Celebrate six decades of life with our grand 60th birthday decoration package featuring elegant golden accents.",
    features: ["Luxurious blue theme throughout", "Premium quality balloons and draping", "Milestone number display", "Elegant table settings", "Photo booth with props", "Personalized birthday banner"],
    includes: "Complete venue decoration, golden theme elements, photo props, and milestone displays",
    setupTime: "4 hours",
    rating: 4.9,
    ratingCount: 28,
    discount: 16
  },
  {
    id: 102,
    name: "Jungle Theme decor setup",
    category: "birthday",
    subCategory: "1st Birthday",
    price: 3100,
    originalPrice: 3800,
    image: jungle,
    description: "Jungle themed birthday party",
    fullDescription: "Step into the wild with our Jungle Theme Balloon Décor! 🦁🌿 This playful setup includes a vibrant mix of green, brown, and yellow balloons styled with a backdrop and banner, along with adorable animal foil balloons that bring the jungle to life. Perfect for kids’ birthdays and themed parties, this décor creates a fun and lively atmosphere where little ones can feel like they’re on a safari adventure. At just ₹2700, it’s an eye-catching yet budget-friendly setup that doubles as the perfect photo backdrop for unforgettable memories.",
    features: ["Adds a fun and lively atmosphere to your event.", "Customizable to suit any theme or occasion.", "Long-lasting and reusable with proper care."],
    includes: "350 jungle themed color balloons, Age balloon + Animaal foils for elegant touch up 4, Back banner with kid's image",
    setupTime: "3 hours",
    rating: 4.7,
    ratingCount: 42,
    discount: 18
  },
  {
    id: 103,
    name: "Sweet 18 Modern Elegance",
    category: "birthday",
    subCategory: "18th Birthday",
    price: 3500,
    originalPrice: 4200,
    image: adult,
    description: "Chic and modern 18th birthday decoration",
    fullDescription: "Mark the transition to adulthood with our sophisticated 18th birthday decoration package.",
    features: ["Modern geometric designs", "Metallic gold and rose gold accents", "LED string lights", "Instagram-worthy photo corners", "Number 18 display piece", "Elegant table centerpieces"],
    includes: "Modern decor elements, lighting setup, photo backdrop, and themed accessories",
    setupTime: "3 hours",
    rating: 4.8,
    ratingCount: 56,
    discount: 17
  },
  {
    id: 108,
    name: "Elegant 30th Birthday Setup",
    category: "birthday",
    subCategory: "30th Birthday",
    price: 3600,
    originalPrice: 4300,
    image: thirty,
    description: "Sophisticated 30th birthday celebration decor",
    fullDescription: "Welcome a new decade with our elegant and refined 30th birthday decoration package.",
    features: ["Rose gold and black theme", "Premium balloon garlands", "Floral arrangements", "Number 30 installation", "Elegant draping", "Sophisticated table settings"],
    includes: "Complete elegant setup, floral elements, premium balloons, Happy Birthday banner and refined decorations",
    setupTime: "3-4 hours",
    rating: 4.9,
    ratingCount: 48,
    discount: 16
  },
  {
    id: 109,
    name: "Red Theme Romantic Birthday decor",
    category: "birthday",
    subCategory: "28th Birthday",
    price: 2500,
    originalPrice: 3300,
    image: romantic,
    description: "With the color of love and with a touch of romance birthday party",
    fullDescription: "Launch into an intergalactic celebration with our space explorer birthday theme.",
    features: ["Neon light with Backdrop banner", "Premium quality decorative elements", "Table centerpieces and backdrop setup", "Coordinated theme throughout the venue", "Red and Pink coloured heart shaped balloons", "Premium Balloon Styling"],
    includes: "Romantic theme setup, glow decorations, and themed accessories",
    setupTime: "3 hours",
    rating: 4.6,
    ratingCount: 31,
    discount: 18
  },
  {
    id: 110,
    name: "Pink and Silver Birthday decor",
    category: "birthday",
    subCategory: "Birthday",
    price: 2500,
    originalPrice: 3300,
    image: pink,
    description: "Pink and Silver Birthday decor",
    fullDescription: "Immerse yourself in a dreamy celebration with our Blue and Silver Birthday Decor, designed to make your birthday festivities unforgettable! At the heart of this enchanting setup is an arch of 150 balloons in pastel blue, white, dark blue, and purple colors, creating a magical and festive atmosphere. Adding to the sparkle and charm are four silver confetti balloons, shimmering and twinkling with every movement.",
    features: ["Arch of 130 balloons with pastel pink, white and majenta metallic color", "4 Silver confetti balloons", "2 Silver Fringe curtains", "3 Pink rosette", "20 Free floating balloons", "Coordinated theme throughout the venue",],
    includes: "Neon light with Backdrop banneromantic theme setup, glow decorations, 1 happy birthday banner",
    setupTime: "3 hours",
    rating: 4.6,
    ratingCount: 30,
    discount: 18
  },
  {
    id: 112,
    name: "Chic black and Rose Gold Birthday decor",
    category: "birthday",
    subCategory: "Black and Gold Birthday",
    price: 2500,
    originalPrice: 3300,
    image: chic,
    description: "Chic black and Rose Gold Birthday decor",
    fullDescription: "Launch into an intergalactic celebration with our space explorer birthday theme.",
    features: ["Arch of 120 balloons of Rose Gold and Black color", "2 black Fringe curtains", "1 Rose Gold happy birthday foil balloons", "30 Free floating balloons"],
    includes: "Romantic theme setup, glow decorations, and themed accessories",
    setupTime: "3 hours",
    rating: 4.6,
    ratingCount: 61,
    discount: 18
  },
  {
    id: 131,
    name: "Retro Colored Balloons for B day Bonanza",
    category: "birthday",
    subCategory: "28th Birthday",
    price: 3199,
    originalPrice: 3599,
    image: retro,
    description: "The retor charm reviews with the morden element in this birthday setup",
    fullDescription: "Perfect birthday decor with retro hues like skin, wisteria, and chrome golden balloons creates a truly unforgettable experience. Soft shades of balloons and contemporary elements like a Greek table, free-floating balloons, and age foil balloons ensure the birthday venue feels inviting and unique.",
    features: ["Arch of 150 Golden balloons", "2*2 ft Sunboard Cutout ", "4 bubble balloons", "Any 2 age golden balloons", "2 Fairy lights", "Premium Balloon Styling"],
    includes: "A Perfect Backdrop for any Venue, glow decorations, retro hues like wisteria and Golden balloons, themed accessories",
    setupTime: "3.5 hours",
    rating: 4.6,
    ratingCount: 91,
    discount: 12
  },
  {
    id: 131,
    name: "Black & Gold Ceiling Balloon Party",
    category: "birthday",
    subCategory: "28th Birthday",
    price: 3199,
    originalPrice: 3599,
    image: "https://cheetah.cherishx.com/uploads/1717764338_original.jpg",
    description: "Black and gold/yellow ceiling helium balloons with curled ribbon tails, gold foil 'HAPPY BIRTHDAY' letter balloons and coordinated flower-shaped balloon clusters for a compact indoor celebration.",
    fullDescription: "A stylish indoor birthday decor featuring alternating black and gold/yellow helium balloons suspended from the ceiling with curled ribbon tails, plus coordinated 5-bubble flower clusters mounted on the wall and a large gold-foil 'HAPPY BIRTHDAY' letter set as the photo-backdrop. Clean, budget-friendly styling suited for apartments or small venues — quick to install and highly photogenic for casual gatherings.",
    features: [
      "Alternating black and gold/yellow helium balloons tied with curled white ribbons",
      "Ceiling-distributed single balloons to create a floating canopy effect",
      "Gold-foil 'HAPPY BIRTHDAY' letter balloon set (wall-mounted)",
      "Multiple 5-bubble flower-shaped balloon clusters in matching colors",
      "Compact layout suitable for small indoor spaces (apartment/room)",
      "Quick-install method with secure ribbon tethers and adhesive wall mounts"
    ],
    includes: "Helium inflation and ceiling attachment for 30 - 40 single balloons, gold-foil 'HAPPY BIRTHDAY' letter balloon set (inflated & mounted), six 5-bubble flower clusters for wall accents, curled ribbon tails for each ceiling balloon, adhesive mounting supplies, onsite installation and minor post-event teardown.",
    setupTime: "3.5 hours",
    rating: 4.6,
    ratingCount: 91,
    discount: 12
  },


  // ===== BABY SHOWER DECORATIONS =====
  {
    id: 2,
    name: "It's a Boy Beautiful & Minimal",
    category: "baby-shower",
    subCategory: "Boy Baby Shower",
    price: 1800,
    originalPrice: 2200,
    image: boy,
    description: "Elegant blue themed baby shower decoration",
    fullDescription: "Celebrate the upcoming arrival of your baby boy with our elegant and minimal baby shower decoration package. Featuring soothing blue tones and sophisticated design elements that create the perfect atmosphere for this special occasion.",
    features: ["Elegant blue and white color palette", "Premium quality decorative elements", "Table centerpieces and backdrop setup", "Photo booth area with props", "Coordinated theme throughout the venue"],
    includes: "Complete venue decoration, backdrop, table settings and themed accessories",
    setupTime: "3-4 hours",
    rating: 4.8,
    ratingCount: 62,
    discount: 18
  },
  {
    id: 200,
    name: "Oh baby shower decor",
    category: "baby-shower",
    subCategory: "oh Baby Shower",
    price: 1800,
    originalPrice: 2200,
    image: ohbaby,
    description: "oh baby shower setup with pampas, lights & neon sign",
    fullDescription: "There's nothing quite as magical as anticipating a new life- and this boho baby shower design turns anticipation into an endearing celebration. With pampas grass, gentle drapes, and the cozy neon lighting spelling out Oh Baby the atmosphere is earthy, warm, and filled with love.",
    features: ["oh baby neon sign board", "Premium quality decorative elements", "Table centerpieces and backdrop setup", "Photo booth area with props", "1 teddy Bear", "Coordinated theme throughout the venue"],
    includes: "Complete venue decoration, backdrop, table settings and themed accessories",
    setupTime: "3-4 hours",
    rating: 4.8,
    ratingCount: 62,
    discount: 18
  },
  {
    id: 200,
    name: "Cocoa bear baby shower decor",
    category: "baby-shower",
    subCategory: "Baby Shower",
    price: 1800,
    originalPrice: 2200,
    image: bear,
    description: "oh baby shower setup with teddy bear, lights & neon sign",
    fullDescription: "Are you beginning the journey to motherhood, eagerly looking forward to the arrival of your little one? Well, it's time for a sweet celebration surrounded by your loved ones. We understand that stepping into motherhood is both special and, at times, a bit overwhelming. That's why a baby shower is a must a lighthearted gathering with your closest friends and family. Introducing our special Cocoa Bear theme baby shower decorations designed for your home or even an outdoor venue.",
    features: ["''OH BABY'' Neon Light ", "It's a boy banner", "Multi Coloured balloons", "4 mini teddies", "1 Teddy Bear",],
    includes: "Complete venue decoration, backdrop, table settings and themed accessories",
    setupTime: "3-4 hours",
    rating: 4.8,
    ratingCount: 62,
    discount: 18
  },
  {
    id: 200,
    name: "A Budget-Friendly baby shower",
    category: "baby-shower",
    subCategory: "Baby Shower",
    price: 1800,
    originalPrice: 2200,
    image: glided,
    description: "Celebrate a new beginnings with our Glided Baby Shower Decorations",
    fullDescription: "Celebrate the joy of impending motherhood with a touch of elegance and surprise. Our meticulously curated gilded baby shower decorations are the perfect way to create an unforgettable experience for the mother-to-be. Loaded with pastel blue and pink balloons, as well as a charming girl feet and boy feet balloon, this decor exudes a sense of anticipation and delight. To add a touch of glam, we've included a gold confetti balloon with sky-blue flex, creating a mesmerizing focal point. Whether it's a baby shower or a welcome party for your little one, this decor promises to make the celebration truly memorable.",
    features: ["1 girl feet foil balloon", "1 boy feet foil balloon", "oh baby foil balloon golden", "Premium quality decorative elements", "Coordinated theme throughout the venue"],
    includes: "Complete venue decoration, backdrop, table settings and themed accessories",
    setupTime: "3-4 hours",
    rating: 4.8,
    ratingCount: 62,
    discount: 18
  },
  {
    id: 7,
    name: "Baby Shower Balloon Décor",
    category: "baby-shower",
    subCategory: "Girl Baby Shower",
    price: 1750,
    originalPrice: 2100,
    image: girl,
    description: "Pastel colored baby shower balloon setup",
    fullDescription: "Welcome your baby girl with our beautiful pastel-themed baby shower decoration.",
    features: ["Soft pastel color palette", "Premium balloon garland installation", "Gender-specific themed elements", "Cute and adorable props", "Instagram-worthy photo corners", "Coordinated table decorations"],
    includes: "Balloon arrangements, themed props, welcome signage, and complete color coordination",
    setupTime: "2-3 hours",
    rating: 4.8,
    ratingCount: 56,
    discount: 17
  },
  {
    id: 8,
    name: "Baby Shower Ring Setup",
    category: "baby-shower",
    subCategory: "Twin Baby Shower",
    price: 4200,
    originalPrice: 5000,
    image: baby,
    description: "Premium circular baby shower decoration",
    fullDescription: "Double the joy with our premium twin baby shower decoration package.",
    features: ["1 Girl foil balloon", "1 boy foil balloon", "Dual-theme elements for twins", "Premium quality materials throughout", "Matching pair decorative elements", "Special twin-themed accessories"],
    includes: "Premium structure setup, dual theme coordination, premium materials, and specialized twin-themed decor",
    setupTime: "4 hours",
    rating: 4.9,
    ratingCount: 41,
    discount: 16
  },
  {
    id: 9,
    name: "Baby Shower Ring Setup Premium",
    category: "baby-shower",
    subCategory: "",
    price: 2300,
    originalPrice: 2800,
    image: premium,
    description: "Yellow themed baby shower decoration ring",
    fullDescription: "Keep everyone guessing with our exciting gender reveal party decoration.",
    features: ["Gender-neutral yellow theme", "Question mark and surprise elements", "Reveal-ready balloon arrangements", "Photo-worthy reveal backdrop", "Anticipation-building decorations", "Includes reveal props and accessories"],
    includes: "Complete gender reveal setup, neutral theme decor, reveal props, and photo backdrop",
    setupTime: "3 hours",
    rating: 4.7,
    ratingCount: 44,
    discount: 18
  },
  {
    id: 9,
    name: "Rustic Elegance Baby Shower",
    category: "baby-shower",
    subCategory: "baby-shower",
    price: 5000,
    originalPrice: 5500,
    image: rustic,
    description: "Yellow themed baby shower decoration ring",
    fullDescription: "Keep everyone guessing with our exciting gender reveal party decoration.",
    features: ["2*2ft ''Lets shower Mommy to be''", "Arch of 200 ballons of your choice", "6*6ft Green Grass Backdrop", "Photo-worthy reveal backdrop", "Anticipation-building decorations"],
    includes: "Complete gender reveal setup, neutral theme decor, reveal props, and photo backdrop",
    setupTime: "3 hours",
    rating: 4.7,
    ratingCount: 44,
    discount: 14
  },

  // ===== ANNIVERSARY DECORATIONS =====
  {
    id: 3,
    name: "Golden 25th Anniversary Special",
    category: "anniversary",
    subCategory: "25th Anniversary",
    price: 4699,
    originalPrice: 5500,
    image: "https://i.pinimg.com/736x/36/9a/71/369a71b6f69700c8fa1ce46bc2fa3022.jpg",
    description: "Large circular balloon wreath in metallic blue, rose-gold and silver with butterfly accents, neon 'Happy Anniversary' sign and illuminated '25' marquee — perfect for a 25th anniversary photo wall.",
    fullDescription: "A show-stopping 25th-anniversary setup featuring a large circular balloon garland in metallic blue and rose-gold tones with silver filler clusters, delicate butterfly motifs, a warm neon 'Happy Anniversary' sign with heart accent, and a bold illuminated '25' marquee. Finished with a soft pleated curtain backdrop and a styled cocktail table, this layout creates an elegant, photo-ready focal point for intimate or reception-style celebrations.",
    features: [
      "Large circular/hoop balloon garland composed of metallic blue, rose-gold and silver balloons",
      "Dense filler clusters for a textured, premium look",
      "Decorative metallic butterfly cutouts attached across the arch",
      "Warm neon 'Happy Anniversary' script sign with heart accent",
      "Illuminated marquee '25' numbers for strong photo presence",
      "Pleated curtain backdrop that complements metallic tones",
      "Coordinated styled cocktail/prop table with balloon base"
    ],
    includes: "Full balloon garland assembly (metallic blue, rose-gold, silver), butterfly accents and small props, neon 'Happy Anniversary' sign (powered), illuminated marquee '25' (rental), styled cocktail table and tabletop florals, backdrop curtain hanging, onsite installation & secure mounting, and post-event teardown.",
    setupTime: "4-5 hours",
    rating: 4.9,
    ratingCount: 38,
    discount: 15
  },
  // 1) cheetah image: red-rose memory wall with neon "Happy Anniversary" (viewed). :contentReference[oaicite:0]{index=0}
  {
    id: 3,
    name: "Romantic Red Rose Memory Wall",
    category: "anniversary",
    subCategory: "25th Anniversary",
    price: 4299,
    originalPrice: 5200,
    image: "https://cheetah.cherishx.com/uploads/2e4e066e619925b0835e45f514b499be_original.jpg?format=avif&width=640&height=640",
    description: "Lush rose-panel backdrop with neon 'Happy Anniversary' sign and lanterns.",
    fullDescription: "An elegant memory wall composed of dense faux-red roses and foliage with a warm neon 'Happy Anniversary' sign, two sculptural black panels draped in red fabric, lantern accents and a styled pedestal — perfect for intimate photo moments.",
    features: [
      "Dense vertical rose & foliage wall",
      "Warm neon 'Happy Anniversary' sign",
      "Black sculptural side panels with drape and bow",
      "Floor lanterns and small styled pedestal",
      "Coordinated red floral floor arrangement"
    ],
    includes: "Rose wall backdrop, neon sign (powered), side panels with drape, battery lanterns, pedestal styling, on-site install & teardown.",
    setupTime: "3-4 hours",
    rating: 4.8,
    ratingCount: 54,
    discount: 18
  },

  // 2) cheetah image: blue & silver organic columns + silver letters 'HAPPY ANNIVERSARY'. :contentReference[oaicite:1]{index=1}
  {
    id: 3,
    name: "Blue & Silver Organic Columns with Lettering",
    category: "anniversary",
    subCategory: "Anniversary",
    price: 3399,
    originalPrice: 4200,
    image: "https://cheetah.cherishx.com/uploads/1737120217_original.jpg?format=avif&width=640&height=640",
    description: "Dual blue-silver balloon columns flanking silver 'HAPPY ANNIVERSARY' letters.",
    fullDescription: "Two tall organic balloon columns in navy, metallic blue and silver flank a wall-mounted silver-foil 'HAPPY ANNIVERSARY' letter banner with hanging tassels above — a modern, low-footprint photo backdrop for halls and apartments.",
    features: [
      "Pair of organic balloon columns (varied sizes)",
      "Metallic and chrome balloon accents",
      "Silver-foil letter banner 'HAPPY ANNIVERSARY'",
      "Decorative star/pointed foil accents",
      "Tassel ceiling garland"
    ],
    includes: "Balloon columns assembly, foil lettering installation, tassel garland, onsite inflation and mounting, and teardown.",
    setupTime: "2-3 hours",
    rating: 4.6,
    ratingCount: 40,
    discount: 15
  },

  // 3) cheetah image: warm fairy lights backdrop with 'HAPPY ANNIVERSARY' foil letters + rose-petal heart. :contentReference[oaicite:2]{index=2}
  {
    id: 3,
    name: "Warm-Light Curtain with Heart Petal Trail",
    category: "anniversary",
    subCategory: "Romantic Surprise",
    price: 2499,
    originalPrice: 3200,
    image: "https://cheetah.cherishx.com/uploads/1686748229_original.jpg?format=avif&width=640&height=640",
    description: "Curtain of warm fairy lights with gold foil letters and rose-petal heart.",
    fullDescription: "A warm, romantic setup featuring a dense curtain of fairy string lights, gold 'HAPPY ANNIVERSARY' foil letters, red heart-shaped foil clusters and a rose-petal heart laid on the floor — ideal for intimate surprise moments and candlelit photos.",
    features: [
      "Curtain-string warm LED lights",
      "Gold-foil floating letters",
      "Red heart foil balloons",
      "Rose-petal heart floor design",
      "Ceiling balloon cluster accent"
    ],
    includes: "LED light curtain, foil letters, helium heart balloons, rose-petal floor design (mock or real), inflation and installation.",
    setupTime: "1.5-2.5 hours",
    rating: 4.7,
    ratingCount: 61,
    discount: 18
  },

  // 4) cheirshX circular hoop with green/pearl/metallic balloons and neon. :contentReference[oaicite:3]{index=3}
  {
    id: 3,
    name: "Pearl & Teal Circular Balloon Hoop with Neon",
    category: "anniversary",
    subCategory: "Photo Hoop",
    price: 2999,
    originalPrice: 3700,
    image: "https://cheetah.cherishx.com/uploads/1691492383_original.jpg?format=avif&width=640&height=640",
    description: "Round hoop garland with pastel pearls, metallic teal and neon 'Happy Anniversary'.",
    fullDescription: "A chic round metal hoop wrapped with pearl-white, teal and metallic mauve balloons with delicate butterfly accents and a warm neon 'Happy Anniversary' sign suspended within — finished with tall fluted pedestals and floral clusters.",
    features: [
      "Round metal hoop with mixed-size balloons",
      "Metallic teal + pastel pearl palette",
      "Delicate butterfly accents",
      "Suspended neon script sign",
      "Tall fluted pedestals for styling"
    ],
    includes: "Hoop balloon garland, neon sign (powered), pedestal props and floral accents, onsite assembly & teardown.",
    setupTime: "2.5-3.5 hours",
    rating: 4.85,
    ratingCount: 29,
    discount: 15
  },

  // 5) cheetah image: rose-gold bedroom ceiling + LOVE balloon over bed — hotel-room setup. :contentReference[oaicite:4]{index=4}
  {
    id: 3,
    name: "Rose Gold Bed & Ceiling Surprise Setup",
    category: "anniversary",
    subCategory: "Bedroom Surprise",
    price: 2199,
    originalPrice: 2800,
    image: "https://cheetah.cherishx.com/uploads/romantic-rose-gold-love-birthday-decoration.jpg?format=avif&width=640&height=640",
    description: "Hotel-room rose-gold and pink balloons with 'love' foil and bed petals.",
    fullDescription: "A romantic bedroom surprise with rose-gold and pink helium balloons clustered on the ceiling, rose-petal scatter on the bed, heart foil balloons and a central 'love' foil sign on the headboard — ideal for private anniversary moments.",
    features: [
      "Ceiling helium balloon cluster in rose-gold/pink",
      "Heart-shaped rose-gold foil balloons",
      "'love' foil sign mounted on headboard",
      "Bed petal scatter & floor balloons",
      "Compact installation suited for hotels/rooms"
    ],
    includes: "Ceiling helium inflation, foil sign mounting, petal scatter guidance (real or faux), balloon cleanup notes, onsite install & teardown.",
    setupTime: "1.5-2.5 hours",
    rating: 4.6,
    ratingCount: 75,
    discount: 12
  },

  // 6) cheetah image: soft blush & gold sequin backdrop with pink balloon garland. :contentReference[oaicite:5]{index=5}
  {
    id: 3,
    name: "Blush & Gold Sequin Photo Backdrop",
    category: "anniversary",
    subCategory: "Photo Wall",
    price: 3499,
    originalPrice: 4200,
    image: "https://cheetah.cherishx.com/uploads/1650365645_original.jpg?format=avif&width=384&height=384",
    description: "Gold sequin wall with blush-pink balloon garland and neon script.",
    fullDescription: "Sparkly gold sequin photo wall paired with a soft blush-pink balloon garland, large white balloon clusters and a warm neon 'Happy Anniversary' script — glamorous and very photo-ready.",
    features: [
      "Gold sequin backdrop",
      "Blush + white balloon garland",
      "Large white balloon clusters",
      "Neon script sign",
      "Floor balloon accents"
    ],
    includes: "Sequin backdrop hire, garland assembly, neon sign (powered), balloon clusters and onsite setup.",
    setupTime: "2.5-3.5 hours",
    rating: 4.9,
    ratingCount: 46,
    discount: 15
  },

  // 7) cheirshX black/gold/white organic garland + 'Happy Anniversary' neon (gold/black theme). 
  {
    id: 3,
    name: "Black & Gold Organic Garland with Neon",
    category: "anniversary",
    subCategory: "Elegant",
    price: 3899,
    originalPrice: 4700,
    image: "https://cheetah.cherishx.com/uploads/1689590690_original.jpg?format=avif&width=640&height=640",
    description: "Black, gold and white balloon garland with neon 'Happy Anniversary' signage.",
    fullDescription: "A dramatic black-and-gold organic balloon garland arranged around a neon 'Happy Anniversary' sign and tall cylindrical pedestal — bold, sophisticated and ideal for evening celebrations or hotel lobbies.",
    features: [
      "Organic garland (black, gold, white)",
      "Confetti clear balloon accents",
      "Neon script sign",
      "Tapered pedestal styling",
      "Low-floor footprint for indoor venues"
    ],
    includes: "Garland assembly, neon sign (powered), pedestal prop, mounting & teardown.",
    setupTime: "3-4 hours",
    rating: 4.8,
    ratingCount: 33,
    discount: 16
  },

  // 8) cherisX ceiling red heart balloons + photo-collage heart on wall. :contentReference[oaicite:7]{index=7}
  {
    id: 3,
    name: "Ceiling Red Heart Balloon Surprise with Photo-Collage",
    category: "anniversary",
    subCategory: "Romantic Bedroom",
    price: 1999,
    originalPrice: 2500,
    image: "https://cheetah.cherishx.com/uploads/1669111480_original.jpg?format=avif&width=640&height=640",
    description: "Red heart balloons on ceiling, silver letter balloons, and photo-collage heart.",
    fullDescription: "A playful bedroom surprise with red heart helium balloons tethered to the ceiling, silver-foil 'ANNIVERSARY' letters, a lit photo-collage heart, and a scripted 'love' foil over the headboard — great for intimate hotel surprises.",
    features: [
      "Red helium heart balloons across ceiling",
      "Silver-foil 'ANNIVERSARY' letters",
      "Photo-collage heart with small lights",
      "'love' foil headboard script",
      "Bedside floral stems"
    ],
    includes: "Ceiling inflation, letters mounting, photo-collage layout, battery lights, and installation.",
    setupTime: "1.5-2.5 hours",
    rating: 4.7,
    ratingCount: 92,
    discount: 18
  },

  // 9) cherisX orange/black/white ceiling balloon canopy + foil 'HAPPY ANNIVERSARY'. :contentReference[oaicite:8]{index=8}
  {
    id: 3,
    name: "Ceiling Canopy Anniversary Setup (Orange & Black)",
    category: "anniversary",
    subCategory: "Room Surprise",
    price: 1899,
    originalPrice: 2300,
    image: "https://cheetah.cherishx.com/uploads/1661949840_original.jpg?format=avif&width=384&height=384",
    description: "Orange, black and white ceiling balloons with wall-mounted foil letters.",
    fullDescription: "A cheerful ceiling canopy formed from orange, black and white balloons with a wall-mounted gold-foil 'HAPPY ANNIVERSARY' set — compact, budget-friendly and suited to hotel or bedroom spaces.",
    features: [
      "Ceiling balloon canopy",
      "Wall-mounted foil lettering",
      "Floor balloon accents",
      "Quick-install tethering system"
    ],
    includes: "Ceiling inflation, foil letter mounting, tether supplies, and teardown.",
    setupTime: "1.5-2.5 hours",
    rating: 4.5,
    ratingCount: 77,
    discount: 10
  },

  // 10) 7eventzz pink circular arch with lights and scattered floor balloons. :contentReference[oaicite:9]{index=9}
  {
    id: 3,
    name: "Pink Circular Balloon Arch with Fairy Lights",
    category: "anniversary",
    subCategory: "Pink Arch",
    price: 2799,
    originalPrice: 3400,
    image: "https://cdn.7eventzz.com/12/1741863775291.webp",
    description: "Round pink arch with fairy-string lights and floor balloon scatter.",
    fullDescription: "A dreamy round arch composed of soft pink and rose-gold balloons with micro fairy lights behind, plus a generous floor scatter of matching balloons — ideal for evening garden parties and photo ops.",
    features: [
      "Round balloon hoop with pink & rose-gold tones",
      "Integrated fairy-string lights",
      "Floor balloon scatter",
      "Single-number balloon prop option"
    ],
    includes: "Arch build, lights installation, floor scatter, and onsite setup & teardown.",
    setupTime: "2.5-3.5 hours",
    rating: 4.7,
    ratingCount: 58,
    discount: 14
  },

  // 11) 7eventzz red/gold ceiling canopy + 'HAPPY ANNIVERSARY' foil with 'love' and number balloons. :contentReference[oaicite:10]{index=10}
  {
    id: 3,
    name: "Red & Gold Ceiling Canopy with Lettering",
    category: "anniversary",
    subCategory: "Bed & Room Surprise",
    price: 2599,
    originalPrice: 3300,
    image: "https://cdn.7eventzz.com/12/1741868242013.webp",
    description: "Red and gold ceiling balloons with foil letter backdrop and number balloon display.",
    fullDescription: "Ceiling-tethered red and gold balloons create a canopy effect over a bed, backed by red-foil 'HAPPY ANNIVERSARY' letters and golden number-letter accents — bright, festive and great for milestone nights.",
    features: [
      "Ceiling canopy of red & gold balloons",
      "Foil letter backdrop",
      "Number/word foil balloons for customization",
      "Floor and bedside balloon clusters"
    ],
    includes: "Ceiling inflation, letter mounting, custom-word foils, on-site install and teardown.",
    setupTime: "2-3 hours",
    rating: 4.6,
    ratingCount: 43,
    discount: 12
  },

  // 12) 7eventzz black+rose-gold hoop with illuminated '25' and neon 'Better Together'. :contentReference[oaicite:11]{index=11}
  {
    id: 3,
    name: "Black & Rose-Gold Hoop with Illuminated '25'",
    category: "anniversary",
    subCategory: "Milestone 25",
    price: 5599,
    originalPrice: 6900,
    image: "https://cdn.7eventzz.com/12/1742016082150.webp",
    description: "Large black and rose-gold hoop garland with illuminated '25' marquee and neon sign.",
    fullDescription: "A premium circular hoop setup with dense black and rose-gold balloons, illuminated marquee number '25' and a neon 'Better Together' script — dramatic, high-impact and perfect for large milestone celebrations.",
    features: [
      "Large balloon hoop with mixed-size clusters",
      "Illuminated marquee '25' numbers",
      "Neon script sign",
      "Clear/pearl balloon accents"
    ],
    includes: "Full hoop assembly, marquee lighting (rental), neon sign, professional install & power-safety checks.",
    setupTime: "4-5 hours",
    rating: 4.9,
    ratingCount: 27,
    discount: 18
  },
  // 1
  {
    id: 3,
    name: "Grand Gold & White Anniversary Display",
    category: "anniversary",
    subCategory: "25th Anniversary",
    price: 5599,
    originalPrice: 6999,
    image: "https://www.fnp.com/images/pr/l/v300/grand-anniversary-celebration_2.jpg",
    description: "Elegant gold-and-white arch with floral accents and illuminated numbers.", // 10–15 words
    fullDescription: "Grand gold-and-white anniversary display featuring an elegant balloon arch, floral clusters, soft draping and illuminated milestone numbers — designed for large venues and photo-ready moments.",
    features: [
      "Large gold & white organic balloon arch",
      "Coordinated fresh/floral clusters for luxe look",
      "Illuminated marquee numbers or bold foil digits",
      "Soft draping or pleated curtain backdrop",
      "Built for medium to large venue entrances or photo walls"
    ],
    includes: "Balloon arch assembly, floral clusters, marquee/number prop rental (if required), backdrop draping, onsite installation & teardown.",
    setupTime: "3.5-4.5 hours",
    rating: 4.8,
    ratingCount: 64,
    discount: 20
  },
  {
    id: 3,
    name: "Romantic Pink Bed & Ceiling Surprise",
    category: "anniversary",
    subCategory: "Romantic Bedroom",
    price: 2299,
    originalPrice: 2900,
    image: "https://cdn.7eventzz.com/12/1741870230186.webp",
    description: "Soft ceiling canopy of pink balloons with bedside clusters and foil accents.", // 10–15 words
    fullDescription: "An intimate bedroom styling with a canopy of soft pink balloons on the ceiling, bedside balloon clusters, heart-shaped foil accents and a small letter/word foil display — ideal for surprise stays and romantic evenings.",
    features: [
      "Soft pink helium ceiling canopy",
      "Bedside balloon clusters with foil hearts",
      "Wall-mounted mini foil lettering or script",
      "Low-footprint for hotel rooms",
      "Quick-install with secure tethering"
    ],
    includes: "Ceiling helium inflation, foil heart balloons, bedside clusters, adhesive mounts, onsite setup and cleanup.",
    setupTime: "1.5-2.5 hours",
    rating: 4.6,
    ratingCount: 48,
    discount: 12
  },


  // 5
  {
  id: 3,
  name: "Champagne & Gold Ceiling Surprise Decor",
  category: "anniversary",
  subCategory: "Room Surprise",
  price: 2199,
  originalPrice: 2799,
  image: "https://cdn.7eventzz.com/12/1741866667044.webp",
  description: "Champagne and gold ceiling balloons with foil hearts and romantic floor accents.", // 10–15 words
  fullDescription:
    "A warm and romantic room-surprise setup featuring champagne, gold and blush-toned helium balloons covering the ceiling, paired with curled ribbon tails, foil heart balloons, and soft balloon clusters on the floor. Ideal for anniversaries, romantic surprises, hotel stays, and intimate celebrations with a cozy aesthetic.",
  features: [
    "Ceiling canopy of champagne, gold and blush helium balloons",
    "Curled ribbon tails for soft decorative movement",
    "Gold and red heart-foil balloons for romantic accents",
    "Small floor clusters enhancing the foreground",
    "Great for hotel rooms, bedrooms, and intimate spaces"
  ],
  includes:
    "Ceiling helium inflation for 35–45 balloons, ribbon tails, heart-foil balloons, floor balloon clusters, adhesive mounts, onsite installation and teardown.",
  setupTime: "1.5–2 hours",
  rating: 4.6,
  ratingCount: 54,
  discount: 10
},
  {
    id: 3,
    name: "Pink Round Arch with Lights and Scatters",
    category: "anniversary",
    subCategory: "Photo Arch",
    price: 3299,
    originalPrice: 3999,
    image: "https://cdn.7eventzz.com/12/1741854373957.webp",
    description: "Round pink & rose-gold arch with fairy lights and floor balloon scatter.", // 10–15 words
    fullDescription: "A romantic round arch in soft pink and rose-gold tones with integrated fairy lights, generous floor-scatter of matching balloons, and a subtle backdrop — ideal for evening photo setups and small gatherings.",
    features: [
      "Circular arch with pink & rose-gold balloons",
      "Integrated fairy/string lights",
      "Generous floor balloon scatter",
      "Mixed balloon sizes for premium texture",
      "Photo-ready for evening events"
    ],
    includes: "Arch assembly, lights integration, floor scatter pack, mounting stands, onsite setup and teardown.",
    setupTime: "2.5-3.5 hours",
    rating: 4.7,
    ratingCount: 51,
    discount: 14
  },
  // 1) https://cdn.7eventzz.com/12/1742016343744.webp — viewed and used. :contentReference[oaicite:0]{index=0}
{
  id: 3,
  name: "Pink Round Arch with Lights (Deluxe)",
  category: "anniversary",
  subCategory: "Photo Arch",
  price: 3499,
  originalPrice: 4200,
  image: "https://cdn.7eventzz.com/12/1742016343744.webp",
  description: "Large pink round arch with fairy lights and scattered floor balloons.", // 10–15 words
  fullDescription: "A deluxe pink-and-rose-gold circular photo hoop wrapped with mixed-size balloons and integrated fairy lights. Finished with a generous floor-scatter of matching balloons and subtle backdrop draping for romantic evening photos.",
  features: [
    "Large circular metal hoop wrapped with mixed-size pink & rose-gold balloons",
    "Integrated micro fairy/string lights for warm evening glow",
    "Generous floor-scatter of matching balloons for depth and framing",
    "Mixed-size clusters for premium textured look",
    "Compact mounting stands for indoor/photo-wall placement"
  ],
  includes: "Hoop assembly and stand, balloon garland with fairy lights, floor-scatter balloon pack, mounting hardware, onsite assembly and teardown.",
  setupTime: "2.5-3.5 hours",
  rating: 4.7,
  ratingCount: 45,
  discount: 14
},

// 2) https://cdn.7eventzz.com/12/1741866152993.webp — viewed and used. :contentReference[oaicite:1]{index=1}
{
  id: 3,
  name: "Black & Orange Ceiling Surprise with Lettering",
  category: "anniversary",
  subCategory: "Photo Arch",
  price: 2899,
  originalPrice: 3499,
  image: "https://cdn.7eventzz.com/12/1741866152993.webp",
  description: "Black and orange ceiling balloons with silver 'HAPPY ANNIVERSARY' letter balloons.", // 10–15 words
  fullDescription: "A bold ceiling canopy featuring alternating black and orange helium balloons with curled ribbon tails, accented by silver-foil 'HAPPY ANNIVERSARY' letters and small heart-shaped foil clusters — perfect for dramatic bedroom surprises and photo ops.",
  features: [
    "Alternating black & orange helium balloons tethered to ceiling",
    "Curled ribbon tails for movement and photo effect",
    "Silver-foil 'HAPPY ANNIVERSARY' letter balloon set",
    "Heart-shaped foil accent balloons on walls",
    "Low-footprint layout for hotel rooms and bedrooms"
  ],
  includes: "Helium inflation and ceiling attachment for 30–50 balloons, foil-letter mounting, accent foil clusters, ribbon tails, adhesive mounting supplies, onsite installation and cleanup.",
  setupTime: "2-3 hours",
  rating: 4.6,
  ratingCount: 68,
  discount: 14
},

// 3) https://cdn.7eventzz.com/12/1741855834781.webp — viewed and used. :contentReference[oaicite:2]{index=2}
{
  id: 3,
  name: "Red & White Balloon Room Surprise",
  category: "anniversary",
  subCategory: "Photo Arch",
  price: 2399,
  originalPrice: 2999,
  image: "https://cdn.7eventzz.com/12/1741855834781.webp",
  description: "Floor-covered red and white balloons with ceiling accents and rose-petal heart.", // 10–15 words
  fullDescription: "A playful room surprise with a full floor scatter of red and white balloons, matching ceiling balloon canopy, warm fairy-light photo wall and a rose-petal heart on the bed for romantic effect and memorable pictures.",
  features: [
    "Full floor scatter of red & white balloons",
    "Dense ceiling balloon canopy with curled ribbons",
    "Fairy-light photo-collage wall feature",
    "Rose-petal heart on bed and bedside accents",
    "Quick-install layout suited for hotel/room surprises"
  ],
  includes: "Balloon floor-scatter pack and ceiling inflation, fairy-light photo wall, rose-petal heart (faux or fresh option), adhesive mounts, onsite setup and teardown.",
  setupTime: "2-3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
  // ===== THEME DECORATIONS =====

  {
  id: 3,
  name: "Green Dinosaur theme Birthday Decor",
  category: "theme",
  subCategory: "birthday",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/balloon-garland-and-dinosaur-backdrop-for-kids-birthday-decoration.jpg",
  description: "Presenting you our Gourgeous green dinosaur theme birthday decoration", // 10–15 words
  fullDescription: "Our green dinosaur theme birthday decoration is perfect for your little one's special day. Featuring a vibrant balloon garland in shades of green, complemented by a playful dinosaur backdrop, this setup creates a fun and festive atmosphere. Ideal for kids who love dinosaurs, this decoration will make the birthday celebration unforgettable.",
  features: [
    "Arch of 150 balloons of color 40 green latex, 40 green pastel, 20 Golden chrome, 10 orange latex, 5 printed balloons, 5 Golden Confetti, 30 brown latex  balloons",
    "5 theme dinosaur print foil balloons",
    "1 Golden happy birthday foil balloon",
    "2 green frill curtain",
    "1 Dinosaur theme cutout 3*2ft",
  ],
  includes: "Complete dinosaur theme birthday setup with balloons, backdrop, and themed cutouts",
  setupTime: "2-3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},

// ----------------------------


 {
  id: 3,
  name: "Golden Sunshine Birthday Theme Decor",
  category: "theme",
  subCategory: "Kids Birthday Theme",
  price: 2599,
  originalPrice: 3199,
  image: "https://cheetah.cherishx.com/uploads/golden-sunshine-foil-balloon-birthday-decoration-with-pastel-backdrop.jpg?format=avif&width=640&height=640",
  description: "Pastel balloon garland with golden sun foil and cheerful birthday backdrop.",
  fullDescription: "A bright and cheerful birthday theme decoration featuring pastel balloon garlands, golden sunshine foil balloons, and a clean backdrop that creates a joyful celebration setup for kids.",
  features: [
    "Pastel balloon garland",
    "Golden sunshine foil balloon",
    "Soft pastel backdrop",
    "Happy Birthday foil letters",
    "Theme-based color coordination"
  ],
  includes: "Balloon garland, sunshine foil balloon, backdrop setup, birthday foil letters, installation.",
  setupTime: "2–3 hours",
  rating: 4.7,
  ratingCount: 76,
  discount: 12
},
{
  id: 3,
  name: "Mermaid Fantasy Kids Birthday Decor",
  category: "theme",
  subCategory: "Mermaid Theme",
  price: 2899,
  originalPrice: 3499,
  image: "https://cheetah.cherishx.com/uploads/mermaid-kids-birthday-decor.jpg?format=avif&width=640&height=640",
  description: "Mermaid-themed balloons with ocean colors, shells and fantasy backdrop.",
  fullDescription: "A dreamy mermaid birthday decoration featuring ocean-colored balloons, mermaid graphics, shell accents and an underwater fantasy backdrop for magical celebrations.",
  features: [
    "Ocean color balloon garland",
    "Mermaid themed backdrop",
    "Shell and sea elements",
    "Pastel and aqua tones",
    "Kids fantasy styling"
  ],
  includes: "Balloon decor, mermaid backdrop, themed cut-outs, birthday banner, installation.",
  setupTime: "2.5–3 hours",
  rating: 4.9,
  ratingCount: 69,
  discount: 12
},
{
  id: 3,
  name: "Golden Jungle Animal Birthday Theme",
  category: "theme",
  subCategory: "Jungle Theme",
  price: 2999,
  originalPrice: 3699,
  image: "https://cheetah.cherishx.com/uploads/golden-jungle-themed-birthday-decor-with-animal-cutouts.jpg?format=avif&width=640&height=640",
  description: "Jungle balloon decor with animal cut-outs and golden accents.",
  fullDescription: "A vibrant jungle theme birthday setup with animal cut-outs, green and golden balloon arrangements, and wild forest styling for kids.",
  features: [
    "Green and gold balloon arch",
    "Animal theme cut-outs",
    "Jungle-style backdrop",
    "Golden foil accents",
    "Safari-inspired decor"
  ],
  includes: "Balloon arch, animal cut-outs, jungle backdrop, foil balloons, setup.",
  setupTime: "3–3.5 hours",
  rating: 4.8,
  ratingCount: 91,
  discount: 12
},
{
  id: 3,
  name: "Spiderman Superhero Birthday Theme",
  category: "theme",
  subCategory: "Superhero Theme",
  price: 2899,
  originalPrice: 3499,
  image: "https://cheetah.cherishx.com/uploads/spider-man-birthday-stage-decoration-with-balloon-garland.jpg?format=avif&width=640&height=640",
  description: "Spiderman theme decor with red-blue balloons and superhero backdrop.",
  fullDescription: "An action-packed Spiderman birthday decoration with red and blue balloon garlands, superhero graphics and stage-style backdrop for young fans.",
  features: [
    "Red and blue balloon arch",
    "Spiderman theme backdrop",
    "Superhero cut-outs",
    "Bold comic-style colors",
    "Stage-style setup"
  ],
  includes: "Balloon garland, superhero backdrop, theme cut-outs, setup service.",
  setupTime: "2.5–3 hours",
  rating: 4.9,
  ratingCount: 102,
  discount: 12
},
{
  id: 3,
  name: "Boss Baby Kids Birthday Theme",
  category: "theme",
  subCategory: "Cartoon Theme",
  price: 2799,
  originalPrice: 3399,
  image: "https://cheetah.cherishx.com/uploads/1720587843_original.jpg?format=avif&width=640&height=640",
  description: "Boss Baby theme with blue balloons and cartoon backdrop.",
  fullDescription: "A playful Boss Baby birthday theme featuring blue balloon styling, cartoon graphics and fun decor elements loved by kids.",
  features: [
    "Blue balloon garland",
    "Boss Baby theme backdrop",
    "Cartoon cut-outs",
    "Fun kid-friendly design",
    "Bright color scheme"
  ],
  includes: "Balloon decor, cartoon backdrop, cut-outs, installation service.",
  setupTime: "2–2.5 hours",
  rating: 4.7,
  ratingCount: 73,
  discount: 12
},
{
  id: 3,
  name: "Wild Forest Kids Birthday Theme",
  category: "theme",
  subCategory: "Forest Theme",
  price: 2899,
  originalPrice: 3499,
  image: "https://cheetah.cherishx.com/uploads/wild-forest-birthday-party-theme-decoration-for-your-kids-birthday.jpg?format=avif&width=640&height=640",
  description: "Forest theme decor with green balloons and woodland elements.",
  fullDescription: "A wild forest birthday decoration with green balloon garlands, woodland-themed cut-outs and nature-inspired styling for kids.",
  features: [
    "Green balloon arch",
    "5 theme animal foil balloons",
    "Forest-themed cut-outs",
    "Woodland color palette",
    "Nature-inspired decor",
    "Spacious backdrop setup"
  ],
  includes: "Balloon decor, forest cut-outs, backdrop elements, setup service.",
  setupTime: "3–3.5 hours",
  rating: 4.8,
  ratingCount: 67,
  discount: 12
},
{
  id: 3,
  name: "Underwater Mermaid Fantasy Theme",
  category: "theme",
  subCategory: "Mermaid Theme",
  price: 2999,
  originalPrice: 3699,
  image: "https://cheetah.cherishx.com/uploads/mermaid-themed-birthday-decor-with-whales-clams-and-starfish-balloons.jpg?format=avif&width=640&height=640",
  description: "Underwater mermaid theme with sea balloons and fantasy elements.",
  fullDescription: "A detailed underwater mermaid birthday theme featuring whale, starfish and clam balloons with ocean-inspired colors and decor.",
  features: [
    "Sea-themed balloon garland",
    "Whale and starfish balloons",
    "Mermaid fantasy backdrop",
    "Aqua and pastel colors",
    "Kids fantasy styling"
  ],
  includes: "Balloon decor, sea-themed foils, backdrop setup, installation service.",
  setupTime: "3–3.5 hours",
  rating: 4.9,
  ratingCount: 58,
  discount: 12
},
{
  id: 3,
  name: "Minecraft Theme Birthday Decoration",
  category: "theme",
  subCategory: "Minecraft Theme",
  price: 2499,
  originalPrice: 3099,
  image: "https://cheetah.cherishx.com/uploads/cutomized-birthday-decoration-theme-with-minecraft-flex.jpg",
  description: "Minecraft birthday decor with block-style backdrop and themed balloon setup.",
  fullDescription: "A fun Minecraft theme birthday decoration featuring block-style graphics, pixel-inspired elements, themed balloons, and a customized Minecraft backdrop—perfect for young gaming fans.",
  features: [
    "Minecraft block-style printed backdrop",
    "Pixel-themed balloon arrangement",
    "Minecraft character and block cut-outs",
    "Green, brown and earthy color palette",
    "Gaming-inspired birthday theme styling"
  ],
  includes: "Minecraft backdrop, themed cut-outs, balloon decor, birthday banner, complete setup.",
  setupTime: "2–2.5 hours",
  rating: 4.6,
  ratingCount: 49,
  discount: 12
},
{
  id: 3,
  name: "Race Road Theme Birthday Decoration",
  category: "theme",
  subCategory: "Racing Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/1721479810_original.jpg?format=avif&width=640&height=640",
  description: "Race road birthday setup with balloon garlands, car elements and track styling.",
  fullDescription: "An exciting race road theme birthday decoration featuring balloon garlands styled in racing colors, road-track elements, car cut-outs, and a dynamic setup perfect for little racing fans.",
  features: [
    "Balloon garland in racing colors (black, white, red)",
    "Race road and track-style backdrop elements",
    "Car and racing flag themed cut-outs",
    "Stage-style layout for photos",
    "High-energy racing theme setup"
  ],
  includes: "Balloon garlands, race road backdrop elements, car cut-outs, themed props, complete setup.",
  setupTime: "3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Doraemon Theme Birthday Decoration",
  category: "theme",
  subCategory: "Doraemon Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://i.pinimg.com/736x/4d/d9/5d/4dd95d94d4dfd4cf2f4320d876c10067.jpg",
  description: "Doraemon birthday setup with blue balloons, cartoon cut-outs and fun decor.",
  fullDescription: "A cheerful Doraemon theme birthday decoration featuring blue and white balloon arrangements, Doraemon character cut-outs, themed elements, and a playful setup perfect for kids’ celebrations.",
  features: [
    "Blue and white balloon garland",
    "Doraemon character cut-outs",
    "Cartoon-themed backdrop elements",
    "Bright and kid-friendly color palette",
    "Ideal for home and small venue setups"
  ],
  includes: "Balloon garland, Doraemon cut-outs, themed props, birthday banner, complete setup.",
  setupTime: "2.5–3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Cartoon Dinosaur Kids Birthday Stage Decor",
  category: "theme",
  subCategory: "Dinosaur Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/dinosaur-cartoon-theme-birthday-stage-decoration-for-kids.jpg?format=avif&width=640&height=640",
  description: "Cartoon dinosaur birthday stage with balloons and colorful backdrop.",
  fullDescription: "A vibrant cartoon dinosaur birthday stage decoration with a full printed backdrop, balloon clusters, and cheerful dinosaur characters.",
  features: [
    "Full cartoon dinosaur backdrop",
    "Balloon clusters",
    "Bright kid-friendly colors",
    "Stage-style layout",
    "High visual appeal"
  ],
  includes: "Printed backdrop, balloons, dinosaur graphics, setup.",
  setupTime: "3-3.5 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Mermaid Theme Kids Birthday Decoration",
  category: "theme",
  subCategory: "Mermaid Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/mermaid-kids-birthday-decor.jpg?format=avif&width=640&height=640",
  description: "Mermaid birthday decor with pastel balloons and ocean theme.",
  fullDescription: "A dreamy mermaid birthday decoration featuring pastel balloon garlands, ocean-themed elements, and mermaid graphics for magical celebrations.",
  features: [
    "Pastel balloon garland",
    "Mermaid-themed backdrop",
    "Ocean-inspired colors",
    "Kids-friendly visuals",
    "Photo-perfect setup"
  ],
  includes: "Balloon garland, mermaid backdrop, theme props, setup.",
  setupTime: "3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Golden Jungle Animal Theme Birthday Decor",
  category: "theme",
  subCategory: "Jungle Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/golden-jungle-themed-birthday-decor-with-animal-cutouts.jpg?format=avif&width=640&height=640",
  description: "Golden jungle theme with animal cutouts and balloon decor.",
  fullDescription: "An elegant jungle theme birthday decoration featuring golden balloon accents, animal cutouts, and a rich jungle backdrop.",
  features: [
    "Golden and green balloon styling",
    "Animal cutouts",
    "Jungle-themed backdrop",
    "Premium visual finish",
    "Suitable for indoor venues"
  ],
  includes: "Balloon setup, animal cutouts, backdrop, installation.",
  setupTime: "3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Spiderman Theme Birthday Stage Decoration",
  category: "theme",
  subCategory: "Superhero Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/spider-man-birthday-stage-decoration-with-balloon-garland.jpg?format=avif&width=640&height=640",
  description: "Spiderman birthday stage with balloon garland and hero backdrop.",
  fullDescription: "An action-packed Spiderman birthday decoration featuring a superhero backdrop, red-blue balloon garlands, and bold stage styling.",
  features: [
    "Spiderman themed backdrop",
    "Red and blue balloon garland",
    "Stage-style decoration",
    "Superhero visual elements",
    "Kids favorite theme"
  ],
  includes: "Backdrop, balloon garland, superhero elements, setup.",
  setupTime: "3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Rainbow Balloon Birthday Decoration",
  category: "theme",
  subCategory: "Rainbow Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/1720587843_original.jpg?format=avif&width=640&height=640",
  description: "Colorful rainbow balloon setup for cheerful birthday celebrations.",
  fullDescription: "A bright rainbow birthday decoration featuring multicolor balloon arrangements that create a joyful and vibrant party atmosphere.",
  features: [
    "Multicolor balloon arrangement",
    "Rainbow-inspired layout",
    "Bright and cheerful tones",
    "Perfect for kids birthdays",
    "Photo-friendly setup"
  ],
  includes: "Rainbow balloons, backdrop styling, complete setup.",
  setupTime: "2.5 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Forest Theme Kids Birthday Decoration",
  category: "theme",
  subCategory: "Forest Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/wild-forest-birthday-party-theme-decoration-for-your-kids-birthday.jpg?format=avif&width=640&height=640",
  description: "Forest theme birthday setup with balloons and woodland styling.",
  fullDescription: "A charming forest theme birthday decoration featuring earthy balloon tones and woodland-inspired elements for nature-loving kids.",
  features: [
    "Forest-inspired balloon colors",
    "Woodland theme elements",
    "Natural party styling",
    "Wide backdrop setup",
    "Great photo corner"
  ],
  includes: "Balloon decor, forest theme props, backdrop setup.",
  setupTime: "3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
{
  id: 3,
  name: "Underwater Mermaid Theme Birthday Decor",
  category: "theme",
  subCategory: "Mermaid Theme",
  price: 2399,
  originalPrice: 2999,
  image: "https://cheetah.cherishx.com/uploads/mermaid-themed-birthday-decor-with-whales-clams-and-starfish-balloons.jpg?format=avif&width=640&height=640",
  description: "Underwater mermaid theme with sea balloons and pastel colors.",
  fullDescription: "An underwater mermaid birthday decoration featuring whales, clams, starfish balloons and soft ocean-inspired colors.",
  features: [
    "Arch of 250 Balloons in Pastel Blue, Pastel Green, Pastel Pink, Pastel Purple, Light Pink Chrome, Purple Chrome and Pink chrome colors.",
    "2 Pastel Green and Pastel Blue fringe curtains",
    "1 Sea Green Happy Birthday Bunting",
    "Any 2 mermaid theme foil balloons depending on availability",
    "Highly engaging kids theme"
  ],
  includes: "Underwater balloons, mermaid elements, backdrop setup.",
  setupTime: "3 hours",
  rating: 4.7,
  ratingCount: 82,
  discount: 12
},
   
  

  // Welcome baby
  {
  id: 201,
  name: "Pastel Welcome Baby Decoration",
  category: "welcome-baby",
  subCategory: "Neutral Baby Welcome",
  price: 4499,
  originalPrice: 5499,
  image: "https://cheetah.cherishx.com/uploads/385eda6f5e67f600d58c13a29de9f875_original.jpg?format=avif&width=640&height=640",
  description: "Pastel balloon arch with baby cut-outs and soft welcome decorations.",
  fullDescription: "A soothing pastel-themed welcome baby decoration featuring balloon arches, baby cut-outs, floating balloons and gentle colors that create a warm, joyful atmosphere for welcoming your newborn.",
  features: [
    "Pastel balloon arch and clusters",
    "Baby-themed cut-outs and props",
    "Welcome Baby message board",
    "Soft and lightweight decorations",
    "Perfect for newborn photos"
  ],
  includes: "Balloon arch, baby cut-outs, welcome board, floating balloons, adhesive mounts, complete setup.",
  setupTime: "2–3 hours",
  rating: 4.9,
  ratingCount: 72,
  discount: 20
},
{
  id: 201,
  name: "Pink Baby Girl Welcome Decoration",
  category: "welcome-baby",
  subCategory: "Baby Girl Welcome",
  price: 3899,
  originalPrice: 4899,
  image: "https://cheetah.cherishx.com/uploads/1625122220_original.jpg?format=avif&width=640&height=640",
  description: "Pink balloon decor with baby girl theme and welcome signage.",
  fullDescription: "A charming baby girl welcome decoration with soft pink balloons, heart accents, cute baby props and a beautiful welcome banner for memorable first moments.",
  features: [
    "Pink balloon clusters",
    "Baby girl themed props",
    "Welcome Baby banner",
    "Soft color palette",
    "Photo-friendly setup"
  ],
  includes: "Balloon clusters, themed props, welcome banner, mounting accessories, complete setup.",
  setupTime: "2–2.5 hours",
  rating: 4.8,
  ratingCount: 65,
  discount: 20
},
{
  id: 201,
  name: "Blue Baby Boy Welcome Decoration",
  category: "welcome-baby",
  subCategory: "Baby Boy Welcome",
  price: 3899,
  originalPrice: 4899,
  image: "https://cheetah.cherishx.com/uploads/1709031629_original.jpg?format=avif&width=640&height=640",
  description: "Blue balloon setup with baby boy elements and welcome board.",
  fullDescription: "A delightful baby boy welcome decoration featuring blue balloons, baby boy cut-outs, soft accents and a welcome message to celebrate your newborn’s arrival.",
  features: [
    "Blue balloon arrangement",
    "Baby boy themed cut-outs",
    "Welcome message display",
    "Gentle color coordination",
    "Great for photos"
  ],
  includes: "Balloon arrangement, themed cut-outs, welcome board, setup materials, installation.",
  setupTime: "2–2.5 hours",
  rating: 4.8,
  ratingCount: 61,
  discount: 20
},
{
  id: 201,
  name: "Elegant Neutral Baby Welcome Decor",
  category: "welcome-baby",
  subCategory: "Neutral Baby Welcome",
  price: 3699,
  originalPrice: 4699,
  image: "https://cheetah.cherishx.com/uploads/1625901933_original.jpg?format=avif&width=384&height=384",
  description: "Elegant neutral balloon decor with welcome baby elements.",
  fullDescription: "A simple yet elegant neutral baby welcome setup using soft balloons, minimal props and a welcoming design suitable for any newborn celebration.",
  features: [
    "Neutral color balloon styling",
    "Minimal baby props",
    "Welcome Baby signage",
    "Soft and calming look",
    "Compact setup"
  ],
  includes: "Balloon decor, baby props, welcome signage, setup accessories, installation.",
  setupTime: "2–2.5 hours",
  rating: 4.7,
  ratingCount: 54,
  discount: 20
},
{
  id: 201,
  name: "Premium Welcome Baby Balloon Setup",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 4299,
  originalPrice: 5299,
  image: "https://cheetah.cherishx.com/uploads/1624002620_original.jpg?format=avif&width=384&height=384",
  description: "Premium balloon decoration with baby theme and welcome message.",
  fullDescription: "A premium welcome baby decoration featuring dense balloon clusters, themed props and a stylish welcome message for a warm and joyful homecoming.",
  features: [
    "Premium balloon clusters",
    "Balloon Ceiling Setup",
    "Baby-themed decorative props",
    "Stylish welcome message",
    "Balanced color coordination",
    "Enhanced photo appeal"
  ],
  includes: "Premium balloon setup, themed props, welcome message, installation service.",
  setupTime: "2.5–3 hours",
  rating: 4.9,
  ratingCount: 58,
  discount: 20
},
{
  id: 201,
  name: "Soft Pastel Baby Welcome Decor",
  category: "welcome-baby",
  subCategory: "Baby Boy Welcome",
  price: 3599,
  originalPrice: 4599,
  image: "https://cheetah.cherishx.com/uploads/1704889081_original.jpg?format=avif&width=384&height=384",
  description: "Soft pastel balloons with baby welcome signage and props.",
  fullDescription: "A soft pastel baby welcome decoration with calming colors, baby props and a sweet welcome message designed for a cozy newborn celebration.",
  features: [
    "Pastel balloon clusters",
    "Baby welcome signage",
    "Cute baby props",
    "Soft color tones",
    "Compact decoration"
  ],
  includes: "Balloon clusters, welcome signage, baby props, mounting accessories, setup.",
  setupTime: "2–2.5 hours",
  rating: 4.7,
  ratingCount: 49,
  discount: 20
},
{
  id: 201,
  name: "Luxury Baby Welcome Decoration",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 4599,
  originalPrice: 5599,
  image: "https://cheetah.cherishx.com/uploads/1655790424_original.jpg?format=avif&width=384&height=384",
  description: "Luxury balloon decor with baby theme and elegant welcome setup.",
  fullDescription: "A luxurious baby welcome decoration featuring premium balloons, elegant styling and themed props that create a refined and memorable newborn celebration.",
  features: [
    "Luxury balloon styling",
    "Lightning backdrop",
    "1 foot foil balloon",
    "Premium welcome signage",
    "Well-balanced color palette",
    "High-end visual appeal"
  ],
  includes: "Luxury balloon decor, baby props, signage, installation and finishing.",
  setupTime: "3–3.5 hours",
  rating: 4.9,
  ratingCount: 41,
  discount: 20
},
{
  id: 201,
  name: "Cute Baby Welcome Balloon Decor",
  category: "welcome-baby",
  subCategory: "Twins Welcome",
  price: 3499,
  originalPrice: 4499,
  image: "https://cheetah.cherishx.com/uploads/1688969135_original.jpg?format=avif&width=384&height=384",
  description: "Cute balloon decor with baby props and welcome signage.",
  fullDescription: "A cute and cheerful baby welcome decoration using soft balloons, adorable props and a welcoming layout perfect for newborn celebrations.",
  features: [
    "Cute balloon arrangements",
    "Adorable baby props",
    "Welcome signage",
    "Soft decorative layout",
    "Photo-friendly setup"
  ],
  includes: "Balloon decor, baby props, welcome signage, installation service.",
  setupTime: "2–2.5 hours",
  rating: 4.6,
  ratingCount: 46,
  discount: 20
},
{
  id: 201,
  name: "Minimal Welcome Baby Decoration",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 4199,
  originalPrice: 5199,
  image: "https://cheetah.cherishx.com/uploads/9b41e592ee4320f87265dbbd18a0721e_original.jpg?format=avif&width=384&height=384",
  description: "minimal balloon decor with baby welcome theme and clean styling.",
  fullDescription: "A minimal welcome baby decoration featuring clean balloon arrangements, minimal baby props and a stylish welcome message for contemporary homes.",
  features: [
    "Modern balloon arrangement",
    "Minimal baby props",
    "Stylish welcome signage",
    "Clean and elegant look",
    "Perfect for modern interiors"
  ],
  includes: "Balloon decor, baby props, welcome signage, setup and teardown.",
  setupTime: "2.5–3 hours",
  rating: 4.8,
  ratingCount: 39,
  discount: 20
},
{
  id: 201,
  name: "Deluxe Baby Welcome Decoration",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 4799,
  originalPrice: 5799,
  image: "https://cheetah.cherishx.com/uploads/2d3b7d3d50e49bf0e2c1fd9e967e2212_original.jpg?format=avif&width=384&height=384",
  description: "Deluxe balloon decoration with baby theme and premium styling.",
  fullDescription: "A deluxe welcome baby decoration with premium balloon styling, elegant baby props and a beautifully designed welcome setup for a grand newborn celebration.",
  features: [
    "Deluxe balloon styling",
    "Premium baby-themed props",
    "Elegant welcome signage",
    "Balanced color coordination",
    "High visual impact setup"
  ],
  includes: "Premium balloon decor, baby props, welcome signage, full installation service.",
  setupTime: "3–3.5 hours",
  rating: 4.9,
  ratingCount: 34,
  discount: 20
},

  {
  id: 201,
  name: "Pastel Balloon Welcome Baby Setup",
  category: "welcome-baby",
  subCategory: "Baby Girl Welcome",
  price: 3899,
  originalPrice: 4999,
  image: "https://cheetah.cherishx.com/uploads/1687940268_original.jpg?format=avif&width=384&height=384",
  description: "Pastel balloon clusters with welcome baby banner and soft decorative accents.",
  fullDescription: "A simple pastel balloon welcome baby setup featuring clustered balloons, a welcome banner and gentle decorative elements suitable for indoor newborn celebrations.",
  features: [
    "Pastel balloon clusters",
    "Welcome Baby banner",
    "Soft decorative accents",
    "Compact indoor-friendly setup"
  ],
  includes: "Balloon clusters, welcome banner, basic baby props, mounting materials, setup service.",
  setupTime: "2–2.5 hours",
  rating: 4.7,
  ratingCount: 58,
  discount: 20
},
{
  id: 201,
  name: "Elegant & Classical Welcome Baby Decor",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 4099,
  originalPrice: 5199,
  image: "https://cheetah.cherishx.com/uploads/5f01070576a0f560fb26c5dde95d9545_original.jpg?format=avif&width=384&height=384",
  description: "Elegant balloon decoration with welcome baby signage and themed elements.",
  fullDescription: "An elegant welcome baby decoration with balanced balloon styling, themed props and a clean welcome message designed for comfortable indoor spaces.",
  features: [
    "Balanced balloon styling",
    "Welcome Baby signage",
    "Themed baby props",
    "Neat and elegant layout"
  ],
  includes: "Balloon arrangement, signage, baby props, installation accessories, setup.",
  setupTime: "2.5–3 hours",
  rating: 4.8,
  ratingCount: 63,
  discount: 20
},
{
  id: 201,
  name: "Classic Theme Welcome Baby Decoration",
  category: "welcome-baby",
  subCategory: "Baby Welcome",
  price: 3799,
  originalPrice: 4899,
  image: "https://cheetah.cherishx.com/uploads/1709969564_original.jpg?format=avif&width=384&height=384",
  description: "Blue balloon decoration with baby boy themed welcome setup.",
  fullDescription: "A baby boy welcome decoration featuring blue balloons, themed props and a welcoming layout designed for joyful newborn celebrations.",
  features: [
    "Blue balloon arrangement",
    "Baby boy themed props",
    "Welcome message display",
    "Soft color coordination"
  ],
  includes: "Balloon decor, baby boy props, welcome signage, setup service.",
  setupTime: "2–2.5 hours",
  rating: 4.6,
  ratingCount: 52,
  discount: 20
},
{
  id: 201,
  name: "Minimal Welcome Baby Decoration",
  category: "welcome-baby",
  subCategory: "Baby Boy Welcome",
  price: 3499,
  originalPrice: 4599,
  image: "https://cheetah.cherishx.com/uploads/1663061207_original.jpg?format=avif&width=384&height=384",
  description: "Minimal balloon decor with welcome baby banner and subtle accents.",
  fullDescription: "A minimal welcome baby decoration featuring light balloon clusters and a simple welcome banner, ideal for smaller indoor spaces.",
  features: [
    "Minimal balloon clusters",
    "Welcome Baby banner",
    "Subtle decorative accents",
    "Space-efficient setup"
  ],
  includes: "Balloon clusters, welcome banner, basic props, mounting materials.",
  setupTime: "2 hours",
  rating: 4.5,
  ratingCount: 47,
  discount: 20
},
{
  id: 201,
  name: "Welcome Baby Girl Balloon Setup",
  category: "welcome-baby",
  subCategory: "Baby Girl Welcome",
  price: 3999,
  originalPrice: 4999,
  image: "https://cheetah.cherishx.com/uploads/1662986332_original.jpg?format=avif&width=384&height=384",
  description: "Classic balloon decoration with baby theme and welcome signage.",
  fullDescription: "A classic welcome baby setup with balloon arrangements, baby-themed props and a welcoming design suitable for home celebrations.",
  features: [
    "Classic balloon styling",
    "Baby-themed props",
    "Welcome signage",
    "Clean decorative layout"
  ],
  includes: "Balloon decor, baby props, welcome banner, setup service.",
  setupTime: "2–2.5 hours",
  rating: 4.7,
  ratingCount: 55,
  discount: 20
},
{
  id: 201,
  name: "Soft Pastel Welcome Baby Decor",
  category: "welcome-baby",
  subCategory: "Baby Girl Welcome",
  price: 3699,
  originalPrice: 4799,
  image: "https://cheetah.cherishx.com/uploads/1709030576_original.jpg?format=avif&width=384&height=384",
  description: "Soft pastel balloon decor with welcome baby theme.",
  fullDescription: "A soft pastel welcome baby decoration using gentle balloon colors and simple baby elements to create a calm and welcoming atmosphere.",
  features: [
    "Pastel balloon colors",
    "Welcome Baby theme",
    "Soft decorative elements",
    "Indoor-friendly setup"
  ],
  includes: "Balloon decor, welcome signage, baby props, setup materials.",
  setupTime: "2–2.5 hours",
  rating: 4.6,
  ratingCount: 50,
  discount: 20
},
{
  id: 201,
  name: "Welcome Baby Balloon Decor",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 4199,
  originalPrice: 5299,
  image: "https://i.pinimg.com/736x/dd/0d/76/dd0d76ba4cb763933a595eb33d9317c4.jpg",
  description: "Modern balloon styling with baby welcome signage and clean layout.",
  fullDescription: "A modern welcome baby decoration featuring clean balloon arrangements, neutral tones and a contemporary welcome display.",
  features: [
    "Modern balloon styling",
    "Clean decorative layout",
    "Welcome signage",
    "Neutral color tones"
  ],
  includes: "Balloon decor, signage, minimal baby props, setup service.",
  setupTime: "2.5–3 hours",
  rating: 4.8,
  ratingCount: 44,
  discount: 20
},
{
  id: 201,
  name: "Cute Welcome Baby Room Decor",
  category: "welcome-baby",
  subCategory: "Home Baby Welcome",
  price: 3599,
  originalPrice: 4699,
  image: "https://i.pinimg.com/736x/fc/ba/80/fcba80652643eee0ae5da8db982ddd28.jpg",
  description: "Cute balloon decor with baby theme and playful styling.",
  fullDescription: "A cute welcome baby room decoration with playful balloon styling and baby-themed elements designed for cheerful newborn moments.",
  features: [
    "Cute balloon styling",
    "Baby-themed props",
    "Playful color palette",
    "Photo-friendly setup"
  ],
  includes: "Balloon decor, baby props, welcome signage, installation.",
  setupTime: "2–2.5 hours",
  rating: 4.6,
  ratingCount: 42,
  discount: 20
},
{
  id: 201,
  name: "Luxury Welcome Baby Decoration",
  category: "welcome-baby",
  subCategory: "Premium Baby Welcome",
  price: 4599,
  originalPrice: 5699,
  image: "https://i.pinimg.com/736x/73/fd/e5/73fde509bb4a5e30fa5ab5a7180061b1.jpg",
  description: "Luxury balloon decor with premium baby welcome styling.",
  fullDescription: "A luxury welcome baby decoration featuring premium balloon arrangements and refined baby-themed elements for an elevated celebration.",
  features: [
    "Premium balloon arrangement",
    "Luxury baby-themed props",
    "Elegant styling",
    "High visual impact"
  ],
  includes: "Premium balloon decor, baby props, signage, professional setup.",
  setupTime: "3–3.5 hours",
  rating: 4.9,
  ratingCount: 36,
  discount: 20
},
{
  id: 201,
  name: "Deluxe Welcome Baby Balloon Setup",
  category: "welcome-baby",
  subCategory: "Premium Baby Welcome",
  price: 4799,
  originalPrice: 5899,
  image: "https://i.pinimg.com/736x/de/a1/2d/dea12d8877844a630ffea5e517970f76.jpg",
  description: "Deluxe balloon decoration with baby theme and refined finish.",
  fullDescription: "A deluxe welcome baby setup with layered balloon styling, premium accents and a refined decorative finish for special newborn celebrations.",
  features: [
    "Layered balloon styling",
    "Premium decorative accents",
    "Refined welcome setup",
    "Strong photo appeal"
  ],
  includes: "Deluxe balloon decor, baby props, signage, complete setup service.",
  setupTime: "3–3.5 hours",
  rating: 4.9,
  ratingCount: 31,
  discount: 20
}
];

export default products;