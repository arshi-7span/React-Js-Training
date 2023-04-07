import { TextField } from "@mui/material";

function TextFieldComponent(props) {
    return (
    <>
        <TextField 
        id={props.id} 
        type={props.type}
        variant={props.variant}
        className={props.className}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
        >
   </TextField>

    </>
   
  )
}

export default TextFieldComponent