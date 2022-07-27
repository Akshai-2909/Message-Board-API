# Message Board API

The API features a login/signup endpoint, CRUD operations on a post, search operation and reply operations. Built with Vanilla Node.js without any frameworks for learning purpose.
``
(Search and reply operations are yet to be applied)
``
These basic features **must be implemented** in every framework. Extra features can be added as well.



# API Specifications:
### Sign-Up Endpoint
- Signs up a new user to the platform, and adds their credentials to the database.

### Login Endpoint
- Validates a given username-password pair and allows them to use endpoints that require the same through sessions.

### Logout Endpoint
- Deletes user's current session id and logs them out of the application.

### Create Post
- Allows a logged-in user to create a post on the message board with a Title and Body. Each created post must be alloted a unique post ID to identify the same.

### Edit Post
- Allows the creator of the post to edit the body of the post.

### Delete Post
- Allows the creater of a post to delete the same.

### Get Post
- Fetches a post by its ID to display on website. User need not be logged in for this.

### Get Feed
- Fetches 'n' posts from the database either randomly or in chronological order. User need not be logged in for this.

### Search Post
- Search for word / phrase in either both post bodies and titles, and returns relevant posts to the user. Log in access not required.

### Reply to Post
- Allows for a signed-in user to reply to a post made by another user.

### Future works to be done:
1. Adding search and reply operations.
2. Adding redis database for cache management.
3. Building a frontend for this api.( Similar to reddit )
