import "./signup.css";

export default function Signup() {
  return (
    <>
      <div className="signbar">
        <img
          className="image"
          src="https://w0.peakpx.com/wallpaper/399/659/HD-wallpaper-walpaper-best-fantasy-world-night-good-egzotic-sea.jpg"
          alt="Signup Page Image"
        />
        <div className="signbarwrapper">
          <h1>LO GO</h1>
          <p className="para">Journey to a trillion miles starts from here!!</p>
          <form className="signupFrom">
            <div>
              <h2>Sign up </h2>
              <p className="para1">Choose a sign up method</p>
              <div className="btn">
                <button className="googlebtn">Sign up with Google</button>
                <button className="emailbtn">Sign up with Email</button>
              </div>
              <p className="para2">Already a user?</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
