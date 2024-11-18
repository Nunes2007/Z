"use client"

import { useState } from "react";
import { Logo } from "../ui/logo";
import { HomeMenu } from "./home-menu";

export const HomeHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div>
            <header className="flex justify-between p-6 border-b-2 border-gray-900">
                <div className="lg:hidden">
                    <Logo size={24}/>
                </div>
                <div className="hidden lg:block text-2xl">Página inicial</div>

                <div className="cursor-pointer"
                onClick={() => setShowMenu(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>                
                </div>

                {showMenu && 
                    <HomeMenu
                        closeAction={() => setShowMenu(false)}
                    />
                }
            </header>
        </div>
    );
}