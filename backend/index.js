const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//Routes
const authRoutes = require('./routes/authRoutes')



app.use(cors());
app.use(express.json());

app.use('/', authRoutes);



// Home route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






//Database connections

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB on port 27017'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
