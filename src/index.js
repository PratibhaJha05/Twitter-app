import express from 'express';
//  Create a new express app/server object
const app = express();

import dotenv from 'dotenv';
dotenv.config();

function mid1(req,res,next) {
    console.log('mid1', next);
    next();
}
function mid2(req,res,next) {
    console.log('mid2');
    next();
}
function mid3(req,res,next) {
    console.log('mid3');
    next();
}

app.use(express.json());

app.get('/ping', [mid1, mid2, mid3], (req,res) => {
    return res.json({
        message: 'pong'
    })
       
}); //what to do if someone makes a GET request to the /ping endpoint

app.post('/hello', [mid1, mid3], (req,res) => {
    return res.json({
        message : 'world'
    })
}); //what to do if someone makes a POST request to the /hello endpoint

// Define a PORT and attach it to the express app
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});