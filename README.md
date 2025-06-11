# Surgery Manager

This project contains both the frontend and the backend. Usually this would be split into two repos, but I have them in one for the sake of time and simplicity.

You can find the frontend logic in the `src` directory. The backend functionality is in the `server` directory.

You can find the architecture diagram here: https://miro.com/app/board/uXjVIubD6e4=/

## Frontend

This uses React, TypeScript, and Vite for the frontend app.

To get the UI set up, run the following in the root of the project:

- `npm i`
- `npm run dev`

## Backend

This uses MongoDB, Typescript, and Express for the backend server.

### MongoDB

The project uses the MongoDB Compass locally, so you'll need to [download it](https://www.mongodb.com/try/download/compass) and run these commands to get a fresh DB running:

- `brew tap mongodb/brew`
- `brew install mongodb-community@6.0`
- `brew services start mongodb-community@6.0`

In Compass, add a new connection called `surgery_db`. Once you click "Save and Connect", it should create your local instance of the DB.

### App setup

To get the backend set up, run the following in the `server` folder of the project:

- `npm i`
- `npm run dev`
