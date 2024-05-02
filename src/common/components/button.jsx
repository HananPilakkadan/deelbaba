const Button = (props) =>{
    const {className, buttonText,btnImg} = props;
    return(
        <button className={className}>{buttonText}{btnImg&&<img src={btnImg}/>}</button>
    )
}
export default Button;