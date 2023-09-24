import { useForm } from "react-hook-form";
import { useAuth } from "../nodeApp/AuthContext";
import NavBar from "../components/NavBar";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signin, isAuthenticated} = useAuth()
    const navigate = useNavigate();
    const handleLogin = handleSubmit((data) => {
        signin(data)
        console.log(data)
    })

    useEffect(() => {
      if (isAuthenticated) {
        console.log("hola")
        navigate("/login");
      }
    }, [isAuthenticated]);
    return (
      <div>
        <NavBar />
        <form
          action="POST"
          className="signup_form"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            type="text"
            className="username-sign"
            name="username"
            {...register("username", { required: true })}
          />
          <input
            type="password"
            className="password"
            name="password"
            {...register("password", { required: true })}
          />
          <button>Loguearse</button>
            <p>No tenes una cuenta?<Link to="/register">Registrate!</Link></p>
        </form>
      </div>
    );
  };
  
  export default Login;
  