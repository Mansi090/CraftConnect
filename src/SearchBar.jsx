function SearchBar({ query, setQuery }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for providers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
        </div>
    )
}

export default SearchBar;


