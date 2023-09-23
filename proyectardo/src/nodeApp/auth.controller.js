
import Users from './user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from './jwt.js'
export const register = async (req,res) => {
   const {username, password} = req.body
   try{
    const hash = await bcrypt.hash(password, 10)
        const user = new Users({
            username, 
            password: hash
        })
        const userSaved = await user.save()
        const token = await createAccessToken({id: userSaved._id})
        
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            password: userSaved.password
        })
        res.send(userSaved)
   }catch(e){
    console.log(e)
   }
}

export const login = async (req,res) => {
    const {username, password} = req.body
    try{

     const usuario = await Users.findOne({username})
     if(!usuario) return res.status(400).json({message: "Not founded"})

     const isMatch = await bcrypt.compare(password, usuario.password)
     if(!isMatch) return res.status(400).json({message: "Incorrect"})

        const token = await createAccessToken({id: usuario._id})
        
        res.cookie('token', token)
        res.json({
            id: usuario._id,
            username: usuario.username,
            password: usuario.password
        })
        res.send(usuario)
    }catch(e){
     console.log(e)
    }
 }

 export const logout = (req,res)=>{
    res.cookie('token',"",{
        expires: new Date(0)
    })
    return res.sendStatus(200)
 }

 export const addFavorite = async (req,res)=>{
    const userFound = await Users.findById(req.user.id)
    if(!userFound) return res.status(401).json({message: "User not found"})
    return res.json({
        id: userFound._id,
        username: usuario.username,
        password: usuario.password
    })
 }