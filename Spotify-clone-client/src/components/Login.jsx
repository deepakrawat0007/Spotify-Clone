import { useNavigate } from "react-router-dom";
import Header from "./header";

const Login = () => {
    const navigate = useNavigate()

    const handleNav = (Nav)=>{
        switch(Nav){
            case "Register":
                navigate("/register")
                break;
            case "Login":
                navigate("/home")
                break;
            default:
                break;
        }
    }
    return (
        <>
            <Header />
            <div className="cont">
                <form>
                    <h1>Log in to Spotify</h1>
                    <div className="btns">
                        <button><span><i class="fa-brands fa-google"></i></span>Continue with Google</button>
                        <button><span><i class="fa-brands fa-facebook"></i></span>Continue with Facebook</button>
                        <button><span><i class="fa-brands fa-apple"></i></span>Continue with Apple</button>
                        <button>Continue with Mobile Number</button>
                    </div>
                    <div className="inputs">
                        <div className="field">
                        <label htmlFor="email">Email or Username</label>
                        <input type="email" id="email" placeholder="Email or Username" />
                        </div>
                        <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" />
                        </div>
                        
                        <button id="log">Log in</button>
                        <p>Forgot your password?</p>
                    </div>

                    <div className="last">
                        <p>Don't have an account? <span onClick={()=>handleNav("Register")}> Sign up for Spotify</span></p>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Login;