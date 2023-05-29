const men = [
    {
        title: "Topwear",
        categories: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazers & Coats",
            "Suits",
            "Rain Jackets"
        ]
    },
    {
        title: "Indian Festive Wear",
        categories: [
            'Kurtas & Kurta Sets',
            "Sherwanis",
            "Nehru Jackets",
            "Dhotis"
        ]
    },
    {
        title: "Bottom Wear",
        categories: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers"
        ]
    },
    {
        title: "Sports Active Wear",
        categories: [
            "Sports Shoes",
            'Sports Sandals',
            'Active T-Shirts',
            'Track Pants & Shorts',
            'Tracksuits',
            'Jackets & Sweatshirts',
            'Sports Accessories',
            'Swimwear'
        ]
    },
    {
        title: "Gadgets",
        categories: [
            "Smart Wearables",
            "Fitness Gadgets",
            "Headphones",
            "Speakers"
        ]
    },
    {
        title: "Personal Care & Grooming",
        categories: ["Sunglasses & Frames",
            "Watches",]
    },
    {
        title: "Fashion Accessories",
        categories: [
            "Wallets",
            "Belts",
            "Perfumes & Body Mists",
            "Trimmers",
            "Deodorants",
            "Ties, Cufflinks & Pocket Squares",
            "Accessory Gift Sets",
            "Caps & Hats",
            "Mufflers, Scarves & Gloves",
            "Phone Cases",
            "Rings & Wristwear",
            "Helmets"
        ]
    }
];

const woman = [
    {
        title: "Indian & Fusion Wear",
        categories: [
            "Kurtas & Suits",
            "Kurtis, Tunics & Tops",
            "Sarees",
            "Ethnic Wear",
            "Leggings, Salwars & Churidars",
            "Skirts & Palazzos",
            "Dress Materials",
            "Lehenga Cholis",
            "Dupattas & Shawls",
            "Jackets"
        ]
    },
    {
        title: "Sports & Active Wear",
        categories: [
            "Clothing",
            "Footwear",
            "Sports Accessories",
            "Sports Equipment"
        ]
    },

    {
        title: "Footwear",
        categories: [
            "Flats",
            "Casual Shoes",
            "Heels",
            "Boots",
            "Sports Shoes & Floaters"
        ]
    },

    {
        title: "Lingerie & Sleepwear",
        categories: [
            "Bra",
            "Briefs",
            "Shapewear",
            "Sleepwear & Loungewear",
            "Swimwear",
            "Camisoles & Thermals"
        ]
    },
    {
        title: "Beauty & Personal Care",
        categories: [
            "Makeup",
            "Skincare",
            "Premium Beauty",
            "Lipsticks",
            "Fragrances"
        ]
    },
    {
        title: "Gadgets",
        categories: [
            "Smart Wearables",
            "Fitness Gadgets",
            "Headphones",
            "Speakers"
        ]
    },
    {
        title: "Western Wear",
        categories: [
            "Dresses",
            "Tops",
            "Tshirts",
            "Jeans",
            "Trousers & Capris",
            "Shorts & Skirts",
            "Co-ords",
            "Playsuits",
            "Jumpsuits",
            "Shrugs",
            "Sweaters & Sweatshirts",
            "Jackets & Coats",
            "Blazers & Waistcoats",
            "Plus Size"
        ]
    },
    {
        title: "Jewellery",
        categories: [
            "Fashion Jewellery",
            "Fine Jewellery",
            "Earrings"
        ]
    }
];

const kids = [
    {
        title: "Boys Clothing",
        categories: [
            "T-Shirts",
            "Shirts",
            "Shorts",
            "Jeans",
            "Trousers",
            "Clothing Sets",
            "Ethnic Wear",
            "Track Pants & Pyjamas",
            "Jacket, Sweater & Sweatshirts",
            "Party Wear",
            "Innerwear & Thermals",
            "Nightwear & Loungewear",
            "Value Packs"
        ]
    },
    {
        title: "",
        categories: []
    },
    {
        title: "Footwear",
        categories: [
            "Casual Shoes",
            "Flipflops",
            "Sports Shoes",
            "Flats",
            "Sandals",
            "Heels",
            "School Shoes",
            "Socks"
        ]
    },
    {
        title: "Toys",
        categories: [
            "Learning & Development",
            "Activity Toys",
            "Soft Toys",
            "Action Figure / Play set"
        ]
    },
    {
        title: "Infants",
        categories: [
            "Bodysuits",
            "Rompers & Sleepsuits",
            "Clothing Sets",
            "Tshirts & Tops",
            "Dresses",
            "Bottom wear",
            "Winter Wear",
            "Innerwear & Sleepwear",
            "Infant Care"
        ]
    },
    {
        title: "Kids Accessories",
        categories: [
            "Bags & Backpacks",
            "Watches",
            "Jewellery & Hair accessory",
            "Sunglasses",
            "Masks & Protective Gears",
            "Caps & Hats"
        ]
    },
    {
        title: "Girls Clothing",
        categories: [
            "Dresses",
            "Tops",
            "Tshirts",
            "Clothing Sets",
            "Lehenga choli",
            "Kurta Sets",
            "Party wear",
            "Dungarees & Jumpsuits",
            "Skirts & shorts",
            "Tights & Leggings",
            "Jeans, Trousers & Capris",
            "Jacket, Sweater & Sweatshirts",
            "Innerwear & Thermals",
            "Nightwear & Loungewear",
            "Value Packs"
        ]
    },
];

