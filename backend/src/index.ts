import express from 'express';
import routeReducer from '@routes/reducer';
import middlewareReducer from '@middlewares/reducer';

const app: express.Application = express();

middlewareReducer(app);
routeReducer(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${process.env.PORT || 3000}`);
});

export default app;
