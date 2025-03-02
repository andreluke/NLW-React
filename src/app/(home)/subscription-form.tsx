'use client'

import { Button, InputField, InputIcon, InputRoot } from '@/components'
import { subscribeToEvent } from '@/http/api'
import { type SubmissionSchema, submissionSchema } from '@/schemas/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmissionSchema>({
    resolver: zodResolver(submissionSchema),
  })

  async function onSubscribe({ email, name }: SubmissionSchema) {
    const referrer = searchParams.get('referrer')
    const { subscriberId } = await subscribeToEvent({ email, name, referrer })

    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form
      className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6 w-full md: max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          {' '}
          <InputRoot error={!!errors.name}>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot error={!!errors.email}>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="Email"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit">
          Confirmar <ArrowRight />
        </Button>
      </div>
    </form>
  )
}
