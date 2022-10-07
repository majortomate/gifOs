import Link from "next/link"

function Header() {
  return (
    <header>
      <div className="gifosGradient dark:gifosGradientDark mx-auto">
        <p className="text-sm text-center py-2 dark:text-white font-chakra">Welcome to gifOs! ////// Visits so far: 12.765.803
        </p>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-4 items-center justify-items-center py-2 container mx-auto px-10">
        <Link href="/">
          <img src="https://res.cloudinary.com/knowhere/image/upload/v1664803097/gifOs/static/logo_sprite_1_vuwotu.png" alt="logo gifOs" className="h-12 col-span-1 lg:col-span-2 cursor-pointer mr-auto"/>
        </Link>
        <ul className="flex col-span-3 lg:col-span-2 ml-auto font-chakra">
          <li className="gifosBtn">
            <a href="">Crear gifOs</a>
          </li>
          <li className="gifosBtn">
            <a href="">Elegir Tema</a>
          </li>
          <li className="gifosBtn">
            <a href="">Mis gifOs</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
