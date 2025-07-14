"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  ArrowLeft,
  User,
  Mail,
  Wallet,
  Lock,
  Bell,
  Shield,
  Crown,
  ExternalLink,
  Edit,
  Save,
  X,
  LogOut,
} from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"
import { useRouter } from "next/navigation" // Import useRouter

export default function ProfilePage() {
  const router = useRouter() // Initialize useRouter
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "Juan Pérez",
    email: "juan@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    weeklyReports: true,
    goalDeadlines: true,
    rewardUpdates: false,
    marketing: false,
  })

  const userStats = {
    totalGoals: 12,
    completedGoals: 8,
    successRate: 67,
    totalStaked: 450,
    totalEarned: 320,
    currentStreak: 15,
    longestStreak: 28,
    joinDate: "2023-06-15",
    isPremium: false,
  }

  const handleSaveProfile = () => {
    // Handle profile update
    setIsEditing(false)
  }

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  const handleSignOut = () => {
    // Simulate sign out logic (e.g., clearing tokens, session)
    console.log("Cerrando sesión...")
    router.push("/") // Redirect to landing page
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-volcanic mb-2">Mi Perfil</h1>
          <p className="text-xl text-volcanic-600">Gestiona tu cuenta y configuración</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-volcanic flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Información Personal
                </h2>
                <Button onClick={() => setIsEditing(!isEditing)} className="btn-secondary flex items-center space-x-2">
                  {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  <span>{isEditing ? "Cancelar" : "Editar"}</span>
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-volcanic font-medium mb-2 block">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    disabled={!isEditing}
                    className="input-field"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-volcanic font-medium mb-2 block">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-mint rounded-full flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-volcanic">Wallet Conectado</h4>
                      <p className="text-sm text-volcanic-600">0x1234...5678</p>
                    </div>
                  </div>
                  <Button className="btn-secondary">Cambiar wallet</Button>
                </div>

                {isEditing && (
                  <Button onClick={handleSaveProfile} className="btn-primary flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Guardar cambios</span>
                  </Button>
                )}
              </div>
            </Card>

            {/* Security */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-volcanic mb-6 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Seguridad
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="text-volcanic font-medium mb-2 block">
                    Contraseña actual
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.currentPassword}
                    onChange={(e) => setFormData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                    className="input-field"
                  />
                </div>

                <div>
                  <Label htmlFor="newPassword" className="text-volcanic font-medium mb-2 block">
                    Nueva contraseña
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.newPassword}
                    onChange={(e) => setFormData((prev) => ({ ...prev, newPassword: e.target.value }))}
                    className="input-field"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-volcanic font-medium mb-2 block">
                    Confirmar nueva contraseña
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    className="input-field"
                  />
                </div>

                <Button className="btn-primary">Actualizar contraseña</Button>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-volcanic mb-6 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notificaciones
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-volcanic">Recordatorios diarios</h4>
                    <p className="text-sm text-volcanic-600">Check-ins y seguimiento de metas</p>
                  </div>
                  <Switch
                    checked={notifications.dailyReminders}
                    onCheckedChange={(checked) => handleNotificationChange("dailyReminders", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-volcanic">Reportes semanales</h4>
                    <p className="text-sm text-volcanic-600">Resumen de tu progreso semanal</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => handleNotificationChange("weeklyReports", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-volcanic">Fechas límite</h4>
                    <p className="text-sm text-volcanic-600">Alertas cuando se acerquen deadlines</p>
                  </div>
                  <Switch
                    checked={notifications.goalDeadlines}
                    onCheckedChange={(checked) => handleNotificationChange("goalDeadlines", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-volcanic">Nuevas recompensas</h4>
                    <p className="text-sm text-volcanic-600">Cuando haya nuevos premios disponibles</p>
                  </div>
                  <Switch
                    checked={notifications.rewardUpdates}
                    onCheckedChange={(checked) => handleNotificationChange("rewardUpdates", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-volcanic">Marketing</h4>
                    <p className="text-sm text-volcanic-600">Promociones y noticias de GoLazy</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => handleNotificationChange("marketing", checked)}
                  />
                </div>
              </div>
            </Card>

            {/* Support Links */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-volcanic mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Soporte y Legal
              </h2>

              <div className="space-y-3">
                <Link
                  href="/help"
                  className="flex items-center justify-between p-3 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <span className="text-volcanic">Centro de ayuda</span>
                  <ExternalLink className="w-4 h-4 text-volcanic-400" />
                </Link>
                <Link
                  href="/terms"
                  className="flex items-center justify-between p-3 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <span className="text-volcanic">Términos y condiciones</span>
                  <ExternalLink className="w-4 h-4 text-volcanic-400" />
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center justify-between p-3 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <span className="text-volcanic">Política de privacidad</span>
                  <ExternalLink className="w-4 h-4 text-volcanic-400" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-between p-3 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <span className="text-volcanic">Contactar soporte</span>
                  <ExternalLink className="w-4 h-4 text-volcanic-400" />
                </Link>
              </div>
            </Card>

            {/* Sign Out Button */}
            <Button
              onClick={handleSignOut}
              className="btn-secondary w-full flex items-center justify-center space-x-2 mt-6"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar sesión</span>
            </Button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Stats */}
            <Card className="p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-peach rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-volcanic">{formData.name}</h3>
                <p className="text-volcanic-600">Miembro desde {userStats.joinDate}</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Metas totales:</span>
                  <span className="font-medium">{userStats.totalGoals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Metas completadas:</span>
                  <span className="font-medium text-mint">{userStats.completedGoals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Tasa de éxito:</span>
                  <span className="font-medium text-peach">{userStats.successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Total invertido:</span>
                  <span className="font-medium">${userStats.totalStaked} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Total ganado:</span>
                  <span className="font-medium text-mint">${userStats.totalEarned} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Racha actual:</span>
                  <span className="font-medium">{userStats.currentStreak} días</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Mejor racha:</span>
                  <span className="font-medium">{userStats.longestStreak} días</span>
                </div>
              </div>
            </Card>

            {/* Premium Status */}
            <Card className="p-6 bg-gradient-to-br from-peach-50 to-mint-50 border-peach-200">
              <div className="text-center">
                <Crown className="w-12 h-12 text-peach mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-volcanic mb-2">
                  {userStats.isPremium ? "Premium Activo" : "Actualizar a Premium"}
                </h3>
                <p className="text-sm text-volcanic-600 mb-4">
                  {userStats.isPremium
                    ? "Disfruta de todas las funciones premium"
                    : "Desbloquea funciones exclusivas y más recompensas"}
                </p>
                {!userStats.isPremium && (
                  <Link href="/premium">
                    <Button className="btn-primary w-full">Actualizar ahora</Button>
                  </Link>
                )}
              </div>
            </Card>

            {/* Lazy Motivation */}
            <Card className="p-6 bg-gradient-to-br from-primary-50 to-sand-50">
              <LazyMascot
                size="lg"
                animate={true}
                message="¡Tu perfil se ve genial! Recuerda mantener tu información actualizada para una mejor experiencia."
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
