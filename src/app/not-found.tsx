import Link   from 'next/link'
import { Button } from '@components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="text-sm font-medium text-elth-teal uppercase tracking-widest mb-4">404</p>
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved or been removed.
      </p>
      <Button asChild size="lg">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}
