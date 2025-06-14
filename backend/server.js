
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.get('/api/songs', (req, res) => {
  res.json([{ id: 1, title: 'Song One' }, { id: 2, title: 'Song Two' }]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
