require("dotenv").config();
const express = require("express");
const mongoose = require("./db/db");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/auth", require("./routes/auth"));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
