import Link from "next/link"


function Footer() {
  return (
    <div className="gifosGradient">
      <p className="text-sm text-center py-2">© 2022 gifOs™. All Rights Reserved. Built by 
        <Link href="https://www.linkedin.com/in/majortomate/">
          <a target="_blank"> Majortomate</a>
        </Link>
      </p>
    </div>
  )
}

export default Footer
