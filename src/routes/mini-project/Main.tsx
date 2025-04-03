import { Suspense } from 'react'
import { Trending } from './Trending'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryErrorResetBoundary } from '@tanstack/react-query'

export default function Main() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary fallback={<div>Error</div>} onReset={reset}>
          <Suspense fallback={<div>Loading...</div>}>
            <Trending />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
