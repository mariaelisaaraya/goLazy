"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wallet, CheckCircle, ExternalLink, Copy } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DepositConfirmationPage() {
  const router = useRouter()
  const [step, setStep] = useState(1) // 1: Connect, 2: Confirm, 3: Processing, 4: Success
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress] = useState("0x1234...5678")
  const [transactionHash] = useState("0xabcd1234efgh5678ijkl9012mnop3456qrst7890")

  const goalData = {
    title: "Correr 5km diarios por 60 días",
    amount: 50,
    duration: 60,
    category: "Fitness y Salud",
  }

  const handleConnectWallet = () => {
    setWalletConnected(true)
    setStep(2)
  }

  const handleConfirmDeposit = () => {
    setStep(3)
    // Simulate blockchain transaction
    setTimeout(() => {
      setStep(4)
    }, 3000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleFinish = () => {
    router.push("/goals/1")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/goals/new" className="flex items-center text-volcanic hover:text-peach transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Link>

          <div className="flex items-center space-x-2">
            <LazyMascot size="sm" />
            <span className="text-xl font-bold text-volcanic">GoLazy</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Step 1: Connect Wallet */}
        {step === 1 && (
          <div className="text-center">
            <LazyMascot
              size="xl"
              animate={true}
              message="¡Casi listo! Solo necesitas conectar tu wallet para asegurar tu compromiso."
              className="mb-8"
            />

            <Card className="p-8">
              <h1 className="text-3xl font-bold text-volcanic mb-4">Confirmar Depósito</h1>
              <p className="text-volcanic-600 mb-6">
                Para crear tu meta, necesitas depositar ${goalData.amount} USDC como garantía de compromiso.
              </p>

              {/* Goal Summary */}
              <div className="bg-primary-50 rounded-xl p-6 mb-6 text-left">
                <h3 className="font-semibold text-volcanic mb-3">Resumen de tu meta:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-volcanic-600">Meta:</span>
                    <span className="font-medium">{goalData.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-volcanic-600">Categoría:</span>
                    <Badge className="bg-mint text-volcanic">{goalData.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-volcanic-600">Duración:</span>
                    <span className="font-medium">{goalData.duration} días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-volcanic-600">Monto:</span>
                    <span className="font-bold text-peach text-lg">${goalData.amount} USDC</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleConnectWallet}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Conectar Wallet</span>
              </Button>

              <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-volcanic-600">
                <span>Compatible con:</span>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">🦊</div>
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">🔗</div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Step 2: Confirm Deposit */}
        {step === 2 && (
          <div className="text-center">
            <Card className="p-8">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-mint mr-3" />
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-volcanic">Wallet Conectado</h2>
                  <p className="text-volcanic-600">{walletAddress}</p>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-volcanic mb-4">Confirmar Depósito</h1>
              <p className="text-volcanic-600 mb-6">
                Estás a punto de depositar <span className="font-bold text-peach">${goalData.amount} USDC</span> en el
                smart contract. Este monto se devolverá automáticamente si cumples tu meta.
              </p>

              <div className="bg-mint-50 rounded-xl p-4 border border-mint-200 mb-6">
                <h4 className="font-medium text-volcanic mb-2">🔒 Seguridad garantizada:</h4>
                <ul className="text-sm text-volcanic-600 space-y-1 text-left">
                  <li>• Smart contract auditado en Stellar</li>
                  <li>• Fondos bloqueados hasta el final de tu meta</li>
                  <li>• Devolución automática si cumples</li>
                  <li>• Transparencia total en blockchain</li>
                </ul>
              </div>

              <Button onClick={handleConfirmDeposit} className="btn-primary w-full text-lg py-4">
                Confirmar Depósito de ${goalData.amount} USDC
              </Button>
            </Card>
          </div>
        )}

        {/* Step 3: Processing */}
        {step === 3 && (
          <div className="text-center">
            <Card className="p-8">
              <div className="animate-spin w-16 h-16 border-4 border-primary-200 border-t-peach rounded-full mx-auto mb-6"></div>

              <h1 className="text-3xl font-bold text-volcanic mb-4">Procesando Transacción</h1>
              <p className="text-volcanic-600 mb-6">
                Tu depósito se está procesando en la blockchain de Stellar. Esto puede tomar unos momentos...
              </p>

              <LazyMascot
                size="lg"
                animate={true}
                message="¡Paciencia! Estoy trabajando duro para asegurar tu depósito."
              />
            </Card>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center">
            <Card className="p-8">
              <LazyMascot
                size="xl"
                animate={true}
                message="¡Felicidades! Tu meta ha sido creada exitosamente. ¡Estoy muy emocionado de acompañarte!"
                className="mb-6"
              />

              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-volcanic mb-4">¡Meta Creada con Éxito!</h1>
              <p className="text-volcanic-600 mb-6">
                Tu depósito de <span className="font-bold text-peach">${goalData.amount} USDC</span> ha sido asegurado
                en el smart contract. ¡Ya puedes comenzar tu viaje hacia el éxito!
              </p>

              <div className="bg-mint-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-volcanic mb-3 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-mint" />
                  Transacción Confirmada
                </h3>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="text-volcanic-600">Hash:</span>
                  <code className="bg-white px-2 py-1 rounded text-xs">{transactionHash.slice(0, 20)}...</code>
                  <Button size="sm" variant="ghost" onClick={() => copyToClipboard(transactionHash)} className="p-1">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-1">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={handleFinish} className="btn-primary w-full text-lg py-4">
                  Ver Mi Meta
                </Button>
                <Link href="/dashboard">
                  <Button className="btn-secondary w-full">Ir al Dashboard</Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
