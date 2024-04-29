import Button from "./button";

const ProfileCard = ({item}) => {

    const { id, name, job, rating, review, profile } = item;
    return (
         <div className="profiles" key={id}>
            <div className="img-conatiner">
                <img src={profile} alt="profile" />
            </div>
            <b>{name}</b>
            <p>{job}</p>
            <img src={rating} alt="rating" />
            <p>{review}</p>
            <Button className={"profile-button"} buttonText={"See More"} />
       </div>
    )
}
export default ProfileCard;