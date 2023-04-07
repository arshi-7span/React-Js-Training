import { TextField ,Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function SignIn() {
  return (
   <>
   <div className="wrapper">
	<div className="logo">
		<img src="\assests\images\userLogo.png" alt="SignIn"/>
	</div>
	<div className="title">
		<p>Sign in</p>
	</div>
	<div className="form">
		<div className="input_field">

			<label>Username or email address</label>
      <TextField id="username"  variant="outlined"  size="small" fullWidth/>
			{/* <input type="text" className="input"/> */}
		</div>
		<div className="input_field">
			<label>Password</label>
			{/* <input type="password" className="input"/> */}
      <TextField id="password"  variant="outlined"  size="small" fullWidth/>
    
			<a href="#" className="forgot">Forgot password?</a>
		</div>
		<div>
			{/* <input type="submit" value="Sign in" className="sign_btn"/> */}
      <Button variant="contained" className="sign_btn" size="small">Sign in</Button>
		</div>
	</div>
	<div className="create_act">
	
		<p>New User? <Link to="/registration">Register</Link></p>
	</div>
	<div className="footer">
		<ul>
			<li><a href="#">Terms</a></li>
			<li><a href="#">Privacy</a></li>
			<li><a href="#">Security</a></li>
			<li><a href="#">Contact </a></li>
		</ul>
	</div> 
</div>	
   </>
  )
}