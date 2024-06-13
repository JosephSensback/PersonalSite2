import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine"
import { FaReact, FaHtml5, FaCss3, FaJs, FaNode, FaPython, FaGithub, FaLinkedin, FaDesktop } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { RiNextjsFill } from "react-icons/ri"

import { loadSlim } from "@tsparticles/slim"
import { SiExpress, SiTypescript } from "react-icons/si"
import { DiDjango } from "react-icons/di"
import { FaShop } from "react-icons/fa6"

const App = () => {
  const [init, setInit] = useState(false)

  const [isChecked, setIsChecked] = useState(true)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          attract: {
            distance: 300,
          },
        },
      },
      particles: {
        color: {
          value: ["#fff"],
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 1,
          trail: {
            enable: true,
            length: 2,
            fill: {
              color: "#000000",
            },
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 1500,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1 },
        },
      },
      detectRetina: false,
    }),
    []
  )

  if (init) {
    return (
      <body>
        {isChecked && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}

        <div className="contain">
          {/* <h1 className="text-white text-center text-4xl font-bold animate-fade_in_text z-10">Joseph Sensback</h1> */}
          <div className="wrapper">
            <div className="card-wrapper animate-fade_in_text">
              <input type="radio" name="cardControl" id="c1" defaultChecked />
              <input type="radio" name="cardControl" id="c2" />
              <input type="radio" name="cardControl" id="c3" />
              <input type="radio" name="cardControl" id="c4" />
              <input type="radio" name="cardControl" id="c5" />
              <input type="radio" name="cardControl" id="c6" />
              <input type="radio" name="cardControl" id="c7" />
              <div className="cards">
                <label htmlFor="c1" className="card1 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-purple-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">Joseph Sensback</h1>
                  <div className="h-full flex flex-col justify-center gap-6">
                    <img src="/joseph.jpg" alt="Photo of Joseph" className="rounded-full max-w-24 mx-auto" />
                    <div>
                      <p>Full-Stack Developer</p>
                      <p>React/Typescript/Tailwind</p>
                    </div>
                  </div>
                </label>

                <label htmlFor="c2" className="card2 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-blue-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">Bio</h1>
                  <div className="h-full flex flex-col justify-evenly">
                    <p>I am a freelance full-stack website developer of 4+ years who is particularly experienced in React. Currently searching for full-time employment!</p>
                  </div>
                </label>

                <label htmlFor="c3" className="card3 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-green-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">Main Stack</h1>
                  <div className="h-full flex flex-col justify-center gap-6">
                    <p>These are the tools I use most often!</p>
                    <ul className="grid grid-cols-2 w-3/4 mx-auto text-left gap-1">
                      <li className="flex justify-center items-center">
                        <FaReact size={30} color="#61DBFB" />
                      </li>
                      <li>React</li>

                      <li className="flex justify-center items-center">
                        <RiTailwindCssFill size={30} color="#a5f3fc" />
                      </li>
                      <li>Tailwind</li>

                      <li className="flex justify-center items-center">
                        <FaCss3 size={30} color="#264de4" />
                      </li>
                      <li>CSS</li>

                      <li className="flex justify-center items-center">
                        <FaHtml5 size={30} color="#e34c26" />
                      </li>
                      <li>HTML</li>

                      <li className="flex justify-center items-center">
                        <FaJs size={30} color="#f0db4f" />
                      </li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </label>

                <label htmlFor="c4" className="card4 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-purple-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">Other Tools</h1>
                  <div className="h-full flex flex-col justify-center gap-4">
                    <p>Here are some other tools I am experienced in!</p>
                    <ul className="grid grid-cols-2 w-3/4 mx-auto text-left gap-0.5">
                      <li className="flex justify-center items-center">
                        <SiTypescript />
                      </li>
                      <li>Typescript</li>

                      <li className="flex justify-center items-center">
                        <RiNextjsFill />
                      </li>
                      <li>Next.js</li>

                      <li className="flex justify-center items-center">
                        <FaNode />
                      </li>
                      <li>Node.js</li>

                      <li className="flex justify-center items-center">
                        <SiExpress />
                      </li>
                      <li>Express.js</li>

                      <li className="flex justify-center items-center">
                        <FaPython />
                      </li>
                      <li>Python</li>

                      <li className="flex justify-center items-center">
                        <DiDjango />
                      </li>
                      <li>Django</li>
                    </ul>
                    <p>...and many more!</p>
                  </div>
                </label>

                <label htmlFor="c5" className="card5 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-blue-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">More Coming Soon!</h1>
                </label>

                <label htmlFor="c6" className="card6 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-green-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">Example Projects</h1>
                  <div className="flex flex-col h-full items-center justify-center gap-6">
                    <div>
                      <div>
                        <a href="https://www.lupofremont.com/">
                          <FaDesktop size={40} className="mx-auto" />
                          <p className="underline">Lupo</p>
                        </a>

                        <p className="text-sm">This is a project I completed for a local restaurant, build using Next.js 13</p>
                      </div>
                    </div>
                    <div>
                      <a href="https://nextjs-meows.vercel.app/">
                        <FaShop size={40} className="mx-auto" />
                        <p className="underline">Meows & Co</p>
                      </a>
                      <p className="text-sm">This is an e-commerce demo, build using Next.js 13</p>
                    </div>
                  </div>
                </label>

                <label htmlFor="c7" className="card7 bg-[length:150%_150%] bg-gradient-to-br from-black via-slate-900 to-black animate-move_gradient border-2 border-gray-500 rounded-2xl">
                  <h1 className="text-3xl font-nabla">Links</h1>
                  <div className="grid grid-cols-2 h-full items-center justify-center">
                    <div>
                      <a href="https://github.com/JSenzie">
                        <FaGithub size={50} className="mx-auto" />
                        <p>Github</p>
                      </a>
                    </div>
                    <a href="https://www.linkedin.com/in/joseph-sensback-86bb34235/">
                      <FaLinkedin size={50} className="mx-auto" />
                      <p>LinkedIn</p>
                    </a>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mx-auto relative">
            <input type="checkbox" id="toggle" checked={isChecked} onChange={checkHandler} />
            <label htmlFor="toggle" className="toggle"></label>
          </div>
        </div>
      </body>
    )
  }

  return <></>
}

export default App
