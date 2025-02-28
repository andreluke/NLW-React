import { IconButton, InputField, InputIcon, InputRoot } from '@/components'
import { Copy, Link } from 'lucide-react'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        defaultValue="http://localhost:3000/invites/5645645454efds"
        readOnly
      />
      <IconButton className="-mr-2">
        <Copy />
      </IconButton>
    </InputRoot>
  )
}
