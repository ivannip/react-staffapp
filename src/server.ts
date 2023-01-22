import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const PORT = process.env.PORT || "3001";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.SECRET))


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log("example app list to port: "+PORT);
})