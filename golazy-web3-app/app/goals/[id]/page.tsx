"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Upload,
  ImageIcon,
  ExternalLink,
  Clock,
  Target,
  Award,
  AlertTriangle,
} from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"

export default function GoalDetailPage() {
  const [showEvidenceModal, setShowEvidenceModal] = useState(false)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [evidenceComment, setEvidenceComment] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const goalData = {
    id: 1,
    title: "Correr 5km diarios por 60 días",
    category: "Fitness y Salud",
    description:
      "Voy a correr 5km todos los días durante 60 días. Comenzaré a las 6:00 AM en el parque cercano a mi casa. Usaré la app Strava para registrar mis carreras y mantener un registro detallado.",
    progress: 65,
    daysCompleted: 39,
    totalDays: 60,
    daysLeft: 21,
    amount: 50,
    checkInStreak: 12,
    lastCheckIn: "2024-01-15",
    startDate: "2023-12-01",
    endDate: "2024-01-30",
    status: "active",
    tags: ["diario", "ejercicio", "salud"],
    transactionHash: "0xabcd1234efgh5678ijkl9012mnop3456qrst7890",
  }

  const checkInHistory = [
    { date: "2024-01-15", status: "completed", evidence: "running-jan15.jpg" },
    { date: "2024-01-14", status: "completed", evidence: "running-jan14.jpg" },
    { date: "2024-01-13", status: "completed", evidence: "running-jan13.jpg" },
    { date: "2024-01-12", status: "missed", evidence: null },
    { date: "2024-01-11", status: "completed", evidence: "running-jan11.jpg" },
  ]

  const weeklyEvidence = [
    {
      week: "Semana 6",
      date: "2024-01-08 - 2024-01-14",
      image: "/placeholder.svg?height=200&width=300",
      comment: "¡Excelente semana! Logré correr todos los días excepto el viernes por lluvia.",
      approved: true,
    },
    {
      week: "Semana 5",
      date: "2024-01-01 - 2024-01-07",
      image: "/placeholder.svg?height=200&width=300",
      comment: "Comenzé el año con mucha energía. Los primeros días fueron difíciles pero ya me estoy adaptando.",
      approved: true,
    },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleSubmitEvidence = () => {
    // Handle evidence submission
    setShowEvidenceModal(false)
    setEvidenceComment("")
    setSelectedFile(null)
  }

  const handleMarkCompleted = () => {
    setShowCompletionModal(true)
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Goal Header */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-mint text-volcanic">{goalData.category}</Badge>
                    <Badge className="bg-primary text-white">Activa</Badge>
                    {goalData.tags.map((tag) => (
                      <Badge key={tag} className="bg-primary-100 text-volcanic">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-3xl font-bold text-volcanic mb-2">{goalData.title}</h1>
                  <p className="text-volcanic-600 mb-4">{goalData.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-1 text-volcanic-600">
                      <DollarSign className="w-4 h-4" />
                      <span>${goalData.amount} USDC</span>
                    </div>
                    <div className="flex items-center space-x-1 text-volcanic-600">
                      <Calendar className="w-4 h-4" />
                      <span>{goalData.daysLeft} días restantes</span>
                    </div>
                    <div className="flex items-center space-x-1 text-volcanic-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>Racha: {goalData.checkInStreak} días</span>
                    </div>
                    <div className="flex items-center space-x-1 text-volcanic-600">
                      <Clock className="w-4 h-4" />
                      <span>Último: {goalData.lastCheckIn}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-bold text-peach mb-1">{goalData.progress}%</div>
                  <p className="text-sm text-volcanic-600">Completado</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-volcanic-600 mb-2">
                  <span>Progreso</span>
                  <span>
                    {goalData.daysCompleted}/{goalData.totalDays} días
                  </span>
                </div>
                <Progress value={goalData.progress} className="h-4" />
              </div>

              <div className="flex space-x-3">
                <Button className="btn-primary flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Check-in diario</span>
                </Button>
                <Button
                  onClick={() => setShowEvidenceModal(true)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Subir evidencia</span>
                </Button>
                {goalData.daysLeft === 0 && (
                  <Button
                    onClick={handleMarkCompleted}
                    className="bg-mint hover:bg-mint-600 text-white flex items-center space-x-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>Marcar como cumplido</span>
                  </Button>
                )}
              </div>
            </Card>

            {/* Check-in History */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-volcanic mb-4">Historial de Check-ins</h2>
              <div className="space-y-3">
                {checkInHistory.map((checkin, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          checkin.status === "completed" ? "bg-mint" : "bg-terracotta"
                        }`}
                      ></div>
                      <span className="font-medium text-volcanic">{checkin.date}</span>
                      <span className={`text-sm ${checkin.status === "completed" ? "text-mint" : "text-terracotta"}`}>
                        {checkin.status === "completed" ? "Completado" : "Perdido"}
                      </span>
                    </div>
                    {checkin.evidence && (
                      <Button size="sm" variant="ghost" className="text-peach">
                        <ImageIcon className="w-4 h-4 mr-1" />
                        Ver evidencia
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Weekly Evidence */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-volcanic mb-4">Evidencia Semanal</h2>
              <div className="space-y-6">
                {weeklyEvidence.map((evidence, index) => (
                  <div key={index} className="border border-primary-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-volcanic">{evidence.week}</h3>
                        <p className="text-sm text-volcanic-600">{evidence.date}</p>
                      </div>
                      <Badge className={evidence.approved ? "bg-mint text-white" : "bg-peach text-white"}>
                        {evidence.approved ? "Aprobada" : "Pendiente"}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <img
                        src={evidence.image || "/placeholder.svg"}
                        alt={`Evidencia ${evidence.week}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-volcanic mb-2">Comentario:</h4>
                        <p className="text-sm text-volcanic-600">{evidence.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Goal Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-volcanic mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Información de la Meta
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Fecha inicio:</span>
                  <span className="font-medium">{goalData.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Fecha límite:</span>
                  <span className="font-medium">{goalData.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Duración total:</span>
                  <span className="font-medium">{goalData.totalDays} días</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-volcanic-600">Monto comprometido:</span>
                  <span className="font-medium text-peach">${goalData.amount} USDC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-volcanic-600">Transacción:</span>
                  <Button size="sm" variant="ghost" className="p-0 h-auto text-peach">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Lazy Motivation */}
            <Card className="p-6 bg-gradient-to-br from-peach-50 to-mint-50 border-peach-200">
              <LazyMascot
                size="lg"
                animate={true}
                message="¡Estás haciendo un trabajo increíble! Cada día que cumples te acerca más a tu objetivo. ¡Sigue así!"
              />
            </Card>

            {/* Risk Alert */}
            <Card className="p-4 border-l-4 border-terracotta bg-terracotta/5">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-terracotta mt-0.5" />
                <div>
                  <h4 className="font-semibold text-volcanic">Recordatorio</h4>
                  <p className="text-sm text-volcanic-600 mt-1">
                    No olvides hacer tu check-in diario para mantener tu racha activa.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Evidence Upload Modal */}
      {showEvidenceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-6">
            <h3 className="text-xl font-semibold text-volcanic mb-4">Subir Evidencia Semanal</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-volcanic mb-2">Imagen o video de tu progreso</label>
                <div className="border-2 border-dashed border-primary-200 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="evidence-upload"
                  />
                  <label htmlFor="evidence-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-volcanic-400 mx-auto mb-2" />
                    <p className="text-sm text-volcanic-600">
                      {selectedFile ? selectedFile.name : "Haz clic para subir archivo"}
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-volcanic mb-2">Comentario sobre tu progreso</label>
                <Textarea
                  placeholder="Describe cómo te fue esta semana, qué lograste y cómo te sientes..."
                  value={evidenceComment}
                  onChange={(e) => setEvidenceComment(e.target.value)}
                  className="input-field min-h-[100px]"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <Button onClick={() => setShowEvidenceModal(false)} className="btn-secondary flex-1">
                Cancelar
              </Button>
              <Button
                onClick={handleSubmitEvidence}
                className="btn-primary flex-1"
                disabled={!selectedFile || !evidenceComment.trim()}
              >
                Subir evidencia
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Completion Success Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-8 text-center">
            <LazyMascot
              size="xl"
              animate={true}
              message="¡INCREÍBLE! ¡Has completado tu meta! Estoy súper orgulloso de ti."
              className="mb-6"
            />

            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-volcanic mb-2">¡Meta Completada!</h2>
            <p className="text-volcanic-600 mb-6">
              Has logrado tu objetivo de <strong>{goalData.title}</strong>. Tu depósito de{" "}
              <span className="font-bold text-peach">${goalData.amount} USDC</span> será devuelto automáticamente.
            </p>

            <div className="bg-mint-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-volcanic mb-2">🎁 Recompensas obtenidas:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Depósito devuelto:</span>
                  <span className="font-bold text-mint">${goalData.amount} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span>Puntos ganados:</span>
                  <span className="font-bold text-peach">+500 puntos</span>
                </div>
                <div className="flex justify-between">
                  <span>Bonus por racha:</span>
                  <span className="font-bold text-primary">+100 puntos</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/rewards">
                <Button className="btn-primary w-full">Ver mis recompensas</Button>
              </Link>
              <Link href="/dashboard">
                <Button className="btn-secondary w-full">Ir al Dashboard</Button>
              </Link>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
