import {
  LoginForm,
  SignupForm,
  VerifyEmailForm,
  ForgotPasswordForm,
  ResetPasswordForm,
} from 'wasp/client/auth'
import { Link } from 'react-router'

export function Login() {
  return (
    <Layout>
      <LoginForm />
      <br />
      <span className="text-sm font-medium text-gray-900">
        Don't have an account yet? <Link to="/signup">go to signup</Link>.
      </span>
      <br />
      <span className="text-sm font-medium text-gray-900">
        Forgot your password? <Link to="/request-password-reset">reset it</Link>.
      </span>
    </Layout>
  )
}

export function Signup() {
  return (
    <Layout>
      <SignupForm />
      <br />
      <span className="text-sm font-medium text-gray-900">
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
      <span className="text-sm font-medium text-gray-900">
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
      <span className="text-sm font-medium text-gray-900">
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
    <div className="min-h-screen flex flex-col bg-white">

      <div className="flex-1">
        {children}
      </div>

    <Footer />  
    </div>
  )
}
