function ProviderCard({name , description , review}) {
return (
    <div className="provider-card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Review: {review}</p>
    </div>
)
}

export default ProviderCard;