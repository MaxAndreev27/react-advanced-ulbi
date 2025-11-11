// Вам потрібно буде додати "express": "^4.18.2" до ваших dependencies у package.json
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Обслуговування статичних файлів з папки 'dist' (або 'build' - залежить від вашого webpack)
app.use(express.static(path.join(__dirname, 'dist')));

// Для всіх інших GET-запитів надсилати index.html (для React Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
