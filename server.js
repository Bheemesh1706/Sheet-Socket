const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

const PORT = 3001;
io.on("connection", (socket) => {
    console.log("Socket connection established");
    socket.on("send-value",(value)=>{
        console.log(value);
        socket.broadcast.emit("new-val",value);
    })
   
  });

http.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });