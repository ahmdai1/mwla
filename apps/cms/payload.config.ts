import { buildConfig } from 'payload/config'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import Tools from './src/collections/Tools'
import Users from './src/collections/Users'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Users, Tools],
  editor: lexicalEditor(),
  db: postgresAdapter({
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/payload',
  }),
  secret: process.env.PAYLOAD_SECRET || 'changeme',
  typescript: {
    outputFile: './payload-types.ts',
  },
})
