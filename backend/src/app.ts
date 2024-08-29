import express from 'express';
import bodyParser from 'body-parser';
import router from "./routes/api";
import cors from 'cors';
import { swaggerUiServer, swaggerUiSetup } from './kernels/api-docs';

const app = express();

app.use(cors())

app.use(bodyParser.json())
app.use(express.json());

app.use("/", router())

// todo: swagger
app.use("/api-docs", swaggerUiServer, swaggerUiSetup);

app.listen(3000, () => {
    console.log(`Server running http://localhost:3000`);
}) 