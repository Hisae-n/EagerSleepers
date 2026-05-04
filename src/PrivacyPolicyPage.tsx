import ReactMarkdown from 'react-markdown'
import privacyPolicy from '@docs/privacy-policy.md?raw'

export function PrivacyPolicyPage() {
  return (
    <main className="page">
      <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
    </main>
  );
}