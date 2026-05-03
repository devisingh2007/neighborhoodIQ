@echo off
REM NeighborhoodIQ Docker Deployment Script for Windows
REM Usage: deploy.bat [command]

setlocal enabledelayedexpansion

set PROJECT_NAME=neighborhoodiq
set COMPOSE_FILE=docker-compose.yml

if "%1"=="" goto help
if "%1"=="start" goto start
if "%1"=="stop" goto stop
if "%1"=="restart" goto restart
if "%1"=="status" goto status
if "%1"=="logs" goto logs
if "%1"=="health" goto health
if "%1"=="rebuild" goto rebuild
if "%1"=="clean" goto clean
if "%1"=="help" goto help

echo Unknown command: %1
goto help

:start
echo.
echo ========================================
echo Starting NeighborhoodIQ Services
echo ========================================
echo.

docker-compose -f %COMPOSE_FILE% up -d
if errorlevel 1 (
    echo Error: Failed to start services
    exit /b 1
)

timeout /t 10

echo.
echo ========================================
echo Service Status
echo ========================================
docker-compose -f %COMPOSE_FILE% ps

echo.
echo Services started successfully!
echo.
echo Access your application at:
echo   Frontend: http://localhost:3000
echo   Backend: http://localhost:5000
echo   MongoDB: localhost:27017
echo   Redis: localhost:6379
goto end

:stop
echo.
echo ========================================
echo Stopping NeighborhoodIQ Services
echo ========================================
docker-compose -f %COMPOSE_FILE% down
echo All services stopped
goto end

:restart
echo.
echo ========================================
echo Restarting NeighborhoodIQ Services
echo ========================================
call :stop
timeout /t 2
call :start
goto end

:status
echo.
echo ========================================
echo Service Status
echo ========================================
docker-compose -f %COMPOSE_FILE% ps
goto end

:logs
echo.
echo ========================================
echo Showing Logs
echo ========================================
if "%2"=="" (
    docker-compose -f %COMPOSE_FILE% logs -f
) else (
    docker-compose -f %COMPOSE_FILE% logs -f %2
)
goto end

:health
echo.
echo ========================================
echo Health Checks
echo ========================================
echo Checking services...
echo.

setlocal
for /f "delims=" %%A in ('curl -s http://localhost:3000 2^>nul') do set frontend_ok=1
if defined frontend_ok (
    echo [OK] Frontend: Running
) else (
    echo [FAIL] Frontend: Not responding
)

for /f "delims=" %%A in ('curl -s http://localhost:5000/health 2^>nul') do set backend_ok=1
if defined backend_ok (
    echo [OK] Backend: Running
) else (
    echo [FAIL] Backend: Not responding
)

echo [INFO] MongoDB and Redis: Check with 'docker-compose ps'
goto end

:rebuild
echo.
echo ========================================
echo Rebuilding Services
echo ========================================
if "%2"=="" (
    echo Rebuilding all services...
    docker-compose -f %COMPOSE_FILE% down
    docker-compose -f %COMPOSE_FILE% up -d --build
) else (
    echo Rebuilding %2...
    docker-compose -f %COMPOSE_FILE% up -d --build %2
)
echo Rebuild complete
goto end

:clean
echo.
echo ========================================
echo CLEANUP WARNING
echo ========================================
echo This will remove all containers and data!
set /p confirm="Are you sure? (yes/no): "
if /i "%confirm%"=="yes" (
    docker-compose -f %COMPOSE_FILE% down -v
    echo Cleanup completed
) else (
    echo Cleanup cancelled
)
goto end

:help
echo.
echo NeighborhoodIQ Docker Deployment Script
echo.
echo Usage: deploy.bat [command]
echo.
echo Commands:
echo   start               Start all services
echo   stop                Stop all services
echo   restart             Restart all services
echo   status              Show service status
echo   logs [service]      Show logs
echo   health              Run health checks
echo   rebuild [service]   Rebuild and restart service(s)
echo   clean               Remove all containers and volumes
echo   help                Show this help message
echo.
echo Examples:
echo   deploy.bat start
echo   deploy.bat logs backend
echo   deploy.bat rebuild frontend
echo   deploy.bat health
echo.
echo For detailed information, see docs/DEPLOYMENT.md
echo.

:end
endlocal
