import React, { cloneElement, ReactElement } from 'react'

interface Props {
  resetQuery?: () => void;
  errorFallback: ReactElement;
  children: ReactElement;
}

interface States {
  hasError: boolean;
  error?: Error;
}
const initialState = { hasError: false, error: undefined }

export default class ErrorBoundary extends React.Component<Props, States> {
  constructor(props: any) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  resetBoundary = () => {
    this.props.resetQuery?.()
    this.setState(initialState)
  }

  render() {
    if (this.state.hasError) {
      const { errorFallback } = this.props
      const { error } = this.state
      return cloneElement(errorFallback, {
        error,
        resetBoundary: this.resetBoundary,
      })
    }

    // const newChildren = cloneElement(this.props.excludeSuspense, {
    //   resetBoundary: this.resetBoundary,
    // })

    return this.props.children
  }
}
