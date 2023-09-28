import { useForm } from "react-hook-form";
import { useAuth } from "../nodeApp/AuthContext";
import NavBar from "../components/NavBar";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signin, isAuthenticated} = useAuth()
    const navigate = useNavigate();
    const favoriteMovies = [];
    const handleLogin = handleSubmit((data) => {
      data.favoriteMovies = favoriteMovies;
        signin(data)
    })

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated]);
    return (
      <>
      <NavBar />
      <div className="loginMain">
        <form action="POST" className="signup_form" onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
       <div>
        
       <label htmlFor="username">Nombre de usuario: </label>
          <input
            type="text"
            className="username-sign"
            name="username"
            {...register("username", { required: true })}
          />
       </div>
          <div>

          <label htmlFor="password">Contraseña: </label>
            <input
              type="password"
              className="password"
              name="password"
              {...register("password", { required: true })}
            />
          </div>
          <button>Loguearse</button>
            <p>No tenes una cuenta?<Link to="/register">Registrate!</Link></p>
        </form>
      </div>
      </>
    );
  };
  
  export default Login;
  