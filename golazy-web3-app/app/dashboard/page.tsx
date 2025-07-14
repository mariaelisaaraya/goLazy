"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Wallet,
  Award,
  TrendingUp,
  Calendar,
  AlertTriangle,
  Plus,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  Lock,
  Bell,
  User,
} from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"

export default function Dashboard() {
  const [currentGoal] = useState({
    id: 1,
    title: "Correr 5km diarios por 60 días",
    category: "Fitness",
    progress: 65,
    daysLeft: 21,
    totalDays: 60,
    amount: 50,
    checkInStreak: 12,
    lastCheckIn: "2024-01-15",
    status: "active",
  })

  const [stats] = useState({
    totalStaked: 150,
    points: 2450,
    availableBalance: 25,
    completedGoals: 3,
  })

  const [isStreakAtRisk] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LazyMascot size="sm" />
            <span className="text-2xl font-bold text-volcanic">GoLazy</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-terracotta rounded-full"></div>
            </Button>
            <Link href="/profile">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-600 transition-colors">
                <User className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-volcanic mb-2">¡Hola, Juan! 👋</h1>
              <p className="text-volcanic-600">Wallet: 0x1234...5678 • Conectado</p>
            </div>
            <LazyMascot size="lg" animate={true} />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center mx-auto mb-2">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-volcanic">${stats.totalStaked}</p>
            <p className="text-sm text-volcanic-600">Monto Anclado</p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-volcanic">{stats.points.toLocaleString()}</p>
            <p className="text-sm text-volcanic-600">Puntos</p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-volcanic">${stats.availableBalance}</p>
            <p className="text-sm text-volcanic-600">Saldo Disponible</p>
          </Card>

          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-volcanic">{stats.completedGoals}</p>
            <p className="text-sm text-volcanic-600">Metas Logradas</p>
          </Card>
        </div>

        {/* Streak Alert */}
        {isStreakAtRisk && (
          <Card className="p-4 mb-6 border-l-4 border-terracotta bg-terracotta/5">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-terracotta" />
              <div className="flex-1">
                <h3 className="font-semibold text-volcanic">¡Tu racha está en riesgo!</h3>
                <p className="text-sm text-volcanic-600">
                  No has hecho check-in hoy. Mantén tu racha de {currentGoal.checkInStreak} días.
                </p>
              </div>
              <Button className="btn-primary">Check-in ahora</Button>
            </div>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Goal */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-volcanic">Tu Meta Actual</h2>
              <Link href="/goals/new">
                <Button className="btn-primary flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Nueva Meta</span>
                </Button>
              </Link>
            </div>

            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-mint text-volcanic">{currentGoal.category}</Badge>
                    <Badge className="bg-primary text-white">Activa</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-volcanic mb-2">{currentGoal.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-volcanic-600">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>${currentGoal.amount} USDC</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{currentGoal.daysLeft} días restantes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Racha: {currentGoal.checkInStreak} días</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-peach mb-1">{currentGoal.progress}%</div>
                  <p className="text-sm text-volcanic-600">Completado</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-volcanic-600 mb-2">
                  <span>Progreso</span>
                  <span>
                    {Math.round((currentGoal.progress / 100) * currentGoal.totalDays)}/{currentGoal.totalDays} días
                  </span>
                </div>
                <Progress value={currentGoal.progress} className="h-3" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-volcanic-600">
                  <Clock className="w-4 h-4" />
                  <span>Último check-in: {currentGoal.lastCheckIn}</span>
                </div>
                <div className="flex space-x-3">
                  <Link href="/goals/1">
                    <Button className="btn-secondary">Ver detalles</Button>
                  </Link>
                  <Button className="btn-primary flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Check-in diario</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-volcanic mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <Link href="/goals/new" className="block">
                  <Button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Registrar Nueva Meta</span>
                  </Button>
                </Link>
                <Link href="/rewards" className="block">
                  <Button className="w-full btn-secondary flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Ver Recompensas</span>
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Goal History (Premium) */}
            <Card className="p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-peach" />
              </div>
              <h3 className="text-lg font-semibold text-volcanic mb-2">Historial de Metas</h3>
              <p className="text-sm text-volcanic-600 mb-4">Accede a todas tus metas completadas y su evidencia</p>
              <div className="bg-primary-50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏃‍♂️</span>
                  </div>
                  <div className="flex-1 opacity-50">
                    <h4 className="font-medium text-volcanic">Maratón 2023</h4>
                    <p className="text-sm text-volcanic-600">Completada • $100 USDC</p>
                  </div>
                </div>
              </div>
              <Link href="/premium">
                <Button className="w-full bg-peach hover:bg-peach-600 text-white">Actualizar a Premium</Button>
              </Link>
            </Card>

            {/* Lazy Motivation */}
            <Card className="p-6 bg-gradient-to-br from-peach-50 to-mint-50 border-peach-200">
              <div className="text-center">
                <LazyMascot
                  size="lg"
                  animate={true}
                  message="¡Vas súper bien! Recuerda que cada pequeño paso te acerca más a tu meta. ¡Tú puedes!"
                />
                <div className="flex justify-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-peach fill-current" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
