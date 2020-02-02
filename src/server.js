import express from 'express';
import path from 'path';

const absolutePath = path.resolve('./public');
const app = express();
const PORT = 80;

app.get('/frontend-index.js', (req, res) => {
    res.sendFile(`${absolutePath}/frontend/frontend-index.js`);
});

app.get('/assets/:imgName', (req, res) => {
    const { imgName } = req.params;

    res.sendFile(`${absolutePath}/frontend/assets/${imgName}`);
});

app.get('/admin21232f297a57a5a743894a0e4a801fc3', (req, res) => {
    res.sendFile(`${absolutePath}/admin/index.html`);
});

app.get('/admin-index.js', (req, res) => {
    res.sendFile(`${absolutePath}/admin/admin-index.js`);
});

app.get('/', (req, res) => {
    res.sendFile(`${absolutePath}/frontend/index.html`);
});

app.listen(PORT, () => console.log('server has been started'));
