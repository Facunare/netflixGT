export const validateSchema = (schema) => (req,res,next)=> {
    try{

        schema.parse(req.body)
        next()

    }catch(e){
        return res.status(400).json({error: e.errors.map(error => error.message)})
    }
}