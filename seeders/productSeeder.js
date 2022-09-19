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
];

module.exports = async () => await Product.bulkCreate(products);
