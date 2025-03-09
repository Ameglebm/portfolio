"use client"

import { useEffect, useState } from "react"
import { Briefcase, GraduationCap, Award, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SkillBar } from "@/components/skill-bar"

export default function Curriculo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-12 bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
            <Image
              src="/alisson.jpg"
              alt="Alisson Amegle"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-1 text-white">Alisson Amegle</h1>
          <p className="text-blue-400 mb-4">Desenvolvedor Backend</p>

          <div className="w-full mt-6 bg-slate-900 rounded-lg border border-slate-800 p-4 shadow-lg">
            <h2 className="text-lg font-semibold border-b border-slate-800 pb-2 mb-4 text-white">Contato</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-300">contato@exemplo.com</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-300">linkedin.com/in/alisson-amegle</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-300">github.com/alisson-amegle</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 bg-slate-900 rounded-lg border border-slate-800 p-4 shadow-lg">
            <h2 className="text-lg font-semibold border-b border-slate-800 pb-2 mb-4 text-white">Habilidades</h2>
            <div className="space-y-4">
              <SkillBar name="Node.js" percentage={85} />
              <SkillBar name="TypeScript" percentage={80} />
              <SkillBar name="Nest.js" percentage={75} />
              <SkillBar name="PostgreSQL" percentage={70} />
              <SkillBar name="Prisma ORM" percentage={80} />
              <SkillBar name="Git/GitHub" percentage={85} />
            </div>
          </div>

          <div className="w-full mt-6 bg-slate-900 rounded-lg border border-slate-800 p-4 shadow-lg">
            <h2 className="text-lg font-semibold border-b border-slate-800 pb-2 mb-4 text-white">Idiomas</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-slate-300">Português</p>
                  <p className="text-sm text-slate-400">Nativo</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-slate-300">Inglês</p>
                  <p className="text-sm text-slate-400">Intermediário</p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.section
            className="mb-8 bg-slate-900 rounded-lg border border-slate-800 p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Resumo</h2>
            <p className="text-slate-300">
              Sou uma pessoa empenhada e sempre disposta a aprender. Ao longo da minha trajetória, tenho me dedicado ao
              aperfeiçoamento constante para ingressar como desenvolvedor. Com experiência anterior em telecomunicações
              e eletrônica, trago uma forte capacidade de análise, resolução de problemas e integração de sistemas,
              aliada à vontade de evoluir e contribuir com meus conhecimentos.
            </p>
          </motion.section>

          <motion.section
            className="mb-8 bg-slate-900 rounded-lg border border-slate-800 p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                <Briefcase className="text-blue-400 h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Experiência Profissional</h2>
            </div>

            <div className="border-l-2 border-blue-500/30 pl-6 ml-4 space-y-10">
              <div className="relative">
                <div className="absolute -left-[30px] top-1 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/20"></div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">Desenvolvedor de Software</h3>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      Atual
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 mb-1">InsuCheck | Julho/2024 - Atualmente</p>
                  <p className="text-sm text-slate-400 mb-3">Voluntariado – Remoto</p>
                  <ul className="list-none space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Desenvolvimento de funcionalidades e otimização de código utilizando Node.js, Nest.js,
                        TypeScript e Prisma ORM.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Participação em equipes ágeis, contribuindo para dailies, plannings, reviews e retrospectivas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Colaboração via GitHub, realizando controle de versão, revisão de código e integração contínua.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Uso de PostgreSQL no Railway para gerenciamento de banco de dados e otimização de consultas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Aplicação de princípios SOLID e boas práticas de desenvolvimento para garantir código limpo e
                        escalável.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[30px] top-1 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/20"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Técnico de Telecomunicações</h3>
                  <p className="text-sm text-blue-400 mb-3">Conect Telecom | Março/2022</p>
                  <ul className="list-none space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Instalação, manutenção e expansão de redes de fibra óptica, UTP e rádio, garantindo alta
                        disponibilidade e desempenho.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Diagnóstico e resolução de falhas em redes, aplicando análise lógica e troubleshooting,
                        habilidades essenciais para desenvolvimento de software.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Implementação de soluções de conectividade, configurando equipamentos e integrando sistemas de
                        comunicação.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Automação de processos técnicos utilizando scripts e ferramentas de gerenciamento de rede,
                        reduzindo tempo de execução e aumentando eficiência.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[30px] top-1 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/20"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Técnico em Eletrônica</h3>
                  <p className="text-sm text-blue-400 mb-3">Dinamix Info Telecom | Novembro/2019 a Setembro/2020</p>
                  <ul className="list-none space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Realização de reparos e instalações de FTTH, UTP e antenas, garantindo o funcionamento de redes
                        de comunicação.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Diagnóstico e solução de problemas técnicos, aplicando análise lógica e raciocínio estruturado.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Integração e configuração de equipamentos para otimização da conectividade e desempenho dos
                        sistemas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-8 bg-slate-900 rounded-lg border border-slate-800 p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                <GraduationCap className="text-blue-400 h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Formação Acadêmica</h2>
            </div>

            <div className="border-l-2 border-blue-500/30 pl-6 ml-4">
              <div className="relative">
                <div className="absolute -left-[30px] top-1 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/20"></div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">Análise e Desenvolvimento de Sistemas</h3>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      Em andamento
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 mb-3">
                    Celso Lisboa Centro Universitário | Fevereiro de 2024 - Atualmente
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="bg-slate-900 rounded-lg border border-slate-800 p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                <Award className="text-blue-400 h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Cursos Complementares</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Desenvolvimento Web</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">HTML e CSS - Ultima.school - Concluído: 2024</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">React-Native - CURSOU - Em andamento</span>
                  </li>
                </ul>
              </div>

              <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Backend</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Python, SQLite3, Django, FastAPI - Ultima.school - Concluído: 2024</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Node.js - FGV - Em andamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">TypeScript - FGV - Em andamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Nest.js - FGV - Em andamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Postman - Ultima.school - Concluído: 2024</span>
                  </li>
                </ul>
              </div>

              <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 8L3 12L7 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 8L21 12L17 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 4L10 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Versionamento de código</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Git e GitHub - Ultima.School - Concluído: 2024</span>
                  </li>
                </ul>
              </div>

              <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Outros</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Manutenção de micro e redes - FAETEC - Concluído: 2020</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Informática básica e avançada - FAETEC - Concluído: 2020</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Sketchup - IDEA - Concluído: 2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

