import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    return res.json({msg:"bifolio server working"})
})


app.listen(4040, () => {
    console.log(`server running at http://localhost:${4040}`);
})