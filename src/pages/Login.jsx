import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import {  useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const {email,password} = Object.fromEntries(data.entries());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
            console.log("success");
            navigate("/blog/write");
            
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" name="email" />
        <input type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
