# MagicStream 🎬✨

A full-stack movie streaming demo platform built with **React**, **Go**, **Gin**, **MongoDB**, **JWT authentication**, and **LangChainGo + OpenAI**.

MagicStream demonstrates a modern client-server architecture for browsing movies, authenticating users, streaming movie/video content, generating personalized recommendations, and using an LLM to classify administrator movie reviews into ranking categories.

> **Note:** This project simulates a streaming platform for learning and portfolio purposes. Movie playback in the client is handled through `react-player` using video IDs/URLs stored with the movie data.

---

## ✨ Key Features

- 🎬 Browse a catalog of movies from MongoDB
- 🔐 User registration, login, logout, and refresh-token flow
- 🍪 JWT access and refresh tokens stored in HttpOnly cookies
- 🛡️ Protected frontend and backend routes
- 👤 Role-aware authorization with an `ADMIN` review workflow
- ❤️ User favorite genres stored in the user profile
- 🎯 Personalized movie recommendations based on favorite genres and movie ranking
- 🤖 AI-assisted admin review classification using **LangChainGo + OpenAI**
- ⭐ AI-generated review categories such as `Excellent`, `Good`, `Okay`, `Bad`, and `Terrible`
- ▶️ Movie/video playback using **React Player**
- ⚡ REST API built with **Go + Gin**
- 🍃 MongoDB persistence for users, movies, genres, rankings, and tokens
- 🌐 Configurable CORS support for frontend/backend deployment
- 📦 Included JSON seed data for movies, genres, rankings, and users

---

## 🧠 How the AI Feature Works

MagicStream uses AI specifically in the **administrator review-ranking workflow**.

When an administrator submits a movie review:

1. The backend loads the valid ranking labels from MongoDB.
2. It builds a prompt containing the allowed ranking names.
3. The review text is sent to an OpenAI model through **LangChainGo**.
4. The LLM returns a ranking label such as `Excellent`, `Good`, `Okay`, `Bad`, or `Terrible`.
5. The backend maps the returned label to its numeric ranking value.
6. The movie document is updated with the admin review and ranking.

The recommendation endpoint then uses the authenticated user's **favorite genres** and the stored movie ranking to return relevant movies, ordered by ranking.

```text
Admin Review
    │
    ▼
Go / Gin Controller
    │
    ├── Load ranking labels from MongoDB
    │
    ▼
LangChainGo
