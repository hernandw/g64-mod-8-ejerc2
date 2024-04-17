import { addBicyQuery } from "../queries/consultas.js";


const addBicy = async (req, res) => {
    try {
        const { id, marca, modelo, precio } = req.body
        const datos = [id, marca, modelo, precio]
        const resul = await addBicyQuery(datos)
        res.json(resul)
    } catch (error) {
        console.log(error)
    }
}


export { addBicy }