const Title = (props) => {
    const { className, titleText } = props;
    return (
        <div className={className}>{titleText}</div>
    )
}
export default Title;