import Header from "./header";
import { useNavigate } from "react-router-dom";
import "./page.css";

const Register = ()=>{
    const navigate = useNavigate()

    const handleNav = (Nav)=>{
        switch(Nav){
            case "Register":
                navigate("/register")
                break;
            case "Login":
                navigate("/")
                break;
            default:
                break;
        }
    }
    return(
        <>
        <Header/>
        <div className="cont">
                <form>
                    <h1>Sign up for free to start listening.</h1>
                    <div className="btns">
                    <button><span><i class="fa-brands fa-google"></i></span>Continue with Google</button>
                        <button id="lastbtn"><span><i class="fa-brands fa-facebook"></i></span>Continue with Facebook</button>
                    </div>
                    <div className="inputs">
                        <div className="field">
                        <label htmlFor="email">What's Your Email?</label>
                        <input type="email" id="email" placeholder="Enter Your Email." />
                        </div>
                        <div className="field">
                        <label htmlFor="password">Create Password</label>
                        <input type="password" id="password" placeholder="Create a password." />
                        </div>
                        <div className="field">
                        <label htmlFor="profile">What should we call you?</label>
                        <input type="text" id="profile" placeholder="Enter a profile name." />
                        </div>
                        <div className="field">
                            <label htmlFor="dob">What's your date of birth?</label>
                            <input type={"date"} id="dob"/>
                        </div>
                        <div className="text">
                            <input type={"checkbox"} id="ad"/>
                            <label htmlFor="ad" >I would prefer not to receive marketing messages from Spotify</label>
                        </div>
                        <div className="text">

                        <input type="checkbox" id="ad"/>
                            <label htmlFor="ad" >Share my registration data with Spotify's content providers for<br></br> marketing purposes.</label>
                        </div>
                        
                       <div className="policy">
                        <p>By clicking on sign-up, you agree to Spotify's<span> Terms and Conditions of Use.</span></p><br></br><p>To learn more about how Spotify collects, uses, shares and protects your personal data, <br></br>please see <span>Spotify's Privacy Policy.</span></p>
                        </div> 
                        
                        <button id="log" style={{marginBottom:"5%"}}>Sign Up</button>
                    </div>

                    <div className="last">
                        <p>Have an account? <span onClick={()=>handleNav("Login")}> Log in</span></p>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Register;