const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Allow cross-origin requests from frontend

// Endpoint to handle Buddy request submission
app.post('/api/buddy', (req, res) => {
  const { name, event, location, datetime } = req.body;
  console.log('Received Buddy request:', { name, event, location, datetime });

  // Here you can implement further logic (e.g., saving the data to a database)
  
  res.json({ message: 'Buddy request submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
