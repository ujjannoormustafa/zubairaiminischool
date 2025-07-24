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
    // Open the Google Form in a new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe-MgjT-0Fzni0J7vvEZYQgYa6HoeOnLrfKa1TFfhjInCOsdA/viewform', '_blank')
  }

  const handleStartLearning = () => {
    scrollToSection('courses')
  }

  const handleExploreCourses = () => {
    scrollToSection('courses')
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
              <button onClick={() => scrollToSection('registration')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Register
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
                <button onClick={() => scrollToSection('registration')} className="block px-3 py-2 text-gray-700 hover:text-purple-600 w-full text-left">
                  Register
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
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="Child exploring AI and digital technology with futuristic interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">AI-Powered Online Learning Experience</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our innovative online platform combines artificial intelligence with creative education to provide
                  personalized learning experiences. Students work on real projects, receive instant feedback, and develop
                  skills that prepare them for the digital future.
                </p>
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
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('registration')}
              className="bg-white bg-opacity-90 hover:bg-white text-purple-600 hover:text-purple-700 font-bold px-12 py-6 text-lg rounded-full border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
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
              <p className="text-gray-600">Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-200">
                <Image
                  src="/hijab.png"
                  alt="Hijab"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Hijab</h3>
              <p className="text-gray-600">Graphics Design Expert</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-purple-200">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Usman"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Usman</h3>
              <p className="text-gray-600">Video Editing Specialist</p>
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
              <p className="text-gray-600">Coding Instructor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Join Zubair AI Mini School</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to start your child's creative journey? Fill out our registration form below and we'll get back to you soon!
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Student Registration Form</h3>
                <p className="text-gray-600">Please fill out all required fields to register your child for our courses</p>
              </div>
              
              <div className="w-full h-[800px] border-0">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe-MgjT-0Fzni0J7vvEZYQgYa6HoeOnLrfKa1TFfhjInCOsdA/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Zubair AI Mini School Registration Form"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  Having trouble with the form? <a href="https://wa.me/923122238147" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">Contact us on WhatsApp</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-purple-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Child's Creative Journey?</h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
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
                  <div className="flex items-center mr-4">
                   
                    <Phone className="w-6 h-6 text-purple-200" />
                  </div>
                  <a href="tel:+923122238147" className="text-lg hover:text-white transition-colors">
                    +92 312 2238147
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-8 text-white backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-purple-100 mb-6">Ready to start your child's learning journey? Contact us today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923122238147"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zubair AI Mini School</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering young minds with creative digital skills for the future.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://wa.me/923122238147" className="w-8 h-8 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-right">
              <h3 className="text-lg font-semibold mb-4 text-left">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center ">
                  <Mail className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-400 ">hello@zubairaimini.school</span>
                </div>
                <div className="flex items-center ">
                  <div className="flex items-center mr-2">
                    <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                   
                  </div>
                  <a href="tel:+923122238147" className="text-gray-400 hover:text-white transition-colors">
                    +92 312 2238147
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Zubair AI Mini School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

