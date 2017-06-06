express = require('express');
app = express();

app.get('/', (req, res) => {
	res.send('hello')
});

app.listen(80, () => {
	console.log('Server is listening');
});
