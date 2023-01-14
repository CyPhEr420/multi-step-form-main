import { useState } from "react"
import Input from "../../components/input/Input"
import StepChange from "../step-change/step-change"
import './personal-info-form.css'
const PersonalInfoForm = ({ step, setStep }) => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    })



    const handleChange = (e) => {
        let name = e.target.name;
        setPersonalInfo(prev => ({
            ...prev,
            [name]: e.target.value
        }))
    }
    return (
        <>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <form>
                <Input type="text" placeholder='eg. Stephen King' name="name" label="Name" value={personalInfo.name}
                    onChange={handleChange}
                />
                <Input type="email" placeholder='eg. stephenking@lorem.com' name="email" label="Email" value={personalInfo.email} onChange={handleChange} />
                <Input type="text" placeholder='eg. +1 234 567 890' name="phoneNumber" label="Phone Number" value={personalInfo.phoneNumber} onChange={handleChange} />
            </form>
            <StepChange step={step} setStep={setStep} />
        </>
    )
}

export default PersonalInfoForm