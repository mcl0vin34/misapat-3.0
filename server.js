const express = require('express');
const path = require('path');
const app = express();

// Укажите путь к билду вашего Cocos Creator проекта
const buildPath = path.join(__dirname, 'build/web');

// Обслуживайте статические файлы из папки билда
app.use(express.static(buildPath));

// Обрабатывайте все маршруты и перенаправляйте их на index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Настройка порта сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
