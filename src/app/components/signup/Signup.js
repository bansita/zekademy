// Signup.js
"use client";
import React, { useState, useEffect } from "react";
import app from "../../firebase"; // Import auth from firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";

import Home from "../home/Home";
import "./signup.css";

export default function Signup() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signUpWithEmail = async () => {
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to home page after successful signup
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signUpWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider); // Use signInWithPopup method
      router.push("/"); // Redirect to home page after successful signup
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <div className="container">
          <img
            className="image1"
            src="https://www.figma.com/file/d9fciLicdBASlJ3sk2FOWa/image/8196a27019da099d64771f163ae2b0b43b7b18b1"
            alt="Signup page Image"
          />
          <div className="form">
            <div className="logotext">
              <h3>
                <b>Stay Informed, Stay Ahead:</b>
              </h3>
              <h4> Journey to a trillion miles starts from here!!</h4>
            </div>

            <div className="signup-container">
              <br />
              <br />
              <h2>Sign up</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={signUpWithEmail}>Sign up with Email</button>
              <button onClick={signUpWithGoogle}>Sign up with Google</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
