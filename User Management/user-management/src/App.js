import "./App.css";

import ForgotPasswordStepper from "./component/forgot password/ForgotPasswordStepper";
import Registration from "./component/registration/Registration";
import SignIn from "./component/signIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ForgotPasswordNewStepper/> */}
      {/* <Parent/> */}

      <ForgotPasswordStepper />
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/signIn" element={<SignIn />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
