const express = require('express');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4002;
const blogRouter = require('./routes/blogRoutes');
const blogCategoryRouter = require('./routes/blogCatRoutes');
const uploadRouter = require('./routes/uploadRoute');
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const morgan=require('morgan');
dbConnect();
const cors = require('cors');

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/blog', blogRouter);
app.use('/api/blogcategory', blogCategoryRouter);
app.use('/api/upload', uploadRouter);




app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Servidor esta corriendo en puerto ${PORT}`);
});