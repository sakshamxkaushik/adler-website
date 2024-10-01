'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Box, Gamepad, Image, Mic, Users, Globe } from "lucide-react"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-screen font-pretendard">
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Box className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-semibold text-gray-900">Adler</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Technology</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
          </nav>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white transition-colors">Get Started</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Revolutionizing the Web with 3D Experiences</h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto">Adler empowers creators to build immersive virtual universes, transforming how we interact online.</p>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-pink-600 transition-colors">
              Discover Adler
            </Button>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Innovative Solutions for Every Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SolutionCard
                icon={<Globe className="h-10 w-10 text-pink-500" />}
                title="Virtual Exhibitions"
                description="Host immersive art galleries and product showcases in stunning 3D environments."
              />
              <SolutionCard
                icon={<Users className="h-10 w-10 text-pink-500" />}
                title="Interactive Showrooms"
                description="Create engaging virtual spaces for product demonstrations and customer interactions."
              />
              <SolutionCard
                icon={<Gamepad className="h-10 w-10 text-pink-500" />}
                title="Gamified Experiences"
                description="Develop interactive 3D games and simulations for training and entertainment."
              />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Adler's Cutting-Edge Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Lightning-Fast 3D Engine"
                description="Experience seamless 3D rendering with our proprietary engine, boasting a 1-second load time."
              />
              <FeatureCard
                title="XRML: The Future of 3D Web"
                description="Our XML-based markup language simplifies 3D content creation, making it accessible to all developers."
              />
              <FeatureCard
                title="Intelligent 3D Search"
                description="Utilize our advanced algorithm to effortlessly find and integrate 3D assets into your projects."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Adler Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-gray-800">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}