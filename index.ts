import express from "express"
import cors from "cors"
import tilesRouter from "./routes/tiles"

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use("/api/tiles", tilesRouter)

app.get("/", (_, res) => {
  res.send("Overdrive Originals API is running.")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})