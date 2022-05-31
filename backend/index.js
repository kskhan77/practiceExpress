import express from 'express';
import dotenv from 'dotenv'
const port = process.env.PORT || 3000;

const app = express();



app.set('view engine', 'ejs');
app.set('views', './backend/views');

app.get('/', (req, res) => {
    res.render("index")
});
app.use(express.static('./views'))
app.listen(port, () => console.log("listen on port " + port))