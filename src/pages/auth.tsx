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
import { useLanguage } from '../LanguageContext'

export function Login() {
	const { t } = useLanguage()

	return (
		<Layout>
			<h1>{t('auth.loginTitle')}</h1>
			<LoginForm />
			<br />
			<span>
				{t('auth.noAccountYet')} <Link to="/signup">{t('auth.goToSignup')}</Link>.
			</span>
			<br />
			<span>
				{t('auth.forgotPasswordPrompt')} <Link to="/request-password-reset">{t('auth.resetIt')}</Link>.
			</span>
		</Layout>
	)
}

export function Signup() {
	const { t } = useLanguage()
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
      		setError(error instanceof Error ? error : new Error(t('auth.signupFailedError')))
    	}
  	}

  	if (needsConfirmation) {
    	return (
      		<Layout>
        		<p>
          			{t('auth.confirmationEmailSent')}
        		</p>
        		<br />
        		<span>
          			{t('auth.alreadyHaveAccount')} (<Link to="/login">{t('auth.goToLogin')}</Link>).
        		</span>
      		</Layout>
    	)
  	}

  	return (
    	<Layout>
   			<form onSubmit={handleSubmit}>
        		<h1>{t('auth.signupTitle')}</h1>

        {error && <p>{t('auth.errorPrefix')} {error.message}</p>}

        <label>
          	<span>{t('auth.emailLabel')}</span>
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
          	<span>{t('auth.passwordLabel')}</span>
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
            	 	{t('auth.termsOfService1')}
            	<Link to="/terms-of-service" target="_blank" rel="noreferrer">
            	 	{t('auth.termsOfService2')}
            	</Link>
          	</span>
        </label>
        <label>
          	<input
            	type="checkbox"
            	checked={hasAgreedToPrivacyPolicy}
            	onChange={(event) => setHasAgreedToPrivacyPolicy(event.target.checked)}
          	/>
          	<span>
            	{t("auth.privacyConsent1")}
            	<Link to="/privacy-policy" target="_blank" rel="noreferrer">
            		{t("auth.privacyConsent2")}
            	</Link>
          	</span>
        </label>

        <button type="submit" disabled={!canSubmit}>
        	{t('auth.signupTitle')}
        </button>
      	</form>
      	<br />
      	<span>
    		{t('auth.alreadyHaveAccount')} (<Link to="/login">{t('auth.goToLogin')}</Link>).
      	</span>
    </Layout>
  )
}

export function EmailVerification() {
	const { t } = useLanguage()

  	return (
    	<Layout>
      		<VerifyEmailForm />
      		<br />
      		<span>
        		{t('auth.ifEverythingOkay')} <Link to="/login">{t('auth.goToLogin')}</Link>
      		</span>
    	</Layout>
  	)
}

export function RequestPasswordReset() {
	const { t } = useLanguage()
  	return (
    	<Layout>
			<h1>{t('auth.forgotPasswordTitle')}</h1>
      		<ForgotPasswordForm />
    	</Layout>
  	)
}

export function PasswordReset() {
	const { t } = useLanguage()
  	return (
    	<Layout>
      		<ResetPasswordForm />
      		<br />
      		<span>
        		{t('auth.ifEverythingOkay')} <Link to="/login">{t('auth.goToLogin')}</Link>
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
