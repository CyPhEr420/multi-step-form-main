import './input.css'
const Input = ({ type, name, placeholder, label, value, onChange }) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} />
        </div>
    )
}

export default Input