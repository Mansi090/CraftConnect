export type Provider = {
  id: string;
  name: string;
  craft: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  specialities: string[];
  yearsActive: number;
  respondsInHours: number;
  verified: boolean;
};

export const providers: Provider[] = [
  {
    id: "meera-textiles",
    name: "Meera Textiles",
    craft: "Handwoven Sarees",
    city: "Varanasi",
    state: "Uttar Pradesh",
    rating: 4.8,
    reviewCount: 214,
    tagline:
      "Third-generation Banarasi weavers working in pure silk and real zari.",
    specialities: ["Banarasi silk", "Zari work", "Bridal wear"],
    yearsActive: 32,
    respondsInHours: 4,
    verified: true,
  },
  {
    id: "sunita-ceramics",
    name: "Sunita Ceramics",
    craft: "Handmade Pottery",
    city: "Jaipur",
    state: "Rajasthan",
    rating: 4.6,
    reviewCount: 98,
    tagline: "Small-batch stoneware and blue pottery for cafes and homes.",
    specialities: ["Blue pottery", "Dinnerware", "Planters"],
    yearsActive: 11,
    respondsInHours: 6,
    verified: true,
  },
  {
    id: "rajasthan-weavers",
    name: "Rajasthan Weavers",
    craft: "Traditional Handloom",
    city: "Jodhpur",
    state: "Rajasthan",
    rating: 4.7,
    reviewCount: 156,
    tagline: "Block-printed cottons and dhurries woven on pit looms.",
    specialities: ["Block print", "Dhurrie", "Cotton throws"],
    yearsActive: 19,
    respondsInHours: 12,
    verified: true,
  },
  {
    id: "sohan-resin-studio",
    name: "Sohan Resin Studio",
    craft: "Resin Art",
    city: "Gurgaon",
    state: "Haryana",
    rating: 4.5,
    reviewCount: 41,
    tagline:
      "Custom resin tabletops, trays and keepsakes with real botanicals.",
    specialities: ["River tables", "Trays", "Wedding keepsakes"],
    yearsActive: 5,
    respondsInHours: 2,
    verified: false,
  },
  {
    id: "kochi-leatherworks",
    name: "Kochi Leatherworks",
    craft: "Leather Goods",
    city: "Kochi",
    state: "Kerala",
    rating: 4.9,
    reviewCount: 187,
    tagline: "Vegetable-tanned leather bags and belts, hand-stitched to order.",
    specialities: ["Full-grain leather", "Saddle stitch", "Monogramming"],
    yearsActive: 14,
    respondsInHours: 3,
    verified: true,
  },
  {
    id: "sweet-home-furniture",
    name: "Sweet Home Furniture",
    craft: "Solid Wood Furniture",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.4,
    reviewCount: 73,
    tagline: "Sheesham and teak furniture built to your exact dimensions.",
    specialities: ["Sheesham", "Teak", "Modular storage"],
    yearsActive: 8,
    respondsInHours: 8,
    verified: true,
  },
];

export function findProviderById(id: string): Provider | undefined {
  return providers.find((provider) => provider.id === id);
}
