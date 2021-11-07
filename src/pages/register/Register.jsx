import {useRef, useState} from "react";
import './register.scss';

export default function Register() {
    // 이메일 기입 여부 확인
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const emailRef = useRef();
    const passwordRef = useRef();

    // 이메일 입력 여부를 확인하고 버튼 활성화
    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
        this.props.history.push("../home/Home");
    };
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {
                    !email ? ( // 이메일이 없을 때
                        <div className="input">
                            <input type="email" placeholder="email address" ref={emailRef}/>
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : ( // 이메일이 있을 때
                        <form className="input">
                            <input type="password" placeholder="password" ref={passwordRef}/>
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}
