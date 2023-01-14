import { useState } from 'react';
import './App.css';
import AddOns from './container/add-ons/AddOns';
import DoubleCheck from './container/double-check/DoubleCheck';
import PersonalInfoForm from './container/personal-info-form/personal-info-form';
import SelectPlan from './container/select-plan/Select-plan';
import StepChange from './container/step-change/step-change';
import StepSidebar from './container/step-side-bar/step-side-bar.jsx'
import ThankYou from './container/thank-you/ThankYou';

function App() {
  const [step, setStep] = useState(1);
  const [planTime, setPlanTime] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('advanced')

  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customProfile: false,
  })

  let planAmount;
  let addonAmount = 0;

  if (addons.onlineService) {
    addonAmount += 1
  }
  if (addons.largerStorage) {
    addonAmount += 2
  }
  if (addons.customProfile) {
    addonAmount += 2
  }

  if (planTime === 'yearly') {
    addonAmount = String(addonAmount) + '0';
    addonAmount = Number(addonAmount)
  }


  switch (selectedPlan) {
    case 'arcade':
      planAmount = 9;
      break;
    case 'advanced':
      planAmount = 12;
      break;
    case 'pro':
      planAmount = 15;
      break;
    default:
      planAmount = 0;
  }

  if (planTime === 'yearly') {
    planAmount = String(planAmount) + "0";
    planAmount = Number(planAmount)
  }



  return (
    <div className="App">
      <div className="form-container">
        <StepSidebar step={step} />

        <div className="main-form-container">
          {step === 1 && <PersonalInfoForm step={step} setStep={setStep} />}
          {step === 2 && <SelectPlan
            planTime={planTime} setPlanTime={setPlanTime}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}

          />}
          {step === 3 && <AddOns addons={addons} setAddons={setAddons} />}
          {step === 4 && <DoubleCheck planAmount={planAmount} addons={addons} planTime={planTime}
            selectedPlan={selectedPlan}
            addonAmount={addonAmount}
            setStep={setStep}
          />}
          {step > 4 && <ThankYou />}



          {
            step < 5 && step > 1 ? <StepChange step={step} setStep={setStep} addonAmount={addonAmount} /> : null
          }

        </div>

      </div>
    </div>
  );
}

export default App;
