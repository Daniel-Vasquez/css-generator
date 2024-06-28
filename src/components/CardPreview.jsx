import backgroundImg from '@/images/fondo-img.png'
import rickSvg from '@/images/rick.svg'
import mortySvg from '@/images/morty.svg'
import chewbaccaSvg from '@/images/chewbacca.svg'
import darthVaderSvg from '@/images/darth-vader.svg'

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

export const CardPreview = ({ cardStyles }) => {
  const {
    borderRadius,
    boxShadowColor,
    boxShadow,
    boxX,
    boxY,
    color,
    opacity,
    saturate
  } = cardStyles

  const CONTAINERSTYLES = {
    borderRadius: `${borderRadius}px`,
    boxShadow: `${boxX}px ${boxY}px ${boxShadow}px ${boxShadowColor}`,
    color: `${color}`,
    padding: '20px',
    margin: '0px auto',
    backdropFilter: `blur(${opacity}px) saturate(${saturate}%)`,
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    overflow: 'hidden',
  }

  return (
    <div
      className="bg-blue border-2 border-border rounded-xl grid items-center py-7"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={CONTAINERSTYLES}>
        <div className="flex items-center justify-between mb-4">
          <h5
            className="text-xl font-bold leading-none"
            style={{ color: color }}
          >
            Usuarios
          </h5>
          <a href="#" className="text-md font-semibold text-blue-600 hover:underline">
            Ver todos
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {USERS.map(({ name, email, time, svg }, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src={svg}
                      alt="Rick"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold truncate"
                      style={{ color: color }}
                    >
                      {name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
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
