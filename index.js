// index.js is the entry point of Node project

import app from "./app.js";
import dotenv from "dotenv"

dotenv.config() // load environment variables from .env file

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});