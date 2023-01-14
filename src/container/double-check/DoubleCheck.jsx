import './double-check.css'
const DoubleCheck = ({ planTime, selectedPlan, planAmount, addons, setStep, addonAmount }) => {


    return (
        <>
            <h1>Finishing up</h1>
            <p>Double check everything looks OK before continuing. </p>

            <div className="data-table">
                <div className="plan-data">
                    <div className="plan-type">
                        <h4>{`${selectedPlan} (${planTime})`}</h4>
                        <p onClick={() => {
                            setStep(2)
                        }} >change</p>
                    </div>
                    <div className="plan-amount">
                        <p>{`$${planAmount}/${planTime === 'monthly' ? 'mo' : 'yr'}`}</p>
                    </div>
                </div>

                <div className="addon-container-data">
                    {
                        addons.onlineService ?
                            <div className="addon-data">
                                <h4>Online Service</h4>
                                <p>{`$${planTime === 'monthly' ? '1' : '10'}/${planTime === 'monthly' ? 'mo' : 'yr'}`}</p>
                            </div> : null
                    }
                    {
                        addons.largerStorage ?
                            <div className="addon-data">
                                <h4>Larger Storage</h4>
                                <p>{`$${planTime === 'monthly' ? '2' : '20'}/${planTime === 'monthly' ? 'mo' : 'yr'}`}</p>
                            </div> : null
                    }
                    {
                        addons.customProfile ?
                            <div className="addon-data">
                                <h4>Custom Profile</h4>
                                <p>{`$${planTime === 'monthly' ? '2' : '20'}/${planTime === 'monthly' ? 'mo' : 'yr'}`}</p>
                            </div> : null
                    }


                </div>
            </div>

            <div className="total-amount-container">
                <h4>{`Total (per ${planTime === 'monthly' ? 'month' : 'year'})`}</h4>
                <h2>{`+${planAmount + addonAmount}/${planTime === 'monthly' ? 'mo' : 'yr'}`}</h2>
            </div>

        </>
    )
}

export default DoubleCheck