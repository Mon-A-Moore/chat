const express = require('express');
const cors= require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: '*'
});
app.use(cors());
app.use(express.json());


const array = {
	user: [
		{
			userid: 1,
			username: 'GIGA',
			roomid: 123,
			joined: false,
			users: [],
			messages: [],
		},
	],
	list: [
		{
			id: 1,
			name: 'bochki',
			icons: '../../assets/img/test.jpg',
			userscount: 2,
			usersid: [12,34],
			messages: [{"listid":1,"id":33,"messagetext":"mazafucker"},
			{"listid":1,"id":"34","messagetext":"big-bon"}],
			listactive:false,
		},
		{
			id: 2,
			name: 'lol',
			icons: '../../assets/img/test.jpg',
			userscount: 3,
			usersid: [3,5,6],
			messages: [{"listid":2,"id":33,"messagetext":"zikkurat"}],
			listactive:false,
		},
	],
};


/* io.sockets.on('connection', function (socket) {
	console.log(socket.id)
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
}); */



server.listen(4000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер стартанул с портом 4000!');
});
