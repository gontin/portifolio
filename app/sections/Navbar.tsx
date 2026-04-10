import Link from "next/link";

interface NavlinkProps {
  href: string;
  children: React.ReactNode;
}

const Navlink = ({href, children}: NavlinkProps) => {
  return (
  <Link href={href} className="flex flex-col items-center group text-3xl hover:text-emerald-400 transition-colors">
    {children}
  </Link>)

}
export default function Navbar() { 

  return (
  <nav className="grid grid-cols-3 items-center w-full p-4">
    <div></div>
    <div className="flex justify-center gap-4">
      <Navlink href="/"><svg className="w-12 h-12 text-white hover:scale-150" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20h4v-6h2v6h4v2H4v-2h4v-6h2v6Zm-6 0H2V10h2v10Zm18 0h-2V10h2v10Zm-8-6h-4v-2h4v2Zm-8-4H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z"/></svg>
        <span className="text-[10px] uppercase mt-1">Home</span>
      </Navlink>
      <Navlink href="/Projetos"><svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M2 8h2v12H2zm18 0h2v12h-2zM4 6h16v2H4zm0 14h16v2H4zM8 4h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2z"/></svg>
        <span className="text-[10px] uppercase mt-1">Projetos</span>
      </Navlink>
      <Navlink href=""><svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5h2v2H8V5ZM6 7h2v2H6V7ZM4 9h2v2H4V9Zm-2 2h2v2H2v-2Zm2 2h2v2H4v-2Zm2 2h2v2H6v-2Zm2 2h2v2H8v-2Zm8-12h-2v2h2V5Zm2 2h-2v2h2V7Zm2 2h-2v2h2V9Zm2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Z"/></svg>
        <span className="text-[10px] uppercase mt-1">Currículo</span>
      </Navlink>
    </div>
    <div className="flex justify-end">
      <a className="z-10" href="">
        <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H8v-2h10v2ZM8 20H6v-2h2v2Zm12 0h-2v-2h2v2ZM6 18H4v-2h2v2Zm16 0h-2v-4h-2v-2h2v-2h2v8ZM4 16H2V6h2v10Zm14 0h-6v-2h6v2Zm-6-2h-2v-2h2v2Zm-2-2H8V6h2v6ZM6 6H4V4h2v2Zm8-2h-2v2h-2V4H6V2h8v2Z"/></svg>
      </a>
    </div>
  </nav>

)}