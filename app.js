const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port

app.get('/categories', (req, res) => {
  const categories = [
    {
      category_id: '1000',
      category: 'All',
    },
    {
      category_id: '1001',
      category: 'Travel',
    },
    {
      category_id: '1003',
      category: 'Technology',
    },
    {
      category_id: '1005',
      category: 'Drawing',
    },
  ];

  const response = {
    status: true,
    message: 'successfully fetched all the categories',
    data: categories,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
