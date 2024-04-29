import '../../assets/css/index.scss';

const Cards = ({ item }) => {
    const { id, background, text, rate } = item;
    return (
        <div className="card-container" key={id}>
            <div className="bg-container">
                <img src={background} alt="card" />
            </div>
            <div className="card-content">
                <h1>{text}</h1>
                <p>{rate}</p>
            </div>
        </div>
    )
}
export default Cards;