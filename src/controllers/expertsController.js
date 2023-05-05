const ExpertSchema = require ("../models/expertSchema")
const userSchema = require("../models/userSchema")


const getExpert = async (req,res) =>{
    try{
        //id => URL === GET
        const id =  req.params.id
        const expert = await ExpertSchema.findById(id)
        
        if(!expert){
            res.status(404).json(
                {message: "Expert nao encontrado"}
            )
        }
        res.json(expert)

    }catch (error){
        console.log(error)
    }
}

const getAllExperts = async (req,res)=> {
    try {
        const experts = await ExpertSchema.find()

        res.json(experts)

    } catch (error){
        console.log(error)
    }

}

const createExpert = async (req,res) => {

    try {
        const newExpert = ExpertSchema(req.body)
        const savedExpert = await newExpert.save()

        res.status(200).json(
            {message: "Expert adicionado com sucesso",
            savedExpert 
            }
        )

    }
    catch(error){
        res.status(500).json({
            message: console.log(error),
        })
    }
}

const updateExpert = async (req,res) => {
    try{
        const findExpert = await ExpertSchema.findById(req.params.id) //recebe todos os parametros atraves do id

        if(findExpert){
            findExpert.avatar = req.body.avatar
            findExpert.name = req.body.name
            findExpert.specialty= req.body.specialty
        }
        const savedExpert = await savedExpert.save() //Se o salvar for bem sucedido, a promessa devolvera o  documento salvo.
    }

    catch(error){
        console.error(error)
    }

}

//const deleteExpert = async(req,res)=> {
    try{
        const expertFound = await ExpertSchema.findById(req.params.id)

        await expertFound.delete()

        res.status(200).json(
            {message: `Expert ${expertFound.id} deletado com sucesso`}
        )
    }

    catch(error){
        res.status(400).json(
            {message: error.message}
        )
    }
//}

module.exports = {
    createExpert,
    updateExpert,
    deleteExpert,
    getAllExperts,
    getExpert
}