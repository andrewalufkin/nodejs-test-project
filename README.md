# Test Simple Project

This is a simple project with a Node.js/Express server for testing CI/CD pipelines and artifact collection.

## Features

- Express server with health check endpoint
- Calculator API endpoint with add and multiply operations
- Jest tests for API endpoints

## Installation

```
npm install
```

## Running the Server

Development mode with auto-restart:
```
npm run dev
```

Production mode:
```
npm start
```

The server will run on port 3000 by default, or the port specified in the `PORT` environment variable.

## API Endpoints

### Health Check
```
GET /
```
Returns server status and timestamp.

### Calculator
```
POST /calculate
```
Body:
```json
{
  "operation": "add", // or "multiply"
  "a": 5,
  "b": 3
}
```

## Building
```
npm run build
```
This will create a `dist` folder with bundled JavaScript.

## Testing
```
npm test
```