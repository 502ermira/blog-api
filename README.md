# Serverless Blog API

This repository contains a serverless API built using Node.js, Express.js, and MongoDB. It serves as a means to retrieve blog data.

* This API solely focuses on retrieving data. The backend logic for managing the data, including CRUD operations, is maintained separately and resides elsewhere. Users of this API should understand that it's specifically for fetching blog information and not for performing administrative tasks on the data.

To access the blog data, make a GET request to: `https://blog-serverless-93v0new9c-ermiras-projects-cb44b1b3.vercel.app/`

The API will respond with a JSON payload containing the blog data stored in the MongoDB database.

The code in this repository can serve as a model or example for building your own serverless API with Node.js and MongoDB. Feel free to explore the codebase and adapt it to your own projects.

**Note:** To run this project locally or deploy it to another environment, after cloning it and installing the dependencies, you'll need to set up a `.env` file with your MongoDB connection URI. Create a `.env` file in the root directory and add your MongoDB connection URI as `MONGODB_URI=your_connection_string_here`.
