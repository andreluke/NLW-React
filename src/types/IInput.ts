import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

interface InputIconProps extends ComponentProps<'span'> {}

interface InputFieldProps extends ComponentProps<'input'> {}

export type { InputRootProps, InputIconProps, InputFieldProps }
