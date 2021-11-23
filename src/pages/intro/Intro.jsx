import { Link } from 'react-router-dom';
import './intro.scss';

export default function Intro({history}) {

    return (
        <div className="intro">
            <div className="top">
                <div className="wrapper">
                    <Link to="/React-Netflix">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                    </Link>
                    <Link to="/React-Netflix-Test/Login"><button className="loginButton">Sign In</button></Link>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership. Or just look around.</p>
                <div className="buttons">
                    <Link to="/React-Netflix-Test/register">
                        <button>Register</button>
                    </Link>
                    <Link to="/React-Netflix-Test/home">
                        <button>Ready to Watch</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
