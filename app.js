const express = require('express');

const expressEjsLayouts = require('express-ejs-layouts');
const app = express();

// Static files
app.use(express.static('/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));

app.set('view engine', 'ejs');

// Naviagtion
app.get('/', (req, res) => {
	res.render('pages/index');
});

// Listen on port 3000
app.listen(process.env.PORT || 3000, () => {
	console.log(
		`Your app is running on http://localhost:${process.env.PORT || 3000}/`
	);
});
