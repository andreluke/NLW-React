'use client'

import { IconButton, InputField, InputIcon, InputRoot } from '@/components'
import type { InviteLinkInputProps } from '@/types'
import { Copy, Link } from 'lucide-react'

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField defaultValue={inviteLink} readOnly />
      <IconButton className="-mr-2">
        <Copy className="size-5" onClick={copyLink} />
      </IconButton>
    </InputRoot>
  )
}
