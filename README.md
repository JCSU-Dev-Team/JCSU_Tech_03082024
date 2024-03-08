# FanFusion Project README
## Overview
FanFusion is a web application that aims to provide a platform for fans to connect, share, and explore content related to their interests. This project utilizes React.js for the frontend development and Firebase for backend services such as authentication and storage.

## Project Structure
The project is organized into several components:

- Header: A navigation bar displayed at the top of the page, allowing users to navigate between different sections of the application. It includes features such as user authentication, profile management, and settings.
- ForYou: A component that displays personalized content recommendations for the user based on their preferences. It fetches data from external APIs such as YouTube to populate the recommendations.
- Chat: A chat interface where users can interact with a conversational AI powered by OpenAI's GPT-3.5 model. Users can send messages, receive responses from the AI, and even upload files for summarization or processing.
- Profile: A user profile page where users can view and manage their account information, preferences, and saved content.
## Features
- User Authentication: Users can sign up, log in, and log out of their accounts using Firebase Authentication.
- Personalized Content Recommendations: The ForYou component fetches and displays personalized content recommendations for each user based on their preferences and viewing history.
- Conversational AI Chatbot: The Chat component enables users to chat with an AI-powered chatbot based on OpenAI's GPT-3.5 model. The chatbot can provide responses to user messages and engage in conversations on various topics.
- Speech Recognition: Users can speak their messages, which are then converted to text and sent to the chatbot for processing.

## Usage
To run the project locally:

- Clone the repository to your local machine.
- Install dependencies by running npm install.
- Set up Firebase Authentication and Storage configurations.
- Create a .env file in the root directory and add your Firebase configuration details and OpenAI API key.
- Run the application using npm start.
- Access the application in your web browser at http://localhost:3000.
## Technologies Used
- React.js: Frontend development framework
- Firebase: Backend services for authentication and storage
- OpenAI: API for conversational AI capabilities
- Chatscope Chat UI Kit: UI components for chat interface
- Bootstrap: Frontend styling and layout framework

  Here is our [project URL] (https://fanfusion-61fa5.web.app) 
