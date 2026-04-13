let user = JSON.parse(localStorage.getItem("user"));

// Load posts
function loadPosts() {
  fetch('/api/posts')
    .then(res => res.json())
    .then(data => {
      const feed = document.getElementById("feed");
      if (!feed) return;

      feed.innerHTML = "";

      data.forEach(p => {
        feed.innerHTML += `
          <div class="post">
            <h4>${p.user}</h4>
            <p>${p.content}</p>
            <p>👍 ${p.likes} | 🔁 ${p.shares}</p>

            <button onclick="likePost(${p.id})">Like</button>
            <button onclick="sharePost(${p.id})">Share</button>

            <input id="c${p.id}" placeholder="comment">
            <button onclick="commentPost(${p.id})">Comment</button>

            <ul>
              ${p.comments.map(c => `<li>${c}</li>`).join("")}
            </ul>
          </div>
        `;
      });
    });
}

// Create Post
function createPost() {
  fetch('/api/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: user.email,
      content: document.getElementById("postContent").value
    })
  }).then(() => loadPosts());
}

// Like
function likePost(id) {
  fetch(`/api/posts/${id}/like`, { method: 'POST' })
    .then(() => loadPosts());
}

// Share
function sharePost(id) {
  fetch(`/api/posts/${id}/share`, { method: 'POST' })
    .then(() => loadPosts());
}

// Comment
function commentPost(id) {
  const text = document.getElementById("c" + id).value;

  fetch(`/api/posts/${id}/comment`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ comment: text })
  }).then(() => loadPosts());
}

// Register
function register() {
  fetch('/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  }).then(res => res.json())
    .then(data => alert(data.message));
}

// Login
function login() {
  fetch('/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Login successful");
    window.location = "index.html";
  });
}

loadPosts();
