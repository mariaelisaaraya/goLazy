"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, DollarSign, Target, Tag, AlertCircle, CheckCircle } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewGoalPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    category: "",
    amount: "",
    description: "",
    tags: [] as string[],
    customTag: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(1)

  const categories = [
    { value: "fitness", label: "Fitness y Salud", icon: "🏃‍♂️" },
    { value: "learning", label: "Aprendizaje", icon: "📚" },
    { value: "career", label: "Carrera Profesional", icon: "💼" },
    { value: "finance", label: "Finanzas Personales", icon: "💰" },
    { value: "habits", label: "Hábitos Diarios", icon: "⏰" },
    { value: "creative", label: "Proyectos Creativos", icon: "🎨" },
    { value: "social", label: "Relaciones Sociales", icon: "👥" },
    { value: "other", label: "Otros", icon: "🎯" },
  ]

  const suggestedTags = [
    "diario",
    "semanal",
    "ejercicio",
    "lectura",
    "ahorro",
    "productividad",
    "salud",
    "mindfulness",
    "networking",
  ]

  const calculateMinEndDate = () => {
    if (!formData.startDate) return ""
    const startDate = new Date(formData.startDate)
    const minEndDate = new Date(startDate)
    minEndDate.setDate(minEndDate.getDate() + 30)
    return minEndDate.toISOString().split("T")[0]
  }

  const calculateDaysDifference = () => {
    if (!formData.startDate || !formData.endDate) return 0
    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const addTag = (tag: string) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
        customTag: "",
      }))
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "El título de la meta es requerido"
    } else if (formData.title.length < 10) {
      newErrors.title = "El título debe tener al menos 10 caracteres"
    }

    if (!formData.startDate) {
      newErrors.startDate = "La fecha de inicio es requerida"
    }

    if (!formData.endDate) {
      newErrors.endDate = "La fecha de fin es requerida"
    } else if (formData.startDate && calculateDaysDifference() < 30) {
      newErrors.endDate = "La meta debe durar al menos 30 días"
    }

    if (!formData.category) {
      newErrors.category = "Selecciona una categoría"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.amount) {
      newErrors.amount = "El monto es requerido"
    } else if (Number.parseFloat(formData.amount) < 10) {
      newErrors.amount = "El monto mínimo es $10 USDC"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Describe cómo vas a lograr tu meta"
    } else if (formData.description.length < 50) {
      newErrors.description = "La descripción debe tener al menos 50 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleSubmit = () => {
    // Simulate creating the goal and redirect to the new goal detail page
    router.push("/goals/1")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary-100">
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
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 1 ? "bg-peach text-white" : "bg-primary-200 text-volcanic-600"
              }`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-peach" : "bg-primary-200"}`}></div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 2 ? "bg-peach text-white" : "bg-primary-200 text-volcanic-600"
              }`}
            >
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? "bg-peach" : "bg-primary-200"}`}></div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 3 ? "bg-peach text-white" : "bg-primary-200 text-volcanic-600"
              }`}
            >
              3
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-volcanic mb-2">
            {step === 1 && "Define tu Meta SMART"}
            {step === 2 && "Detalles y Compromiso"}
            {step === 3 && "Revisa y Confirma"}
          </h1>
          <p className="text-volcanic-600">
            {step === 1 && "Crea un objetivo específico, medible y con fecha límite"}
            {step === 2 && "Añade los detalles de cómo vas a lograr tu meta"}
            {step === 3 && "Revisa toda la información antes de crear tu meta"}
          </p>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <Card className="p-8">
            <div className="space-y-6">
              {/* Goal Title */}
              <div>
                <Label htmlFor="title" className="text-volcanic font-medium mb-2 block">
                  ¿Cuál es tu meta? *
                </Label>
                <Input
                  id="title"
                  placeholder="Ej: Correr 5km diarios por 60 días"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={`input-field ${errors.title ? "border-terracotta" : ""}`}
                />
                {errors.title && (
                  <p className="text-terracotta text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.title}
                  </p>
                )}
                <p className="text-sm text-volcanic-600 mt-1">{formData.title.length}/100 caracteres</p>
              </div>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-volcanic font-medium mb-2 block">
                    Fecha de inicio *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange("startDate", e.target.value)}
                      className={`input-field pl-10 ${errors.startDate ? "border-terracotta" : ""}`}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="text-terracotta text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.startDate}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="endDate" className="text-volcanic font-medium mb-2 block">
                    Fecha límite *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange("endDate", e.target.value)}
                      className={`input-field pl-10 ${errors.endDate ? "border-terracotta" : ""}`}
                      min={calculateMinEndDate()}
                    />
                  </div>
                  {errors.endDate && (
                    <p className="text-terracotta text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.endDate}
                    </p>
                  )}
                  {formData.startDate && formData.endDate && (
                    <p className="text-mint text-sm mt-1 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Duración: {calculateDaysDifference()} días
                    </p>
                  )}
                </div>
              </div>

              {/* Category */}
              <div>
                <Label className="text-volcanic font-medium mb-3 block">Categoría *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => handleInputChange("category", category.value)}
                      className={`p-4 rounded-xl border-2 transition-all text-center hover:shadow-md ${
                        formData.category === category.value
                          ? "border-peach bg-peach-50 text-peach"
                          : "border-primary-200 hover:border-primary-300"
                      }`}
                    >
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <div className="text-sm font-medium">{category.label}</div>
                    </button>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-terracotta text-sm mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.category}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <Button onClick={handleNext} className="btn-primary">
                  Siguiente paso
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Step 2: Details and Commitment */}
        {step === 2 && (
          <Card className="p-8">
            <div className="space-y-6">
              {/* Amount */}
              <div>
                <Label htmlFor="amount" className="text-volcanic font-medium mb-2 block">
                  Monto de compromiso (USDC) *
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-volcanic-400" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="10"
                    min="10"
                    step="1"
                    value={formData.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    className={`input-field pl-10 ${errors.amount ? "border-terracotta" : ""}`}
                  />
                </div>
                {errors.amount && (
                  <p className="text-terracotta text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.amount}
                  </p>
                )}
                <p className="text-sm text-volcanic-600 mt-1">
                  Monto mínimo: $10 USDC. Este dinero se devuelve si cumples tu meta.
                </p>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-volcanic font-medium mb-2 block">
                  ¿Cómo vas a lograr tu meta? *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe tu plan detallado: horarios, estrategias, recursos que necesitas..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className={`input-field min-h-[120px] ${errors.description ? "border-terracotta" : ""}`}
                />
                {errors.description && (
                  <p className="text-terracotta text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.description}
                  </p>
                )}
                <p className="text-sm text-volcanic-600 mt-1">
                  {formData.description.length}/500 caracteres (mínimo 50)
                </p>
              </div>

              {/* Tags */}
              <div>
                <Label className="text-volcanic font-medium mb-2 block">Etiquetas (opcional)</Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestedTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => addTag(tag)}
                      className="px-3 py-1 text-sm bg-primary-100 text-volcanic rounded-full hover:bg-primary-200 transition-colors"
                    >
                      + {tag}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2 mb-3">
                  <Input
                    placeholder="Agregar etiqueta personalizada"
                    value={formData.customTag}
                    onChange={(e) => setFormData((prev) => ({ ...prev, customTag: e.target.value }))}
                    className="input-field"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addTag(formData.customTag)
                      }
                    }}
                  />
                  <Button type="button" onClick={() => addTag(formData.customTag)} className="btn-secondary">
                    <Tag className="w-4 h-4" />
                  </Button>
                </div>

                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-peach text-white cursor-pointer hover:bg-peach-600"
                        onClick={() => removeTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button onClick={() => setStep(1)} className="btn-secondary">
                  Anterior
                </Button>
                <Button onClick={handleNext} className="btn-primary">
                  Siguiente paso
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Step 3: Review and Confirm */}
        {step === 3 && (
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center mb-6">
                <LazyMascot
                  size="lg"
                  animate={true}
                  message="¡Tu meta se ve increíble! Estoy emocionado de acompañarte en este viaje."
                />
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-volcanic mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Resumen de tu meta
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-volcanic">Meta:</h4>
                    <p className="text-volcanic-600">{formData.title}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-volcanic">Duración:</h4>
                      <p className="text-volcanic-600">
                        {formData.startDate} al {formData.endDate}
                        <br />
                        <span className="text-sm">({calculateDaysDifference()} días)</span>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-volcanic">Categoría:</h4>
                      <p className="text-volcanic-600">
                        {categories.find((c) => c.value === formData.category)?.label}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-volcanic">Compromiso:</h4>
                    <p className="text-volcanic-600 text-lg font-semibold text-peach">${formData.amount} USDC</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-volcanic">Plan de acción:</h4>
                    <p className="text-volcanic-600">{formData.description}</p>
                  </div>

                  {formData.tags.length > 0 && (
                    <div>
                      <h4 className="font-medium text-volcanic">Etiquetas:</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} className="bg-mint text-volcanic">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-mint-50 rounded-xl p-4 border border-mint-200">
                <h4 className="font-medium text-volcanic mb-2">📋 Recordatorio importante:</h4>
                <ul className="text-sm text-volcanic-600 space-y-1">
                  <li>• Deberás hacer check-in diario para mantener tu progreso</li>
                  <li>• Subirás evidencia semanal de tu avance</li>
                  <li>• Si cumples tu meta, recuperas tu USDC + puntos de recompensa</li>
                  <li>• Si no cumples, tu USDC ayuda a otros usuarios a lograr sus metas</li>
                </ul>
              </div>

              <div className="flex justify-between">
                <Button onClick={() => setStep(2)} className="btn-secondary">
                  Anterior
                </Button>
                <Button onClick={handleSubmit} className="btn-primary text-lg px-8">
                  Crear Meta
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
