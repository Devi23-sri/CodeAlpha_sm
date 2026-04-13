const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Fake DB
let users = [];
let posts = [];

// Register
app.post('/api/register', (req, res) => {
  users.push(req.body);
  res.json({ message: "Registered" });
});

// Login
app.post('/api/login', (req, res) => {
  const user = users.find(u =>
    u.email === req.body.email &&
    u.password === req.body.password
  );

  if (user) res.json(user);
  else res.status(401).json({ message: "Invalid login" });
});

// Create Post
app.post('/api/posts', (req, res) => {
  const post = {
    id: Date.now(),
    user: req.body.user,
    content: req.body.content,
    likes: 0,
    shares: 0,
    comments: []
  };
  posts.push(post);
  res.json(post);
});

// Get Posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Like
app.post('/api/posts/:id/like', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post.likes++;
  res.json(post);
});

// Share
app.post('/api/posts/:id/share', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post.shares++;
  res.json(post);
});

// Comment
app.post('/api/posts/:id/comment', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post.comments.push(req.body.comment);
  res.json(post);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
