import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

function getMariaDbAdapterConfig() {
  const envUrl = process.env.DATABASE_URL || process.env.MYSQL_URL || process.env.DB_URL

  if (envUrl) {
    try {
      const url = new URL(envUrl)
      const cfg: Record<string, any> = {
        host: url.hostname,
        user: url.username ? decodeURIComponent(url.username) : undefined,
        password: url.password ? decodeURIComponent(url.password) : undefined,
        database: url.pathname ? url.pathname.replace(/^\//, '') : undefined,
      }
      if (url.port) cfg.port = Number(url.port)
      Object.keys(cfg).forEach((k) => cfg[k] === undefined && delete cfg[k])
      return cfg
    } catch (e) {
      // fall through to env var parsing
    }
  }

  const cfg: Record<string, any> = {
    host: process.env.DATABASE_HOST || process.env.DB_HOST || process.env.MYSQL_HOST,
    port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : undefined,
    user: process.env.DATABASE_USER || process.env.DB_USER,
    password: process.env.DATABASE_PASSWORD || process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME || process.env.DB_NAME || process.env.MYSQL_DATABASE,
  }
  Object.keys(cfg).forEach((k) => cfg[k] === undefined && delete cfg[k])
  return cfg
}

let _prisma: PrismaClient | undefined

export function getPrisma() {
  if (!_prisma) {
    const adapterConfig = getMariaDbAdapterConfig()
    _prisma = new PrismaClient({
      adapter: new PrismaMariaDb(adapterConfig),
    })
  }
  return _prisma
}
