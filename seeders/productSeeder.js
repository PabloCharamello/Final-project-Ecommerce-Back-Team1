const { Product } = require("../models");

const products = [
  /*********************** SOFAS ***********************/
  {
    name: "Kivik",
    "short-description": `Cuddle up in the soft comfort of KIVIK sofa. The generous size, low armrests and pocket springs with foam that adapts to the body invites you and your guests to many hours of socialising and relaxation.`,
    description: `Enjoy the super comfy KIVIK sofa with deep seat cushions made of pocket springs, high resilience foam and polyester fibres - adding both firm support and relaxing softness. The size and depth of the sofa make it perfect for a nice nap, and when the whole family is gathered, there is room for everyone and even extra seating on the wide armrests.`,
    details: `
    <ul>
      <li>Depth: 95 cm</li>
      <li>Height: 83 cm</li>
      <li>Width right: 297 cm</li>
      <li>Width left: 257 cm</li>
      <li>Seat depth: 60 cm</li>
      <li>Seat height: 45 cm</li>
      <li>Armrest width: 24 cm</li>
    </ul>
    `,
    price: 1369,
    stock: 15,
    images: [
      "https://www.ikea.com/nl/en/images/products/kivik-corner-sofa-5-seat-hillared-anthracite__0479948_pe619101_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kivik-corner-sofa-5-seat-hillared-anthracite__0777093_pe758437_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kivik-corner-sofa-5-seat-hillared-anthracite__0777071_pe758416_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 1,
  },
  {
    name: "Landskrona",
    "short-description": `Warm and welcoming, neat and stylish. The supporting seat cushions, the cover's soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.`,
    description: `The fabric cover has a warm and welcoming look, while the tight fit gives the sofa a neat and stylish expression.
    Seat cushions filled with high-resilience foam and polyester fibre wadding provide great seating comfort.`,
    details: `
    <ul>
      <li>Depth: 89 cm</li>
      <li>Height: 78 cm</li>
      <li>Width: 164 cm</li>
      <li>Seat depth: 61 cm</li>
      <li>Seat height: 44 cm</li>
      <li>Armrest height: 64 cm</li>
    </ul>
    `,
    price: 599,
    stock: 8,
    images: [
      "https://www.ikea.com/nl/en/images/products/landskrona-2-seat-sofa-gunnared-light-green-wood__0602106_pe680175_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/landskrona-2-seat-sofa-gunnared-light-green-wood__0828967_pe680176_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/landskrona-2-seat-sofa-gunnared-light-green-wood__0826898_pe707727_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 1,
  },
  {
    name: "Söderhamn",
    "short-description": `Sit deeply, low and softly with the loose back cushions for extra support.`,
    description: `The cover is easy to keep clean since it is removable and can be machine washed.
    The various sections of the seating series can be connected together in different combinations or used separately.
    You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions.`,
    details: `
    <ul>
      <li>Depth: 99 cm</li>
      <li>Height including back cushions: 83 cm</li>
      <li>Height backrest: 93 cm</li>
      <li>Width: 192 cm</li>
      <li>Seat depth: 70 cm</li>
      <li>Seat height: 40 cm</li>
    </ul>
    `,
    price: 938,
    stock: 13,
    images: [
      "https://www.ikea.com/nl/en/images/products/soderhamn-corner-sofa-3-seat-gunnared-beige__0766698_pe753868_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/soderhamn-corner-sofa-3-seat-gunnared-beige__0767190_pe754175_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/soderhamn-corner-sofa-3-seat-gunnared-beige__0767191_pe754169_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 1,
  },
  {
    name: "Grönlid",
    "short-description": `Snuggle up, feel embraced and enjoy cosy nights and lazy days with family and friends. This sofa is extra deep, has soft and moveable back cushions and can be customised to your home and your needs.`,
    description: `Grönlid sofa is soft, comfy and inviting to sink into. Deep pocket spring seat cushions, foam and a top layer of polyester fibres takes your comfort to a new level.
    You can sit in a way that suits you and feel relaxed for many hours thanks to the movable back cushions that give your body support exactly where it's needed.`,
    details: `
    <ul>
      <li>Height including back cushions: 104 cm</li>
      <li>Depth chaise longue: 164 cm</li>
      <li>Depth: 98 cm</li>
      <li>Seat depth, chaise longue: 126 cm</li>
      <li>Width right: 252 cm</li>
      <li>Width left: 333 cm</li>
      <li>Free height under furniture: 7 cm</li>
      <li>Armrest width: 18 cm</li>
      <li>Armrest height: 68 cm</li>
      <li>Seat depth: 60 cm</li>
      <li>Seat height: 49 cm</li>
    </ul>
    `,
    price: 1519,
    stock: 4,
    images: [
      "https://www.ikea.com/nl/en/images/products/gronlid-corner-sofa-5-seat-w-chaise-longue-ljungen-medium-grey__0577275_pe668732_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/gronlid-corner-sofa-5-seat-w-chaise-longue-ljungen-medium-grey__0787563_pe763289_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/gronlid-corner-sofa-5-seat-w-chaise-longue-ljungen-medium-grey__0622814_pe690777_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 1,
  },
  {
    name: "Backsälen",
    "short-description": `This sofa is easy on the eyes and body. The design is welcoming, the deep seat and the high back and armrests embrace you - and it's also super easy to remove the cover and wash it.`,
    description: `The deep seat and the high back and armrests feel embracing, so you enjoy a comfortable and relaxed sitting position - perfect for reading, watching TV or having long chats.`,
    details: `
    <ul>
      <li>Width: 205 cm</li>
      <li>Depth: 94 cm</li>
      <li>Height including back cushions: 85 cm</li>
      <li>Height backrest: 72 cm</li>
      <li>Seat width: 180 cm</li>
      <li>Seat depth: 60 cm</li>
      <li>Seat height: 43 cm</li>
      <li>Armrest height: 72 cm</li>
      <li>Armrest width: 5 cm</li>
      <li>Free height under furniture: 17 cm</li>
    </ul>
    `,
    price: 399,
    stock: 21,
    images: [
      "https://www.ikea.com/nl/en/images/products/backsalen-3-seat-sofa-blekinge-white__0950634_pe800555_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/backsalen-3-seat-sofa-blekinge-white__0985520_pe816658_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/backsalen-3-seat-sofa-blekinge-white__0985575_pe816677_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 1,
  },
  {
    name: "Sörvallen",
    "short-description": `Sörvallen is a modern sofa series in a Scandinavian style with a simple, minimalist look.`,
    description: `Can be connected with e.g. a chaise longue to create a small corner sofa.
    Chaise longue with storage for things such as bedlinen.`,
    details: `
    <ul>
      <li>Seat width, chaise longue: 80 cm</li>
      <li>Depth: 102 cm</li>
      <li>Height: 88 cm</li>
      <li>Seat depth, chaise longue: 153 cm</li>
      <li>Width right: 232 cm</li>
      <li>Width left: 365 cm</li>
      <li>Free height under furniture: 7 cm</li>
      <li>Armrest height: 58 cm</li>
      <li>Seat depth: 60 cm</li>
      <li>Seat height: 45 cm</li>
    </ul>
    `,
    price: 2099,
    stock: 7,
    images: [
      "https://www.ikea.com/nl/en/images/products/sorvallen-corner-sofa-4-seat-with-chaise-longue-left-tallmyra-medium-grey__1066553_pe852501_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/sorvallen-corner-sofa-4-seat-with-chaise-longue-left-tallmyra-medium-grey__1070990_pe854839_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/sorvallen-corner-sofa-4-seat-with-chaise-longue-left-tallmyra-medium-grey__1070762_pe854701_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 1,
  },
  {
    name: "Vallentuna",
    "short-description": `One sofa, lots of possibilities. In need of extra beds, smart storage or a comfy reading corner? No problem. Just choose the modules you like, combine them as you want - and change when you feel like it.`,
    description: `All modules in the Vallentuna series can be used freestanding or together to create a sofa combination in any size that suits you perfectly.
    Vallentuna retains its comfort for a long time with generous seating and pocket springs that follow your body.`,
    details: `
    <ul>
      <li>Depth: 93 cm</li>
      <li>Height: 84 cm</li>    
      <li>Width right: 266 cm</li>    
      <li>Width left: 173 cm</li>    
      <li>Seat depth: 80 cm</li>    
      <li>Seat height: 45 cm</li>
    </ul>
    `,
    price: 1380,
    stock: 8,
    images: [
      "https://www.ikea.com/nl/en/images/products/vallentuna-modular-corner-sofa-3-seat-with-storage-kelinge-anthracite__0938533_pe794167_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/vallentuna-modular-corner-sofa-3-seat-with-storage-kelinge-anthracite__0938535_pe794169_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/vallentuna-modular-corner-sofa-3-seat-with-storage-kelinge-anthracite__0938534_pe794182_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 1,
  },
  {
    name: "Linanäs",
    "short-description": `Create enough seating with SOLLERÖN modular sections ―here with a stool that becomes a chaise longue. Maintenance-free plastic rattan and cushions that are fade-resistant and anti-slip make life easier.`,
    description: `The cover is made from Vissle fabric in polyester, which is dope-dyed. It's a durable material with a smooth weave and a nice two-tone effect.`,
    details: `
    <ul>
      <li>Depth: 80.5 cm</li>
      <li>Height: 76.0 cm</li>
      <li>Seat depth: 59 cm</li>
      <li>Seat height: 46 cm</li>
      <li>Width: 197 cm</li>
      <li>Armrest height: 66 cm</li>
      <li>Depth chaise longue: 145 cm</li>
      <li>Free height under furniture: 15 cm</li>
      <li>Seat depth, chaise longue: 127 cm</li>
      <li>Seat width: 178 cm</li>
    </ul>
    `,
    price: 399,
    stock: 25,
    images: [
      "https://www.ikea.com/nl/en/images/products/linanas-3-seat-sofa-with-chaise-longue-vissle-dark-grey__1013908_pe829460_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/linanas-3-seat-sofa-with-chaise-longue-vissle-dark-grey__1013909_pe829463_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/linanas-3-seat-sofa-with-chaise-longue-vissle-dark-grey__1013910_pe829462_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 1,
  },

  /*********************** ARMCHAIRS ***********************/

  {
    name: "Vimle",
    "short-description": `The Vimle sofa series has sections that can be combined as you like into a customised solution for you and your home - and as your life changes, you can complete the sofa and let it change with you.`,
    description: `This firm armchair will have a long life since the seat cushion is filled with high resilience foam that gives good support for your body and quickly regains its original shape when you get up.
    The sofa's sections can be combined in different ways to get a size and shape that suits you and your home. If you ever need a larger sofa, you can always add a section or two.`,
    details: `
    <ul>
      <li>Width: 101 cm</li>
      <li>Depth: 98 cm</li>
      <li>Height: 83 cm</li>
      <li>Free height under furniture: 6 cm</li>
      <li>Armrest height: 68 cm</li>
      <li>Seat width: 71 cm</li>
      <li>Seat depth: 55 cm</li>
      <li>Seat height: 48 cm</li>
    </ul>
    `,
    price: 649,
    stock: 17,
    images: [
      "https://www.ikea.com/nl/en/images/products/vimle-armchair-grann-bomstad-black__1067981_pe852851_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/vimle-armchair-grann-bomstad-black__1067979_pe852849_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/vimle-armchair-grann-bomstad-black__1067980_pe852902_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 2,
  },
  {
    name: "Vallentuna Chair",
    "short-description": `One sofa, lots of possibilities. In need of extra beds, smart storage or a comfy reading corner? No problem. Just choose the modules you like, combine them as you want - and change when you feel like it.`,
    description: `All modules in the Vallentuna series can be used freestanding or together to create a sofa combination in any size that suits you perfectly.
    Vallentuna retains its comfort for a long time with generous seating and pocket springs that follow your body.`,
    details: `
    <ul>
      <li>Width: 113 cm</li>
      <li>Depth: 93 cm</li>
      <li>Height: 84 cm</li>
      <li>Seat height: 45 cm</li>
      <li>Bed width: 80 cm</li>
      <li>Bed length: 200 cm</li>
    </ul>
    `,
    price: 680,
    stock: 15,
    images: [
      "https://www.ikea.com/nl/en/images/products/vallentuna-sofa-bed-module-with-backrests-hillared-dark-grey__0938365_pe794080_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/vallentuna-sofa-bed-module-with-backrests-hillared-dark-grey__0938953_pe794360_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/vallentuna-sofa-bed-module-with-backrests-hillared-dark-grey__0938954_pe794352_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },
  {
    name: "Strandmon",
    "short-description": `Need a hug? Strandmon wing chair has an embracing feel with a high back, round armrests, soft lines and inviting upholstery. A traditional look with modern comfort for many cosy moments.`,
    description: `You can really loosen up and relax in comfort because the high back on this chair provides extra support for your neck.
    This wing chair has an embracing feel with a high back, round armrests and inviting upholstery. The cover's a mix of soft natural grain leather and a coated fabric with a look and touch similar to leather.`,
    details: `
    <ul>
      <li>Width: 82 cm</li>
      <li>Depth: 96 cm</li>
      <li>Height: 101 cm</li>
      <li>Seat depth: 54 cm</li>
      <li>Seat height: 45 cm</li>
      <li>Seat width: 49 cm</li>
    </ul>
    `,
    price: 379,
    stock: 19,
    images: [
      "https://www.ikea.com/nl/en/images/products/strandmon-wing-chair-grann-bomstad-dark-brown__0998383_pe823013_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/strandmon-wing-chair-grann-bomstad-dark-brown__0998384_pe823015_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/strandmon-wing-chair-grann-bomstad-dark-brown__0998385_pe823014_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },
  {
    name: "Stocksund",
    "short-description": `Stocksund armchair is made for reading a good book or enjoying some relaxing me time. It's wide and deep with a thick cushion that is both soft and provides support where needed. Sit down and enjoy!`,
    description: `You get extra soft comfort and support because the thick seat cushions have a core of pocket springs and a top of cut foam and polyester fibres.
    The core of pocket springs is durable and keeps its form and soft comfort for a longer time.`,
    details: `
    <ul>
      <li>Height including back cushions: 84 cm</li>
      <li>Height backrest: 73 cm</li>
      <li>Width: 92 cm</li>
      <li>Depth: 97 cm</li>
      <li>Seat depth: 58 cm</li>
      <li>Seat height: 46 cm</li>
    </ul>
    `,
    price: 449,
    stock: 23,
    images: [
      "https://www.ikea.com/nl/en/images/products/stocksund-armchair-segersta-multicolour-light-brown-wood__0617758_pe688179_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/stocksund-armchair-segersta-multicolour-light-brown-wood__0837510_pe688180_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/stocksund-armchair-segersta-multicolour-light-brown-wood__0837504_pe688177_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },
  {
    name: "Söderhamn chair",
    "short-description": `If you like the stylish airy look, you have to try the deep generous seats. Create your own personal combination of Söderhamn sofa, then sit down and relax - by yourself or together with the whole family.`,
    description: `Söderhamn seating series allows you to sit deeply, low and softly with the loose back cushions for extra support.
    Light, airy design with high legs and slim lines, yet still a great comfort thanks to the elastic weave in the bottom and high resilience foam in the seat cushions.`,
    details: `
    <ul>
      <li>Width: 105 cm</li>
      <li>Depth: 99 cm</li>
      <li>Height: 83 cm</li>
      <li>Seat width: 93 cm</li>
      <li>Seat depth: 48 cm</li>
      <li>Seat height: 40 cm</li>
    </ul>
    `,
    price: 479,
    stock: 20,
    images: [
      "https://www.ikea.com/nl/en/images/products/soderhamn-armchair-viarp-beige__0802651_pe768532_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/soderhamn-armchair-viarp-beige__0802650_pe768534_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/soderhamn-armchair-viarp-beige__0802649_pe768533_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },
  {
    name: "Grönlid chair",
    "short-description": `Snuggle up, feel embraced and enjoy cosy nights and lazy days with family and friends. This sofa is extra deep, has soft and moveable back cushions and can be customised to your home and your needs.`,
    description: `Grönlid chaise longue is soft, comfy and inviting to sink into. Deep pocket spring seat cushion, foam and a top layer of polyester fibres takes your comfort to a new level.
    You can sit in a way that suits you and feel relaxed for many hours thanks to the movable back cushions that give your body support exactly where it's needed.`,
    details: `
    <ul>
      <li>Height including back cushions: 104 cm</li>
      <li>Width: 117 cm</li>
      <li>Depth: 164 cm</li>
      <li>Free height under furniture: 7 cm</li>
      <li>Armrest width: 18 cm</li>
      <li>Armrest height: 68 cm</li>
      <li>Seat width: 81 cm</li>
      <li>Seat depth: 126 cm</li>
      <li>Seat height: 49 cm</li>
    </ul>
    `,
    price: 540,
    stock: 12,
    images: [
      "https://www.ikea.com/nl/en/images/products/gronlid-chaise-longue-sporda-natural__0577298_pe668759_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/gronlid-chaise-longue-sporda-natural__0823250_pe675081_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/gronlid-chaise-longue-sporda-natural__0771816_pe755796_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },
  {
    name: "Viskafors",
    "short-description": `Viskafors is an armchair that becomes a statement piece in the room. The classic design has generous, inviting shapes - and when you sink into the deep soft seat, the armchair gives you an embracing feel.`,
    description: `Classic design with soft, rounded shapes and generously sized armrests makes Viskafors armchair a statement piece in any living room.
    The deep seat with pocket springs is really soft and creates an inviting, embracing feel when you sit on the armchair.`,
    details: `
    <ul>
      <li>Depth: 90 cm</li>
      <li>Height: 74 cm</li>
      <li>Seat depth: 60 cm</li>
      <li>Seat height: 46 cm</li>
      <li>Seat width: 89 cm</li>
      <li>Width: 134 cm</li>
      <li>Free height under furniture: 11 cm</li>
      <li>Armrest width: 22 cm</li>
    </ul>
    `,
    price: 540,
    stock: 12,
    images: [
      "https://www.ikea.com/nl/en/images/products/viskafors-1-5-seat-armchair-lejde-anthracite-brown__1088082_pe861050_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/viskafors-1-5-seat-armchair-lejde-anthracite-brown__1095972_pe864119_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/viskafors-1-5-seat-armchair-lejde-anthracite-brown__1095973_pe864120_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },
  {
    name: "Kivik chair",
    "short-description": `A chaise longue is perfect when you want to stretch out for a while. Read a good book, watch a movie or play video games. Kivik chaise longue can be used freestanding or in combination with your sofa.`,
    description: `Enjoy the super comfy Kivik chaise longue with seat cushion made of pocket springs, high resilience foam and polyester fibres - adding both firm support and relaxing softness.
    The chaise longue can either be used freestanding or added onto the sofas.`,
    details: `
    <ul>
      <li>Width: 90 cm</li>
      <li>Depth: 163 cm</li>
      <li>Height: 83 cm</li>
      <li>Seat width: 90 cm</li>
      <li>Seat depth: 124 cm</li>
      <li>Seat height: 45 cm</li>
    </ul>
    `,
    price: 540,
    stock: 12,
    images: [
      "https://www.ikea.com/nl/en/images/products/kivik-chaise-longue-grann-bomstad-black__0115141_pe268333_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kivik-chaise-longue-grann-bomstad-black__0776804_pe758295_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kivik-chaise-longue-grann-bomstad-black__0776803_pe758273_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 2,
  },

  /*********************** TABLES ***********************/

  {
    name: "Strandtorp",
    "short-description": `Whether it's mealtime with the family or a dinner party, STRANDTORP table extends with ease giving everyone plenty of elbow room. Perfect for bringing everyone together for all those special moments.`,
    description: `You can easily change the size of this 3-in-1 table to seat 4, 6 or 8 persons using the included self-storing leaves. If you add a seat to each short side you can even fit up to 10 persons.
    The chaise longue can either be used freestanding or added onto the sofas.`,
    details: `
    <ul>
      <li>Length: 205 cm</li>
      <li>Min. length: 150 cm</li>
      <li>Max. length: 260 cm</li>
      <li>Width: 95 cm</li>
      <li>Height: 75 cm</li>
    </ul>
    `,
    price: 469,
    stock: 18,
    images: [
      "https://www.ikea.com/nl/en/images/products/strandtorp-extendable-table-brown__0926900_pe789586_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/strandtorp-extendable-table-brown__0946320_ph172863_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/strandtorp-extendable-table-brown__0946319_ph172862_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },
  {
    name: "Torsby",
    "short-description": `Looking for a durable and decorative table that can withstand almost anything? Then maybe Torsby table with its ceramic tabletop and sturdy chrome-plated underframe can be something for you.`,
    description: `The durable ceramic tabletop is highly resistant to scratches, stains, heat and cold.
    Easy to clean since the surface's structure is dense and entirely non-porous.`,
    details: `
    <ul>
      <li>Length: 135 cm</li>
      <li>Width: 85 cm</li>
      <li>Height: 75 cm</li>
    </ul>
    `,
    price: 359,
    stock: 29,
    images: [
      "https://www.ikea.com/nl/en/images/products/torsby-table-chrome-plated-black-marble-effect-ceramic__1026233_pe834398_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/torsby-table-chrome-plated-black-marble-effect-ceramic__1026235_pe834397_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/torsby-table-chrome-plated-black-marble-effect-ceramic__1026236_pe834400_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },
  {
    name: "Ingatorp",
    "short-description": `It's easy to extend when guests arrive - the legs of the table stay in the corner so everyone sits just as comfortably. A traditional look with details like turned legs give it that little extra.`,
    description: `This 4-seat table can easily be extended into a 6-seat table using the included self-storing leaf.
    The self-storing leaf is easy to insert to extend the table and just as easy to remove and tuck away under the table top when your guests have gone home.`,
    details: `
    <ul>
      <li>Length: 155 cm</li>
      <li>Max. length: 215 cm</li>
      <li>Width: 87 cm</li>
      <li>Height: 74 cm</li>
    </ul>
    `,
    price: 299,
    stock: 38,
    images: [
      "https://www.ikea.com/nl/en/images/products/ingatorp-extendable-table-black__0737090_pe740880_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/ingatorp-extendable-table-black__0870372_pe594442_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/ingatorp-extendable-table-black__1060576_pe850052_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },
  {
    name: "Mörbylånga",
    "short-description": `The oak top layer enhances the plank feeling and details like the floating table top and dovetail joints give the table a crafted look. A table full of character and plenty of room for family and friends.`,
    description: `The table has a full plank design that gives it an authentic plank expression with a genuine wood feeling.
    The plank expression is enhanced by the design on the edges.
    Oak is an exceedingly strong and durable hardwood with a prominent grain. It darkens beautifully with age acquiring a golden-brown undertone.`,
    details: `
    <ul>
      <li>Length: 220 cm</li>
      <li>Width: 100 cm</li>
      <li>Height: 74 cm</li>
    </ul>
    `,
    price: 799,
    stock: 9,
    images: [
      "https://www.ikea.com/nl/en/images/products/morbylanga-table-oak-veneer-brown-stained__0737110_pe740888_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/morbylanga-table-oak-veneer-brown-stained__0719765_pe732180_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/morbylanga-table-oak-veneer-brown-stained__0719764_pe732179_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 3,
  },
  {
    name: "Skogsta",
    "short-description": `Every table is unique, with varying grain pattern and natural colour shifts that are part of the charm of wood.`,
    description: `Acacia has a rich brown colour and distinctive grain pattern. It is highly durable, resistant to scratches and water, ideal for heavy-use. Acacia slightly darkens with age.`,
    details: `
    <ul>
      <li>Length: 235 cm</li>
      <li>Width: 100 cm</li>
      <li>Height: 73 cm</li>
    </ul>
    `,
    price: 429,
    stock: 19,
    images: [
      "https://www.ikea.com/nl/en/images/products/skogsta-dining-table-acacia__0546603_pe656255_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/skogsta-dining-table-acacia__0809033_ph149979_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/skogsta-dining-table-acacia__0946421_ph173663_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },
  {
    name: "Gillanda",
    "short-description": `This extendable dining table has a modern and sleek design with neat aluminium legs and a deeply embossed table top that looks like it is made of stone. Nice to the touch and easy to clean.`,
    description: `Extendable dining table with 1 extra leaf seats 6-8; makes it possible to adjust the table size according to need.
    The hardwearing, sturdy and maintenance-free frame in powder-coated aluminium makes the table easy to lift and move.
    The foil melamine surface of the table top is durable, easy to clean and nice to the touch.`,
    details: `
    <ul>
      <li>Length: 180 cm</li>
      <li>Max. length: 240 cm</li>
      <li>Width: 100 cm</li>
      <li>Height: 75 cm</li>
    </ul>
    `,
    price: 749,
    stock: 12,
    images: [
      "https://www.ikea.com/nl/en/images/products/gillanda-extendable-table-dark-grey-black__0830757_pe776837_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/gillanda-extendable-table-dark-grey-black__0830758_pe776836_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/gillanda-extendable-table-dark-grey-black__0944968_pe797512_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },
  {
    name: "Bengtstorp",
    "short-description": `The oak top layer and dovetail joints give the table a solid, crafted expression. This table is full of character and since it's round, you can always find space for at least one more friend.`,
    description: `Every table is unique, with varying grain pattern and natural colour shifts that are part of the charm of wood.
    Oak is an exceedingly strong and durable hardwood with a prominent grain. It darkens beautifully with age acquiring a golden-brown undertone.`,
    details: `
    <ul>
      <li>Diameter: 145 cm</li>
      <li>Height: 75 cm</li>
    </ul>
    `,
    price: 699,
    stock: 15,
    images: [
      "https://www.ikea.com/nl/en/images/products/morbylanga-table-oak-veneer-brown-stained__0737109_pe740887_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/morbylanga-table-oak-veneer-brown-stained__0719383_pe732031_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/morbylanga-table-oak-veneer-brown-stained__0719382_pe732030_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },
  {
    name: "Nordviken",
    "short-description": `This spacious, wood dining table has a traditional feel and will soon become a natural gathering place in your home. The sturdy construction and smooth extension mechanism make it a long-lasting favourite.`,
    description: `A stable construction in solid wood and hardwood veneer that makes each table unique, with varying grain patterns and natural colour shifts that are part of the charm of wood.
    The 6-seat table can easily be extended into a 8-seat table using the included self-storing leaves.`,
    details: `
    <ul>
      <li>Length: 210 cm</li>
      <li>Max. length: 289 cm</li>
      <li>Width: 105 cm</li>
      <li>Height: 75 cm</li>
    </ul>
    `,
    price: 499,
    stock: 23,
    images: [
      "https://www.ikea.com/nl/en/images/products/nordviken-extendable-table-black__0714238_pe729976_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/nordviken-extendable-table-black__1030736_pe836340_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/nordviken-extendable-table-black__0744800_pe743411_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 3,
  },

  /*********************** LIGHTING ***********************/

  {
    name: "Simrishamn",
    "short-description": `A stylish glass and chrome lamp from the Simrishamn series. Modern lighting for an entire home that creates a nice atmosphere. Use it as a standalone eye-catcher or mix it with other lamps in the series.`,
    description: `Gives a good general light.
    You can choose to hang the chandelier over your dining table or closer to the ceiling for general lighting in the room.`,
    details: `
    <ul>
      <li>Max.: 7 W</li>
      <li>Height: 46 cm</li>
      <li>Diameter: 70 cm</li>
      <li>Shade diameter: 15 cm</li>
      <li>Length of chain: 105 cm</li>
    </ul>
    `,
    price: 109,
    stock: 34,
    images: [
      "https://www.ikea.com/nl/en/images/products/simrishamn-chandelier-7-armed-chrome-plated-opal-white-glass__0793467_pe765392_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/simrishamn-chandelier-7-armed-chrome-plated-opal-white-glass__0793466_pe765393_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/simrishamn-chandelier-7-armed-chrome-plated-opal-white-glass__0793465_pe765391_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },
  {
    name: "Högvind",
    "short-description": `This pendant lamp has 3 mouth blown, smoke-coloured glass shades with inner shades made of perforated metal. Together they create an elegant eye-catcher that provides soft mood lighting and directed light.`,
    description: `Inside the pendant lamp's 3 smoke-coloured glass shades is a shade made of perforated metal, which provides both pleasant mood lighting and directed light over the surface below.
    These lampshades in glass are mouth blown by a skilled craftsperson and therefore each shade is unique.`,
    details: `
    <ul>
      <li>Cord length: 1.5 m</li>
      <li>Max. height: 155 cm</li>
      <li>Min. height: 70 cm</li>
      <li>Width: 41 cm</li>
    </ul>
    `,
    price: 89,
    stock: 26,
    images: [
      "https://www.ikea.com/nl/en/images/products/hogvind-pendant-lamp-with-3-lamps-nickel-plated-grey-glass__1045903_pe842765_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/hogvind-pendant-lamp-with-3-lamps-nickel-plated-grey-glass__1045906_pe842768_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/hogvind-pendant-lamp-with-3-lamps-nickel-plated-grey-glass__1046124_pe842852_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },
  {
    name: "Brändåsen",
    "short-description": `Inspired by science fiction movies, Brändåsen is a winner of the international design competition Red Dot Award. Change its shape and intensity of light with a simple pull of the strings.`,
    description: `You can easily switch between a brighter general light and a softer mood light by just pulling the strings.
    Gives decorative patterns on the ceiling and on the wall.`,
    details: `
    <ul>
      <li>Max.: 13 W</li>
      <li>Diameter: 52 cm</li>
      <li>Cord length: 1.5 m</li>
    </ul>
    `,
    price: 149,
    stock: 16,
    images: [
      "https://www.ikea.com/nl/en/images/products/ikea-ps-2014-pendant-lamp-white-copper-colour__0607414_pe682964_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/ikea-ps-2014-pendant-lamp-white-copper-colour__0880350_pe613978_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/ikea-ps-2014-pendant-lamp-white-copper-colour__0880356_pe615267_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 4,
  },
  {
    name: "Uppvind",
    "short-description": `Shaped like a shiny tuning fork topped with a slim and oval shade, this sturdy floor lamp catches the eye and spreads a soft, decorative light wherever you choose to place it.`,
    description: `The lamp gives a soft light and creates a warm, cosy atmosphere in your room.
    If you want to be able to easily change the light according to mood and needs, you can dim and switch between warm and cold light wirelessly.`,
    details: `
    <ul>
      <li>Max.: 13 W</li>
      <li>Width: 36 cm</li>
      <li>Shade width: 44 cm</li>
      <li>Height: 150 cm</li>
      <li>Total height: 150 cm</li>
    </ul>
    `,
    price: 139,
    stock: 23,
    images: [
      "https://www.ikea.com/nl/en/images/products/uppvind-floor-lamp-nickel-plated-white__0957613_pe805083_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/uppvind-floor-lamp-nickel-plated-white__0957614_pe805082_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/uppvind-floor-lamp-nickel-plated-white__1116039_ph181364_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },
  {
    name: "Agunnaryd",
    "short-description": `Agunnaryd ceiling lamp has a 122 cm long rail with 3 metal lampshades in black with brass-coloured inner sides that give a warm, soft light. Perfect to hang over a long table or kitchen island.`,
    description: `This lamp gives a pleasant light for dining and spreads a good directed light across your dining or bar table.`,
    details: `
    <ul>
      <li>Length: 122 cm</li>
      <li>Width: 22 cm</li>
      <li>Height: 27 cm</li>
      <li>Shade diameter: 22 cm</li>
      <li>Cord length: 0.7 m</li>
    </ul>
    `,
    price: 89,
    stock: 27,
    images: [
      "https://www.ikea.com/nl/en/images/products/agunnaryd-pendant-lamp-with-3-lamps-black__0859557_pe782370_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/agunnaryd-pendant-lamp-with-3-lamps-black__0859558_pe782372_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/agunnaryd-pendant-lamp-with-3-lamps-black__0859559_pe782371_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },
  {
    name: "Kabomba",
    "short-description": `Wall lamp in a modern art deco style with a removeable mirror and a built-in dimmable LED bulb. Full light to put on make-up and more diffused to create a calm atmosphere, just like in a hotel bathroom.`,
    description: `The lamp is dimmed by using the button on the side, so you can easily get the light that suits each activity or occasion.
    By dimming the lighting, you change the mood in the room while saving energy.
    The mirror enlarges the reflection - ideal for plucking your eyebrows, shaving or putting on make-up.`,
    details: `
    <ul>
      <li>Diameter: 20 cm</li>
      <li>Height: 10 cm</li>
    </ul>
    `,
    price: 49,
    stock: 36,
    images: [
      "https://www.ikea.com/nl/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-matt-black__1013471_pe829208_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-matt-black__1032942_pe837066_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kabomba-led-wall-lamp-with-mirror-dimmable-matt-black__1032902_pe837050_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },
  {
    name: "Frihult",
    "short-description": `The soft, round shapes and use of metal and glass create a timeless look that resembles lamps of the past. It is approved for bathroom use and is also a good solution for hallways.`,
    description: `A versatile lamp that can be mounted facing upwards or downwards, on its own above the mirror or as a pair with one on each side.
    Perfect to create atmosphere in the bathroom if you use a smart lighting bulb.
    A traditional style lamp made of rust-free materials.
    The glass shade provides balanced general lighting throughout the room.`,
    details: `
    <ul>
      <li>Max.: 5.3 W</li>
      <li>Width: 23 cm</li>
      <li>Height: 26.5 cm</li>
      <li>Shade diameter: 14 cm</li>
    </ul>
    `,
    price: 35,
    stock: 43,
    images: [
      "https://www.ikea.com/nl/en/images/products/frihult-wall-lamp-stainless-steel-colour__0744299_pe743210_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/frihult-wall-lamp-stainless-steel-colour__1052390_pe846070_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/frihult-wall-lamp-stainless-steel-colour__0689555_pe723047_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },
  {
    name: "Dalkarlsberg",
    "short-description": `The glass shade provides a diffused and decorative light.`,
    description: `A stylish glass and chrome lamp. Modern lighting for an entire home that creates a nice atmosphere. Use it as a standalone eye-catcher or mix it with other lamps in the series.`,
    details: `
    <ul>
      <li>Max.: 7 W</li>
      <li>Base diameter: 30 cm</li>
      <li>Height: 158 cm</li>
      <li>Cord length: 200 cm</li>
    </ul>
    `,
    price: 89,
    stock: 22,
    images: [
      "https://www.ikea.com/nl/en/images/products/simrishamn-floor-lamp-chrome-plated-opal-white-glass__0789445_pe763989_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/simrishamn-floor-lamp-chrome-plated-opal-white-glass__0963363_ph170744_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/simrishamn-floor-lamp-chrome-plated-opal-white-glass__0789444_pe763990_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 4,
  },

  /*********************** OFFICE ***********************/

  {
    name: "Trotten",
    "short-description": `Small desk that fits in every space - at your office or at home. The A shape of the legs is a smart design feature that allows you to use all the space under the desk for your office chair and storage.`,
    description: `The neat and small Trotten desk is ideal to use in tight workspaces at home or at the office.
    The neutral beige colour is kind to your eyes when you work on your laptop since it makes the contrasts between the screen and tabletop softer.
    Thanks to the flexibility of the desk, it's a great workspace for one person, and by combining several desks you can create an efficient area for meetings, collaborating on projects or brainstorming.`,
    details: `
    <ul>
      <li>Depth: 70 cm</li>
      <li>Free height under furniture: 73 cm</li>
      <li>Height: 75 cm</li>
      <li>Max. load: 50 kg</li>
      <li>Width: 120 cm</li>
    </ul>
    `,
    price: 99,
    stock: 19,
    images: [
      "https://www.ikea.com/nl/en/images/products/trotten-desk-beige-anthracite__1012700_pe828979_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/trotten-desk-beige-anthracite__1080633_pe858122_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/trotten-desk-beige-anthracite__1021235_pe832079_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 5,
  },
  {
    name: "Lagkapten",
    "short-description": `You can fit more than you think in a limited area. Lagkapten wall-mounted storage system is easy to mount and takes care of all your clothes and shoes in the bedroom and in smaller walk-in wardrobes.`,
    description: `Lagkapten trouser hanger makes it easier to keep track of your trousers and find your favourite pair in the morning.
    You can always adapt or complete this open storage solution as needed. Maybe the combination we've suggested is perfect for you, or you can easily create your own.`,
    details: `
    <ul>
      <li>Width: 187.0 cm</li>
      <li>Depth: 62.0 cm</li>
      <li>Height: 200.6 cm</li>
    </ul>
    `,
    price: 165,
    stock: 18,
    images: [
      "https://www.ikea.com/nl/en/images/products/boaxel-lagkapten-shelving-unit-with-table-top-white__1041720_pe841126_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/boaxel-lagkapten-shelving-unit-with-table-top-white__1046724_pe843103_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/boaxel-lagkapten-shelving-unit-with-table-top-white__1046728_pe843106_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 5,
  },
  {
    name: "Alefjäll",
    "short-description": `The genuine grain leather is a treat in terms of softness and comfort - also both seat and back are tilt- and height-adjustable to give you maximum support.`,
    description: `The safety castors have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
    Seat and backrest are adjustable in height and give you maximum support regardless of your body height.
    You get good support for your thighs and back since the seat depth is adjustable.
    You can lean back with perfect balance, as the tilt tension mechanism automatically adjusts the resistance to suit your weight and movements.`,
    details: `
    <ul>
      <li>Tested for: 110 kg</li>
      <li>Width: 64 cm</li>
      <li>Depth: 64 cm</li>
      <li>Max. height: 95 cm</li>
      <li>Seat width: 51 cm</li>
      <li>Seat depth: 42 cm</li>
      <li>Min. seat height: 45 cm</li>
      <li>Max. seat height: 56 cm</li>
    </ul>
    `,
    price: 299,
    stock: 15,
    images: [
      "https://www.ikea.com/nl/en/images/products/alefjall-office-chair-glose-black__0724715_pe734598_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/alefjall-office-chair-glose-black__0853041_pe709349_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/alefjall-office-chair-glose-black__0982773_ph176182_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 5,
  },
  {
    name: "Idåsen",
    "short-description": `This sturdy desk is guaranteed to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cables in place underneath.`,
    description: `You can easily adjust the height of the desk between 63 and 127 cm by using the handle to get the best position for both sitting and standing.
    It's easy to keep your desk neat and tidy with the cable management net under the table top.
    The veneer surface is durable, stain resistant and easy to keep clean.`,
    details: `
    <ul>
      <li>Length: 160 cm</li>
      <li>Width: 80 cm</li>
      <li>Min. height: 63 cm</li>
      <li>Max. height: 127 cm</li>
      <li>Max. load: 70 kg</li>
    </ul>
    `,
    price: 649,
    stock: 9,
    images: [
      "https://www.ikea.com/nl/en/images/products/idasen-desk-sit-stand-black-beige__0734938_pe739672_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/idasen-desk-sit-stand-black-beige__0855478_pe709497_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/idasen-desk-sit-stand-black-beige__0855482_pe715038_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 5,
  },
  {
    name: "Alex",
    "short-description": `A clean look that's easy to like and mix with other styles. Use it with a desk or - as long as you secure it to the wall - use it as a standalone. Keeps things organised and creates more space on the desk.`,
    description: `Drawer stops prevent the drawer from being pulled out too far.`,
    details: `
    <ul>
      <li>Width: 36 cm</li>
      <li>Height: 116 cm</li>
    </ul>
    `,
    price: 129,
    stock: 34,
    images: [
      "https://www.ikea.com/nl/en/images/products/alex-drawer-unit-with-9-drawers-grey-turquoise__0977780_pe813765_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/alex-drawer-unit-with-9-drawers-grey-turquoise__1043711_ph177987_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/alex-drawer-unit-with-9-drawers-grey-turquoise__0995615_pe821787_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 5,
  },
  {
    name: "Uppsala",
    "short-description": `Uppsala double-sided cabinet with open and closed storage is accessible from both sides - perfect as a room divider. You can create a workshop space by mounting Uppsala notice board to the cabinet.`,
    description: `The freestanding cabinet is perfect to use as a divider between different activities in the same room. Creates privacy without blocking the workspace entirely and is great for small and large areas.
    The back wall of the cabinet can be mounted to the back or middle of the cabinet if you want the cabinet to be accessible from both sides, with sliding doors on one side and open shelves on the other.
    The sliding doors are lockable, so you can keep your private belongings safe.`,
    details: `
    <ul>
      <li>Width: 240 cm</li>
      <li>Height: 180 cm</li>
    </ul>
    `,
    price: 607,
    stock: 12,
    images: [
      "https://www.ikea.com/nl/en/images/products/trotten-cabinet-combination-anthracite__1038436_pe839675_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/trotten-cabinet-combination-anthracite__1038437_pe839676_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/trotten-cabinet-combination-anthracite__1036207_pe838362_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 5,
  },
  {
    name: "Arkelstorp",
    "short-description": `Solid wood is a durable natural material.`,
    description: `Can be placed in the middle of a room because the back is finished.
    Drawer stops prevent the drawers from being pulled out too far.`,
    details: `
    <ul>
      <li>Width: 140 cm</li>
      <li>Depth: 70 cm</li>
      <li>Height: 74 cm</li>
      <li>Free height under furniture: 69 cm</li>
    </ul>
    `,
    price: 229,
    stock: 28,
    images: [
      "https://www.ikea.com/nl/en/images/products/arkelstorp-desk-black__0735967_pe740301_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/arkelstorp-desk-black__0939545_ph171072_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/arkelstorp-desk-black__0849208_pe565265_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 5,
  },
  {
    name: "Järvfjället",
    "short-description": `All bodies are different. Järvfjället swivel chair is designed so that you can adjust the headrest, lumbar support, armrests and the seat height and depth to best suit your body height and shape.`,
    description: `Your back gets the support it needs because the seat depth can be adjusted and the chair has built-in lumbar support.
    You can adjust the headrest and the lumbar support to suit you and your needs.
    Give your arms a comfortable support since the armrests can be adjusted upwards/downwards and forwards/backwards.`,
    details: `
    <ul>
      <li>Depth: 68 cm</li>
      <li>Max. height: 140 cm</li>
      <li>Max. seat height: 56 cm</li>
      <li>Min. seat height: 45 cm</li>
      <li>Seat depth: 46 cm</li>
      <li>Seat width: 52 cm</li>
      <li>Tested for: 110 kg</li>
      <li>Width: 68 cm</li>
    </ul>
    `,
    price: 249,
    stock: 30,
    images: [
      "https://www.ikea.com/nl/en/images/products/jarvfjallet-office-chair-with-armrests__1009906_pe827773_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/jarvfjallet-office-chair-with-armrests__1109489_pe870022_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/jarvfjallet-office-chair-with-armrests__1109487_pe870020_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 5,
  },

  /*********************** BEDS ***********************/

  {
    name: "Malm",
    "short-description": `A clean design with solid wood veneer. Place the bed freestanding or with the headboard against a wall. You also get spacious storage boxes that roll out smoothly on castors.`,
    description: `Malm bed storage boxes work perfectly with Malm bed frame. They fit neatly into the space under the bed and will be flush against sides.
    Wood veneer gives you the same look, feel and beauty as solid wood with unique variations in grain, colour and texture.
    You can sit up comfortably in bed thanks to the high headboard - just prop some pillows behind your back and you will have a comfortable place to read or watch TV.`,
    details: `
    <ul>
      <li>Height of drawer (inside): 15 cm</li>
      <li>Length: 209 cm</li>
      <li>Width: 196 cm</li>
      <li>Width of drawer (inside): 97 cm</li>
      <li>Depth of drawer (inside): 59 cm</li>
      <li>Footboard height: 38 cm</li>
      <li>Headboard height: 100 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 180 cm</li>
      <li>Height: 100 cm</li>
    </ul>
    `,
    price: 519,
    stock: 16,
    images: [
      "https://www.ikea.com/nl/en/images/products/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__0637597_pe698414_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__1101552_pe866728_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__0735708_pe740106_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 6,
  },
  {
    name: "Lommedalen",
    "short-description": `Like a hotel, but at home. Traditional details such as quilted stitching and turned legs, together with a soft, comfy headboard, make this spacious continental bed an inviting centrepiece in your bedroom.`,
    description: `The thick, padded headboard helps you create a hotel feel at home. Beautiful to look at, and soft and comfortable to lean on when reading or having breakfast in bed.
    The bed has an inviting, well-made and traditional expression thanks to the quilted stitching and tufting.
    The headboard is upholstered all the way around, making the bed perfect to place in the centre of the room.`,
    details: `
    <ul>
      <li>Length: 210 cm</li>
      <li>Width: 160 cm</li>
      <li>Height: 120 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 160 cm</li>
    </ul>
    `,
    price: 1898,
    stock: 4,
    images: [
      "https://www.ikea.com/nl/en/images/products/lommedalen-divan-bed-vatnestrom-firm-tistedal-skiftebo-light-beige__0918135_pe786061_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/lommedalen-divan-bed-vatnestrom-firm-tistedal-skiftebo-light-beige__0936887_pe793454_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/lommedalen-divan-bed-vatnestrom-firm-tistedal-skiftebo-light-beige__0918154_pe786080_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 6,
  },
  {
    name: "Hemnes",
    "short-description": `Practical storage for an extra pillow, quilt or bedspread.`,
    description: `Made of solid wood, which is a hardwearing and warm natural material.
    Adjustable bed sides allow you to use mattresses of different thicknesses.
    The 4 large drawers give you an extra storage space under the bed.`,
    details: `
    <ul>
      <li>Length: 211 cm</li>
      <li>Width: 194 cm</li>
      <li>Footboard height: 66 cm</li>
      <li>Headboard height: 120 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 180 cm</li>
      <li>Height of drawer (inside): 18 cm</li>
      <li>Height: 120 cm</li>
      <li>Depth of drawer (inside): 64 cm</li>
    </ul>
    `,
    price: 579,
    stock: 17,
    images: [
      "https://www.ikea.com/nl/en/images/products/hemnes-bed-frame-with-4-storage-boxes-black-brown-leirsund__0948874_pe799343_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/hemnes-bed-frame-with-4-storage-boxes-black-brown-leirsund__1101564_pe866739_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/hemnes-bed-frame-with-4-storage-boxes-black-brown-leirsund__1101565_pe866740_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 6,
  },
  {
    name: "Flekke",
    "short-description": `The backrest mounts on the right or the left side of the day-bed.`,
    description: `With some soft, fluffy pillows as back support, you easily transform this day bed into a comfortable sofa or chaise longue.
    Transform your sofa into a single bed in no time and maximise the use of floor space. Perfect for a teenager's bedroom or where you don't have a lot of space.`,
    details: `
    <ul>
      <li>Length: 207 cm</li>
      <li>Width: 88 cm</li>
      <li>Height: 86 cm</li>
      <li>Bed width: 169 cm</li>
      <li>Bed length: 207 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 80 cm</li>
    </ul>
    `,
    price: 429,
    stock: 17,
    images: [
      "https://www.ikea.com/nl/en/images/products/flekke-day-bed-w-2-drawers-2-mattresses-white-asvang-firm__1162511_pe889845_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/flekke-day-bed-w-2-drawers-2-mattresses-white-asvang-firm__1101304_pe866573_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/flekke-day-bed-w-2-drawers-2-mattresses-white-asvang-firm__0734594_pe739523_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 6,
  },
  {
    name: "Brimnes",
    "short-description": `When you live in a small space you need to be clever. That's probably why you're looking at this bed frame with 4 spacious drawers. The BRIMNES series has several heroes that help you save space.`,
    description: `Ample storage space is hidden neatly under the bed in 4 large drawers. Perfect for storing quilts, pillows and bed linen.
    This compact bed frame fits easily in tight spaces and under low ceilings, allowing you to maximise the space in your bedroom.
    This versatile bed frame will look great with your choice of textiles and bedroom furniture.`,
    details: `
    <ul>
      <li>Height of drawer (inside): 20 cm</li>
      <li>Length: 206 cm</li>
      <li>Width: 186 cm</li>
      <li>Height: 47 cm</li>
      <li>Width of drawer (inside): 94 cm</li>
      <li>Depth of drawer (inside): 54 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 180 cm</li>
    </ul>
    `,
    price: 379,
    stock: 20,
    images: [
      "https://www.ikea.com/nl/en/images/products/brimnes-bed-frame-with-storage-white-leirsund__0637515_pe698352_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/brimnes-bed-frame-with-storage-white-leirsund__0800869_ph163683_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/brimnes-bed-frame-with-storage-white-leirsund__1101953_pe866879_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 6,
  },
  {
    name: "Kongsfjord",
    "short-description": `Dressed in velvet from top-to-toe. From the quilted headboard with fabric-covered buttons to the supple, pocket sprung mattress that gets every muscle to relax. A pure pleasure for both body and soul.`,
    description: `If you read or watch TV in bed the soft headboard is comfortable to lean against.
    Velvet is a soft, luxurious fabric that is resistant to abrasion and easy to clean using the soft brush attachment on your vacuum.
    The velvet is woven from viscose and polyester, which makes it durable.
    Natural materials in the mattress pad and mattress, like natural latex, cotton and wool provides extra comfort, wicks away moisture and gives a very pleasant sleeping environment with an even temperature.`,
    details: `
    <ul>
      <li>Length: 217 cm</li>
      <li>Width: 180 cm</li>
      <li>Height: 139 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 180 cm</li>
    </ul>
    `,
    price: 2248,
    stock: 3,
    images: [
      "https://www.ikea.com/nl/en/images/products/kongsfjord-divan-bed-vatnestrom-medium-firm-tistedal-djuparp-dark-olive-green__1034033_pe837524_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kongsfjord-divan-bed-vatnestrom-medium-firm-tistedal-djuparp-dark-olive-green__1033968_pe837517_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/kongsfjord-divan-bed-vatnestrom-medium-firm-tistedal-djuparp-dark-olive-green__1033970_pe837515_s5.jpg?f=xl",
    ],
    featured: true,
    categoryId: 6,
  },
  {
    name: "Idanäs",
    "short-description": `Idanäs bed frame with storage is both eyecatching and practical. The built-in drawers make use of the space under your bed, and are also soft-closing. The timeless design is easy to love for a long time.`,
    description: `4 spacious drawers under the bed make the best use of the space. They are great for storing extra quilts, pillows and bed linens - or your clothes.
    The drawers close silently and softly, thanks to the integrated soft-closing function.
    The bed has a strong and sturdy construction that allows you to use it for many years.`,
    details: `
    <ul>
      <li>Footboard height: 63 cm</li>
      <li>Headboard height: 112 cm</li>
      <li>Length: 209 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 160 cm</li>
      <li>Width: 176 cm</li>
    </ul>
    `,
    price: 509,
    stock: 11,
    images: [
      "https://www.ikea.com/nl/en/images/products/idanas-bed-frame-with-storage-dark-brown-lonset__0916074_pe784950_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/idanas-bed-frame-with-storage-dark-brown-lonset__1101589_pe866763_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/idanas-bed-frame-with-storage-dark-brown-lonset__0939181_pe794435_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 6,
  },
  {
    name: "Sandviken",
    "short-description": `Practical storage for an extra pillow, quilt or bedspread.`,
    description: `Made of solid wood, which is a hardwearing and warm natural material.
    Adjustable bed sides allow you to use mattresses of different thicknesses.
    2 large storage boxes under the bed give you a lot of extra storage space.`,
    details: `
    <ul>
      <li>Length: 211 cm</li>
      <li>Width: 104 cm</li>
      <li>Footboard height: 66 cm</li>
      <li>Headboard height: 112 cm</li>
      <li>Mattress length: 200 cm</li>
      <li>Mattress width: 90 cm</li>
      <li>Height of drawer (inside): 18 cm</li>
      <li>Height: 112 cm</li>
    </ul>
    `,
    price: 319,
    stock: 18,
    images: [
      "https://www.ikea.com/nl/en/images/products/hemnes-bed-frame-with-2-storage-boxes-black-brown-leirsund__0948864_pe799335_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/hemnes-bed-frame-with-2-storage-boxes-black-brown-leirsund__1101541_pe866720_s5.jpg?f=xl",
      "https://www.ikea.com/nl/en/images/products/hemnes-bed-frame-with-2-storage-boxes-black-brown-leirsund__1101568_pe866743_s5.jpg?f=xl",
    ],
    featured: false,
    categoryId: 6,
  },
];

module.exports = async () => await Product.bulkCreate(products);
