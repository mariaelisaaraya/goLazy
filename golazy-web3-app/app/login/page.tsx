"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const checkPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (field === "password" && typeof value === "string") {
      setPasswordStrength(checkPasswordStrength(value))
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida"
    } else if (activeTab === "register" && formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres"
    }

    if (activeTab === "register") {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirma tu contraseña"
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Las contraseñas no coinciden"
      }

      if (!formData.acceptTerms) {
        newErrors.acceptTerms = "Debes aceptar los términos y condiciones"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      router.push("/dashboard")
    }
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-terracotta"
    if (passwordStrength <= 3) return "bg-peach"
    return "bg-mint"
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Débil"
    if (passwordStrength <= 3) return "Media"
    return "Fuerte"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-volcanic hover:text-peach transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <LazyMascot size="md" />
            <span className="text-2xl font-bold text-volcanic">GoLazy</span>
          </div>

          <h1 className="text-2xl font-bold text-volcanic mb-2">
            {activeTab === "login" ? "¡Bienvenido de vuelta!" : "¡Únete a GoLazy!"}
          </h1>
          <p className="text-volcanic-600">
            {activeTab === "login"
              ? "Inicia sesión para continuar con tus metas"
              : "Crea tu cuenta y comienza a lograr tus objetivos"}
          </p>
        </div>

        <Card className="p-6">
          {/* Tabs */}
          <div className="flex bg-primary-50 rounded-xl p-1 mb-6">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                activeTab === "login" ? "bg-white text-volcanic shadow-sm" : "text-volcanic-600 hover:text-volcanic"
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                activeTab === "register" ? "bg-white text-volcanic shadow-sm" : "text-volcanic-600 hover:text-volcanic"
              }`}
            >
              Registrarse
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-volcanic font-medium mb-2 block">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`input-field pl-10 ${errors.email ? "border-terracotta" : ""}`}
                />
              </div>
              {errors.email && (
                <p className="text-terracotta text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-volcanic font-medium mb-2 block">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`input-field pl-10 pr-10 ${errors.password ? "border-terracotta" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-volcanic-400 hover:text-volcanic"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {activeTab === "register" && formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-volcanic-600">Fortaleza de contraseña:</span>
                    <span
                      className={`font-medium ${passwordStrength <= 2 ? "text-terracotta" : passwordStrength <= 3 ? "text-peach" : "text-mint"}`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-primary-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {errors.password && (
                <p className="text-terracotta text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password (Register only) */}
            {activeTab === "register" && (
              <div>
                <Label htmlFor="confirmPassword" className="text-volcanic font-medium mb-2 block">
                  Confirmar contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className={`input-field pl-10 pr-10 ${errors.confirmPassword ? "border-terracotta" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-volcanic-400 hover:text-volcanic"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <p className="text-mint text-sm mt-1 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Las contraseñas coinciden
                  </p>
                )}
                {errors.confirmPassword && (
                  <p className="text-terracotta text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Terms checkbox (Register only) */}
            {activeTab === "register" && (
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-volcanic-600 leading-relaxed">
                  Acepto los{" "}
                  <Link href="/terms" className="text-peach hover:underline">
                    términos y condiciones
                  </Link>{" "}
                  y la{" "}
                  <Link href="/privacy" className="text-peach hover:underline">
                    política de privacidad
                  </Link>
                </Label>
              </div>
            )}

            {errors.acceptTerms && (
              <p className="text-terracotta text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.acceptTerms}
              </p>
            )}

            {/* Forgot password link (Login only) */}
            {activeTab === "login" && (
              <div className="text-right">
                <Link href="/forgot-password" className="text-sm text-peach hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            )}

            {/* Submit button */}
            <Button type="submit" className="btn-primary w-full">
              {activeTab === "login" ? "Iniciar sesión" : "Crear cuenta"}
            </Button>
          </form>

          {/* Social login divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-primary-200"></div>
            <span className="px-4 text-sm text-volcanic-600">o continúa con</span>
            <div className="flex-1 border-t border-primary-200"></div>
          </div>

          {/* Social login buttons */}
          <div className="space-y-3">
            <Button className="w-full btn-secondary flex items-center justify-center space-x-2">
              <span className="text-lg">🦊</span>
              <span>MetaMask</span>
            </Button>
            <Button className="w-full btn-secondary flex items-center justify-center space-x-2">
              <span className="text-lg">🔗</span>
              <span>WalletConnect</span>
            </Button>
          </div>
        </Card>

        {/* Lazy mascot */}
        <div className="text-center mt-8">
          <LazyMascot size="lg" animate={true} message="¡Lazy te está esperando para comenzar esta aventura!" />
        </div>
      </div>
    </div>
  )
}
