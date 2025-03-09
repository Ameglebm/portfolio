"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, Database, Server } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { TechBadge } from "@/components/tech-badge"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Bem-vindo ao Meu <span className="text-blue-400">Perfil Profissional</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-400 md:text-xl">
                    Profissional em transição de carreira para Desenvolvimento de Sistemas, com experiência anterior em
                    telecomunicações e eletrônica, trazendo forte capacidade de análise, resolução de problemas e
                    integração de sistemas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/curriculo">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500">
                      Ver Currículo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contato">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 px-8 text-sm font-medium text-slate-300 shadow-sm transition-colors hover:bg-slate-800 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500"
                    >
                      Contato
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative h-[450px] w-[350px] overflow-hidden rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 p-4 border border-slate-700 shadow-lg shadow-blue-900/20">
                  <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                  <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-inner">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                      <Code className="h-10 w-10 text-blue-400" />
                    </div>
                    <div className="mt-6 space-y-2 text-center">
                      <h3 className="text-xl font-bold text-white">Desenvolvedor Backend</h3>
                      <p className="text-sm text-slate-400">
                        Node.js • Nest.js • TypeScript • JavaScript • Prisma ORM • PostgreSQL
                      </p>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                          <Server className="h-6 w-6 text-blue-400" />
                        </div>
                        <span className="text-xs text-slate-400">Backend</span>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                          <Database className="h-6 w-6 text-blue-400" />
                        </div>
                        <span className="text-xs text-slate-400">Banco de Dados</span>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                          <Code className="h-6 w-6 text-blue-400" />
                        </div>
                        <span className="text-xs text-slate-400">API</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 border-t border-slate-800">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Tecnologias</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Minhas principais competências e ferramentas
                </p>
              </div>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <TechBadge name="Node.js" icon="/icons/nodejs.svg" />
              <TechBadge name="Nest.js" icon="/icons/nestjs.svg" />
              <TechBadge name="TypeScript" icon="/icons/typescript.svg" />
              <TechBadge name="JavaScript" icon="/icons/javascript.svg" />
              <TechBadge name="PostgreSQL" icon="/icons/postgresql.svg" />
              <TechBadge name="Prisma" icon="/icons/prisma.svg" />
              <TechBadge name="Python" icon="/icons/python.svg" />
              <TechBadge name="Django" icon="/icons/django.svg" />
              <TechBadge name="FastAPI" icon="/icons/fastapi.svg" />
              <TechBadge name="React Native" icon="/icons/react.svg" />
              <TechBadge name="Git" icon="/icons/git.svg" />
              <TechBadge name="GitHub" icon="/icons/github.svg" />
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border border-slate-700 bg-slate-800/50 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                  <Server className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Backend</h3>
                <p className="text-sm text-center text-slate-400">
                  Desenvolvimento de APIs RESTful e GraphQL com Node.js, Nest.js, TypeScript e JavaScript.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border border-slate-700 bg-slate-800/50 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                  <Database className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Banco de Dados</h3>
                <p className="text-sm text-center text-slate-400">
                  Modelagem e otimização de bancos de dados relacionais com PostgreSQL e ORMs como Prisma.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border border-slate-700 bg-slate-800/50 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Metodologias</h3>
                <p className="text-sm text-center text-slate-400">
                  Aplicação de princípios SOLID, metodologias ágeis (Scrum) e versionamento com Git/GitHub.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950 border-t border-slate-800">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Projetos</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Alguns dos meus trabalhos recentes
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-lg transition-all hover:shadow-blue-900/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video w-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-blue-600/20 to-slate-900 flex items-center justify-center">
                    <Code className="h-16 w-16 text-blue-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">API de Gerenciamento</h3>
                  <p className="text-sm text-slate-400 mb-4">
                    API RESTful para gerenciamento de recursos com autenticação JWT e documentação Swagger.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      Nest.js
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      TypeScript
                    </span>
                  </div>
                  <Link href="#" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Ver projeto →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-lg transition-all hover:shadow-blue-900/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video w-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-blue-600/20 to-slate-900 flex items-center justify-center">
                    <Database className="h-16 w-16 text-blue-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Sistema de Monitoramento</h3>
                  <p className="text-sm text-slate-400 mb-4">
                    Dashboard para monitoramento de métricas em tempo real com gráficos interativos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      PostgreSQL
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      Prisma
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      JavaScript
                    </span>
                  </div>
                  <Link href="#" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Ver projeto →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-lg transition-all hover:shadow-blue-900/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video w-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-blue-600/20 to-slate-900 flex items-center justify-center">
                    <Server className="h-16 w-16 text-blue-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Aplicativo Mobile</h3>
                  <p className="text-sm text-slate-400 mb-4">
                    Aplicativo mobile para gerenciamento de tarefas com sincronização offline.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      React Native
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      API REST
                    </span>
                  </div>
                  <Link href="#" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Ver projeto →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-slate-950 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© 2024 Alisson Amegle. Todos os direitos reservados.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                href="https://www.linkedin.com/"
              >
                LinkedIn
              </Link>
              <Link
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                href="mailto:contato@exemplo.com"
              >
                Email
              </Link>
              <Link className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="https://github.com/">
                GitHub
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

