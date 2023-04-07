import React, { Component } from "react";
import "./MyCss.css";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextFieldComponent from "../common components/TextFieldComponent";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SelectComponent from "../common components/SelectComponent";
import DatePickerComponent from "../common components/DatePickerComponent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment";
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
      gender: "",
      emailId: "",
      country: "",
      state: "",
      size: "small",
      type: "",
      input: "input",
      variant: "outlined",
      formControlSize: "small",
      inputLableId: "",
      label: "Birthdate",
      selectLableId: "",
      selectComponentId: "",
      sxProperty: [
        {
          m: "1",
          width: "230",
        },
      ],
      menuItemList: [
        {
          countryList: ["India", "Japan", "France"],
          stateList: ["Gujrat", "Maharastra", "Assam"],
        },
      ],
      adapterDayjs: "AdapterDayjs",
      spacing: "",
      inputFormat: "YYYY-MM-DD",
      renderInput: {
        sx: [
          {
            m: "1",
            width: "230",
          },
        ],
      },
    };

    this.handleEvent = this.handleEvent.bind(this);
    // this.handleFirstName = this.handleFirstName.bind(this);
    // this.handleLastName = this.handleLastName.bind(this);
    this.handleGender = this.handleGender.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    // this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBirthdate = this.handleBirthdate.bind(this);
  }
  componentDidMount() {
    console.log(this.state.menuItemList[0].stateList);
  }

  handleEvent = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value,
    });
  };

  // handleFirstName = (e) => {
  //   this.setState({
  //     firstname: e.target.value,
  //   });
  // };

  // handleLastName = (e) => {
  //   this.setState({
  //     lastname: e.target.value,
  //   });
  // };

  // handlePassword = (e) => {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // };
  // handleConfirmPassword = (e) => {
  //   this.setState({
  //     confirmPassword: e.target.value,
  //   });
  // };

  handleGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  // handleEmail = (e) => {
  //   this.setState({
  //     emailId: e.target.value,
  //   });
  // };

  handleCountry = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  handleState = (e) => {
    this.setState({
      state: e.target.value,
    });
  };

  handleBirthdate = (date) => {
    console.log(moment(dayjs(date).toDate()).format("YYYY-MM-DD"));

    this.setState({
      birthDate: moment(dayjs(date).toDate()).format("YYYY-MM-DD"),

      //birthDate:format(new Date(date),'yyyy-mm-dd'),
    });
  };

  handleSubmit() {
    console.log(this.state.username);
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.gender);
    console.log(this.state.emailId);
    console.log(this.state.password);
    console.log(this.state.confirmPassword);
    console.log(this.state.country);
    console.log(this.state.state);
    console.log(typeof new Date(this.state.birthDate));

    const userRegistrationData = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      birthDate: new Date(this.state.birthDate),
      gender: this.state.gender,
      emailId: this.state.emailId,
      country: this.state.country,
      state: this.state.state,
    };

    console.log(
      "user registragistration data==========>" + userRegistrationData
    );

    axios
      .post("http://localhost:8099/saveUserRegistration", userRegistrationData)
      .then((response) => console.log(response.data));
    console.log("data submited");
  }

  render() {
    return (
      <>
        <div className="form">
          <form>
            <label className="label">UserName</label>

            <TextFieldComponent
              id="username"
              type="text"
              className={this.state.input}
              value={this.state.username}
              variant={this.state.variant}
              size={this.state.size}
              onChange={this.handleEvent}
            ></TextFieldComponent>

            <label className="label">FirstName</label>

            <TextFieldComponent
              id="firstname"
              type="text"
              className={this.state.input}
              value={this.state.firstname}
              variant={this.state.variant}
              size={this.state.size}
              onChange={this.handleEvent}
            ></TextFieldComponent>

            <label className="label">LastName</label>

            <TextFieldComponent
              id="lastname"
              type="text"
              className={this.state.input}
              value={this.state.lastname}
              variant={this.state.variant}
              size={this.state.size}
              onChange={this.handleEvent}
            ></TextFieldComponent>

            <label className="label">Password</label>
            <TextFieldComponent
              id="password"
              type="password"
              className={this.state.input}
              value={this.state.password}
              variant={this.state.variant}
              size={this.state.size}
              onChange={this.handleEvent}
            ></TextFieldComponent>

            <label className="label">Confirm Password</label>
            <TextFieldComponent
              id="confirmPassword"
              type="password"
              className={this.state.input}
              value={this.state.confirmPassword}
              variant={this.state.variant}
              size={this.state.size}
              onChange={this.handleEvent}
            ></TextFieldComponent>

            <label className="label">Email</label>
            <TextFieldComponent
              id="emailId"
              type="text"
              className={this.state.input}
              value={this.state.emailId}
              variant={this.state.variant}
              size={this.state.size}
              onChange={this.handleEvent}
            ></TextFieldComponent>

            <label className="label">Gender</label>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                id="gender"
                value={this.state.value}
                onChange={this.handleGender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />

                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            <label className="label">Country</label>

            <SelectComponent
              sx1={this.state.sxProperty[0]}
              size={this.state.formControlSize}
              id="country"
              lable="select Country"
              labelId="countryLable"
              value={this.state.country}
              onChange={this.handleCountry}
              menuItemList={this.state.menuItemList[0].countryList}
            ></SelectComponent>

            <label className="label">State</label>
            <SelectComponent
              sx1={this.state.sxProperty[0]}
              size={this.state.formControlSize}
              id="state"
              lable="select State"
              labelId="stateLable"
              value={this.state.state}
              onChange={this.handleState}
              menuItemList={this.state.menuItemList[0].stateList}
            ></SelectComponent>

            {/* <DatePickerComponent
           dateAdapter={AdapterDayjs}
           spacing="3"
           label={this.state.label}
           inputFormat={this.state.inputFormat}
           value={this.state.birthDate}
          //  onChange={(date) => this.handleBirthdate(date)}
           renderInput={(params) => (
            <TextField {...params} sx={{ width: "18%" }} />
          )}
            ></DatePickerComponent> */}

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Birthdate"
                  inputFormat="YYYY-MM-DD"
                  value={this.state.birthDate}
                  onChange={(date) => this.handleBirthdate(date)}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "18%" }} />
                  )}
                ></DesktopDatePicker>
              </Stack>
            </LocalizationProvider> */}

            <div>
              <Button
                variant="contained"
                color="success"
                onClick={this.handleSubmit}
                className="btn"
              >
                submit
              </Button>
            </div>
          </form>
          <p>
            Already Registred? <Link to="/signIn">Sign In</Link>
          </p>
        </div>
      </>
    );
  }
}
export default Registration;
