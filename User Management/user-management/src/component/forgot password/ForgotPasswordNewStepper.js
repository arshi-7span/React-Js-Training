import React, { useState } from 'react';
import ChangePassword from './ChangePassword';
import OtpValidate from './OtpValidate';
import Stepper from './Stepper';
import UserNameValidate from './UserNameValidate';

function ForgotPasswordNewStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<UserNameValidate/>, <OtpValidate/>, <ChangePassword/>];
  const label = ["Enetr userName","Enter Otp","Enter password and confirm password"];
  

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <>
   
    <div>
      <Stepper  steps={steps} activeStep={activeStep}  label={label} orientation="Horizontal" />
      <button onClick={() => handleStepClick(activeStep + 1)}>Next Step</button>
    </div>
    </>
  );
}

export default ForgotPasswordNewStepper;