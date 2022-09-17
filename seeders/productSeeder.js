const { Product } = require("../models");
const PRADO = {
  name: "Prado",
  designer: "Christian Werner",
  "short-description":
    "Prado has first and foremost been designed based on the study of lifestyles and human nature",
  description: `Typically the design process surrounding a new sofa is heavily focused on aesthetic research. Prado represents a departure from this school of thought completely.
	Prado has first and foremost been designed based on the study of lifestyles and human nature. We find the same inspirations in Prado that brought us Smala in the earlier part of this century.`,
  details: `Prado consists of a vast bench seat (available in two sizes: 100*200 cm; 39 3/8'' x 78 3/4'' and 120*240 cm; 47 1/4'' x 94 1/2'') that can be combined and adjusted as desired and onto which back cushions may be placed at will, so that one can sit or lie down as they wish.
  It offers complete freedom as these cushions, weighted and equipped with a non-slip system, do not need to be rested against or attached to any object for support.`,
  price: 10585,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue3_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue8_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 1,
};

const LOVESEATPUMPKIN = {
  name: "Loveseat Pumpkin",
  designer: "Pierre Paulin",
  "short-description":
    "A unique first edition from the private collection of former French president Georges Pompidou in the Elysée Palace.",
  description: `A unique first edition from the private collection of former French president Georges Pompidou in the Elysée Palace. As suggested by its name, soft, organic, round shapes and firm seating comfort all characterize the Pumpkin collection. Available as an armchair with or without headrest, loveseat or sofa. An ottoman completes the collection. Resisting its appeal is impossible!`,
  details: `CONSTRUCTION
  Base and mid-section in polyether foam 30 kg/m3 - 3,0 kPa, resting on a thermoformed ABS base.
  Seat and bucket-style enveloping back in molded polyurethane foam 35 kg/m³ - 3.2 kPa with a 'comfort' layer in the same foam.
  Covers may be removed by a professional. Cover quilted with 100 g/m² polyester on the seat/back, and polyether foam on the exterior of the mid-section.
  A monocolor model, which may be made up in either fabric or hide. Colored wools compliments perfectly with the spirit of Pumpkin.
  `,
  price: 4770,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/137/3d-views/1/4/14110200_115_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/137/detail/1/4/14110200_det2_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/137/3d-views/1/4/14110200_115_vue8_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 1,
};

const PLUMY = {
  name: "Plumy",
  designer: "Annie Hiéronimus",
  "short-description":
    "A reissue of the iconic model introduced over 35 years ago, the Plumy collection was inspired by the 1980s.",
  description: `Constructed entirely of bonded blocks of polyether and Bultex polyurethane foams of different densities, Plumy's enveloping design is the epitome of comfort and relaxation. All seat and backrest cushions are filled with goose feathers and can be folded into a chaise lounge position to create a customized and relaxing experience. The back-side of the cushions available in 2 versions: in cloth, or upholstered in the main covering material. Seat covers are fully removable and feature a zipper - offered in three color options: matte black, pearl grey or ivory.`,
  details: `Structuring base in polyether foam (28kg/m3 - 4.0 kPa).`,
  price: 7295,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2300/ifondperdu/0/1/013jn_c01_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2300/iambiance1/0/1/011y9_1848x1848.jpg",
  ],
  featured: true,
  categoryId: 3,
};

//***********ARMCHAIR

const SAPARELLA = {
  name: "SAPARELLA",
  designer: "Michel Ducaroy",
  "short-description":
    "A re-release of a pioneering model from 1965, Saparella consists of a fireside chair, a diabolo and a footstool.",
  description: `This design, with its rounded, airy lines, is an invitation to relax and to make the most of a beautiful day.
  The diabolo, the central element, draws inspiration from the toy of the same name. Its concave outline enables elements to be slotted together— into the convex fireside chair—to create a comfortable three seat settee.
  The settee is made from two fireside chairs with a diabolo in the center. The three elements are held together by a linking-piece made from mirror-polished stainless steel.`,
  details: `Base and sides in polyether foam 28kg/m3 - 4.8kPa. The three items sit on a ventilated Batyline-type fabric. Water runs off naturally thanks to the convex shape of the seat.`,
  price: 1980,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/3552/3d-views/1/8/18050100_2690_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/3552/3d-views/1/8/18050100_2690_vue3_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue3_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 2,
};

