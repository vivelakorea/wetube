import app from "./app";

const PORT = 4000;

const hadleListening = () =>
  console.log(`✅ Listening on: https://localhost${PORT}`);

app.listen(PORT, hadleListening);
