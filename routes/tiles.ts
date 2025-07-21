import express from 'express';
import { sanityClient } from '../sanityClient';

const router = express.Router();

router.get('/tiles', async (_req, res) => {
  try {
    const query = `*[_type == "tile"] | order(orderRank) {
      title,
      description,
      slug,
      link,
      tileType,
      colorTint
    }`;
    const tiles = await sanityClient.fetch(query);
    res.json(tiles);
  } catch (err) {
    console.error('Error fetching tiles:', err);
    res.status(500).json({ error: 'Failed to fetch tiles' });
  }
});

export default router;