const AMEDEE = {
  name: "Amédée",
  designer: "Marie C Dorner",
  "short-description":
    "Amédée is a sofa and armchair combination, designed around a lumbar support which is quilted and stitched just like the bucket seats of the finest Italian automobiles",
  description: `Chic, urban and thus compact, this family of seating acquires undeniable luxury object status when upholstered in the new full grain, pure aniline Orga leather, with its slightly smooth, glossy finish.`,
  details: `
  CONSTRUCTION: structure of seat in 3-layer particleboard; structure of back in thermoformed ABS. Base in black MDF panels in the case of the sofa and fixed armchair, or in 8 mm thick Epoxy black lacquered steel in the case of the swiveling armchair. In the case of the footstool, the structure is in 3-layer particleboard.`,
  price: 1980,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2465/ifondperdu/0/1/012g2_c01_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2465/iambiance3/0/1/012h5_c01_2000x2000.jpg",
    "https://images.ligne-roset.com/cache/models/2465/iambiance1/1/0/10002h_2000x2000.jpg",
  ],
  featured: true,
  categoryId: 2,
};

const ASMARA = {
  name: "Asmara",
  designer: "Bernard Govin",
  "short-description":
    "A new way of living!'' was the 1968 introduction by American Vogue about Bernard Govin’s U.F.O.",
  description: `which beautifully embodies this floor-loving style of interior arrangement which has also been called « low look ». After a long period during which it was only to be seen in the collections of the Musée des Arts décoratifs, Asmara is now making its big comeback to the collection for the 160th anniversary of Ligne Roset. Nostalgics, collectors, fans of co-working and above all visionaries will want to seize the opportunity to rediscover this mythical seating, its comfort further improved by the latest innovations from the Roset R&D department! Asmara defines itself as a modular settee in a stretch fabric, the concave shapes of which voluptuously hug the contours of the body in an aesthetically human design.`,
  details: `
  CONSTRUCTION: CONSTRUCTION : an all-foam model. Base in polyether foam (elements 501 and 503: 34 kg/m3 – 5.7 kPa ; elements 502 and 504 : 28 kg/m3 – 4.8 kPa).`,
  price: 9980,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2667/ifondperdu/1/0/10048g_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2667/iambiance3/1/0/1004rf_c01_1848x1848.jpg",
    "https://images.ligne-roset.com/cache/models/2667/iambiance4/1/0/1004rg_1848x1848.jpg",
  ],
  featured: true,
  categoryId: 2,
};

//***************************TABLES

const VILNA = {
  name: "Vilna",
  designer: "Pagnon & Pelhaître",
  "short-description":
    "Extremely refined table, which uses the characteristics of full body stoneware to convey an impression of rarely seen visual elegance. ",
  description: `Chic, urban and thus compact, this family of seating acquires undeniable luxury object status when upholstered in the new full grain, pure aniline Orga leather, with its slightly smooth, glossy finish.`,
  details: `
  CONSTRUCTION: This top, which exceeds by about 12 cm / 4.7'', makes the frame very inconspicuous. The designers present Vilna as an innovative table, an object of design, with its overbearing top and its sharpened metal base.`,
  price: 4225,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/2659/3d-views/0/0/0050fb4n_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/2659/detail/0/0/0050fb4n_det1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/2659/detail/0/0/0050fb4n_det2_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 3,
};

const ODESSA = {
  name: "Odessa",
  designer: "Pagnon & Pelhaître",
  "short-description":
    "A vision of natural minimalism with clean-cut shapes and dynamic lines, Odessa is a slender dining table with reassuring characteristics.",
  description: `Angled like an airplane wing, Odessa's table top, appears to float on top of the double arch of the folded steel feet. The Odessa table is offered in a number of lengths and finishes.`,
  details: `
  CONSTRUCTION: RECTANGULAR DINING TABLE BLACK LACQUERED BASE WALNUT, H. 29 x l. 95 x P. 39.`,
  price: 7670,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/1187/3d-views/0/0/0050w49w_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/1187/detail/0/0/0050w49w_det1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/1187/detail/0/0/0050w49w_det2_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 3,
};

