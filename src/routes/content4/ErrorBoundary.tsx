import { Component, ErrorInfo, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h2 className="text-xl font-bold mb-2">에러가 발생했습니다</h2>
          <p>{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            다시 시도
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default function ErrorBoundaryExample() {
  return (
    <div className="p-4">
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    </div>
  )
}

function ErrorComponent() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('의도적으로 발생시킨 에러입니다.')
  }

  return (
    <button onClick={() => setShouldError(true)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
      에러 발생시키기
    </button>
  )
}
