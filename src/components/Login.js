import React from 'react';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';
import styled from 'styled-components';


const Background = styled.div`
    background-image: url('/background.jpg');
    background-size: cover;

    h2 {
        margin-top: 0
    }

    nav {
        height: 1000px;
    }
`;

const LoginBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15rem;
    margin-top: -26.5rem;
    width: 30rem;
    height: 53rem;
    overflow: hidden;

    div {
        position: relative;
        height: 100%;
        background: -webkit-linear-gradient(top, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
        background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
        -webkit-transition: opacity 0.1s, -webkit-transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
        transition: opacity 0.1s, -webkit-transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
        transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
        transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25), -webkit-transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
        -webkit-transform: scale(1);
        transform: scale(1);

        h2 {
            text-align: center;
            padding-top: 100px;
        }

        p {
            text-align: center; 
        }
    }
`;

const Toolbar = styled.div`
    text-align: center;
    background: none !important;
    margin-top: 50px;

    button {
        padding: 8px;
    }
`;

const responseGoogle = (response) => {
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('uid', response.profileObj.googleId);
    localStorage.setItem('tokenId', response.tokenId);
    localStorage.setItem('email', response.profileObj.email);

    if(true) {
        Axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + response.accessToken)
        .then(function(aResponse){
            localStorage.setItem('owner', aResponse.data.name);
            localStorage.setItem('picture', aResponse.data.picture);
            window.location=  '/';
        });

    }

    console.log(response);
}

class Login extends React.Component {
    render() {
        return (
            <Background>
                <nav className="login">
                    <LoginBox>
                        <div>
                            <h2>AD-Games!</h2>
                            <p>Sign in to start game tool!</p>
                            <Toolbar>
                                <GoogleLogin
                                    clientId="863983249957-aagtni0gkkc4a0hr1p4lar4rab30dcub.apps.googleusercontent.com"
                                    buttonText="Log In with Google"
                                    className="google"
                                    scope='https://www.googleapis.com/auth/calendar.readonly profile'
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    />
                            </Toolbar>
                            <p className='footnote'>All rights reserved (R)</p>
                        </div>
                    </LoginBox>
                </nav>
            </Background>
        )
    }
}

export default Login;