const ENNEA = {
  name: "Ennéa",
  designer: "Vincent Tordjman",
  "short-description":
    "The Ennea dining table (Ennea stands for the Greek number 9) rests on a base composed of three identical 'rectangular' triangles made from solid wood. ",
  description: `Three triangles, three sides: these nine segments form nine vectors, nine directions within the space which form an arrangement which is at once simple and sophisticated. The construction recalls the pyramidal structure of a crystal, both light and robust. Here, it is all about balance and tension, more than a static design. The assembly method is simple but gives an impression of sophistication.`,
  details: `
  CONSTRUCTION: ROUND DINING TABLE LEGS IN NATURAL OAK WHITE MARBLE-EFFECT STONEWARE, H. 29 x l. 0 x P. 0.`,
  price: 7670,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/4704/3d-views/0/m/0m50ft1c_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/4704/detail/0/m/0m50ft1c_det1_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 3,
};

//*********LIGHTING

const CHROMEBELL = {
  name: "Chrome Bell",
  designer: "Patrick Zulauf",
  "short-description":
    "Table lamp with directional shade in semi-transparent chrome-colored borosilicate glass (Ø 13 cm - W 25 cm).",
  description: `Directional rise-and-fall head rotates 360°. Base (Ø 16 cm) and stem finished in Epoxy satin black lacquer. Black PVC round cable; black manual switch. Requires 1 x 5 W GU 10 dichroic full glass bulb, angle of diffusion 32°, color temperature 2,700 K (warm white). 400 Lumens (not supplied).
  - 1-cable suspended light with shade in semi-transparent chrome-colored borosilicate glass (Ø 16.5 cm - H 29.5 cm). Epoxy satin black lacquered round ceiling fitting (Ø 10 cm - H 3 cm). 150 cm black PVC round cable. Requires 1 x 5 W GU 10 dichroic LED (non dimmable) full glass bulb, angle of diffusion 32°, color temperature 2,700K (warm white), 400 Lumens (not supplied).  3-cable suspended light with shades in semi-transparent chrome-colored borosilicate glass (Ø 16.5 cm - H 29.5 cm). Epoxy satin black lacquered round ceiling fitting (77.5 x 7.5 cm - H 3 cm). 150 cm black PVC round cables. Requires 3 x 5 W GU 10 dichroic LED (non dimmable) full glass bulbs, angle of diffusion 32°, color temperature 2,700K (warm white), 400 Lumens (not supplied).`,
  details: `
  CONSTRUCTION: DIMENSIONS:  H 29 x W 58 x D 22"                                                                                                                            `,
  price: 7670,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2537/ifondperdu/1/0/1000qt_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2537/iambiance2/1/0/10041x_1848x1848.jpg",
    "https://images.ligne-roset.com/cache/models/2537/iambiance1/1/0/1001mv_c01_1848x1848.jpg",
  ],
  featured: true,
  categoryId: 4,
};

const ASOLA = {
  name: "Asola",
  designer: "Evangelos Vasileiou",
  "short-description":
    "Asola is a glimpse of the Seventies and Eighties, as much in terms of the material used - perforated steel - and its white color as its stylised mushroom-like shape.",
  description: `The latter evokes the emblematic lights of the period such as Giancarlo Mattioli's Nesso light (1967) or Mario Botta's Shogun (1986), which was designed for Artemide.
  - Table lamp with stem and shade constructed from two white lacquered perforated steel cylinders. The upper section of the cylinder-stem has an anti-glare dome in repoussé steel. Epoxy white lacquer finish.`,
  details: `White electric cable. Manual switch. Requires 1 x 57W - E26 standard eco halogen bulb (Classic A), not supplied.
  - Floor lamp with stem and shade (Ø 23 1/2'' / 60 cm - H 11 3/4'' / 30 cm) made of two perforated steel cylinders. The upper section of the cylinder-stem has an anti-glare dome in steel. Epoxy white lacquer finish. White PVC cable and white foot-operated dimmer switch. Requires 1 x 115 W E 26 Eco halogen standard (classic A) bulb, not supplied. 2,135 Lumens, (not supplied).`,
  price: 1545,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2354/ifondperdu/0/1/012jz_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2354/iambiance2/0/1/012k1_c01_1848x1654.jpg",
    "https://images.ligne-roset.com/cache/models/2354/iambiance1/0/1/012jz_c01_1848x1653.jpg",
  ],
  featured: true,
  categoryId: 4,
};

