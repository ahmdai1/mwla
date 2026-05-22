# 🚀 MWLAI

AI-powered tools directory, deals aggregator, and affiliate marketing platform built with modern technologies.

## ✨ Features

- **AI Integration**: Google Gemini & Groq AI for content generation
- **CMS**: Payload CMS with PostgreSQL
- **Frontend**: React + Vite + TypeScript
- **Shared Packages**: UI components, types, and utilities
- **Monorepo**: pnpm workspaces for scalable architecture

## 📁 Project Structure

```
├── apps/
│   ├── cms/              # Payload CMS Backend
│   └── web/              # React Frontend
├── packages/
│   ├── types/            # Shared TypeScript types
│   ├── ui/               # Shared React components
│   └── utils/            # Shared utilities
└── docs/                 # Documentation
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS, React Router
- **Backend**: Payload CMS 3, Express, Node.js
- **Database**: PostgreSQL (Supabase)
- **AI**: Google Gemini, Groq
- **Payments**: PayPal
- **Hosting**: Vercel (Frontend), Render (Backend)

## 📋 Prerequisites

- Node.js 18+
- pnpm 8.11.0+
- PostgreSQL database (or Supabase account)
- API keys for AI services (free tier available)

## 🚀 Quick Start

### Local Development

1. **Clone and install**:
   ```bash
   git clone https://github.com/ahmdai1/mwla.git
   cd mwla
   pnpm install
   ```

2. **Configure environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Run development servers**:
   ```bash
   pnpm dev
   ```

   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000
   - CMS Admin: http://localhost:3000/admin

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev servers (parallel) |
| `pnpm build` | Build all packages |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier |
| `pnpm db:migrate` | Run database migrations |

## 🌐 Free Services Setup

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide to these free services:

- **Database**: Supabase (500MB free PostgreSQL)
- **Backend**: Render (free Web Service, sleeps after 15 min)
- **Frontend**: Vercel (unlimited free deployments)
- **AI**: Google Gemini & Groq (free APIs)
- **Payments**: PayPal (free integration)

## 📝 Environment Variables

See `.env.example` for all required variables. Key ones:

```env
DATABASE_URL=postgresql://...
GOOGLE_API_KEY=...
GROQ_API_KEY=...
PAYLOAD_SECRET=...
```

## 🔗 API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/ai/generate` | POST | Generate content with AI |
| `/health` | GET | Health check |

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Vite Guide](https://vitejs.dev/)
- [React Docs](https://react.dev)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💡 Support

For issues and questions, please open an issue on GitHub.

---

Made with ❤️ by MWLAI Team
