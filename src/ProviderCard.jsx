function ProviderCard({ name, craft, rating, city }) {
    return (
        <div className="provider-card">
            <h3>{name}</h3>
            <p>{craft}</p>
            <p>City: {city}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default ProviderCard;