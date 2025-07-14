"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Building, Mail, Phone, ExternalLink, Handshake } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"

export default function BrandsPage() {
  const partnerBrands = [
    {
      name: "Nike",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Deportes",
      description: "Equipamiento deportivo y ropa atlética",
      website: "nike.com",
    },
    {
      name: "Spotify",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Música",
      description: "Streaming de música y podcasts",
      website: "spotify.com",
    },
    {
      name: "Udemy",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Educación",
      description: "Cursos online y certificaciones",
      website: "udemy.com",
    },
    {
      name: "Starbucks",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Comida",
      description: "Café y bebidas premium",
      website: "starbucks.com",
    },
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=80&width=120",
      category: "E-commerce",
      description: "Compras online y entretenimiento",
      website: "amazon.com",
    },
    {
      name: "Airbnb",
      logo: "/placeholder.svg?height=80&width=120",
      category: "Viajes",
      description: "Alojamientos y experiencias",
      website: "airbnb.com",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-volcanic hover:text-peach transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
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
            message="¡Mira todas las marcas increíbles que apoyan a nuestra comunidad!"
            className="mb-8"
          />
          <h1 className="text-5xl font-bold text-volcanic mb-4">Marcas Aliadas</h1>
          <p className="text-xl text-volcanic-600 max-w-2xl mx-auto">
            Empresas que creen en el poder de los objetivos y apoyan a nuestra comunidad con recompensas increíbles
          </p>
        </div>

        {/* Partner Brands Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-volcanic text-center mb-8">Nuestros Socios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBrands.map((brand, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="h-16 mx-auto mb-3 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-volcanic">{brand.name}</h3>
                  <p className="text-sm text-peach font-medium">{brand.category}</p>
                </div>

                <p className="text-volcanic-600 text-center mb-4">{brand.description}</p>

                <div className="flex justify-center">
                  <Button className="btn-secondary flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Visitar {brand.website}</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-volcanic text-center mb-8">¿Por qué ser socio de GoLazy?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-peach rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-3">Audiencia Comprometida</h3>
              <p className="text-volcanic-600">
                Conecta con usuarios altamente motivados que valoran el crecimiento personal y el logro de objetivos
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-3">ROI Medible</h3>
              <p className="text-volcanic-600">
                Rastrea el impacto directo de tus recompensas en el engagement y conversión de usuarios
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-3">Impacto Social</h3>
              <p className="text-volcanic-600">
                Forma parte de una plataforma que ayuda a las personas a mejorar sus vidas y alcanzar sus sueños
              </p>
            </Card>
          </div>
        </div>

        {/* Partnership Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <Handshake className="w-16 h-16 text-peach mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-volcanic mb-2">¿Quieres ser nuestro socio?</h2>
              <p className="text-volcanic-600">
                Únete a nuestra red de marcas aliadas y ayuda a motivar a miles de usuarios mientras promocionas tu
                marca
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName" className="text-volcanic font-medium mb-2 block">
                    Nombre de la empresa *
                  </Label>
                  <Input id="companyName" placeholder="Tu empresa" className="input-field" />
                </div>
                <div>
                  <Label htmlFor="industry" className="text-volcanic font-medium mb-2 block">
                    Industria *
                  </Label>
                  <Input id="industry" placeholder="Ej: Tecnología, Fitness, Educación" className="input-field" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName" className="text-volcanic font-medium mb-2 block">
                    Nombre de contacto *
                  </Label>
                  <Input id="contactName" placeholder="Tu nombre completo" className="input-field" />
                </div>
                <div>
                  <Label htmlFor="position" className="text-volcanic font-medium mb-2 block">
                    Cargo *
                  </Label>
                  <Input id="position" placeholder="Tu posición en la empresa" className="input-field" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-volcanic font-medium mb-2 block">
                    Email corporativo *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                    <Input id="email" type="email" placeholder="contacto@empresa.com" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-volcanic font-medium mb-2 block">
                    Teléfono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                    <Input id="phone" placeholder="+1 (555) 123-4567" className="input-field pl-10" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="website" className="text-volcanic font-medium mb-2 block">
                  Sitio web de la empresa *
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                  <Input id="website" placeholder="https://tuempresa.com" className="input-field pl-10" />
                </div>
              </div>

              <div>
                <Label htmlFor="proposal" className="text-volcanic font-medium mb-2 block">
                  Propuesta de colaboración *
                </Label>
                <Textarea
                  id="proposal"
                  placeholder="Describe qué tipo de recompensas o beneficios te gustaría ofrecer a nuestra comunidad, tu presupuesto aproximado y objetivos de marketing..."
                  className="input-field min-h-[120px]"
                />
              </div>

              <div className="bg-mint-50 rounded-xl p-4 border border-mint-200">
                <h4 className="font-medium text-volcanic mb-2">📋 Información adicional:</h4>
                <ul className="text-sm text-volcanic-600 space-y-1">
                  <li>• Nuestro equipo revisará tu propuesta en 3-5 días hábiles</li>
                  <li>• Te contactaremos para discutir los detalles de la colaboración</li>
                  <li>• Ofrecemos diferentes niveles de partnership según tu presupuesto</li>
                  <li>• Todos los acuerdos incluyen métricas detalladas de rendimiento</li>
                </ul>
              </div>

              <Button className="btn-primary w-full text-lg py-4">Enviar propuesta de colaboración</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
