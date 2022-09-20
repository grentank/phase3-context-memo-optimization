const express = require('express');
const { Post } = require('../db/models');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    const { input } = req.body;
    const newPost = await Post.create({ title: input });
    res.json(newPost);
  })
  .get(async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
  });

router.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
