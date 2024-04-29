const Button = (props) =>{
    const {className, buttonText} = props;
    return(
        <button className={className}>{buttonText}</button>
    )
}
export default Button;