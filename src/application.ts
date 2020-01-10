import * as bodyParser from "body-parser";
import * as express from "express";
import routes from './routes';
const swaggerUi = require('swagger-ui-express'); 
const YAML = require('yamljs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.header('Access-Control-Allow-Credentials', 'true');
    if(req.headers['x-forwarded-proto']!='https' && process.env.NODE_ENV === "production"){
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    } else {
        next();
    }
});

// Docs
const swaggerDocument = YAML.load(__dirname +'/docs/docs.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route Setup
app.use('/cars', routes.cars);

export default app;