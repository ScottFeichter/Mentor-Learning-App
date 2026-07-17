# CORS (Cross-Origin Resource Sharing)

## What is CORS?

CORS is a security feature implemented by web browsers that blocks requests from one domain to another domain unless explicitly allowed. The `cors` package is Express middleware that configures CORS headers to control cross-origin requests.

## The Problem CORS Solves

Without CORS configuration, browsers block requests like:
- Frontend at `http://localhost:3000` trying to call API at `http://localhost:5000`
- Website at `https://myapp.com` calling API at `https://api.myapp.com`

## Installation

```bash
npm install cors
```

## Basic Usage

### Enable All CORS Requests
```javascript
const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'This works from any origin' });
});
```

### Specific Origin
```javascript
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

### Multiple Origins
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://myapp.com']
}));
```

## Configuration Options

### Basic Configuration
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // Allow cookies
}));
```

### Dynamic Origin
```javascript
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:3000', 'https://myapp.com'];
    
    // Allow requests with no origin (mobile apps, Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
```

## Route-Specific CORS

```javascript
// Apply CORS to specific route only
app.get('/public-api', cors(), (req, res) => {
  res.json({ message: 'Public endpoint' });
});

// Different CORS settings for different routes
app.get('/admin-api', cors({
  origin: 'https://admin.myapp.com'
}), (req, res) => {
  res.json({ message: 'Admin only' });
});
```

## Preflight Requests

For complex requests (PUT, DELETE, custom headers), browsers send a preflight OPTIONS request:

```javascript
// CORS automatically handles preflight requests
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// This will work with preflight
app.put('/api/users/:id', (req, res) => {
  res.json({ message: 'User updated' });
});
```

## Common Configurations

### Development (Allow Everything)
```javascript
app.use(cors({
  origin: true,  // Allow any origin
  credentials: true
}));
```

### Production (Strict)
```javascript
app.use(cors({
  origin: ['https://myapp.com', 'https://www.myapp.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400  // Cache preflight for 24 hours
}));
```

### API with Authentication
```javascript
app.use(cors({
  origin: 'https://myapp.com',
  credentials: true,  // Required for cookies/auth headers
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With'
  ]
}));
```

## Environment-Based Configuration

```javascript
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://myapp.com'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
};

app.use(cors(corsOptions));
```

## Common Issues

### Credentials and Wildcards
```javascript
// ❌ This doesn't work
app.use(cors({
  origin: '*',
  credentials: true  // Can't use wildcards with credentials
}));

// ✅ This works
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### Missing Headers
```javascript
// ❌ Frontend sends custom header but server doesn't allow it
fetch('/api/data', {
  headers: { 'X-Custom-Header': 'value' }
});

// ✅ Allow custom headers
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header']
}));
```

## Summary

- **CORS** controls which domains can access your API
- **cors middleware** sets appropriate headers to allow cross-origin requests
- **Configure origins** based on your frontend domains
- **Enable credentials** for authentication
- **Use strict settings** in production for security
- **Handle preflight requests** for complex HTTP methods

CORS is essential for any API that serves frontend applications from different domains.