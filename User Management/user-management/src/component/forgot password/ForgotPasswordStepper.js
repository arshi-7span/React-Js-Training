import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, StepContent} from '@mui/material';
import UserNameValidate from './UserNameValidate';
import OtpValidate from './OtpValidate';
import ChangePassword from './ChangePassword';
function getSteps() {
    return [<b style={{color:'purple'}}>Enetr userName</b>, 
    <b style={{color:'purple'}}>'Enter Otp'</b>, 
    <b style={{color:'purple'}}>'Enter password and confirm password'</b>];
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <UserNameValidate/>    
      case 1:
         return <OtpValidate/> 
      case 2:
        return <ChangePassword/>
      default:
        return 'Unknown step';
    }
  }
export default function ForgotPasswordStepper() {


  //const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div >
      <h1>Forgot password </h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
           <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div >
                <div>
                  <Button
                    id='next'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                   
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} >
            
          <Typography>Password Changed</Typography>
          <Button onClick={handleReset} >
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}