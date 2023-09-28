import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "username is required"
    }),
    password: z.string({
        required_error: "password is required"
    }).min(6,{
        message: "Password must be at least 6 characeters"
    })
})

export const loginSchema = z.object({
    username: z.string({
        required_error: "username is required"
    }),
    password: z.string({
        required_error: "password is required"
    }).min(6, {
        message: "Password must be at least 6 characters"
    }),
    favoriteMovies: z.array(z.string())
})