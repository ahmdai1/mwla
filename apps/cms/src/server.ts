import express from 'express'
import payload from 'payload'
import cors from 'cors'
import { GoogleGenerativeAI } from '@google/generative-ai'
import Groq from 'groq-sdk'

const app = express()
app.use(cors({ origin: true }))
app.use(express.json())

// Initialize AI clients
const googleAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// AI endpoints
app.post('/api/ai/generate', async (req, res) => {
  try {
    const { prompt, model = 'google' } = req.body

    if (model === 'google') {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const result = await model.generateContent(prompt)
      const response = result.response
      const text = response.text()
      res.json({ text })
    } else if (model === 'groq') {
      const message = await groq.messages.create({
        model: 'mixtral-8x7b-32768',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      })
      res.json({ text: message.content[0].type === 'text' ? message.content[0].text : '' })
    }
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' })
  }
})

const start = async () => {
  try {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'changeme',
      express: app,
      watch: process.env.NODE_ENV !== 'production',
    })

    const PORT = Number(process.env.PORT) || 3000
    app.listen(PORT, () => {
      console.log(`✅ Payload CMS is running on http://localhost:${PORT}`)
      console.log(`📝 Admin panel: http://localhost:${PORT}/admin`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

start()
