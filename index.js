const express = require ('express')
const app = express()

const bukuRouter = require('./routers/bukuRouter')
app.use(express.json())
app.use(
    express.urlencoded({extended:true})
);

app.use('/', bukuRouter);

app.use((err,req,res,next)=> {
    const statusCode = err.statusCode|| 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message})

})

app.get('/', function(req, res){
    res.send ('Hello Mahasiswa SM1 Selamat Belajar Expres js')
})

app.listen(5000,function(){
    console.log('server berjalan lancar uhuyy')
})
