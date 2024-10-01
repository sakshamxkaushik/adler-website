'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Box, Gamepad, Users, Globe } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

export default function Homepage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen font-pretendard">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FC2D7C]"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl font-bold"
            >
              Adler
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <header className="bg-white border-b border-[#E1E1E1]">
              <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Box className="h-8 w-8 text-[#FC2D7C]" />
                  <span className="text-2xl font-semibold text-[#3B3B3B]">Adler</span>
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="text-[#626262] hover:text-[#FC2D7C] transition-colors">Solutions</a>
                  <a href="#" className="text-[#626262] hover:text-[#FC2D7C] transition-colors">Technology</a>
                  <a href="#" className="text-[#626262] hover:text-[#FC2D7C] transition-colors">About Us</a>
                  <a href="#" className="text-[#626262] hover:text-[#FC2D7C] transition-colors">Contact</a>
                </nav>
                <Button className="bg-[#FC2D7C] hover:bg-[#CA2463] text-white">Get Started</Button>
              </div>
            </header>

            <main>
              <section className="relative bg-gradient-to-r from-[#FC2D7C] to-[#CA2463] text-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">3D Web Fighting: The Future of Online Interaction</h1>
                  <p className="text-xl mb-10 max-w-2xl mx-auto">Adler empowers creators to build immersive battle arenas and competitive 3D experiences.</p>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#FC2D7C] transition-colors">
                    Enter the Arena
                  </Button>
                </div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-center bg-cover animate-pulse"></div>
                </div>
              </section>

              <section className="py-24 bg-[#F7F7F7]">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16 text-[#3B3B3B]">Battle-Ready Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                      icon={<Gamepad className="h-10 w-10 text-[#FC2D7C]" />}
                      title="Real-time Combat"
                      description="Experience lag-free, intense 3D battles with our advanced networking technology."
                    />
                    <FeatureCard
                      icon={<Users className="h-10 w-10 text-[#FC2D7C]" />}
                      title="Multiplayer Arenas"
                      description="Create and join massive battle royales or intimate duels in customizable 3D environments."
                    />
                    <FeatureCard
                      icon={<Globe className="h-10 w-10 text-[#FC2D7C]" />}
                      title="Cross-Platform Warfare"
                      description="Fight seamlessly across devices, from mobile to desktop to VR headsets."
                    />
                  </div>
                </div>
              </section>

              <section className="py-24">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16 text-[#3B3B3B]">Adler&apos;s Combat-Ready Technology</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TechCard
                      title="Lightning-Fast 3D Engine"
                      description="Our proprietary engine renders complex 3D battles in milliseconds, ensuring smooth gameplay."
                    />
                    <TechCard
                      title="XRML: 3D Combat Markup"
                      description="Design intricate fight sequences and battle mechanics with our easy-to-use markup language."
                    />
                    <TechCard
                      title="AI-Powered Matchmaking"
                      description="Find the perfect opponents with our advanced algorithm, balancing skill levels for epic showdowns."
                    />
                  </div>
                </div>
              </section>
            </main>

            <footer className="bg-[#3B3B3B] text-white py-12">
              <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Adler Technologies. All rights reserved.</p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-[#3B3B3B]">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#626262]">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

interface TechCardProps {
  title: string;
  description: string;
}

function TechCard({ title, description }: TechCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-[#3B3B3B]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#626262]">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}