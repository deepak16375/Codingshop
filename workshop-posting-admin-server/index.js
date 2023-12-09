import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/connect.js';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { Server } from 'socket.io';

import workshopRoutes from './routes/workshopRoutes.js';
import userRoutes from './routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const port = process.env.PORT;
const dbURL = process.env.DBURL;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/workshop', workshopRoutes);
app.use('/user', userRoutes);
app.use(express.static(join(__dirname, 'public')));

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {});
});

connectDb(dbURL);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Chat server running');
});
