const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})


// PORT=8080
// MONGO_CONN="mongodb+srv://m8117547:Tanveer123@cluster0.rprj0.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0"
// JWT_SECRET="0C3ssktzDz"


// Tanveer123