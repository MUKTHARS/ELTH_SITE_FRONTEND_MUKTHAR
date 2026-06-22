'use client'

import { useEffect } from 'react'
import { Button }    from '@components/ui/button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="text-sm font-medium text-red-500 uppercase tracking-widest mb-4">Error</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h2>
      <p className="text-gray-500 mb-8">An unexpected error occurred. Please try again.</p>
      <Button onClick={reset} size="lg">Try again</Button>
    </div>
  )
}
