import dynamic from 'next/dynamic'
import { ButtonHTMLAttributes } from 'react'
import type { IconComponentType } from '@/types'

type VariantType = 'style1' | 'style2' | 'style3' | 'style4' | 'style6'

// const DoubleRightArrow: IconComponentType = dynamic(() => import('@/components/icons/DoubleRightArrow.svg'))

export interface IButtonProps {
  /** 樣式 */
  variant?: VariantType
  /** 按鈕內文字 */
  text?: string | React.ReactNode
  /** 按鈕children。text為true，則無作用 */
  children?: React.ReactNode
  /** 按鈕disabled */
  disabled?: boolean
}

const Variants: {
  [key in VariantType]: {
    init: string
    hover: string
    active: string
    disabled: string
  }
} = {
  style1: {
    init: 'bg-foundation-primary-2 rounded-md py-[5px] px-5',
    hover: 'hover:bg-foundation-primary-hover-2',
    active: 'active:bg-foundation-primary-active-2',
    disabled: 'disabled:bg-primitives-light-primary-01-disable disabled:cursor-default',
  },
  style2: {
    init: 'bg-foundation-primary-1 border border-foundation-primary-2 py-[5px] px-5 rounded-md',
    hover: 'hover:border-foundation-primary-hover-2',
    active: 'active:border-foundation-primary-active-2',
    disabled:
      'disabled:border-primitives-light-primary-01-disable text-primitives-light-primary-01-disable disabled:cursor-default',
  },
  style3: {
    init: 'bg-foundation-primary-1 py-4 rounded-xl w-full',
    hover: 'hover:bg-foundation-primary-hover-1',
    active: 'active:bg-foundation-primary-active-2',
    disabled: 'disabled:bg-primitives-light-primary-01-disable disabled:cursor-default',
  },
  style4: {
    init: 'bg-foundation-primary-1 py-[10px] px-[88px] rounded-[12px]',
    hover: 'hover:bg-foundation-primary-hover-1',
    active: 'active:bg-foundation-primary-active-2',
    disabled: 'disabled:bg-primitives-light-primary-01-disable disabled:cursor-default',
  },
  style6: {
    init: 'bg-foundation-primary-1 py-[10px] px-5 rounded-[22px]',
    hover: 'hover:bg-foundation-primary-hover-1',
    active: 'active:bg-foundation-primary-active-2',
    disabled: 'disabled:bg-primitives-light-primary-01-disable disabled:cursor-default',
  },
}

const Button = ({
  variant = 'style1',
  text,
  children,
  disabled = false,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps) => {
  const styleVariants = Variants[variant]
  return (
    <button
      className={`relative text-white cursor-pointer ${styleVariants.disabled} ${styleVariants.init} ${styleVariants.hover} ${styleVariants.active}`}
      disabled={disabled}
      {...rest}
    >
      {text || children}
      {/* {variant === 'style4' && (
        <div className="absolute right-5 top-3">
          <DoubleRightArrow width={20} height={20} />
        </div>
      )} */}
    </button>
  )
}
export default Button
