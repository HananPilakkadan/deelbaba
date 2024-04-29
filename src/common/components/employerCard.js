import Button from "./button";

const Employercard = ({ item }) => {
    const { id, photo, title } = item;
    return (
        <div className="emp-card" key={id}>
            <div className="emp-image-container">
                <img src={photo} alt="employer-profile" />
            </div>
            <h1>{title}</h1>
            <div className="buttons">
                <Button className={"work"} buttonText={"Work"} />
                <Button className={"hire"} buttonText={"Hire"} />
            </div>
        </div>
    )
}
export default Employercard;