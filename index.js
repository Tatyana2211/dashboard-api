import express from "express";

const app = express();
const port = 8000;

app.get('/hello', (req, res) => {
	res.send('Привет!');
})

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});