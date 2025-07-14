import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  DollarSign,
  CheckCircle,
  Gift,
  Share2,
  Wallet,
  Globe,
  Briefcase,
  GraduationCap,
  MapPin,
  TreePine,
  Github,
  Twitter,
  Mail,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/dictionaries"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Navbar } from "@/components/navbar"

export default async function GoLazyLanding({
  params: { lang },
}: {
  params: { lang: "en" | "es" }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-sage text-white">
      {/* Navbar component */}
      <Navbar lang={lang} dict={dict} />

      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24 overflow-hidden min-h-screen flex items-center justify-center pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <AnimateOnScroll delay={600}>
                  <div className="relative">
                    <Image
                      src="/images/golazy-mascot.png"
                      alt="GoLazy mascot - cute sloth holding money bag"
                      width={500}
                      height={500}
                      className="drop-shadow-2xl max-w-full h-auto"
                      priority
                    />
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right side - Content */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <AnimateOnScroll>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight">GoLazy</h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0">{dict.hero.slogan}</p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={400}>
                  <Button
                    size="lg"
                    className="bg-peach hover:bg-peach/90 text-volcanic font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {dict.hero.cta}
                  </Button>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? / How does it work? */}
      <section id="how-it-works" className="py-16 md:py-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="bg-sand rounded-3xl p-8 md:p-12 shadow-2xl">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-volcanic">
                {dict.howItWorks.title}
              </h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Target, esTitle: "1. Elegís una meta", enTitle: "1. Choose a personal goal" },
                { icon: DollarSign, esTitle: "2. Hacés un stake", enTitle: "2. Make a stake" },
                { icon: CheckCircle, esTitle: "3. Registrás progreso", enTitle: "3. Track progress" },
                { icon: Gift, esTitle: "4. Recuperás + premio", enTitle: "4. Get reward" },
                { icon: Share2, esTitle: "5. Compartís logro", enTitle: "5. Share achievement" },
              ].map((step, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <Card className="text-center border-sage/20 hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="bg-sage/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-sage" />
                      </div>
                      <h3 className="font-semibold mb-2 text-volcanic">
                        {lang === "es" ? step.esTitle : step.enTitle}
                      </h3>
                      <p className="text-sm text-sage font-medium mb-2">{dict.howItWorks.steps[index].desc}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué importa? / Why it matters? */}
      <section id="why-it-matters" className="py-16 md:py-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-sand rounded-3xl p-8 md:p-12 shadow-2xl">
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-volcanic">
                  {dict.whyItMatters.title}
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="bg-sage/10 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
                  <p className="text-lg md:text-xl text-volcanic/90 mb-4">
                    <strong>{dict.whyItMatters.paragraph1}</strong>
                  </p>
                  <p className="text-volcanic/80">{dict.whyItMatters.paragraph2}</p>
                  <p className="text-volcanic/80 mt-4 italic">{dict.whyItMatters.paragraph3}</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo usamos Stellar? / How we use Stellar? */}
      <section id="stellar" className="py-16 md:py-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="bg-sand rounded-3xl p-8 md:p-12 shadow-2xl">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-volcanic">
                {dict.howWeUseStellar.title}
              </h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: DollarSign, esTitle: "USDC en Stellar", enTitle: "USDC on Stellar" },
                { icon: Zap, esTitle: "Contratos Soroban", enTitle: "Soroban Contracts" },
                { icon: Wallet, esTitle: "Wallets integradas", enTitle: "Integrated Wallets" },
                { icon: Globe, esTitle: "Actividad on-chain", enTitle: "On-chain Activity" },
              ].map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <Card className="text-center border-sage/20 hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="bg-mint/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-sage" />
                      </div>
                      <h3 className="font-semibold mb-2 text-volcanic">
                        {lang === "es" ? item.esTitle : item.enTitle}
                      </h3>
                      <p className="text-sm text-sage font-medium mb-2">{dict.howWeUseStellar.items[index].desc}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Para quién es? / Who is it for? */}
      <section id="who-is-for" className="py-16 md:py-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="bg-sand rounded-3xl p-8 md:p-12 shadow-2xl">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-volcanic">
                {dict.whoItIsFor.title}
              </h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Briefcase, esTitle: "Trabajadores informales", enTitle: "Informal workers" },
                { icon: GraduationCap, esTitle: "Estudiantes", enTitle: "Students" },
                { icon: MapPin, esTitle: "Migrantes", enTitle: "Migrants" },
                { icon: TreePine, esTitle: "Comunidades rurales", enTitle: "Rural communities" },
              ].map((user, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <Card className="text-center bg-sage/10 border-sage/20 backdrop-blur-sm hover:bg-sage/20 transition-all">
                    <CardContent className="p-6">
                      <div className="bg-peach/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <user.icon className="w-8 h-8 text-sage" />
                      </div>
                      <h3 className="font-semibold mb-2 text-volcanic">
                        {lang === "es" ? user.esTitle : user.enTitle}
                      </h3>
                      <p className="text-sm text-volcanic font-medium mb-2">{dict.whoItIsFor.users[index].desc}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lema final / Short slogan */}
      <section className="py-16 md:py-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                {dict.finalSlogan.line1}
                <br />
                {dict.finalSlogan.line2}
                <br />
                {dict.finalSlogan.line3}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <div className="mt-12">
                <Button
                  size="lg"
                  className="bg-peach hover:bg-peach/90 text-volcanic font-semibold px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {dict.finalSlogan.cta}
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-volcanic py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center mb-8">
              <h3 className="text-2xl font-bold text-white mr-2">GoLazy</h3>
            </div>
            <div className="flex justify-center space-x-8 mb-8">
              <Link href="#" className="text-white/80 hover:text-peach transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-peach transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-peach transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-white/60 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.footer.contact}</h4>
                <p>hello@golazy.app</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.footer.technology}</h4>
                <p>Stellar • Soroban • USDC</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">{dict.footer.region}</h4>
                <p>América Latina / Latin America</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60 text-sm">
              <p>&copy; 2024 GoLazy. {dict.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
