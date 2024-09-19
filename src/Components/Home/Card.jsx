import '../../Styles/Card.css';

const Card = ({data}) => {
    return ( <div>
        { data && data.map((res) => {
            return (<div className="featured-cards-div" key={res.id}>
                <img src={res.image} className="featured-card-image" alt="Image" />
                <h1 className="featured-card-title">{res.title}</h1>
            </div>)
        })}
    </div> );
}
 
export default Card;