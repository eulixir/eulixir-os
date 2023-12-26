import { z } from 'zod'

const envSchema = z.object({
  VITE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  VITE_WEATHER_API_KEY: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
