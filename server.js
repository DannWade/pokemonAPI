const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 8000
const pokemon = {
    'pikachu' : {
        'region':'kanto',
        'type':'electric',
        'attack':'thunder shock'
    },
    'totadile':{
        'region':'johto',
        'type':'water',
        'attack':'bubble burst',
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/:pokemonName',(req,res)=>{
    const pokemonName = req.params.pokemonName
    if(pokemon[pokemonName]){
        res.json(pokemon[pokemonName])
    } else{
        res.json('does not exist')
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`server is running on ${PORT}`)
})