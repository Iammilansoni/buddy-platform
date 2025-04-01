"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        An unexpected error has occurred. We've been notified and are working to fix the issue.
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}

