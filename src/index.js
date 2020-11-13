const express = require('express');

const page = express();
const jack = express();
const jane = express();

page.get('/', showPage);
page.listen(3000, () => {
	console.log('marry is running on port 8000')
});

// CORS
jack.use(require('cors')());
jack.post('/', postHandler)
jack.listen(8080, () => {
	console.log('jack is running on port 9000')
});

jane.post('/', postHandler)
jane.listen(8081, () => {
	console.log('jane is running on port 7000')
})

function postHandler (req, res) {
	res.send({ 'result': 'success' })
}

function showPage (req, res) {
	res.sendFile('./page.html', {
		root: __dirname
	})
}