# CodeAlpha_sm
Mini Social Media Platform – Project Description
📌 Introduction

The Mini Social Media Platform is a web-based application designed to simulate the core functionalities of modern social networking systems. It allows users to create accounts, share posts, interact with other users through likes, comments, and shares, and manage their profiles.

The application is developed using:

Frontend: HTML, CSS, JavaScript
Backend: Express.js (Node.js)
Data Handling: In-memory storage (can be extended to databases)
🎯 Objectives
To build a simple social networking platform
To understand full-stack development concepts
To implement user interaction features like posts, likes, and comments
To demonstrate client-server communication using APIs
⚙️ Key Features
1. 👤 User Registration & Login
Users can create new accounts
Existing users can log in using credentials
Basic authentication is implemented
2. 🧑‍💼 User Profile
Displays user information (email/username)
Allows users to view their identity within the system
3. 📝 Create Post
Users can write and publish text-based posts
Posts are displayed on the main feed
4. 👍 Like System
Users can like posts
Like count increases dynamically
5. 💬 Comment System
Users can add comments to posts
Comments are displayed under each post
6. 🔁 Share Feature
Users can share posts
Share count is maintained for each post
🏗️ System Architecture
Frontend:
Handles user interface and interactions
Uses JavaScript (Fetch API) to communicate with backend
Backend:
Built using Express.js
Provides RESTful APIs:
/api/register
/api/login
/api/posts
/api/posts/:id/like
/api/posts/:id/comment
/api/posts/:id/share
🗄️ Database Design (Conceptual)

(Currently implemented using arrays but can be extended)

Users Table:
user_id
email
password
Posts Table:
post_id
user
content
likes
shares
Comments Table:
comment_id
post_id
comment_text
🔄 Working Flow
User registers or logs in
User enters the social feed
User creates a post
Posts are displayed to all users
Other users can:
Like the post
Comment on the post
Share the post
All interactions update dynamically
🚧 Limitations
No real database (data lost after server restart)
No secure authentication (passwords not encrypted)
No media upload (images/videos)
Basic UI design
🚀 Future Enhancements
Integration with MongoDB/MySQL
Secure authentication using JWT
Image and video uploads
Real-time chat and notifications
Advanced UI (similar to Instagram/Facebook)
✅ Conclusion

The Mini Social Media Platform demonstrates the fundamental concepts of a full-stack web application. It successfully implements core features such as user authentication, content sharing, and user interaction, providing a foundation for building scalable social networking systems.
