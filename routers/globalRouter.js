import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("home"));
globalRouter.get(routes.join, (req, res) => res.send("join"));
globalRouter.get(routes.login, (req, res) => res.send("log in"));
globalRouter.get(routes.logout, (req, res) => res.send("log out"));
globalRouter.get(routes.search, (req, res) => res.send("search"));

export default globalRouter;
