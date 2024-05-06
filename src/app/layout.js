import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZEKADEMY",
  description: "Made by Bansita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// import React, { useState } from "react";
// import { auth } from "../../firebase";
// // import "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import "./signup.css";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   // const signUpWithEmail = async () => {
//   //   try {
//   //     await auth.createUserWithEmailAndPassword(email, password);
//   //     setError(null);
//   //   } catch (error) {
//   //     setError(error.message);
//   //   }
//   // };

//   const signUpWithGoogle = async () => {
//     try {
//       const provider = new auth.GoogleAuthProvider();
//       await auth.signInWithPopup(provider);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <img
//           className="image1"
//           src="https://www.figma.com/file/d9fciLicdBASlJ3sk2FOWa/image/8196a27019da099d64771f163ae2b0b43b7b18b1"
//           alt="Signup page Image"
//         />

//         <div className="form">
//           <img
//             className="logo"
//             src="https://images-workbench.99static.com/jFNT54rPREWvD8InNQbh1-dSZM8=/99designs-contests-attachments/103/103571/attachment_103571411"
//           />
//           <div className="logotext">
//             <h3>
//               <b>Stay Informed, Stay Ahead:</b>
//             </h3>
//             <h4>
//               {" "}
//               Sign up now to be the first to know about the latest developments,
//               trends, and stories shaping the world.
//             </h4>
//           </div>
//           <div className="signup-container">
//             <h2>Sign up</h2>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* <button onClick={signUpWithEmail}>Sign up with Email</button> */}
//             <button onClick={signUpWithGoogle}>Sign up with Google</button>
//             {error && <div className="error-message">{error}</div>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
