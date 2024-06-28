# MelodyTalk

MelodyTalk is a platform that combines the concept of Instagram with SoundCloud, allowing users to share and communicate through music instead of photos.

- **Project Video**: [Watch the project video](https://youtu.be/8439lP3B1ww)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)

## Features

### User Authentication
- User signup and login with validation and password hashing.
- Password recovery via email.

### Music Post Sharing
- Users can upload MP3 files with a cover image (PNG, JPG, JPEG).
- Includes optional tags and description fields.
- Copyright agreement checkbox for uploads.

### Home Functionality
- View posts from followed users in chronological order.
- Explore posts from random users if caught up with followed content.
- Like and comment on posts.
- Search functionality by username or keywords.

### Chatting
- Real-time messaging between users with read/unread indicators.
- Messages sorted chronologically.

### User Profile Management
- Profile picture, nickname, bio, following/follower count.
- View all user posts in chronological order on profile.

## Technologies Used

- **Frontend**: React JS, Material-UI library
- **Backend**: Spring Boot (RESTful APIs)
- **Database**: Oracle
- **Tools**: VSCode, Spring Tool Suite 4, Oracle SQL Developer

## Setup Instructions

1. **Clone the repository**:

2. **Frontend Setup**:
- Navigate to frontend directory:
  ```
  cd frontend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the frontend server:
  ```
  npm start
  ```
- Access the frontend at `http://localhost:3000` in your browser.

3. **Backend Setup**:
- Open Spring Tool Suite 4 or your preferred IDE.
- Import the backend project.
- Adjust Oracle DataSource configuration in `application.properties` located in `src/main/resources`:
  ```properties
  # Oracle DataSource
  spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver
  spring.datasource.url=jdbc:oracle:thin:@192.168.0.123:1521/xe
  spring.datasource.username=melody
  spring.datasource.password=talk
  ```
  Replace `192.168.0.123` with the actual IP address of your Oracle database server and adjust `username` and `password` as necessary.
- Start the Spring Boot application to run on `http://localhost:8080`.

4. **Database**:
- Ensure Oracle database is running and accessible (adjust connection details in backend configuration).

## Running the Application

- Start the frontend and backend servers as per the setup instructions.
- Access MelodyTalk frontend at `http://localhost:3000`.
- Ensure backend APIs are functioning properly by checking console logs and network requests in browser developer tools.
