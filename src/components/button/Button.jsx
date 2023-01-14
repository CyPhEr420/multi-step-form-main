import './button.css'

const Button = (props) => {
    const { children, type, onClick } = props;
    return (
        <button className={type} onClick={onClick} >
            {children}

        </button>
    )
}

export default Button