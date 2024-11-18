import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";
import { Logo } from "../ui/logo";
import { SearchInput } from "../ui/search-input";

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({closeAction}: Props) => {
    return(
        <div className="lg:hidden fixed inset-0 p-6 bg-black ">
            <div className="flex justify-between items-center">
                <Logo size={32}/>
                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 bg-gray-930">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
            </div>

            <div className="my-6">
                <SearchInput/>
            </div>

            <div>
                <NavItem
                    href="/home"
                    label="Página inicial"
                />
                <NavItem
                    href="/profile"
                    label="Meu perfil"
                />

                <NavLogout/>
            </div>
        </div>
    );
}