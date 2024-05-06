"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../firebase.js";
import "./home.css";
import Card from "../card/Card.js";

export default function Home() {
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="home1">
      <div className="home">
        <h4>Welcome {user ? user.displayName : "Guest"}!</h4>
        <button className="btn1" onClick={handleLogout}>
          <b>Logout</b>
        </button>
      </div>
      <Card />
    </div>
  );
}
