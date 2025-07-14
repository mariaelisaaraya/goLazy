"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Star, Gift, Search } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"

export default function RewardsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showRedeemModal, setShowRedeemModal] = useState(false)
  const [selectedReward, setSelectedReward] = useState<any>(null)

  const userPoints = 2450

  const categories = [
    { value: "all", label: "Todas", icon: "🎁" },
    { value: "fitness", label: "Fitness", icon: "🏃‍♂️" },
    { value: "food", label: "Comida", icon: "🍕" },
    { value: "tech", label: "Tecnología", icon: "📱" },
    { value: "lifestyle", label: "Estilo de vida", icon: "✨" },
    { value: "experiences", label: "Experiencias", icon: "🎪" },
  ]

  const rewards = [
    {
      id: 1,
      title: "Descuento 20% en Nike",
      description: "Descuento en toda la línea de running",
      points: 500,
      category: "fitness",
      brand: "Nike",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      progress: 100,
    },
    {
      id: 2,
      title: "Membresía Spotify Premium",
      description: "3 meses de Spotify Premium gratis",
      points: 800,
      category: "lifestyle",
      brand: "Spotify",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      progress: 100,
    },
    {
      id: 3,
      title: "Cena para 2 personas",
      description: "Cena en restaurante premium",
      points: 1200,
      category: "food",
      brand: "RestaurantePlus",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      progress: 100,
    },
    {
      id: 4,
      title: "iPhone 15 Pro",
      description: "El último iPhone de Apple",
      points: 15000,
      category: "tech",
      brand: "Apple",
      image: "/placeholder.svg?height=200&width=300",
      available: false,
      progress: 16,
    },
    {
      id: 5,
      title: "Clase de Yoga Online",
      description: "Mes completo de clases premium",
      points: 300,
      category: "fitness",
      brand: "YogaFlow",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      progress: 100,
    },
    {
      id: 6,
      title: "Experiencia Spa",
      description: "Día completo de relajación",
      points: 2000,
      category: "experiences",
      brand: "SpaZen",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      progress: 100,
    },
  ]

  const filteredRewards = rewards.filter((reward) => {
    const matchesSearch =
      reward.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reward.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || reward.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleRedeem = (reward: any) => {
    setSelectedReward(reward)
    setShowRedeemModal(true)
  }

  const confirmRedeem = () => {
    // Handle redemption logic
    setShowRedeemModal(false)
    setSelectedReward(null)
  }

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
        {/* Header Section */}
        <div className="text-center mb-8">
          <LazyMascot
            size="lg"
            animate={true}
            message="¡Mira todas las recompensas increíbles que puedes obtener con tus puntos!"
            className="mb-6"
          />
          <h1 className="text-4xl font-bold text-volcanic mb-2">Tienda de Recompensas</h1>
          <p className="text-xl text-volcanic-600">Canjea tus puntos por premios increíbles</p>
        </div>

        {/* Points Display */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-peach-50 to-mint-50 border-peach-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-volcanic">Tus Puntos</h2>
                <p className="text-volcanic-600">Disponibles para canjear</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-peach">{userPoints.toLocaleString()}</div>
              <p className="text-sm text-volcanic-600">puntos</p>
            </div>
          </div>
        </Card>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
            <Input
              placeholder="Buscar recompensas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.value
                    ? "bg-peach text-white"
                    : "bg-white text-volcanic hover:bg-primary-50"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward) => (
            <Card key={reward.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={reward.image || "/placeholder.svg"} alt={reward.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-volcanic">{reward.brand}</Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-volcanic mb-2">{reward.title}</h3>
                <p className="text-volcanic-600 mb-4">{reward.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-peach" />
                    <span className="font-bold text-peach">{reward.points.toLocaleString()}</span>
                    <span className="text-sm text-volcanic-600">puntos</span>
                  </div>

                  {reward.available ? (
                    <Badge className="bg-mint text-white">Disponible</Badge>
                  ) : (
                    <Badge className="bg-volcanic-400 text-white">No disponible</Badge>
                  )}
                </div>

                {!reward.available && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-volcanic-600 mb-1">
                      <span>Progreso hacia esta recompensa</span>
                      <span>{reward.progress}%</span>
                    </div>
                    <Progress value={reward.progress} className="h-2" />
                  </div>
                )}

                <Button
                  onClick={() => handleRedeem(reward)}
                  disabled={!reward.available || userPoints < reward.points}
                  className={`w-full ${
                    reward.available && userPoints >= reward.points
                      ? "btn-primary"
                      : "bg-volcanic-200 text-volcanic-600 cursor-not-allowed"
                  }`}
                >
                  {reward.available && userPoints >= reward.points ? (
                    <>
                      <Gift className="w-4 h-4 mr-2" />
                      Canjear
                    </>
                  ) : userPoints < reward.points ? (
                    `Necesitas ${(reward.points - userPoints).toLocaleString()} puntos más`
                  ) : (
                    "No disponible"
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredRewards.length === 0 && (
          <div className="text-center py-12">
            <LazyMascot size="lg" message="No encontré recompensas con esos criterios. ¡Prueba con otros filtros!" />
          </div>
        )}

        {/* How to Earn More Points */}
        <Card className="p-8 mt-12 bg-gradient-to-br from-primary-50 to-mint-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-volcanic mb-4">¿Cómo ganar más puntos?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-volcanic mb-2">Completa metas</h3>
                <p className="text-sm text-volcanic-600">Gana puntos por cada meta que logres</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-semibold text-volcanic mb-2">Check-ins diarios</h3>
                <p className="text-sm text-volcanic-600">Mantén tu racha para bonos extra</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-volcanic mb-2">Refiere amigos</h3>
                <p className="text-sm text-volcanic-600">Invita amigos y gana puntos bonus</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Redeem Confirmation Modal */}
      {showRedeemModal && selectedReward && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-6">
            <div className="text-center mb-6">
              <img
                src={selectedReward.image || "/placeholder.svg"}
                alt={selectedReward.title}
                className="w-24 h-24 object-cover rounded-xl mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-volcanic mb-2">Confirmar Canje</h3>
              <p className="text-volcanic-600">
                ¿Estás seguro de que quieres canjear <strong>{selectedReward.title}</strong>?
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-volcanic-600">Costo:</span>
                <span className="font-bold text-peach">{selectedReward.points.toLocaleString()} puntos</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-volcanic-600">Puntos actuales:</span>
                <span className="font-medium">{userPoints.toLocaleString()} puntos</span>
              </div>
              <div className="border-t border-primary-200 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-volcanic-600">Puntos restantes:</span>
                  <span className="font-bold text-volcanic">
                    {(userPoints - selectedReward.points).toLocaleString()} puntos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={() => setShowRedeemModal(false)} className="btn-secondary flex-1">
                Cancelar
              </Button>
              <Button onClick={confirmRedeem} className="btn-primary flex-1">
                Confirmar canje
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
