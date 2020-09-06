import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import globalRouter from "./routers/globalRouter";
import helmet from "helmet";
import { localsMiddleware } from "./middlewares";
import morgan from "morgan";
import routes from "./routes.js";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // '/users'에 userRouter를 넣는다
app.use(routes.videos, videoRouter);

export default app;
