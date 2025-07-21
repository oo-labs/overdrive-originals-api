import express from 'express';
import cors from 'cors';
import tilesRoute from './routes/tiles';

const app = express();
const PORT = 3010;

app.use(cors());
app.use('/api', tilesRoute);

app.get('/', (_req, res) => {
  res.send('Overdrive Originals API is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Overdrive Originals API is live at http://localhost:${PORT}`);
});