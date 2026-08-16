import ProviderCard from "./ProviderCard"
import { useState } from "react"
import SearchBar from "./SearchBar";
function App() {
  const [query , setQuery] = useState("");

  const providers = [
    {id: 1, name: "Meera Textiles", craft: "Handwoven Sarees", city: "Varanasi", rating: 4.5},
    {id: 2, name: "Sunita Exports", craft: "Handmade Pottery", city: "Jaipur", rating: 4.8},
    {id: 3, name: "Rajasthan Weavers", craft: "Traditional Handloom", city: "Kolkata", rating: 4.6},
    {id: 4, name: "Sohan works", craft: "resin art", city: "gurgaon", rating: 4.5},
    {id: 5, name: "Ram construction", craft: "Handmade sarees", city: "gujarat", rating: 4.8},
    {id: 6, name: "Sweet home", craft: "Handloom", city: "Mumbai", rating: 4.6}
  ]
  
  const q = query.trim().toLowerCase();

  const visibleProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(q) ||
    provider.craft.toLowerCase().includes(q) ||
    provider.city.toLowerCase().includes(q)
  );
  
  return (
     <>
     <h1>Craftconnect</h1>
     <SearchBar query = {query}  setQuery = {setQuery}/>
      {visibleProviders.length === 0 && <p>No providers found.</p>}

      {visibleProviders.map(provider => (
        <ProviderCard
          key={provider.id}
          name={provider.name}
          craft={provider.craft}
          city={provider.city}
          rating={provider.rating}
        />  
      ))}
     </>
  )
}

export default App
