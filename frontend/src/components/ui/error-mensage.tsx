type Props = {
    children : string;
}

export const ErrorMsg = ({children}: Props) => {
    return(
        <div className="text-red-600 text-lg">
            "{children}" 
        </div>
    );
}