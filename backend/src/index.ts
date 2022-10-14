import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './server';

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});

const app = express();
app.use(cors());

app.use('/', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
}));

app.listen(3600, () => {
    console.log("listening to port 3600");
});