import express, { application, Application } from 'express';
import routes from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors'


const app: Application = express();

// Middleware

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

export default app;