# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /backend

# Install system dependencies for MySQL
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential pkg-config libmariadb-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /backend/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the project code
COPY . /backend/

# Expose the port the backend runs on
EXPOSE 8000

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "server.wsgi:application"]