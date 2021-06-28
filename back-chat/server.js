const express = require('express');
const cors= require('cors');
const app = express();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'https://example.com',
    methods: ['GET', 'POST'],
  },
});
app.use(cors());
app.use(express.json());

const rooms = new Map();

app.get('/rooms',(req,res)=>{
	res.json(rooms);
});

app.post('/rooms',(req,res)=>{
	const{UserName}=req.body;
	if(!rooms.has()) res.send();
	{
		rooms.set(userName)
	}
});

io.on('connection', (socketIO) => {
  console.log('user connected', socketIO.id);
});

httpServer.listen(4000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер стартанул с портом 4000!');
});
