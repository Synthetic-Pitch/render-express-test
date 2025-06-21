// server.js (ES module version)
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello from server');
});

app.get('/api',(req, res)=>{
    res.json({
        message:"Hello from JSON Server"
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});