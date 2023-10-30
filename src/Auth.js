import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //регистрация
    const handleSignUp = async() => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    //авторизация
    const handleSignIn = async() => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    //выход из учетки
    const handleSignOut = async() => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {firebase.auth().currentUser ? (
                <div>
                    <p>Привет, {firebase.auth().currentUser.email}</p>
                    <button onClick={handleSignOut}>Выйти</button>
                </div>
            ) : (
                <div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignUp}>Зарегистрироваться</button>
                    <button onClick={handleSignIn}>Войти</button>
                </div>
            )}
        </div>
    );
};

export default Auth;
