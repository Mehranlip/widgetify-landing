import type { ReactNode } from 'react'

interface PageWrapperProps {
	children: ReactNode
	className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
	return (
		<div className={`container max-w-6xl px-10 mx-auto ${className}`}>{children}</div>
	)
}
