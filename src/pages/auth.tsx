import {
  LoginForm,
  VerifyEmailForm,
  ForgotPasswordForm,
  ResetPasswordForm,
  signup,
} from 'wasp/client/auth'
import '../styles.css'
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
  const [hasAgreedToPrivacyPolicy, setHasAgreedToPrivacyPolicy] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [needsConfirmation, setNeedsConfirmation] = useState(false)
  const canSubmit = email.trim() !== '' && password !== '' && hasAgreedToTerms && hasAgreedToPrivacyPolicy

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!hasAgreedToTerms) {
      setError(new Error('利用規約に同意してください。'))
      return
    }
    if (!hasAgreedToPrivacyPolicy) {
      setError(new Error('プライバシーポリシーに同意してください。'))
      return
    }

    setError(null)

    try {
      const signupData = { email, password, tosAgreed: true, ppAgreed: true }
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
        <label>
          <input
            type="checkbox"
            checked={hasAgreedToPrivacyPolicy}
            onChange={(event) => setHasAgreedToPrivacyPolicy(event.target.checked)}
          />
          <span>
            <Link to="/privacy-policy" target="_blank" rel="noreferrer">
              プライバシーポリシー
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


import { Footer } from "../components/Footer"

// A layout component to center the content
{/*export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-white">
      <div className="flex min-h-[75vh] min-w-full items-center">
        <div className="h-full w-full max-w-sm bg-white p-5">
          <div>
            {children}
          </div>

        </div>
      </div>
    <Footer />
    </div>
  )
}*/}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content" data-theme="forest">

      <div className="flex-1">
        {children}
      </div>

      <Footer />  
    </div>
  )
}
