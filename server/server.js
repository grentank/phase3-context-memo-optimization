const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Post } = require('./db/models');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/posts', async (req, res) => {
  const { input } = req.body;
  const newPost = await Post.create({ title: input });
  res.json(newPost);
});

app.get('/api/posts', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