const CALOT = {
  name: "Calot",
  designer: "Patrick Zulauf",
  "short-description":
    "Table lamp with chromed steel stem, base (Ø 3 1/2'' / 9 cm - H 1 1/2'' / 3.5 cm) in white marble, white PVC cable and white manual switch. ",
  description: `The latter evokes the emblematic lights of the period such as Giancarlo Mattioli's Nesso light (1967) or Mario Botta's Shogun (1986), which was designed for Artemide.
  - Shade (Ø 3 1/2'' - 9 cm) in transparent resin with a polished, frosted section for the bulb. Supplied with 1 x 2 W G4 LED bulb, color temperature 3,000K (warm white), 220 Lumens.`,
  details: `Table lamp with clear matt varnished brass-coated steel stem, base (Ø 3 1/2'' / 9 cm - H 1 1/2'' / 3.5 cm) in black marble, black PVC cable and black manual switch. Shade (Ø 3 1/2'' - 9 cm) in transparent resin with a polished, frosted section for the bulb. Supplied with 1 x 2 W G4 LED bulb, color temperature 3,000K (warm white), 220 Lumens.
  Reading light with chromed steel stem, base (Ø 5 1/2'' / 14 cm - H 1 1/2'' / 3.5 cm) in white marble, white PVC cable and white manual switch. Shade (Ø 3 1/2'' - 9 cm) in transparent resin with a polished, frosted section for the bulb. Supplied with 1 x 2 W G4 LED bulb, color temperature 3,000K (warm white), 220 Lumens.
  Reading light with clear matt varnished brass-coated steel stem, base (Ø 5 1/2'' / 14 cm - H 1 1/2'' / 3.5 cm) in black marble, black PVC cable and black manual switch. Shade (Ø 3 1/2'' - 9 cm) in transparent resin with a polished, frosted section for the bulb. Supplied with 1 x 2 W G4 LED bulb, color temperature 3,000K (warm white). 220 Lumens.
  Suspended light with shade in transparent resin Ø 3 1/4'' - 8 cm, with a polished sanded section for the bulb. 98 1/2'' - 2.50 m long woven metal cable in a brass-effect finish. ‘Coulistop’ height adjustment system. Epoxy satin white lacquered ceiling fitting H 1'' - 2.5 cm Ø 4 3/4'' - 12 cm. Supplied with 1 x 1.2 W 12 V G4 LED bulb, color temperature 3,000K (warm white), 100 Lumens. Non-dimmable LED bulb.
  Suspended light with shade in transparent resin Ø 3 1/4'' - 8 cm, with a polished sanded section for the bulb. 98 1/2'' - 2.50 m long woven metal cable in a brass-effect finish. ‘Coulistop’ height adjustment system. Epoxy satin white lacquered ceiling fitting H 1 1/4'' - 3 cm Ø 15 3/4'' - 40 cm. Supplied with 9 x 1.2 W 12 V G4 LED bulbs, color temperature 3,000K (warm white), 100 Lumens. Non-dimmable LED bulb.`,
  price: 2290,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2534/ifondperdu/1/0/1003gq_c01_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2534/iambiance3/1/0/1003xi_2000x2000.jpg",
    "https://images.ligne-roset.com/cache/models/2534/iambiance2/1/0/1003xe_1848x1848.jpg",
  ],
  featured: true,
  categoryId: 4,
};

//***************OFFICE */

const BRIORD = {
  name: "Briord",
  designer: "Rémi Bouhaniche",
  "short-description":
    "According to Rémi Bouhaniche, it was during the first lockdown in 2020, whilst viewing aerial video imagery of the Briord factories",
  description: `Roset is based, that he had the idea : to design a piece of furniture inspired by the landscape conjured up by that aerial view of the Rhône and its meanderings around the Bugey mountains. A homage to wood, with lines with the light but asymmetrical lines of nature.Here, Rémi Bouhaniche plays to the Home Office trend, with a desk which is at once elegant and functional, the sleek lines of which are soft yet precise.
  Black lacquered steel base ; top and drawer in black-stained ash.`,
  details: "it was during the first lockdown in 2020.",
  price: 2290,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/models/2748/ifondperdu/1/0/1006oz_720x393.jpg",
    "https://images.ligne-roset.com/cache/models/2748/iambiance3/1/0/1006p2_1000x1000.jpg",
    "https://images.ligne-roset.com/cache/models/2748/iambiance1/1/0/1007dz_c01_1848x1848.jpg",
  ],
  featured: true,
  categoryId: 5,
};

const products = [
  PRADO,
  LOVESEATPUMPKIN,
  PLUMY,
  SAPARELLA,
  AMEDEE,
  ASMARA,
  VILNA,
  ODESSA,
  ENNEA,
  CHROMEBELL,
  ASOLA,
  CALOT,
  BRIORD,
];

module.exports = async () => await Product.bulkCreate(products);
