export type Provider = {
  id: string;
  name: string;
  craft: string;
  city: string;
  rating: number;
};

export const providers: Provider[] = [
  {
    id: "meera-textiles",
    name: "Meera Textiles",
    craft: "Handwoven Sarees",
    city: "Varanasi",
    rating: 4.5,
  },
  {
    id: "sunita-exports",
    name: "Sunita Exports",
    craft: "Handmade Pottery",
    city: "Jaipur",
    rating: 4.8,
  },
  {
    id: "rajasthan-weavers",
    name: "Rajasthan Weavers",
    craft: "Traditional Handloom",
    city: "Kolkata",
    rating: 4.6,
  },
  {
    id: "sohan-works",
    name: "Sohan Works",
    craft: "Resin Art",
    city: "Gurgaon",
    rating: 4.5,
  },
  {
    id: "ram-construction",
    name: "Ram Construction",
    craft: "Handmade Sarees",
    city: "Ahmedabad",
    rating: 4.8,
  },
  {
    id: "sweet-home",
    name: "Sweet Home",
    craft: "Handloom",
    city: "Mumbai",
    rating: 4.6,
  },
];
