import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Wallet, TrendingUp, Award, Shield, Users, ChevronRight, Star } from "lucide-react"
import { LazyMascot } from "@/components/lazy-mascot"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-sand-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LazyMascot size="sm" />
            <span className="text-2xl font-bold text-volcanic">GoLazy</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-volcanic hover:text-peach transition-colors">
              Acerca de
            </Link>
            <Link href="/rewards" className="text-volcanic hover:text-peach transition-colors">
              Recompensas
            </Link>
            <Link href="/premium" className="text-volcanic hover:text-peach transition-colors">
              Premium
            </Link>
            <Link href="http://localhost:5173/" className="text-volcanic hover:text-peach transition-colors">
              Iniciar sesión
            </Link>
          </nav>

          <Button className="md:hidden btn-primary">Menú</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-mint text-volcanic mb-6 px-4 py-2 text-sm font-medium">
            🚀 Nuevo: Recompensas con USDC
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-volcanic mb-6 leading-tight">
            Alcanza tus metas con
            <span className="text-peach block">motivación real</span>
          </h1>

          <p className="text-xl text-volcanic-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Compromete USDC en tus objetivos personales. Si cumples, recuperas tu dinero + recompensas. Si no, ayudas a
            otros a lograr sus metas.
          </p>

          {/* Simple Process Flow */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="text-volcanic">
                  <h3 className="font-semibold">Define meta</h3>
                  <p className="text-sm text-volcanic-600">Objetivos SMART</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-volcanic-400" />

              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="text-volcanic">
                  <h3 className="font-semibold">Deposita USDC</h3>
                  <p className="text-sm text-volcanic-600">Desde $10</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-volcanic-400" />

              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="text-volcanic">
                  <h3 className="font-semibold">Cumple y gana</h3>
                  <p className="text-sm text-volcanic-600">Recupera + puntos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="http://localhost:5173/">
              <Button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                <Wallet className="w-5 h-5" />
                <span>Conectar Wallet</span>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="btn-secondary text-lg px-8 py-4">Explorar como visitante</Button>
            </Link>
          </div>

          <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-volcanic-600">
            <span>Compatible con:</span>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">🦊</div>
              <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">🔗</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-volcanic mb-4">Acerca de GoLazy</h2>
            <p className="text-xl text-volcanic-600 max-w-3xl mx-auto">
              Somos una plataforma revolucionaria que combina la motivación personal con la tecnología blockchain para
              ayudarte a lograr tus objetivos de manera consistente y recompensada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-volcanic mb-4">Nuestra Misión</h3>
              <p className="text-volcanic-600 mb-6">
                Creemos que todos tienen el potencial de lograr grandes cosas, pero a veces necesitamos un empujón
                extra. GoLazy utiliza el poder de los smart contracts y las recompensas tangibles para crear un sistema
                de accountability que realmente funciona.
              </p>

              <h3 className="text-2xl font-bold text-volcanic mb-4">¿Por qué funciona?</h3>
              <ul className="space-y-3 text-volcanic-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-peach rounded-full mt-2"></div>
                  <span>
                    <strong>Compromiso real:</strong> Tu dinero está en juego, lo que aumenta tu motivación
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-mint rounded-full mt-2"></div>
                  <span>
                    <strong>Transparencia total:</strong> Smart contracts garantizan reglas claras y justas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>
                    <strong>Comunidad de apoyo:</strong> Rodeado de personas con objetivos similares
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full mt-2"></div>
                  <span>
                    <strong>Recompensas reales:</strong> Puntos canjeables por productos y experiencias
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <LazyMascot
                size="xl"
                animate={true}
                message="¡Hola! Soy Lazy, tu compañero en este viaje hacia el éxito. Estoy aquí para motivarte cada día."
              />

              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-peach">10,000+</div>
                  <div className="text-sm text-volcanic-600">Usuarios activos</div>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-mint">85%</div>
                  <div className="text-sm text-volcanic-600">Tasa de éxito</div>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary">$2M+</div>
                  <div className="text-sm text-volcanic-600">USDC comprometido</div>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-volcanic">50+</div>
                  <div className="text-sm text-volcanic-600">Marcas aliadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gradient-to-br from-primary-50 to-sand py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-volcanic mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-volcanic-600 max-w-2xl mx-auto">
              Un sistema simple y transparente para mantenerte motivado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-peach rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-2">1. Define tu meta</h3>
              <p className="text-volcanic-600">Crea objetivos SMART con fechas específicas y categorías</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-2">2. Compromete USDC</h3>
              <p className="text-volcanic-600">Deposita desde $10 USDC como garantía de compromiso</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-2">3. Sigue tu progreso</h3>
              <p className="text-volcanic-600">Check-ins diarios y evidencia semanal de tu avance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-volcanic mb-2">4. Recibe recompensas</h3>
              <p className="text-volcanic-600">Recupera tu USDC + puntos canjeables por premios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-primary-50 to-sand py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-volcanic mb-4">¿Por qué GoLazy?</h2>
            <p className="text-xl text-volcanic-600">La motivación que necesitas para lograr tus objetivos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8">
              <Shield className="w-12 h-12 text-peach mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-volcanic mb-3">100% Transparente</h3>
              <p className="text-volcanic-600">
                Smart contracts en Stellar garantizan que tus fondos estén seguros y las reglas sean claras
              </p>
            </Card>

            <Card className="text-center p-8">
              <Users className="w-12 h-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-volcanic mb-3">Comunidad Motivadora</h3>
              <p className="text-volcanic-600">
                Únete a miles de personas comprometidas con sus metas y celebra los logros juntos
              </p>
            </Card>

            <Card className="text-center p-8">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-volcanic mb-3">Recompensas Reales</h3>
              <p className="text-volcanic-600">
                Canjea puntos por productos de marcas aliadas y experiencias exclusivas
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-volcanic mb-4">Lo que dicen nuestros usuarios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-volcanic">María González</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-volcanic-600">
                "Logré correr mi primera maratón gracias a GoLazy. El compromiso financiero me mantuvo enfocada."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">C</span>
                </div>
                <div>
                  <h4 className="font-semibold text-volcanic">Carlos Ruiz</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-volcanic-600">
                "Perdí 15 kg en 6 meses. Las recompensas y la comunidad hicieron la diferencia."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-volcanic">Ana López</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-volcanic-600">
                "Aprendí francés en 3 meses. La plataforma es intuitiva y muy motivadora."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-peach to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <LazyMascot size="xl" animate={true} className="mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">¡Lazy te está esperando!</h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a la comunidad más motivadora y comienza a lograr tus metas hoy mismo
            </p>
            <Link href="http://localhost:5173/">
              <Button className="bg-white text-peach hover:bg-sand text-lg px-8 py-4 font-semibold">
                Comenzar ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-volcanic text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LazyMascot size="sm" />
                <span className="text-xl font-bold">GoLazy</span>
              </div>
              <p className="text-white/70">
                La plataforma que te ayuda a lograr tus metas con motivación real y recompensas transparentes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="/rewards" className="hover:text-white transition-colors">
                    Recompensas
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-white transition-colors">
                    Premium
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="hover:text-white transition-colors">
                    Marcas aliadas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>📱</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span>💼</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 GoLazy. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
