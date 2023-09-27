import React, {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import {Button} from "react-bootstrap";

function Signin(props) {

    const [user, setUser] = useState({});
    function handleCallbackResponse (response){
        console.log("Encoded JWT ID token: ", response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    }

    useEffect(() => {
        /* global google */

        if(Object.keys(user).length === 0){
            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_CLIENT_ID,
                callback: handleCallbackResponse
            });

            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                {theme: "outline", size: "large", }
            );
            google.accounts.id.prompt();
        }

    }, [user]);

    let handleSignout = (event) =>{
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("submitted");
    }

    return (
        <>
                <h2>Welcome to WiseX</h2>
                <div id="signInDiv" style={{position: "fixed"}}></div>
                {
                    Object.keys(user).length === 0 &&
                    <div>
                        <h3>Or</h3>
                        <form onSubmit={(event)=>{event.preventDefault(); console.log("submitted");}}>
                            <input type="email" placeholder="Your mail address" required={true}></input>
                            <Button type="submit">Continue</Button>
                        </form>
                    </div>
                }

                {
                    Object.keys(user).length !== 0  &&
                    <>
                        <button onClick={handleSignout}>Sign Out</button>
                        <div>
                            <img src={user.picture}/>
                            <h3>{user.name}</h3>
                        </div>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <form onSubmit={handleSubmit}>
                            <label>phone:</label>
                            <input type="tel" maxLength={10} value={user.phone} required={true} placeholder="enter phone"/>
                            <input type="submit"></input>
                        </form>
                    </>
                }

        </>
    );
}

export default Signin;