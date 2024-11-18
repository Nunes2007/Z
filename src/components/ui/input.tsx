import { KeyboardEventHandler } from "react";

type Props = {
    value: string;
    placeholder: string;
    onChange?: (newText: string) => void;
    filled?: boolean;
    password?: boolean;
    onEnter?: () => void;

}
export const Input = ({filled ,value, placeholder, onChange, password, onEnter}: Props) => {

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter' && onEnter) {
            onEnter();
        }
    }

    return(
        <div className={`has-[:focus]:border-white flex flex-items h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
            <input
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                type={password ? 'password' : 'text'}
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}