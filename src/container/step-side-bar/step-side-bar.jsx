import './step-side-bar.css';
const StepSidebar = ({ step }) => {
    return (
        <div className="sidebar">
            <div className="steps">
                <div className="step"  >
                    <p className={`step-num ${step === 1 ? 'active' : ''} `}>1</p>
                    <div className="step-info">
                        <p>STEP 1</p>
                        <h2>Your Info</h2>
                    </div>
                </div>
                <div className="step" >
                    <p className={`step-num ${step === 2 ? 'active' : ''} `}>2</p>
                    <div className="step-info">
                        <p>STEP 2</p>
                        <h2>SELECT PLAN</h2>
                    </div>
                </div>
                <div className="step" >
                    <p className={`step-num ${step === 3 ? 'active' : ''} `}>3</p>
                    <div className="step-info">
                        <p>STEP 3</p>
                        <h2>Add-ons</h2>
                    </div>
                </div>
                <div className="step" >
                    <p className={`step-num ${step === 4 ? 'active' : ''} `}>4</p>
                    <div className="step-info">
                        <p>STEP 5</p>
                        <h2>Summary</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepSidebar