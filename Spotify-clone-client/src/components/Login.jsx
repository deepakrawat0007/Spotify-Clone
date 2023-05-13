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
                        <button>Continue with Google</button>
                        <button>Continue with Facebook</button>
                        <button>Continue with Apple</button>
                        <button>Continue with Mobile Number</button>
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">Email or Username</label>
                        <input id="email" placeholder="Email or Username" />
                        <label htmlFor="password">Password</label>
                        <input id="password" placeholder="Password" />
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