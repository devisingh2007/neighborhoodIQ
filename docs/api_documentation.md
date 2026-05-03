# NeighborhoodIQ API Documentation

This document outlines the API architecture, data ingestion strategy, and the proprietary scoring methodology that powers NeighborhoodIQ.

## 1. Core Methodology: The Intelligence Score

NeighborhoodIQ calculates a composite score for every neighborhood out of 100. This score is aggregated from 7 distinct dimensions, each powered by a specific external data integration and weighted according to its impact on livability.

| Metric | Weight | Data Source | Impact |
| :--- | :--- | :--- | :--- |
| 🛡️ **Safety** | 30% | FBI Crime Data / Local Police APIs | Highest impact on daily life |
| 🌫️ **Air Quality** | 20% | OpenAQ API | Health implications |
| 🏥 **Healthcare** | 15% | Google Places API | Critical for families |
| 🎓 **Education** | 15% | School APIs (e.g., GreatSchools) | Long-term value |
| 🚧 **Infrastructure** | 10% | OpenStreetMap | Enables mobility |
| 💧 **Water Quality** | 5% | EPA SDWIS | Health baseline |
| 🚶 **Walkability** | 5% | Walk Score API | Lifestyle quality |

---

## 2. API Endpoints Overview

The backend is structured around modular routes corresponding to the metric categories and core application features. All routes are prefixed with `/api/v1`.

### 2.1 Areas & Neighborhoods
- **`GET /areas`**
  - **Description:** Searches for neighborhoods based on query parameters.
  - **Query Params:** `city`, `minScore`, `budgetMax`
  - **Response:** Array of neighborhood overview objects.

- **`GET /areas/:slug`**
  - **Description:** Retrieves the comprehensive intelligence report for a specific neighborhood, including all 7 dimension scores.
  - **Response:** Full neighborhood object (Safety, AQI, Healthcare, etc.).

### 2.2 Intelligence Metrics
These endpoints wrap the external data sources, applying caching and our weighted algorithms.

- **`GET /metrics/safety/:slug`**
  - **Internal Source:** FBI Crime Data
  - **Returns:** Crime index, police response times, and safety score (Max 30 points).

- **`GET /metrics/aqi/:slug`**
  - **Internal Source:** OpenAQ API
  - **Returns:** Real-time PM2.5/PM10 readings and AQI score (Max 20 points).

- **`GET /metrics/healthcare/:slug`**
  - **Internal Source:** Google Places (Filtering for hospitals, clinics)
  - **Returns:** Healthcare accessibility score (Max 15 points).

- **`GET /metrics/education/:slug`**
  - **Internal Source:** School APIs
  - **Returns:** Top-rated schools density and education score (Max 15 points).

- **`GET /metrics/infrastructure/:slug`**
  - **Internal Source:** OpenStreetMap
  - **Returns:** Road quality, transit density, and infrastructure score (Max 10 points).

- **`GET /metrics/environment/:slug`**
  - **Internal Source:** EPA SDWIS & Walk Score
  - **Returns:** Water quality and walkability metrics (Max 10 points combined).

### 2.3 User Operations
- **`POST /auth/register`** & **`POST /auth/login`**
  - JWT-based authentication.
- **`GET /user/profile`**
  - Retrieve saved neighborhoods, preferences, and recent activity.
- **`POST /user/saved/:slug`**
  - Save a neighborhood to the user's dashboard.

## 3. Service Layer Architecture

The NeighborhoodIQ backend strictly follows a Service-Oriented Architecture (SOA). All core business logic, third-party API integrations, and scoring algorithms are isolated within the `server/src/services/` directory.

### Core Data Services
These services are responsible for fetching raw data from external APIs and normalizing it into standard formats.
*   **`aqi.service.js`**: Integrates with the OpenAQ API. Caches real-time particulate matter (PM2.5/PM10) data to reduce API costs and latency.
*   **`crime.service.js`**: Connects to FBI Crime Data and local municipal police databases. Parses unstructured incident reports into standardized safety metrics.
*   **`education.service.js`**: Interfaces with school rating APIs (like GreatSchools). Calculates school density and average institutional ratings per zip code.
*   **`healthcare.service.js`**: Utilizes the Google Places API to map proximity to emergency rooms, specialized clinics, and general practitioners.
*   **`infrastructure.service.js`**: Parses OpenStreetMap (OSM) data to evaluate road networks, public transit density, and broadband availability.
*   **`water.service.js`**: Integrates with the EPA Safe Drinking Water Information System (SDWIS) to check for historical violations and water quality baselines.

### Application Logic Services
These services handle the internal state, user interactions, and cross-cutting concerns.
*   **`area.service.js`**: The central orchestrator for neighborhood data. It aggregates outputs from the various data services to build complete neighborhood profiles.
*   **`auth.service.js`**: Handles user registration, password hashing (bcrypt), and issuing/verifying JWT tokens.
*   **`compare.service.js`**: Contains the logic for calculating deltas and generating side-by-side matrices for multiple neighborhoods.
*   **`notification.service.js`**: Manages the logic for sending push notifications or emails regarding price drops, AQI changes, or new safety alerts.
*   **`review.service.js`**: Manages user-generated content, aggregating community reviews, calculating sentiment, and maintaining anti-spam measures.
*   **`score.service.js`**: The proprietary calculation engine. It takes the normalized data from the Core Data Services, applies the weighted algorithm (e.g., Safety 30%, AQI 20%), and outputs the final composite out of 100.

---

## 4. Postman Collection

A complete Postman Collection file (`NeighborhoodIQ_Postman_Collection.json`) is available in the root directory. You can import this file directly into Postman to test all routes, view expected request payloads, and see mock responses.
