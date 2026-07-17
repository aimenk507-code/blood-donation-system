declare module 'jsonwebtoken' {
  export interface SignOptions {
    expiresIn?: string | number
  }

  export function sign(payload: unknown, secret: string, options?: SignOptions): string
  export function verify(token: string, secret: string): unknown
}
