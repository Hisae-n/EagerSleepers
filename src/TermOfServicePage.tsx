import ReactMarkdown from 'react-markdown'
import termOfService from '@docs/terms-of-service.md?raw'

export function TermOfServicePage() {
  return (
    <main className="page">
      <ReactMarkdown>{termOfService}</ReactMarkdown>
    </main>
  );
}
