import "./App.css";
import ForgotPasswordNewStepper from "./component/forgot password/ForgotPasswordNewStepper";

import ForgotPasswordStepper from "./component/forgot password/ForgotPasswordStepper";
import Registration from "./component/registration/Registration";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ForgotPasswordNewStepper/> */}
      {/* <Parent/> */}

      {/* <ForgotPasswordStepper /> */}
      {/* <RegistrationPage /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/signIn" element={<SignIn />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordNewStepper/>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
