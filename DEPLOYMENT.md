# 🚀 دليل النشر والتوصيل - Deployment Guide

## المتطلبات المجانية الموصى بها:

### 1️⃣ قاعدة البيانات - Supabase
- **رابط**: https://supabase.com
- **الخطوات**:
  1. إنشاء حساب مجاني
  2. إنشاء project جديد
  3. نسخ `Project URL` و `API Key`
  4. الذهاب إلى Settings → Database → Connection String
  5. اختيار PostgreSQL URI

### 2️⃣ استضافة Backend - Render
- **رابط**: https://render.com
- **الخطوات**:
  1. إنشاء حساب مجاني (GitHub login)
  2. New → Web Service
  3. اختيار Repository الحالي
  4. Runtime: Node
  5. Build Command: `pnpm install && pnpm build`
  6. Start Command: `cd apps/cms && npm start`

### 3️⃣ استضافة Frontend - Vercel
- **رابط**: https://vercel.com
- **الخطوات**:
  1. Import Repository
  2. اختيار `apps/web` كـ Root Directory
  3. إضافة Environment Variables
  4. Deploy

### 4️⃣ Google AI - مجاني
- **رابط**: https://makersuite.google.com/app/apikeys
- **الخطوات**:
  1. الذهاب للرابط
  2. Create API Key
  3. Copy الـ Key

### 5️⃣ Groq AI - مجاني
- **رابط**: https://console.groq.com/keys
- **الخطوات**:
  1. إنشاء حساب مجاني
  2. Create API Key
  3. Copy الـ Key

---

## متغيرات البيئة - Environment Variables

### لـ Render (Backend):
```env
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=strong-secret-key
GOOGLE_API_KEY=your-key
GROQ_API_KEY=your-key
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your-paypal-id
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_API_URL=https://your-api.onrender.com/api
```

### لـ Vercel (Frontend):
```env
VITE_API_URL=https://your-api.onrender.com/api
```

---

## الخطوات السريعة للبدء:

### محلياً (Locally):
```bash
# 1. نسخ البيئة
cp .env.example .env

# 2. إضافة متغيرات البيئة
# حدث DATABASE_URL و API keys في .env

# 3. تثبيت المتعلقات
pnpm install

# 4. تشغيل
pnpm dev
```

---

## ملاحظات مهمة:

⚠️ **Render Limitation**: الـ free tier ينام بعد 15 دقيقة عدم استخدام (يستيقظ فوراً)

⚠️ **Supabase Limit**: 500MB للـ free tier (كافي للبداية)

✅ **بلا حد زمني**: الخدمات أعلاه مجانية للأبد بدون انقطاع

---

## روابط مفيدة:

- 📖 Payload CMS Docs: https://payloadcms.com/docs
- 🗄️ Supabase Docs: https://supabase.com/docs
- 🚀 Render Docs: https://render.com/docs
- 📱 Vercel Docs: https://vercel.com/docs
- 🤖 Google AI: https://ai.google.dev/docs
- 🎯 Groq: https://console.groq.com/docs

