# OpenAPI Specification

## What is OpenAPI?

OpenAPI Specification (formerly Swagger Specification) is a standard format for describing RESTful APIs.

It's a machine-readable JSON or YAML file that documents your API's endpoints, request/response formats, authentication, and more.

## Why Use It?

- **Auto-generate documentation** - Interactive API docs
- **Client SDK generation** - Automatically create client libraries
- **API testing** - Tools can validate requests/responses
- **Contract-first development** - Design API before implementation

## Basic Structure

```yaml
openapi: 3.0.0
info:
  title: My API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
```

## How to Use

1. **Create specification file** - `openapi.yaml` or `openapi.json`
2. **Document your endpoints** - Define paths, methods, parameters
3. **Generate docs** - Use Swagger UI or Redoc
4. **Validate** - Use tools like Swagger Editor

## Popular Tools

- **Swagger UI** - Interactive API documentation
- **Swagger Editor** - Write and validate specs
- **Postman** - Import OpenAPI specs for testing
- **Redoc** - Generate beautiful API docs

## Quick Start

```bash
npm install swagger-ui-express
```

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

Visit `http://localhost:3000/api-docs` to see your interactive API documentation.
