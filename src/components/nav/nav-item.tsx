"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import path from "path";

type Props = {
    label: string;
    active?: boolean;
    href: string;
}

export const NavItem = ({label, active, href}: Props) => {
    const pathName = usePathname();
    const isMe = pathName === href;
    
    return(
        <Link href={href} className={`flex items-center gap-6 py-3 ${active || isMe ? "opacity-100" : "opacity-50"} hover:opacity-100`}>
            <div className="text-lg">{label}</div>
        </Link>
    )
}