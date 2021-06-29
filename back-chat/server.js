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

import E from './events';
import { readFile,updateFile } from 'fs';





httpServer.listen(4000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер стартанул с портом 4000!');
});
