import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
export default function SelectComponent(props) {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{props.lable}</InputLabel>
        <Select
          labelId={props.selectLableId}
          id={props.selectComponentId}
          value={props.value}
          onChange={props.onChange}
        >
          {props.menuItemList &&
            props.menuItemList.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
}
