# POST Interview API

This Post API is a system that manages users, posts and comments. It allows users to
securely make posts, make comments on the posts and the owner of the post can manage the posts. Users can also edit their profile information, edit their posts and comments.

## Features

- User registration: Create a user accounts and assin them an avatar
- Authentication: login users based on their credentials.
- Logout users from the system
- Post management: Users can get update and delete their posts,
- Comment management: Users can get, update and delete their comments,
- Access control: Restrict access to certain resources based on user roles using appropriate privilege middlewares.

## Getting Started

These instructions will guide you on how to set up and utilize the IMS API in your own applications.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB installed and running.
- API credentials: check the `.env.example` file for more information about the environment variables needed for the IMS API configuration

### Installation

1. Clone the repository: `git clone https://github.com/fudosman/PostServer.git`
2. Navigate to the project directory: `cd PostServer`
3. Install the dependencies: `npm install`
4. Open in a code editor
5. Configure the environment variables:
   - Create a `.env` file based on the `.env.example` file provided.
   - Copy all the variables from the `.env.example` file to the `.env` file
   - Update the environment variables with your specific configuration (e.g., MongoDB connection URL, API credentials).
6. Start the application: `npm run start` which uses node to run the application in production environment; or you can use `npm run dev` which uses nodemon to run the API server in development environment. they are both available from the `package.json` file.

### API Documentation

The API documentation provides detailed information about each endpoint, request parameters, and response formats. It's recommended to review the documentation to understand the available functionalities and how to interact with the API.

You can find the API documentation at [https://documenter.getpostman.com/view/19482223/2s93eVYZxA](https://documenter.getpostman.com/view/19482223/2s93eVYZxA).

### Usage

Once the PostServer API is up and running, you can start making requests to the API endpoints using your preferred method (e.g., curl, Postman). Ensure that you include the required headers, request parameters, and payload as specified in the API documentation.

Here's an example of a request to register a new user:

POST /api/v1/auth/signup
Content-Type: application/json
access_token: bearer token of a user

```{
    "fullname": "kachi",
    "username": "fudosman",
    "email": "fudosman@gmail.com",
    "password": "23456fghjADD@s",
    "age": 45
}
```

Find the full API documentation at [https://documenter.getpostman.com/view/19482223/2s93eVYZxA](https://documenter.getpostman.com/view/19482223/2s93eVYZxA).

## Contributing

Contributions to the PostServer API are welcome! If you have any suggestions, bug reports, or feature requests, please submit them as issues or create a pull request with your proposed changes.

## Acknowledgments

I would like to acknowledge and express our heartfelt appreciation to business yield for using this test as my interview test, and for an opportunity to participate in this hands on project.

## Contact

If you have any questions, feedback, or inquiries, please contact me on my github accounts where our profiles and contact information are available.
[https://github.com/fudosman](https://github.com/fudosman).
