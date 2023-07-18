const express = require('express');
const app = express();
const port = 8080;

app.use(express.json())

app.listen(
    port,
    () => console.log(`it's alive on http://localhost:${port}`)
);
app.get('/cartwheeling', (req, res) =>{
    res.status(200).send({
        cartwheeling:'🤸',
        size : 'large'
    })
});
app.post('/cartwheeling/:id', (req, res) =>{

    const{ id } = req.params;
    const{ logo } = req.body;


    if(!logo){
        res.status(418).send({ message:'We need a cartwheeled person!'})
    }
    res.send({
        cartwheeling:`🤸 with your ${logo} and ID of ${id}`,
    })

});
