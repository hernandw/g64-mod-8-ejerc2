import pool from '../config/db.js'



const addBicyQuery = async (datos) => {
    try {
        const querys = {
        text: 'INSERT INTO bicicletas (id, marca, modelo, precio) VALUES ($1, $2, $3, $4) RETURNING *',
        values: datos
    }

        const res = await pool.query(querys)
        return res.rows
    } catch (error) {
        console.log(error)
    }
}

export {
    addBicyQuery
}