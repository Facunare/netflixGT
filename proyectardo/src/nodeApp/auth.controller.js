
import Users from './user.model.js'
export const register = async (req,res) => {
   const {username, password} = req.body
   try{
        const user = new Users({
            username, 
            password
        })
        const userSaved = await user.save()
        res.send(userSaved)
   }catch(e){
    console.log(e)
   }




}
export const login = (req,res) => {res.send('login')}
