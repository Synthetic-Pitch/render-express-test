// server.js (ES module version)
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from server');
});

app.get('/api',async (req, res)=>{
    try{
        const resquest = await fetch ('www.themealdb.com/api/json/v1/1/random.php');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        res.json(resquest);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running at https://render-express-test-zvcc.onrender.com/`);
});