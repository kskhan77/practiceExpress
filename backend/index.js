import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
import usersRoutes from './routes/users.js';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.set('view engine', 'ejs');
app.set('views', './backend/views');

app.get('/', (req, res) => {
    res.render("pages/index")
});
app.use(express.static('./views'))
app.listen(port, () => console.log("listen on port " + port))