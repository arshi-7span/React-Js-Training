import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
export default function DatePickerComponent(props) {
  return (
   <>
   <LocalizationProvider dateAdapter={props.dateAdapter}>
              <Stack spacing={props.spacing}>
                <DesktopDatePicker
                  label={props.label}
                  inputFormat={props.inputFormat}
                  value={props.value}
                 // onChange= {props.onChange()}
                  //renderInput={props.renderInput}
                ></DesktopDatePicker>
              </Stack>
            </LocalizationProvider>
   </>
  )
}