import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;


app.get('/',(req,res)=>{
    res.send('hola mundo,soy su servidor de confianza');
})

app.listen(PORT, ()=>console.log(`server listening in port ${PORT}`));