const mongoose = require('mongoose');
const Blog = require('./models/Blog');
require('dotenv').config();
const cors = require('cors');  

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));


const corsOptions = {
  origin: '*', 
  methods: 'GET', 
  allowedHeaders: 'Content-Type,Authorization', 
};

module.exports = async (req, res) => {

  cors(corsOptions)(req, res, async () => {
    if (req.method === 'GET') {
      try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};
