# ---------- Build frontend ----------
    FROM node:20 AS frontend-build

    WORKDIR /home/src/frontend
    COPY frontend/ ./
    
    RUN npm install && npm run build
    
    # ---------- Build backend ----------
    FROM python:3.12-slim AS backend
    
    WORKDIR /home/src
    
    # Copy backend source code
    COPY backend/ ./backend/
    
    # Copy frontend build output from previous stage
    COPY --from=frontend-build /home/src/frontend/build ./frontend_dist
    
    # Install backend dependencies
    RUN pip install --no-cache-dir -r backend/requirements.txt
    
    # Expose port 8080 for the web app
    EXPOSE 8080
    
    # Start the backend API server
    CMD ["python", "backend/app.py"]
    