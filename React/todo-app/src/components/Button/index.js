const Button = ({className, onClick, text, disabled = false}) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{text}</button>
    )
}

export default Button