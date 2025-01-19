const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Mock function to simulate create_model and start_chat
function createModel() {
  return {
    startChat: () => ({
      sendMessage: async (message) => {
        // Simulating an external API or response generation
        const response = await axios.post('https://deploy-tawny-tau.vercel.app/api/chat', { message });
        return response.data;
      },
    }),
  };
}

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Missing message' });
    }

    // Handle trial message with consistent response format
    if (message.trim().toLowerCase() === 'trial') {
      return res.json({
        response: 'This is a trial message response.',
      });
    }

    // Create a new chat model and start a chat session
    const model = createModel();
    const chatSession = model.startChat();

    // Get the response from the simulated chat session
    const response = await chatSession.sendMessage(message);

    res.json({
      response: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
