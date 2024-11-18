"use client"
import { useRouter } from "next/navigation";




export const NavLogout = () => {
  
    const router = useRouter();

    const handleClick = () => {
        router.replace("/signin")
    }

    return(
        <div onClick={handleClick} className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100`}>
            <div className="text-lg">Sair</div>
        </div>
    )
}