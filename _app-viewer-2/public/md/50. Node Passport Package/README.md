# Node Passport Package - Authentication Module

Complete guide to implementing authentication in Node.js using Passport.js, sessions, and cookies.

## Learning Objectives

By the end of this module, you will:
- Understand authentication fundamentals and different approaches
- Implement session-based authentication with cookies
- Use Passport.js for authentication workflows
- Secure authentication with best practices
- Handle session expiration and protected routes

## Prerequisites

- Basic Node.js and Express knowledge
- Understanding of HTTP requests/responses
- Familiarity with async/await and promises
- Basic MongoDB or database knowledge

## Module Structure

### Fundamentals (01-06)
1. **Authentication.md** - What is authentication, common methods
2. **Session.md** - Understanding sessions and stateful HTTP
3. **BrowserStorage.md** - Client-side storage options and security
4. **CookieBasedAuthentication.md** - How cookie-based auth works
5. **Cookies.md** - Deep dive into cookies
6. **SessionExpiration.md** - Managing session timeouts

### Passport.js (07-10)
7. **PassportIntro.md** - Introduction to Passport.js
8. **LocalStrategy.md** - Username/password authentication
9. **PassportLifeCycle.md** - How Passport processes requests
10. **SerializeDeserialize.md** - Session persistence explained

### Practical Implementation (11-13)
11. **PasswordHashing.md** - Securing passwords with bcrypt
12. **ProtectedRoutes.md** - Middleware and route protection
13. **ErrorHandling.md** - Handling authentication failures

### Additional Topics (14-17)
14. **OtherStrategies.md** - JWT, OAuth overview
15. **CompleteExample.md** - Full working application
16. **CommonIssues.md** - Troubleshooting guide
17. **SecurityChecklist.md** - Production security checklist

## Recommended Learning Path

**Beginners:** Follow files 01-13 in order

**Intermediate:** Review 01-06, focus on 07-13

**Reference:** Jump to specific topics as needed

## Quick Start

```bash
npm install express express-session passport passport-local bcrypt connect-mongo
```

See **15. CompleteExample.md** for a full working implementation.

## Key Concepts

- **Authentication** - Verifying who you are
- **Session** - Server-side storage of user state
- **Cookie** - Client-side storage sent with requests
- **Passport** - Authentication middleware for Node.js
- **Strategy** - Authentication method (local, OAuth, JWT)
- **Serialize/Deserialize** - Converting user to/from session

## Resources

- [Passport.js Documentation](http://www.passportjs.org/)
- [Express Session Documentation](https://github.com/expressjs/session)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
