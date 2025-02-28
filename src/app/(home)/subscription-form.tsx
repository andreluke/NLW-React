import { InputRoot, InputIcon, InputField, Button } from "@/components";
import { User, Mail, ArrowRight } from "lucide-react";

export function SubscriptionForm() {
  return (
    <form
          className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6 w-full md: max-w-[440px]"
          action=""
        >
          <h2 className="font-heading font-semibold text-gray-200 text-xl">
            Inscrição
          </h2>
          <div className="space-y-2">
            <InputRoot>
              <InputIcon>
                <User />
              </InputIcon>
              <InputField type="text" placeholder="Nome completo" />
            </InputRoot>
            <InputRoot>
              <InputIcon>
                <Mail />
              </InputIcon>
              <InputField type="email" placeholder="Email" />
            </InputRoot>
            <Button type="submit">
              Confirmar <ArrowRight />
            </Button>
          </div>
        </form>
  )
}