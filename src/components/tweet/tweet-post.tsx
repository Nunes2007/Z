"use client"

import { user } from "@/data/user";
import { Button } from "../ui/button";

export const TweetPost = () => {

    const handleImageUpload = () => {

    }

    const handlePostClick = () => {

    }

    return(
        <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
            <div>
                <img 
                    src={user.avatar}
                    alt={user.name}
                    className="size-12 rounded-full"
                />
            </div>
            <div className="flex-1">
                <div 
                    className="flex flex-wrap min-h-14 outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
                    contentEditable
                    role="textbox"
                    data-placeholder="O que está acontecendo ?"
                ></div>
                <div className="flex justify-between items-center mt-2">
                    <div onClick={handleImageUpload} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                    <div className="w-20">
                        <Button
                            label="Postar"
                            onClick={handlePostClick}
                            size={2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}