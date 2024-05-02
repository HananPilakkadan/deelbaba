import Button from "../button";

import "./employerCard.scss"

const Employercard = ({ item }) => {
    return (
        <div className="emp-card" key={item?.id}>
            <div className="emp-image-container">
                <img src={item?.photo} alt="employer-profile" />
            </div>
            <h1>{item?.title}</h1>
            <div className="buttons">
                <Button className={"work"} buttonText={"Work"} />
                <Button className={"hire"} buttonText={"Hire"} />
            </div>
        </div>
    )
}
export default Employercard;