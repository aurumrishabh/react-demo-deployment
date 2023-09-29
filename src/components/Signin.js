import React, { useEffect, useState, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import { Button } from 'react-bootstrap';

function Signin(props) {
    const [user, setUser] = useState({});
    const googleRef = useRef(null);

    useEffect(() => {
        const checkAndInitializeGoogleSignIn = async () => {
            // Check if window.google is available
            if (window.google) {
                try {
                    await window.google.accounts.id.initialize({
                        client_id: process.env.REACT_APP_CLIENT_ID,
                        callback: handleCallbackResponse,
                    });

                    window.google.accounts.id.renderButton(document.getElementById('signInDiv'), {
                        theme: 'outline',
                        size: 'large',
                    });

                    window.google.accounts.id.prompt();
                } catch (error) {
                    console.error('Error initializing Google Sign-In:', error);
                }
            } else {
                // If not available, wait for a short duration and check again
                setTimeout(checkAndInitializeGoogleSignIn, 100);
            }
        };

        checkAndInitializeGoogleSignIn();
    }, [user]);

    let handleSignout = (event) => {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    };

    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID token: ', response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted');
    }

    return (
        <>
            <h2>Welcome to WiseX</h2>
            <div id="signInDiv" style={{ position: 'fixed' }}></div>
            {Object.keys(user).length === 0 && (
                <div>
                    <h3>Or</h3>
                    <form onSubmit={(event) => { event.preventDefault(); console.log('submitted'); }}>
                        <input type="email" placeholder="Your mail address" required={true}></input>
                        <Button type="submit">Continue</Button>
                    </form>
                </div>
            )}

            {Object.keys(user).length !== 0 && (
                <>
                    <button onClick={handleSignout}>Sign Out</button>
                    <div>
                        <img src={user.picture} alt="user" />
                        <h3>{user.name}</h3>
                    </div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <form onSubmit={handleSubmit}>
                        <label>phone:</label>
                        <input type="tel" maxLength={10} value={user.phone} required={true} placeholder="enter phone" />
                        <input type="submit"></input>
                    </form>
                </>
            )}
        </>
    );
}

export default Signin;