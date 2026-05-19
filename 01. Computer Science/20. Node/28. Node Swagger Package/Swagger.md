# Swagger

## What is Swagger?

Swagger is a suite of tools for implementing and documenting APIs using the OpenAPI Specification. It provides interactive documentation where you can test API endpoints directly in the browser.

## How It Works

Swagger uses JSDoc-style comments with a special `@swagger` tag to generate documentation:

1. You write `@swagger` comments above your routes
2. `swagger-jsdoc` parses these comments
3. Generates OpenAPI spec automatically
4. `swagger-ui-express` renders it as interactive docs

**Alternative:** You can write a separate `openapi.yaml` or `openapi.json` file manually (spec-first approach), but the JSDoc approach is most common because documentation lives next to the code.

## Installation

```bash
npm install swagger-ui-express swagger-jsdoc
```

## Basic Setup

**1. Create `swagger.js` configuration:**

```javascript
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to API route files
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
```

**2. Add to your server (`app.js` or `index.js`):**

```javascript
const { specs, swaggerUi } = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
```

## Document Your Routes

Add JSDoc comments above your route handlers:

```javascript
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get('/users', (req, res) => {
  // handler code
});
```

## Access Documentation

Start your server and visit: `http://localhost:3000/api-docs`

You'll see interactive documentation where you can test endpoints directly.

## Common Annotations

```javascript
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
```

## Authentication Example

```javascript
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
```

Then apply to routes:

```javascript
/**
 * @swagger
 * /protected:
 *   get:
 *     security:
 *       - bearerAuth: []
 */
```
