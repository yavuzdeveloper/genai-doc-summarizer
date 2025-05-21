# 🧠 GenAI Document Summarizer

## Overview

This application is a full-stack AI-powered document summarization tool that allows users to upload or paste text documents and interact using natural language queries. It processes documents using a Large Language Model based on the publicly available `ccdv/arxiv-summarization` dataset. The app features a React frontend and a Python backend, both containerized for easy deployment.

---

## Architecture

- **Frontend:** React-based UI for document input, chat interaction, and displaying summaries.
- **Backend:** Python API server (e.g., FastAPI or Flask) running the summarization model and handling inference requests.
- **Model:** Uses pretrained transformer models for summarization from HuggingFace's `ccdv/arxiv-summarization` dataset.
- **Communication:** Frontend communicates with backend over HTTP API.

---

## Features

- Upload or paste UTF-8 encoded text documents.
- Ask natural language questions (e.g. "Summarize dropout and its use in deep learning").
- View chat history (previous prompts and responses).
- Clear error handling and UI feedback.
- Dark mode toggle.
- Responsive design for mobile and desktop.
- API key input UI (if applicable).
- Runs entirely in-browser except backend API calls.
- Dockerized for easy setup.

---

## Getting Started

### Prerequisites

- Docker installed on your system.

### Running the Application

Build the Docker image:

```bash
docker build -t genai-summarizer .
```
