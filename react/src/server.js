const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define route to handle form submission
app.post('/submit-form', (req, res) => {
  // Extract form data from request body
  const { place, wasteFood, amount, contact } = req.body;

  // Create an object with form data
  const formData = {
    place,
    wasteFood,
    amount,
    contact
  };

  // Convert the object to JSON string
  const jsonData = JSON.stringify(formData);

  // Write the JSON data to a file
  fs.appendFile('formData.json', jsonData + '\n', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).json({ message: 'Error saving form data' });
    } else {
      console.log('Form data saved successfully');
      res.json({ message: 'Form data saved successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
