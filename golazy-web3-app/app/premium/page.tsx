"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Crown, Check, Star, TrendingUp, Shield, Zap, BarChart3, Users, Gift } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState("monthly")

  const plans = {
    monthly: {
      price: 9.99,
      period: "mes",
      savings: null,
    },
    yearly: {
      price: 79.99,
      period: "año",
      savings: 33,
    },
  }

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Historial completo de metas",
      description: "Accede a todas tus metas pasadas con evidencia y estadísticas detalladas",
      premium: true,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Análisis avanzado",
      description: "Reportes detallados de tu progreso y patrones de comportamiento",
      premium: true,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Puntos bonus",
      description: "Gana 50% más puntos en todas tus metas completadas",
      premium: true,
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Recompensas exclusivas",
      description: "Acceso a premios premium y experiencias únicas",
      premium: true,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidad premium",
      description: "Únete a grupos exclusivos y eventos especiales",
      premium: true,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Soporte prioritario",
      description: "Atención al cliente 24/7 con respuesta garantizada en 2 horas",
      premium: true,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Funciones beta",
      description: "Sé el primero en probar nuevas características antes que nadie",
      premium: true,
    },
  ]

  const freeFeatures = [
    "Crear metas ilimitadas",
    "Check-ins diarios",
    "Evidencia semanal básica",
    "Recompensas básicas",
    "Comunidad general",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center text-volcanic hover:text-peach transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Dashboard
          </Link>

          <div className="flex items-center space-x-2">
            <LazyMascot size="sm" />
            <span className="text-xl font-bold text-volcanic">GoLazy</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <LazyMascot
            size="xl"
            animate={true}
            message="¡Desbloquea todo tu potencial con GoLazy Premium! Tendrás acceso a funciones increíbles."
            className="mb-8"
          />
          <h1 className="text-5xl font-bold text-volcanic mb-4">
            Actualizar a <span className="text-peach">Premium</span>
          </h1>
          <p className="text-xl text-volcanic-600 max-w-2xl mx-auto">
            Lleva tu experiencia al siguiente nivel con funciones exclusivas, análisis avanzado y recompensas premium
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-lg">
              <button
                onClick={() => setSelectedPlan("monthly")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedPlan === "monthly" ? "bg-peach text-white shadow-md" : "text-volcanic hover:bg-primary-50"
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setSelectedPlan("yearly")}
                className={`px-6 py-3 rounded-lg font-medium transition-all relative ${
                  selectedPlan === "yearly" ? "bg-peach text-white shadow-md" : "text-volcanic hover:bg-primary-50"
                }`}
              >
                Anual
                <Badge className="absolute -top-2 -right-2 bg-mint text-white text-xs">Ahorra 33%</Badge>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-volcanic mb-2">Plan Gratuito</h3>
                <div className="text-4xl font-bold text-volcanic mb-2">$0</div>
                <p className="text-volcanic-600">Para siempre</p>
              </div>

              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-mint" />
                    <span className="text-volcanic-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full btn-secondary" disabled>
                Plan actual
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 relative border-2 border-peach bg-gradient-to-br from-peach-50 to-mint-50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-peach text-white px-4 py-1 flex items-center space-x-1">
                  <Crown className="w-4 h-4" />
                  <span>Más popular</span>
                </Badge>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-volcanic mb-2">GoLazy Premium</h3>
                <div className="text-4xl font-bold text-peach mb-2">
                  ${plans[selectedPlan as keyof typeof plans].price}
                </div>
                <p className="text-volcanic-600">
                  por {plans[selectedPlan as keyof typeof plans].period}
                  {plans[selectedPlan as keyof typeof plans].savings && (
                    <span className="block text-mint font-medium">
                      Ahorra {plans[selectedPlan as keyof typeof plans].savings}%
                    </span>
                  )}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="text-sm text-volcanic-600 font-medium mb-2">Todo lo del plan gratuito, más:</li>
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-peach mt-0.5">{feature.icon}</div>
                    <div>
                      <span className="font-medium text-volcanic">{feature.title}</span>
                      <p className="text-sm text-volcanic-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button className="w-full btn-primary text-lg py-4">Actualizar a Premium</Button>
            </Card>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-volcanic text-center mb-8">Comparación de Funciones</h2>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-volcanic">Funciones</th>
                    <th className="text-center p-4 font-semibold text-volcanic">Gratuito</th>
                    <th className="text-center p-4 font-semibold text-peach">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Metas ilimitadas</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Check-ins diarios</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Historial completo de metas</td>
                    <td className="p-4 text-center text-volcanic-400">Limitado</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Análisis avanzado</td>
                    <td className="p-4 text-center text-volcanic-400">—</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Puntos bonus (+50%)</td>
                    <td className="p-4 text-center text-volcanic-400">—</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Recompensas exclusivas</td>
                    <td className="p-4 text-center text-volcanic-400">—</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="p-4 text-volcanic">Soporte prioritario</td>
                    <td className="p-4 text-center text-volcanic-400">—</td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-mint mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-volcanic text-center mb-8">Lo que dicen nuestros usuarios Premium</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-volcanic">Sofia Martínez</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-volcanic-600">
                "Los análisis detallados me ayudaron a entender mis patrones y mejorar mi consistencia. ¡Vale cada
                centavo!"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <h4 className="font-semibold text-volcanic">Roberto Chen</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-volcanic-600">
                "Las recompensas exclusivas son increíbles. Ya canjee un viaje a Cancún con mis puntos premium."
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-volcanic text-center mb-8">Preguntas Frecuentes</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-volcanic mb-2">¿Puedo cancelar mi suscripción en cualquier momento?</h3>
              <p className="text-volcanic-600">
                Sí, puedes cancelar tu suscripción Premium en cualquier momento desde tu perfil. Mantendrás el acceso
                hasta el final de tu período de facturación.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-volcanic mb-2">¿Qué pasa con mis datos si cancelo Premium?</h3>
              <p className="text-volcanic-600">
                Todos tus datos se mantienen seguros. Solo perderás acceso a las funciones premium, pero tu historial
                básico permanece intacto.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-volcanic mb-2">¿Los puntos bonus se aplican retroactivamente?</h3>
              <p className="text-volcanic-600">
                Los puntos bonus del 50% se aplican a partir del momento en que activas Premium, no a metas anteriores.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
