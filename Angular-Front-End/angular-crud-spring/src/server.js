const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from http://localhost:4200
app.use(cors({
  origin: 'http://localhost:4200'
}));

// ...other middleware and route handling code...

const PORT = process.env.PORT || 4545;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
