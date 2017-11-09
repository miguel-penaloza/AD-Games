import React from 'react';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';

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
            window.location.replace("http://localhost:3001");
        });

    }

    console.log(response);
}

class Login extends React.Component {
    render() {
        return (
            <nav className="login">
                <h2>AD-Games!</h2>
                <p>Sign in to start game tool!</p>
                <div>
                    <GoogleLogin
                        clientId="863983249957-aagtni0gkkc4a0hr1p4lar4rab30dcub.apps.googleusercontent.com"
                        buttonText="Log In with Google"
                        className="google"
                        scope='https://www.googleapis.com/auth/calendar.readonly profile'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        />
                </div>
                <p className='footnote'>All rights reserved (R)</p>
            </nav>
        )
    }
}

export default Login;
