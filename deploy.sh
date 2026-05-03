#!/bin/bash

# NeighborhoodIQ Docker Deployment Script
# Usage: ./deploy.sh [command]

set -e

PROJECT_NAME="neighborhoodiq"
COMPOSE_FILE="docker-compose.yml"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    print_success "Docker found"
}

check_env() {
    if [ ! -f .env ]; then
        print_warning ".env file not found"
        if [ -f .env.example ]; then
            print_warning "Creating .env from .env.example"
            cp .env.example .env
            print_warning "Please edit .env with your configuration"
        fi
    fi
}

start() {
    print_header "Starting NeighborhoodIQ Services"
    check_docker
    check_env
    
    echo "Building and starting containers..."
    docker-compose -f $COMPOSE_FILE up -d
    
    echo "Waiting for services to be ready..."
    sleep 10
    
    print_header "Service Status"
    docker-compose -f $COMPOSE_FILE ps
    
    print_success "All services started!"
    echo ""
    echo "Access your application at:"
    echo -e "  ${GREEN}Frontend: http://localhost:3000${NC}"
    echo -e "  ${GREEN}Backend: http://localhost:5000${NC}"
    echo -e "  ${GREEN}MongoDB: localhost:27017${NC}"
    echo -e "  ${GREEN}Redis: localhost:6379${NC}"
}

stop() {
    print_header "Stopping NeighborhoodIQ Services"
    docker-compose -f $COMPOSE_FILE down
    print_success "All services stopped"
}

restart() {
    print_header "Restarting NeighborhoodIQ Services"
    stop
    sleep 2
    start
}

logs() {
    service=$1
    if [ -z "$service" ]; then
        print_header "Showing All Logs"
        docker-compose -f $COMPOSE_FILE logs -f
    else
        print_header "Showing Logs for $service"
        docker-compose -f $COMPOSE_FILE logs -f $service
    fi
}

status() {
    print_header "Service Status"
    docker-compose -f $COMPOSE_FILE ps
}

rebuild() {
    service=$1
    print_header "Rebuilding $service"
    
    if [ -z "$service" ]; then
        docker-compose -f $COMPOSE_FILE down
        docker-compose -f $COMPOSE_FILE up -d --build
    else
        docker-compose -f $COMPOSE_FILE up -d --build $service
    fi
    
    print_success "Service(s) rebuilt and running"
}

health_check() {
    print_header "Health Checks"
    
    echo -n "Frontend: "
    if curl -s http://localhost:3000 > /dev/null; then
        print_success "Running"
    else
        print_error "Not responding"
    fi
    
    echo -n "Backend: "
    if curl -s http://localhost:5000/health > /dev/null; then
        print_success "Running"
    else
        print_error "Not responding"
    fi
    
    echo -n "MongoDB: "
    if docker-compose -f $COMPOSE_FILE exec -T mongodb mongosh -u admin -p changeme --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
        print_success "Running"
    else
        print_error "Not responding"
    fi
    
    echo -n "Redis: "
    if docker-compose -f $COMPOSE_FILE exec -T redis redis-cli ping > /dev/null 2>&1; then
        print_success "Running"
    else
        print_error "Not responding"
    fi
}

clean() {
    print_warning "This will remove all containers, volumes, and data!"
    read -p "Are you sure? (yes/no): " confirm
    
    if [ "$confirm" = "yes" ]; then
        print_header "Cleaning up"
        docker-compose -f $COMPOSE_FILE down -v
        print_success "Cleanup completed"
    else
        print_warning "Cleanup cancelled"
    fi
}

show_help() {
    cat << EOF
NeighborhoodIQ Docker Deployment Script

Usage: ./deploy.sh [command]

Commands:
    start               Start all services
    stop                Stop all services
    restart             Restart all services
    status              Show service status
    logs [service]      Show logs (all services or specific one)
    health              Run health checks
    rebuild [service]   Rebuild and restart service(s)
    clean               Remove all containers and volumes (WARNING!)
    help                Show this help message

Examples:
    ./deploy.sh start
    ./deploy.sh logs backend
    ./deploy.sh rebuild frontend
    ./deploy.sh health

For detailed information, see docs/DEPLOYMENT.md
EOF
}

# Main script
case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    logs)
        logs "$2"
        ;;
    health)
        health_check
        ;;
    rebuild)
        rebuild "$2"
        ;;
    clean)
        clean
        ;;
    help)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
