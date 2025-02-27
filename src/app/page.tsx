import logo from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex justify-center gap-16 flex-col ">
        <div className="flex flex-col gap-8 items-center w-full max-w-[550px] md:items-start">
          <Image src={logo} alt="devstage" width={108.5} height={30} />
          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span> Summit 2025
          </h1>
        </div>
        <div className="flex gap-5 flex-col items-stretch md:flex-row">
          <div className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Sobre o evento
              </h2>
              <span className="text-purple font-semibold text-xs flex items-center gap-2">
                <Radio className="size-5" />
                AO VIVO
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 e 17 de março | Das 18h às 21h | Online e gratuito
            </p>
          </div>
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
        </div>
      </div>
    </main>
  )
}
