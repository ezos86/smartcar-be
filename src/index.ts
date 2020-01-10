import app from "./application";
import * as createMiddleware from 'swagger-express-middleware';
const serverPort = process.env.PORT || 8001;

createMiddleware(__dirname + '/docs/docs.yaml', app, (error, middleware) => {
    //console.log('wtf', middleware.validateRequest);
    if(error){
        throw error;
    }
    app.use(middleware.metadata());
    app.use(middleware.parseRequest());
    app.use(middleware.validateRequest());

    app.use(function(error, req, res, next) {
        res.status(error.status);
        res.send({message: error.message});
    });

    app.listen(serverPort, () => {
        console.log(`server is listening on ${serverPort}`);
    });
});


