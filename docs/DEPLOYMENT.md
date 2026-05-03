# NeighborhoodIQ Deployment Guide

## 🚀 Quick Deployment with Docker

### Prerequisites
- Docker Desktop installed ([Download](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)
- At least 4GB RAM available for Docker

### Step 1: Prepare Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your production values
# IMPORTANT: Change these in production:
# - JWT_SECRET: Use a strong random string
# - MONGO_ROOT_PASSWORD: Use a strong password
# - Database credentials
# - API keys for external services
```

### Step 2: Build and Run with Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Stop and remove volumes (WARNING: deletes data)
docker-compose down -v
```

### Step 3: Verify Deployment

```bash
# Check service status
docker-compose ps

# Test backend health
curl http://localhost:5000/health

# Test frontend
# Open http://localhost:3000 in your browser

# Check MongoDB connection
docker-compose exec mongodb mongosh -u admin -p changeme

# Check Redis connection
docker-compose exec redis redis-cli ping
```

## 📋 Service Configuration

### Services Running:
- **Frontend**: React/Vite app on `http://localhost:3000`
- **Backend**: Node.js/Express API on `http://localhost:5000`
- **MongoDB**: Database on `localhost:27017`
- **Redis**: Cache on `localhost:6379`

### Port Mapping:
| Service | Port | URL |
|---------|------|-----|
| Frontend | 3000 | http://localhost:3000 |
| Backend API | 5000 | http://localhost:5000 |
| MongoDB | 27017 | mongodb://localhost:27017 |
| Redis | 6379 | redis://localhost:6379 |

## 🔒 Security Best Practices

### For Production Deployment:

1. **Environment Variables**
   - Never commit `.env` file to version control
   - Use strong, unique passwords for all services
   - Rotate JWT_SECRET periodically
   - Use environment variable management services (AWS Secrets Manager, HashiCorp Vault, etc.)

2. **Network Security**
   - Use reverse proxy (Nginx, AWS ALB) in front of your services
   - Enable HTTPS/SSL certificates (Let's Encrypt recommended)
   - Configure firewall rules appropriately
   - Use VPC/private networks for database access

3. **Database Security**
   - Change default MongoDB credentials immediately
   - Use strong passwords (min 16 characters, mixed case, special characters)
   - Enable MongoDB authentication and authorization
   - Regular backups and disaster recovery testing
   - Use separate database credentials for different environments

4. **API Security**
   - Enable rate limiting on API endpoints
   - Implement CORS properly (whitelist specific origins)
   - Use API keys for external integrations
   - Enable request validation
   - Implement proper logging and monitoring

5. **Container Security**
   - Keep Docker images updated regularly
   - Use specific version tags (not `latest`)
   - Scan images for vulnerabilities
   - Run containers as non-root user
   - Use resource limits (memory, CPU)

## 🌐 Production Deployment Options

### Option 1: AWS ECS (Recommended for Scalability)
```bash
# Push images to ECR
# Update task definitions
# Deploy with ECS
```

### Option 2: DigitalOcean App Platform
```bash
# Push code to repository
# Connect Docker Compose through DigitalOcean dashboard
# Deploy and manage through UI
```

### Option 3: Heroku (With Docker)
```bash
heroku container:login
docker build -t registry.heroku.com/your-app/web .
docker push registry.heroku.com/your-app/web
heroku container:release web
```

### Option 4: Self-hosted Server
```bash
# SSH into server
# Install Docker and Docker Compose
# Clone repository
# Run docker-compose up -d
# Configure reverse proxy (Nginx)
# Setup SSL certificates
```

## 📊 Monitoring and Logs

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
```

### Container Stats
```bash
docker stats
```

### Health Checks
```bash
# Check health status
docker-compose ps

# Manual health check
curl http://localhost:5000/health
```

## 🔄 Updating Services

### Update Backend
```bash
# Make code changes
# Rebuild and restart
docker-compose up -d --build backend

# Or specific image rebuild
docker-compose down backend
docker build -t neighborhoodiq-backend ./server
docker-compose up -d backend
```

### Update Frontend
```bash
docker-compose up -d --build frontend
```

### Update All Services
```bash
docker-compose up -d --build
```

## 🛠️ Troubleshooting

### Service won't start
```bash
# Check logs
docker-compose logs service_name

# Verify environment variables
docker-compose config

# Check resource availability
docker stats
```

### Database connection issues
```bash
# Verify MongoDB is running
docker-compose ps mongodb

# Test connection
docker-compose exec mongodb mongosh -u admin -p changeme

# Check network connectivity between services
docker-compose exec backend ping mongodb
```

### Frontend shows blank page
```bash
# Check build output
docker-compose logs frontend

# Verify API URL configuration
docker-compose exec frontend cat /usr/share/nginx/html/index.html
```

### Memory/Resource issues
```bash
# Increase Docker memory allocation in Docker Desktop settings
# Or modify docker-compose.yml to add resource limits:

services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 1G
```

## 📈 Scaling for Production

### Load Balancing
```yaml
# Update docker-compose.yml to scale services
# docker-compose up -d --scale backend=3
```

### Database Optimization
- Enable MongoDB sharding for large datasets
- Configure Redis cluster mode for high availability
- Regular database maintenance and indexing

### Caching Strategy
- Configure Redis for session storage
- Implement cache invalidation strategies
- Use CDN for static assets

## 🔐 Backup and Recovery

### Backup MongoDB
```bash
# Create backup
docker-compose exec mongodb mongodump --authenticationDatabase admin -u admin -p changeme --archive > backup.archive

# Restore backup
docker-compose exec -T mongodb mongorestore --authenticationDatabase admin -u admin -p changeme --archive < backup.archive
```

### Backup Redis
```bash
# Redis backups are automatically saved to volume
docker cp neighborhoodiq-redis:/data/dump.rdb ./backup/redis-dump.rdb
```

## 📞 Support and Resources

- Docker Compose Documentation: https://docs.docker.com/compose/
- MongoDB Docker: https://hub.docker.com/_/mongo
- Node.js Docker: https://hub.docker.com/_/node
- Nginx Docker: https://hub.docker.com/_/nginx
- Docker Best Practices: https://docs.docker.com/develop/dev-best-practices/

---

**Last Updated**: May 2026
**Version**: 1.0.0
