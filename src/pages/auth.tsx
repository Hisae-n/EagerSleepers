import {
  LoginForm,
  VerifyEmailForm,
  ForgotPasswordForm,
  ResetPasswordForm,
  signup,
} from 'wasp/client/auth'
import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'

export function Login() {
  return (
    <Layout>
      <LoginForm />
      <br />
      <span>
        Don't have an account yet? <Link to="/signup">go to signup</Link>.
      </span>
      <br />
      <span>
        Forgot your password? <Link to="/request-password-reset">reset it</Link>.
      </span>
    </Layout>
  )
}

export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [needsConfirmation, setNeedsConfirmation] = useState(false)
  const canSubmit = email.trim() !== '' && password !== '' && hasAgreedToTerms

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!hasAgreedToTerms) {
      setError(new Error('利用規約に同意してください。'))
      return
    }

    setError(null)

    try {
      const signupData = { email, password, tosAgreed: true }
      await signup(signupData)
      setNeedsConfirmation(true)
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Sign up failed.'))
    }
  }

  if (needsConfirmation) {
    return (
      <Layout>
        <p>
          確認メールを送信しました。メール内のリンクからアカウントを有効化してください。
        </p>
        <br />
        <span>
          I already have an account (<Link to="/login">go to login</Link>).
        </span>
      </Layout>
    )
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        {error && <p>Error: {error.message}</p>}

        <label>
          <span>Email</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
		<br />
        <label>
          <span>Password</span>
          <input
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
		<br />
        <label>
          <input
            type="checkbox"
            checked={hasAgreedToTerms}
            onChange={(event) => setHasAgreedToTerms(event.target.checked)}
          />
          <span>
            <Link to="/terms-of-service" target="_blank" rel="noreferrer">
              利用規約
            </Link>
            に同意します
          </span>
        </label>

        <button type="submit" disabled={!canSubmit}>
          Sign Up
        </button>
      </form>
      <br />
      <span>
        I already have an account (<Link to="/login">go to login</Link>).
      </span>
    </Layout>
  )
}

export function EmailVerification() {
  return (
    <Layout>
      <VerifyEmailForm />
      <br />
      <span>
        If everything is okay, <Link to="/login">go to login</Link>
      </span>
    </Layout>
  )
}

export function RequestPasswordReset() {
  return (
    <Layout>
      <ForgotPasswordForm />
    </Layout>
  )
}

export function PasswordReset() {
  return (
    <Layout>
      <ResetPasswordForm />
      <br />
      <span>
        If everything is okay, <Link to="/login">go to login</Link>
      </span>
    </Layout>
  )
}

// A layout component to center the content
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
