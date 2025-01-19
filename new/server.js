const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());


async function sendMessage(message, sessionId) {
    const response = await fetch('https://deploy-tawny-tau.vercel.app/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            session_id: sessionId,
            message: message
        })
    });
    return await response.json();
}

app.post('/send-message', async (req, res) => {
    const { message, sessionId } = req.body;

    if (!message || !sessionId) {
        return res.status(400).json({ error: 'Message and sessionId are required' });
    }

    try {
        const response = await sendMessage(message, sessionId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message to Vercel API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
