# Time Tracker Application Backend

This is backend of time tracker application.

https://drive.google.com/file/d/1pu7KD_utpLHTp9tXAr8_eSy1g6oYhthx/view

## Steps to run

1. clone the repo from url https://github.com/anchal-simfor/time_tracker_server.git

   ```bash
       git clone https://github.com/anchal-simform/time_tracker_server.git

   ```

2. Change into project directory and run npm install command

3. Create postgres Database first ( Must ) , create .env file in root project directory and update the database details in the .env file as per .env.example file pasted below

   ```env
   NODE_ENV= "development"
   # Database name is required before running migrations and seeding data
   DB_NAME = 'time_tracker'
   DB_USERNAME = 'postgres'
   DB_PASSWORD = 'postgres'
   JWT_SECRET = 'test123'
   DB_HOST="localhost"
   # Keep the port same as of now since using the exact port in the frontend as of now
   # Can Use the api domain name url later on then would not be required to keep same
   PORT = 4090
   ```

4. After adding the database creds in .env.file run the migrations and seed data using below commands

   ```bash
   // Below command will run the migrations and create database tables for you
   npm run run:mig

   // Below command will run the seeds and fill the basic data in the data base
   npm run run:seed

   ```

5. After running above commands successfully you can start the server using below commands

   ```bash

   npm run start

   ```

   After above command your server will start running on port mentioned in env file
   You can update the backend url in react frontend env for connection Backend and frontend

   You can view the swagger documentation on url "/api-docs" for example http://localhost:4090/api-docs (sample image https://prnt.sc/4A4O_gGrUc1X)

   Video Demo : https://drive.google.com/file/d/1EBpD07PTvNh82s5APHhDmPP3GyDxdRqV/view?usp=sharing
