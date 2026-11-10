# 🛡️ Common Web Security Attacks (Interview Notes)

## 1. XSS (Cross-Site Scripting)

### What is XSS?
XSS (Cross-Site Scripting) is an attack where an attacker injects malicious JavaScript into a website using <Script tag > . When another user opens the affected page, the malicious JavaScript executes in their browser.

### What can an attacker do?
- Steal cookies
- Hijack user sessions
- Redirect users to phishing websites
- Display fake login forms
- Perform actions on behalf of the user

### Example Attack

A website has a comment section.

Normal comment:
```html

Nice post!

```
Attacker submits:
```html

<script>

alert("Hacked")

</script>

```

If the server renders it directly:

```html

<div>

load JavaScript, CSS, images, fonts, etc., from these trusted places. Block everything else."



e.g. : 

Content-Security-Policy:

default-src 'self';

script-src 'self';

connect-src 'self' https://api.myapp.com;

img-src 'self' https://my-bucket.s3.amazonaws.com;

style-src 'self';



```javascript

User.findOne(req.body);

```

Attacker sends:

```json

{

</script>

```

When the victim opens this page:

Browser automatically sends:

- Session Cookie
- POST Request

Money gets transferred.

### Prevention

- SameSite Cookies (Lax or Strict)
- CSRF Tokens
- Verify Origin Header
- Verify Referer Header

---

# 5. DoS (Denial of Service)

### What is DoS?

DoS is an attack where one computer sends an extremely large number of requests to overload the server.

Normal users can no longer access the service.

### Example

API:

```

GET /users

```

Attacker sends:

```

100,000 requests

```

Server becomes:

- CPU 100%
- Memory Full
- Timeout
- Crash

### Prevention

Rate Limiting

Example:

```javascript

import rateLimit from "express-rate-limit";



app.use(rateLimit({

}));

```

Also use:

- Caching
- Request throttling
- Queueing

---

# 6. DDoS (Distributed Denial of Service)

### What is DDoS?

DDoS is the same attack as DoS but performed by thousands or millions of infected devices (Botnet).

Instead of one attacker, many devices attack simultaneously.

### Example

```

PC \\\\\\\\\\\\\\\\

Laptop ----> Server

Phone -----/

Bot 1 -----/

Bot 2 -----/



Millions of Requests

```

Server becomes unavailable.

### Difference Between DoS and DDoS

| DoS		 | DDoS |

| One Attacker	 | Thousands of Attackers |
| Single IP 	 | Multiple IPs |
| Easier to Block | Harder to Block |
| Lower Traffic  | Massive Traffic |

### Prevention

- Cloudflare
- AWS Shield
- Load Balancer
- Web Application Firewall (WAF)
- Auto Scaling
- Rate Limiting
- Bot Detection

---

# Quick Revision

| Attack | Purpose | Example | Prevention |
|----------|----------|----------|------------|
| XSS | Execute malicious JavaScript | `<script>alert()</script>` | Sanitize HTML, CSP, HttpOnly Cookies |
| SQL Injection | Modify SQL Query | `' OR 1=1 --` | Prepared Statements, ORM |
| MongoDB Injection | Modify MongoDB Query | `$ne: null` | Validate Input, Never use req.body directly |
| CSRF | Force logged-in user actions | Hidden Form Submission | CSRF Token, SameSite Cookies |
| DoS | Overload Server | Single machine sends huge traffic | Rate Limiting |
| DDoS | Overload Server using Botnet | Millions of devices attack together | CDN, WAF, AWS Shield |

---

# Easy Way to Remember

- **XSS** → Inject JavaScript into someone else's browser.
- **SQL Injection** → Manipulate SQL queries.
- **MongoDB Injection** → Manipulate MongoDB queries using operators.
- **CSRF** → Force a logged-in user to perform actions.
- **DoS** → One machine floods the server.
- **DDoS** → Thousands of machines flood the server.:



security concepts

Security concepts you've discussed
JWT Authentication
OAuth 2.0
Google Login
Cookies
Sessions
CSRF
XSS
SQL Injection
Content Security Policy (CSP)
Rate Limiting
CORS
HTTPS/TLS
CloudFront Signed URLs
S3 Presigned URLs
RBAC
Redis
WebRTC signaling
Socket.IO security basics
Secure file sharing
Webhook verification

Domain	What you've worked on
Authentication (AuthN)	Google OAuth 2.0 login, JWT authentication, refresh tokens, sessions, protected routes
Authorization (AuthZ)	Role-Based Access Control (RBAC), admin/user permissions
Web Application Security	Input validation using Zod, preventing invalid requests, secure API design
Cloud Security	AWS S3 bucket access, CloudFront signed URLs, private file delivery
API Security	JWT verification, authentication middleware, protected REST APIs
Network Security	HTTPS, HTTP over TCP, Socket.IO connections, WebRTC signaling basics
Identity & Access Management (IAM)	User accounts, authentication flow, access permissions
Payment Security	Razorpay subscription integration, webhook signature verification
Session & Cookie Security	HttpOnly cookies, SameSite, Secure flag, CSRF discussions
Application Security (AppSec)	XSS, CSRF, SQL Injection, CSP, security best practices
Rate Limiting & Abuse Prevention	Express Rate Limit, Redis-based rate limiting
Secrets Management
File Security
Transport Security
Real-Time Communication Securitys