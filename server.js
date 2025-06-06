const express = require('express');
const path = require('path');
const app = express();
const PORT = 5050;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 TrendSpark dev server running at http://localhost:${PORT}`);
});
