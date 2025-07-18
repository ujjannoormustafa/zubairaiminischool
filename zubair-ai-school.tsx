'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  Palette,
  Video,
  Code,
  Monitor,
  Laptop,
  Smartphone,
  Star,
  Award,
  Zap,
  Play,
  Users,
  Calendar,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const openGoogleForm = () => {
    // Replace this URL with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-id', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zubair AI Mini School</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Courses
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button onClick={openGoogleForm} className="bg-purple-600 hover:bg-purple-700">
                Join Us
              </Button>
              <Button size="lg" onClick={openGoogleForm} className="bg-pink-600 hover:bg-pink-700 ml-4">
                Contact Us
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-purple-600 w-full text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('courses')} className="block px-3 py-2 text-gray-700 hover:text-purple-600 w-full text-left">
                  Courses
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-purple-600 w-full text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-700 hover:text-purple-600 w-full text-left">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-purple-600 w-full text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-50 to-pink-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Creative Digital Learning Where Kids Master the Future
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join our online AI-powered school where children learn graphics design, video editing, and coding
                through fun, interactive lessons designed just for young creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Learning Today
                </Button>
                <Button size="lg" onClick={openGoogleForm} className="bg-pink-600 hover:bg-pink-700">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-children-learning.jpg"
                  alt="Children learning together with computers"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-gray-600">Discover amazing learning opportunities designed for young creators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
                <p className="text-gray-600">
                  Learn to create stunning visuals, logos, and digital art using professional design tools and AI
                  assistance.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
                <p className="text-gray-600">
                  Master video editing techniques, create amazing content, and bring stories to life with cutting-edge
                  tools.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vibe Coding</h3>
                <p className="text-gray-600">
                  Fun and engaging coding lessons that make programming exciting and accessible for young minds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Online Learning Experience</h2>
              <p className="text-gray-600 mb-6">
                Our innovative online platform combines artificial intelligence with creative education to provide
                personalized learning experiences. Students work on real projects, receive instant feedback, and develop
                skills that prepare them for the digital future.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">Explore Courses</Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Laptop className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Interactive Lessons</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Live Sessions</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Certificates</p>
                  </div>
                  <div className="text-center">
                    <Smartphone className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Mobile Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive Videos</h3>
              <p className="text-purple-100">Engaging video lessons with hands-on practice</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Classes</h3>
              <p className="text-purple-100">Real-time interaction with expert instructors</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certificates</h3>
              <p className="text-purple-100">Earn recognized certificates for completed courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Amazing Student Projects</h2>
            <p className="text-gray-600">See what our young creators have accomplished</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Palette className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Logo Design Challenge</h3>
                <p className="text-gray-600 mb-4">Students created amazing brand logos using AI design tools</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Graphics Design Course
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center">
                <Video className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mini Movie Festival</h3>
                <p className="text-gray-600 mb-4">Young filmmakers created their first short films</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Video Editing Course
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Game Development</h3>
                <p className="text-gray-600 mb-4">Kids built their first interactive games and apps</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Vibe Coding Course
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Parents & Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My daughter loves the graphics design course! She's creating amazing artwork and learning
                  professional skills at just 10 years old."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Ahmed"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah Ahmed</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The coding classes are so fun! I never thought programming could be this exciting. I built my first
                  game last week!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Ali Hassan"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Ali Hassan</p>
                    <p className="text-sm text-gray-500">Student, Age 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The video editing course helped my son create his first YouTube channel. The instructors are amazing
                  with kids!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Fatima Khan"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Fatima Khan</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Instructors</h2>
            <p className="text-gray-600">Creative professionals passionate about teaching kids</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-200">
                <Image src="/zubair.jpg" alt="Zubair" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">Zubair</h3>
              <p className="text-gray-600">Founder & Graphics Design Expert</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-200">
                <Image
                  src="/noor-mustafa.jpg"
                  alt="Noor Mustafa"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Noor Mustafa</h3>
              <p className="text-gray-600">Video Editing Specialist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-200">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Hijab"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Hijab</h3>
              <p className="text-gray-600">Coding & AI Instructor</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-200">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Usman"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Usman</h3>
              <p className="text-gray-600">AI Learning Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-purple-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Child's Creative Journey?</h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join our community of young creators and start learning graphics design, video editing, and coding today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 text-white backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-5 text-left">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-purple-200" />
                  <span className="text-lg">hello@zubairaimini.school</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-purple-200" />
                  <span className="text-lg">+1 (555) 123-LEARN</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="w-6 h-6 mr-4 text-purple-200" />
                  <span className="text-lg">24/7 Online Support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-8 text-white backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button 
                  onClick={openGoogleForm} 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white h-12 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  📝 Fill Contact Form
                </Button>
                <Button 
                  onClick={() => scrollToSection('courses')} 
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white h-12 text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  🎓 View Courses
                </Button>
                <Button 
                  onClick={() => window.open('mailto:hello@zubairaimini.school', '_blank')} 
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white h-12 text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  ✉️ Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zubair AI Mini School</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering young minds with creative digital skills for the future.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Courses</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Graphics Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Vibe Coding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    AI Basics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Student Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Free Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Parent Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">hello@zubairaimini.school</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">+1 (555) 123-LEARN</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">24/7 Online Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Zubair AI Mini School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
