
const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000;

// Routes
app.get("/api/users",(req,res) => {
   return res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ error: "User not found" });
    }
});


app.listen(PORT, () => console.log(`server started at Port ${PORT}`))