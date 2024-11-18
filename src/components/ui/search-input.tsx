"use client"

import { useState } from "react"
import { Input } from "./input"
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({defaultValue, hideOnSearch}: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [searchInput, setSearchInput] = useState(defaultValue ?? '');
    
    const handleSearchEnter = () => {
        if(searchInput) {
            router.push('/search?q='+encodeURIComponent(searchInput));
        }
    }

    if(hideOnSearch && pathname === '/search') return null 

    return(
        <Input
            placeholder="Buscar"
            filled
            value={searchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    )
}