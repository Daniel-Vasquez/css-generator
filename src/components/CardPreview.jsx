import backgroundImg from '@/images/fondo-img.png'
import rickSvg from '@/images/rick.svg'
import mortySvg from '@/images/morty.svg'
import chewbaccaSvg from '@/images/chewbacca.svg'
import darthVaderSvg from '@/images/darth-vader.svg'
import { buildBoxShadow } from "@/utils/boxShadow"

const USERS = [
  {
    name: "Rick",
    email: "rick@rickandmorty.com",
    time: "Admin",
    svg: rickSvg,
  },
  {
    name: "Morty",
    email: "morty@rickandmorty.com",
    time: "Invitado",
    svg: mortySvg,
  },
  {
    name: "Chewbacca",
    email: "chewbacca@starwars.com",
    time: "Invitado",
    svg: chewbaccaSvg,
  },
  {
    name: "Darth Vader",
    email: "dark.vader@starwars.com",
    time: "Invitado",
    svg: darthVaderSvg,
  },
]

const BACKGROUNDS = [
  { id: "image", label: "Imagen", style: { backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "center" } },
  { id: "dark", label: "Oscuro", style: { backgroundColor: "#111927" } },
  { id: "light", label: "Claro", style: { backgroundColor: "#f3f4f6" } },
]

export const CardPreview = ({ cardStyles, background = "image", setBackground }) => {
  const bg = BACKGROUNDS.find((b) => b.id === background) ?? BACKGROUNDS[0]
  const { borderRadius, color, blur, saturate } = cardStyles

  const CONTAINERSTYLES = {
    borderRadius: `${borderRadius}px`,
    boxShadow: buildBoxShadow(cardStyles),
    color: `${color}`,
    padding: '20px',
    margin: '0px auto',
    backdropFilter: `blur(${blur}px) saturate(${saturate}%)`,
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    overflow: "hidden",
    transition: "box-shadow .15s, border-radius .15s, backdrop-filter .15s",
  }

  return (
    <div
      className="relative bg-blue border-2 border-border rounded-xl grid items-center px-4 pt-14 pb-7 transition-colors"
      style={bg.style}
    >
      <div role="group" aria-label="Fondo del preview" className="absolute top-3 right-3 flex gap-1 bg-blue/90 rounded-lg p-1">
        {BACKGROUNDS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={id === bg.id}
            onClick={() => setBackground?.(id)}
            className={`py-1 px-2.5 rounded-md text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-golden ${
              id === bg.id ? "bg-golden text-black" : "text-white hover:bg-blue-light"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="w-full sm:w-auto" style={CONTAINERSTYLES}>
        <div className="flex items-center justify-between mb-4">
          <h3
            className="text-xl font-bold leading-none"
            style={{ color: color }}
          >
            Usuarios
          </h3>
          <a href="#" className="text-md font-semibold text-blue-600 hover:underline">
            Ver todos
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {USERS.map(({ name, email, time, svg }, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex flex-col gap-3 items-center sm:flex-row">
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src={svg}
                      alt={name}
                    />
                  </div>
                  <div className="flex-1 text-center min-w-0 sm:text-start">
                    <p
                      className="font-semibold truncate"
                      style={{ color: color }}
                    >
                      {name}
                    </p>
                    <p className="text-sm text-gray-300 truncate">
                      {email}
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center text-base font-semibold"
                    style={{ color: color }}
                  >
                    {time}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>

  )
}
