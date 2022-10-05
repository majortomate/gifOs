import Link from "next/link"


function Footer() {
  return (
    <footer className="gifosGradient dark:gifosGradientDark absolute bottom-0 w-full h-10">
      <p className="text-sm text-center py-2 dark:text-white">© 2022 gifOs™. All Rights Reserved. Built by 
        <Link href="https://www.linkedin.com/in/majortomate/">
          <a target="_blank"> Majortomate</a>
        </Link>
      </p>
    </footer>
  )
}

export default Footer
