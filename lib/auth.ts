import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.ADMIN_SECRET || 'fallback-secret-32-chars-minimum!!')

export async function createToken() {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyToken(token: string) {
  try {
    await jwtVerify(token, secret)
    return true
  } catch { return false }
}
