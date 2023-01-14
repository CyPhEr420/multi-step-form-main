import Arcade from "../../assets/images/icon-arcade.svg";
import Advanced from "../../assets/images/icon-advanced.svg";
import Pro from "../../assets/images/icon-pro.svg";
import './select-plan.css'


const SelectPlan = ({ planTime, setPlanTime, selectedPlan, setSelectedPlan }) => {

    return (
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className="plans-container">
                <div className={`${selectedPlan === 'arcade' ? 'active' : ''}  plan`} onClick={() => {
                    setSelectedPlan('arcade')
                }}  >
                    <img src={Arcade} alt="arcade" />
                    <div className="plan-info">
                        <h3>Arcade</h3>
                        {
                            planTime === "monthly" ? <p>$9/mo</p> : <p>$90/yr</p>
                        }
                        {
                            planTime === "yearly" ? <p className="offer">2 months free</p> : null
                        }
                    </div>
                </div>
                <div className={`${selectedPlan === 'advanced' ? 'active' : ''}  plan`} onClick={() => {
                    setSelectedPlan('advanced')
                }}>
                    <img src={Advanced} alt="advanced" />
                    <div className="plan-info">
                        <h3>Advanced</h3>
                        {
                            planTime === "monthly" ? <p>$12/mo</p> : <p>$120/yr</p>
                        }
                        {
                            planTime === "yearly" ? <p className="offer">2 months free</p> : null
                        }
                    </div>
                </div>
                <div className={`${selectedPlan === 'pro' ? 'active' : ''}  plan`} onClick={() => {
                    setSelectedPlan('pro')
                }}>
                    <img src={Pro} alt="pro" />
                    <div className="plan-info">
                        <h3>Pro</h3>
                        {
                            planTime === "monthly" ? <p>$15/mo</p> : <p>$150/yr</p>
                        }
                        {
                            planTime === "yearly" ? <p className="offer" >2 months free</p> : null
                        }
                    </div>
                </div>
            </div>
            <div className="switch-plan-container">
                <p className={`${planTime === 'monthly' ? 'active' : ''}`} >Monthly</p>
                <label className="switch">
                    <input type="checkbox"
                        checked={planTime === 'yearly'}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setPlanTime('yearly')
                            } else {
                                setPlanTime('monthly')
                            }
                        }} />
                    <span className="slider round"></span>
                </label>
                <p className={`${planTime === 'yearly' ? 'active' : ''}`} >Yearly</p>
            </div>
        </>
    )
}

export default SelectPlan