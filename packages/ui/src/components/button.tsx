import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-400'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-amber-500 text-slate-950 hover:bg-amber-400',
    secondary: 'border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800',
    ghost: 'bg-transparent text-slate-200 hover:bg-white/10',
  }

  const classNames = [base, variants[variant], className].filter(Boolean).join(' ')

  return <button className={classNames} {...props} />
}
