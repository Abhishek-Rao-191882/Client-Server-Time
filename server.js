const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000


http.listen(PORT, ()=>{
    console.log(`Linstening on Port ${PORT} `)
})


// connecting static files such as css and js to node js
app.use(express.static(__dirname + '/public/'))

// connecting html to node js
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

// socket

const io = require('socket.io')(http)

io.on("connection", (socket) => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = "Date: "+date+' Time: '+time;
        console.log(dateTime)

        socket.emit("dateTime", dateTime);
  });