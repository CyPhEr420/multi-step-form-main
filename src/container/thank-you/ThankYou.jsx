import './thank-you.css'
import Thanks from '../../assets/images/icon-thank-you.svg'
const ThankYou = () => {
    return (
        <div className="thankyou-container">
            <img src={Thanks} alt="thanks" />
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default ThankYou