import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { useAuth } from "../nodeApp/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const {signup, isAuthenticated} = useAuth()
    const navigation = useNavigate()


    const handleSignup = async (values) => {
      await signup(values)
      console.log(values)
    };
    

    
    useEffect(() => {
      if (isAuthenticated) {
        console.log("Redirecting to login page");
        navigation("/login");
      }
    }, [isAuthenticated]);
  return (
    <>
      <NavBar />
    <div className="signupMain">
      <form
        action="POST"
        className="signup_form"
        onSubmit={handleSubmit(handleSignup)}
      >
        <h1>Signup</h1>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
    </>
  );
};

export default Signup;
