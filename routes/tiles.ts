import express from "express"
import client from "../sanityClient"

const router = express.Router()

router.get("/", async (_, res) => {
  try {
    const tiles = await client.fetch(`*[_type == "tile"]{
      title,
      description,
      slug,
      link,
      tileType,
      colorTint
    }`)
    res.json(tiles)
  } catch (err) {
    console.error("Failed to fetch tiles:", err)
    res.status(500).json({ error: "Failed to load tiles" })
  }
})

export default router