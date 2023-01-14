import Button from '../../components/button/Button'
import './step-change.css'

const StepChange = ({ step, setStep }) => {

    return (
        <div className='btn-container'>
            {
                step > 1 ? <Button type="secondary" onClick={() => {
                    setStep(step - 1)
                }} >Back</Button> : <div></div>
            }


            <Button type="primary" onClick={() => {
                setStep(step + 1)

            }}>Next Step</Button>
        </div >
    )
}

export default StepChange