import { pool } from "../data/db.js";

export const getAdmin = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tbladmin");

    res.json(rows);
  } catch (error) {
    res.status(500).json({message:"error"})
  }
};

export const getAdminId = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tbladmin  WHERE id= ? ", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({ message: "dato no encontrado" });

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({message:"error"})
  }
};

export const postAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO tbladmin(nombre,apellido) VALUES (?, ?)",
      [nombre, apellido]
    );
    console.log(rows);
    res.send(`Añadido correctamente⭐ ${(nombre, apellido)}`);
  } catch (error) {
    res.status(500).json({message:"error"})
  }
};

export const putAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido } = req.body;

    const [result] = await pool.query(
      "UPDATE tbladmin SET nombre= ? , apellido= ?  WHERE id= ? ",
      [nombre, apellido, id]
    );
    console.log(result);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "admin not found" });
      res.send("Actualizado correctamente💵");
  } catch (error) {
    res.status(500).json({message:"error"})
  }
  
};

export const deleteAdmin = async (req, res) => {
  try{
    const [result]=await pool.query("DELETE  FROM tbladmin WHERE id= ?",[req.params.id])
    
    if(result.affectedRows <= 0) return res.status(404).json({message:"admin not found"})

    res.sendStatus(204)

  }catch(error){
    res.status(500).json({message:"error"})
  }
};
