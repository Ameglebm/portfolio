"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contato() {
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log(formData)
    toast({
      title: "Mensagem enviada",
      description: "Obrigado pelo contato! Retornarei em breve.",
    })
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-12 bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold mb-6 text-white">Entre em Contato</h1>
          <p className="text-slate-300 mb-8">
            Estou disponível para oportunidades de trabalho, projetos e colaborações. Sinta-se à vontade para entrar em
            contato comigo através do formulário ou das minhas redes sociais.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-sm text-slate-400">contato@exemplo.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">LinkedIn</h3>
                <p className="text-sm text-slate-400">linkedin.com/in/alisson-amegle</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                <Github className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-white">GitHub</h3>
                <p className="text-sm text-slate-400">github.com/alisson-amegle</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg border border-slate-700 bg-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-4">Localização</h3>
            <p className="text-slate-300 mb-2">Rio de Janeiro, Brasil</p>
            <p className="text-slate-400 text-sm">Disponível para trabalho remoto e oportunidades internacionais</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-slate-900 border-slate-700 shadow-xl shadow-blue-900/5">
            <CardHeader className="border-b border-slate-800">
              <CardTitle className="text-white">Envie uma mensagem</CardTitle>
              <CardDescription className="text-slate-400">
                Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-800 border-slate-700 text-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-800 border-slate-700 text-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-300">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-800 border-slate-700 text-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem aqui..."
                    className="min-h-[120px] bg-slate-800 border-slate-700 text-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-800 bg-slate-900/50">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

