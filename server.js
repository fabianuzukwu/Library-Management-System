const express = require("express");


const app = express();

const router = require('./router/bookRouter')

app.use(express.json());

app.use(router)




app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});