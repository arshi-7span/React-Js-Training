import './StyleNew.css'
//import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {StepContent} from '@mui/material';
export default function Stepper(props) {
   const {steps,activeStep,label,handleNext,handleBack} = props; 
    return (
      <>
      {/* <div>
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={currentStep === index ? 'active' : ''}>
              {step}
            </li>
          ))}
        </ul>
      </div> */}
     

      <div>
    <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={label[index]}>
            <StepLabel>{label[index]}</StepLabel>
           <StepContent>
              <Typography>{step}</Typography>
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
    </div>
      </>
    );
  }