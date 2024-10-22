// backend/server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

// Buat aplikasi Express
const app = express();

// Middleware untuk menangani CORS
app.use(cors());

// Buat HTTP server dari Express app
const server = http.createServer(app);

// Setup Socket.io untuk komunikasi realtime
const io = new Server(server, {
    cors: {
        origin: '*', // Izinkan semua origin (ganti sesuai kebutuhan)
        methods: ['GET', 'POST']
    }
});

// Ketika ada koneksi baru ke server
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Mendengarkan event 'chat message' dari client
    socket.on('chat message', (msg) => {
        console.log('Message:', msg);

        // Kirim pesan ke semua client yang terhubung
        io.emit('chat message', msg);
    });

    // Ketika user disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Jalankan server di port 3001
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
