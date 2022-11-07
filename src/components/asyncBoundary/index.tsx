import {
  ComponentType,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Suspense,
  useCallback,
} from 'react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import {ErrorBoundary, FallbackProps} from "react-error-boundary";
import CustomSuspense from "./customSuspense";

interface Props {
  errorFallback: ReactElement,
  suspenseFallback: ReactElement,
  children: ReactElement,
}

const AsyncBoundary = ({
  suspenseFallback,
  errorFallback,
  children,
}: PropsWithChildren<Props>) => {
  const { reset } = useQueryErrorResetBoundary()
  const resetHandler = useCallback(() => {
    reset()
  }, [reset])

  return (
    // <ErrorBoundary resetQuery={resetHandler} errorFallback={errorFallback}>
    <ErrorBoundary fallback={errorFallback}>
      <CustomSuspense fallback={suspenseFallback}>{children}</CustomSuspense>
    </ErrorBoundary>
    // </ErrorBoundary>
  )
}

export default AsyncBoundary
