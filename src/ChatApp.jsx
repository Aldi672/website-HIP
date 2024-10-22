// src/ChatApp.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Koneksi ke backend server Socket.io
const socket = io('http://localhost:3001'); // Pastikan port sama dengan backend

const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Menerima pesan dari server
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Cleanup saat komponen unmount
        return () => {
            socket.off('chat message');
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        // Kirim pesan ke server
        socket.emit('chat message', message);
        setMessage('');
    };

    return (
        <div>
            <h2>Realtime Chat</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <form onSubmit={sendMessage}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatApp;
