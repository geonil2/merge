import {
  PropsWithChildren,
  ReactElement,
  useCallback,
} from 'react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import {ErrorBoundary} from "react-error-boundary";
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
    <ErrorBoundary fallback={errorFallback}>
      <CustomSuspense fallback={suspenseFallback}>{children}</CustomSuspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundary
