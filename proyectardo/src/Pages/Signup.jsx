import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { signupRequest } from "../api/auth.js";
import {useForm} from 'react-hook-form'

const Signup = ()=>{
    const {register, handleSubmit} = useForm()
    
    return (
        <div>
            <NavBar></NavBar>

            <form action="" className="signup_form" onSubmit={handleSubmit(async (values) => {
                const res = await signupRequest(values)
                console.log(res)
            })}>
                <input type="text" className="username-sign" {...register("username", {required: true})}/>
                <input type="password" className="password1" name="password1" {...register("password1", {required: true})}/>
                <input type="password" className="password2" name="password2" {...register("password2", {required: true})}/>
                <button>
                    Registrarse
                </button>
            </form>
             

        </div>
       
    )
}


export default Signup