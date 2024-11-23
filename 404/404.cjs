const express = require('express');
const app = express();

app.get('/',(req,res) => {
res.send('Hello');
});

app.use((req,res,next) => {
	res.status(404);


if (req.accepts('html')) {
	res.render('404', { url: req.url});
	return;
}

if (req.accepts('json')) {
	res.json({error: 'Not Found'});
	return;

}

res.type('txt').send('Not found');

});

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});


