import "./db.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`✅ listening on: http://localhost:${PORT}`)
);
