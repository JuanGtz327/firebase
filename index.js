const express = require('express');
const firebase = require('firebase');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

firebase.initializeApp({
	apiKey: "AIzaSyCr4PUsPdxSmB1Af2kCe2sLKCwE-gcJvps",
	projectId:"sistemasecuacionesjuangtz"
});

app.set('views',path.join(__dirname,'views'));
app.engine('hbs',hbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'),'layouts'),
	extname: 'hbs'
}));
app.set('view engine','hbs');

app.use(express.urlencoded({extended:false}));

app.use(require('./routes/routes.js'))

app.listen(process.env.PORT || 4000, ()=>{
	console.log('server listening on port 4000');
});