const homeAndLiving = [
    {
        title: "Bed Linen & Furnishing",
        categories: [
            "Bed Runners",
            "Mattress Protectors",
            "Bedsheets",
            "Bedding Sets",
            "Blankets, Quilts & Dohars",
            "Pillows & Pillow Covers",
            "Bed Covers",
            "Diwan Sets",
            "Chair Pads & Covers",
            "Sofa Covers"
        ]
    },
    {
        title: "Flooring",
        categories: [
            "Floor Runners",
            "Carpets",
            "Floor Mats & Dhurries",
            "Door Mats"
        ]
    },
    {
        title: "Bath",
        categories: [
            "Bath Towels",
            "Hand & Face Towels",
            "Beach Towels",
            "Towels Set",
            "Bath Rugs",
            "Bath Robes",
            "Bathroom Accessories",
            "Shower Curtains"
        ]
    },
    {
        title: "Lamps & Lighting",
        categories: [
            "Floor Lamps",
            "Ceiling Lamps",
            "Table Lamps",
            "Wall Lamps",
            "Outdoor Lamps",
            "String Lights"
        ]
    },
    {
        title: "Storage",
        categories: [
            "Bins",
            "Hangers",
            "Organisers",
            "Hooks & Holders",
            "Laundry Bags"
        ]
    },
    {
        title: "Kitchen & Table",
        categories: [
            "Table Runners",
            "Dinnerware & Serveware",
            "Cups and Mugs",
            "Bakeware & Cookware",
            "Kitchen Storage & Tools",
            "Bar & Drinkware",
            "Table Covers & Furnishings"
        ]
    },
    {
        title: "Home Décor",
        categories: [
            "Plants & Planters",
            "Aromas & Candles",
            "Clocks",
            "Mirrors",
            "Wall Décor",
            "Festive Decor",
            "Pooja Essentials",
            "Wall Shelves",
            "Fountains",
            "Showpieces & Vases",
            "Ottoman",
            "Cushions & Cushion Covers",
            "Curtains"
        ]
    },
    {
        title: "Brands",
        categories: [
            "H&M",
            "Marks & Spencer",
            "Home Centre",
            "Spaces",
            "D'Decor",
            "Story@Home",
            "Pure Home & Living",
            "Swayam",
            "Raymond Home",
            "Maspar",
            "Trident",
            "Cortina",
            "Random",
            "Ellementry",
            "ROMEE",
            "SEJ by Nisha Gupta"
        ]
    }
];

const beauty = [
    {
        title: "Makeup",
        categories: [
            "Lipstick",
            "Lip Gloss",
            "Lip Liner",
            "Mascara",
            "Eyeliner",
            "Kajal",
            "Eyeshadow",
            "Foundation",
            "Primer",
            "Concealer",
            "Compact",
            "Nail Polish"
        ]
    },
    {
        title: "Beauty Gift & Makeup Set",
        categories: ["Beauty Gift", "Makeup Kit"]
    },
    {
        title: "Haircare",
        categories: [
            "Shampoo",
            "Conditioner",
            "Hair Cream",
            "Hair Oil",
            "Hair Gel",
            "Hair Color",
            "Hair Serum",
            "Hair Accessory"
        ]
    },
    {
        title: "Fragrances",
        categories: ["Perfume", "Deodorant", "Body Mist"]
    },
    {
        title: "Appliances",
        categories: ["Hair Straightener", "Hair Dryer", "Epilator"]
    },
    {
        title: "Men's Grooming",
        categories: ["Trimmers", "Beard Oil", "Hair Wax"]
    },
    {
        title: "Skincare, Bath & Body",
        categories: [
            "Face Moisturiser",
            "Cleanser",
            "Masks & Peel",
            "Sunscreen",
            "Serum",
            "Face Wash",
            "Eye Cream",
            "Lip Balm",
            "Body Lotion",
            "Body Wash",
            "Body Scrub",
            "Hand Cream",
            "Baby Care",
            "Masks"
        ]
    },
    {
        title: "Top Brands",
        categories: [
            "Lakme",
            "Maybelline",
            "LOreal",
            "Philips",
            "Bath & Body Works",
            "THE BODY SHOP",
            "Biotique",
            "Mamaearth",
            "MCaffeine",
            "Nivea",
            "Lotus Herbals",
            "LOreal Professionnel",
            "KAMA AYURVEDA",
            "M.A.C",
            "Forest Essentials"
        ]
    }
];


export { men, woman, kids, homeAndLiving, beauty };


