const express = require ('express')
const criando = express()
const path = require ('path')

// Criando a variavel da rota
const port = 5000

// referência da pasta da rota
const basePath = path.join(__dirname, 'pagina')

//Parte do css
app.use(express.static('public'))

// reservando a referência da página html
criando.get('/', (req , res) => {
    res.sendFile (`${basePath}/index.html`)
})

// reservando a referência da página 2
criando.get('/a', (req , res) =>{
    res.sendFile (`${basePath}/rota.html`)
})

// mostrando que a rota esta funcionando
criando.listen(port, () =>{
    console.log(`criando está rodando na porta ${port}`)
})