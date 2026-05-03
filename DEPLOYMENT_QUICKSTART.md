# 🚀 Deployment Quick Start Guide

Welcome! Your NeighborhoodIQ application is now ready for deployment. Follow these simple steps to get it running.

## ⚡ 30-Second Quick Start

### On Mac/Linux:
```bash
cp .env.example .env
chmod +x deploy.sh
./deploy.sh start
```

### On Windows:
```bash
copy .env.example .env
deploy.bat start
```

Then open **http://localhost:3000** in your browser!

---

## 📦 What Was Created For You

Your application now has complete Docker setup:

✅ **docker-compose.yml** - Orchestrates all services (Frontend, Backend, MongoDB, Redis)  
✅ **Dockerfile** (Server) - Containerizes your Node.js backend  
✅ **Dockerfile** (Client) - Containerizes your React frontend  
✅ **nginx.conf** - Web server configuration for the frontend  
✅ **.env.example** - Template for environment variables  
✅ **DEPLOYMENT.md** - Comprehensive deployment documentation  
✅ **deploy.sh / deploy.bat** - Easy-to-use deployment scripts  

---

## 🎯 Key Deployment Commands

### Using the Helper Scripts (Recommended)

**Mac/Linux:**
```bash
./deploy.sh start    # Start all services
./deploy.sh stop     # Stop all services
./deploy.sh restart  # Restart all services
./deploy.sh logs     # View all logs
./deploy.sh health   # Check service health
./deploy.sh status   # View service status
```

**Windows:**
```bash
deploy.bat start
deploy.bat stop
deploy.bat restart
deploy.bat logs
deploy.bat health
deploy.bat status
```

### Using Docker Compose Directly

```bash
docker-compose up -d          # Start all services
docker-compose down           # Stop all services
docker-compose logs -f        # View logs
docker-compose ps            # View service status
docker-compose up -d --build # Rebuild and start
```

---

## 🌐 Accessing Your Application

Once deployed, access:

| Service | URL | Details |
|---------|-----|---------|
| **Frontend** | http://localhost:3000 | React app |
| **Backend API** | http://localhost:5000 | API endpoints |
| **Backend Health** | http://localhost:5000/health | API health check |
| **MongoDB** | mongodb://localhost:27017 | Database |
| **Redis** | redis://localhost:6379 | Cache |

---

## 🔐 Before Going to Production

### 1. **Update .env File**
```bash
cp .env.example .env
# Edit .env and change these CRITICAL values:
# - JWT_SECRET: Use a strong random string
# - MONGO_ROOT_PASSWORD: Use a strong password
# - VITE_API_URL: Set to your production domain
```

### 2. **Generate Secure Secrets**
```bash
# Generate a random JWT secret
openssl rand -base64 32

# Or on Windows PowerShell
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

### 3. **Security Checklist**
- [ ] Changed all default passwords
- [ ] Set strong JWT_SECRET
- [ ] Configured correct CORS origins
- [ ] Set NODE_ENV=production
- [ ] Reviewed DEPLOYMENT.md security section
- [ ] Set up HTTPS/SSL certificates
- [ ] Configured firewall rules
- [ ] Enabled monitoring and logging

### 4. **Database Backup**
```bash
# Backup your MongoDB before going live
docker-compose exec mongodb mongodump --authenticationDatabase admin -u admin -p changeme --archive > backup.archive
```

---

## 📊 Understanding Your Services

### Frontend (React + Vite)
- **Port:** 3000
- **Technology:** React 18, Vite, Tailwind CSS
- **Served by:** Nginx
- **Build:** Automatically built in Docker

### Backend (Node.js + Express)
- **Port:** 5000
- **Technology:** Express.js, MongoDB, Redis
- **Health Check:** GET /health
- **Auto-restart:** Enabled

### Database (MongoDB)
- **Port:** 27017
- **Credentials:** Set in .env
- **Storage:** Docker volume (persistent)
- **Data location:** `mongodb_data` volume

### Cache (Redis)
- **Port:** 6379
- **Type:** In-memory cache
- **Storage:** Docker volume (persistent)
- **Auto-restart:** Enabled

---

## 🐛 Troubleshooting

### Services won't start
```bash
# Check logs
./deploy.sh logs    # Linux/Mac
deploy.bat logs     # Windows

# Check specific service
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mongodb
```

### Can't connect to database
```bash
# Test MongoDB connection
docker-compose exec mongodb mongosh -u admin -p changeme

# Test Redis connection
docker-compose exec redis redis-cli ping
```

### Frontend shows blank page
```bash
# Check if backend is running
curl http://localhost:5000/health

# Check frontend logs
docker-compose logs frontend

# Check network
docker-compose exec frontend ping backend
```

### Port already in use
```bash
# Find process using port 3000
lsof -i :3000           # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Kill process or change port in docker-compose.yml
```

---

## 📈 Next Steps

1. **Deploy to Production:**
   - See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for AWS, DigitalOcean, Heroku options
   - Choose your hosting platform
   - Configure production environment

2. **Monitor Your Application:**
   - Set up logging and monitoring
   - Configure alerts
   - Enable auto-scaling if needed

3. **Set Up CI/CD:**
   - Automate building and pushing Docker images
   - Set up deployment pipelines
   - Implement automated testing

4. **Optimize Performance:**
   - Configure caching strategies
   - Optimize database queries
   - Enable CDN for static assets

5. **Security Hardening:**
   - Implement rate limiting
   - Enable Web Application Firewall (WAF)
   - Set up DDoS protection
   - Regular security audits

---

## 📚 Documentation

- **Full Deployment Guide:** [DEPLOYMENT.md](./docs/DEPLOYMENT.md)
- **API Documentation:** [API.md](./docs/API.md)
- **Architecture:** [ARCHITECTURE.md](./docs/ARCHITECTURE.md)
- **Setup Guide:** [SETUP.md](./docs/SETUP.md)

---

## 💡 Pro Tips

### View All Service Logs
```bash
docker-compose logs -f
```

### Restart a Specific Service
```bash
./deploy.sh rebuild backend    # Linux/Mac
deploy.bat rebuild backend      # Windows
```

### Update Environment Variables
```bash
# Edit .env
nano .env                       # Linux/Mac
notepad .env                    # Windows

# Restart services for changes to take effect
./deploy.sh restart
docker-compose restart
```

### Check Resource Usage
```bash
docker stats
```

### Clean Up Everything (Use Cautiously!)
```bash
docker-compose down -v
```
⚠️ **WARNING:** This deletes all data!

---

## 🆘 Getting Help

If you encounter issues:

1. Check the logs: `./deploy.sh logs`
2. Review [DEPLOYMENT.md](./docs/DEPLOYMENT.md) troubleshooting section
3. Check Docker status: `docker ps`
4. Verify environment variables: `cat .env`
5. Test individual services: `curl http://localhost:5000/health`

---

## 🎉 You're All Set!

Your NeighborhoodIQ application is ready to deploy. Start with:

```bash
./deploy.sh start    # Mac/Linux
deploy.bat start     # Windows
```

Then visit **http://localhost:3000** and enjoy! 🚀

---

**Questions?** Refer to [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for comprehensive documentation.
