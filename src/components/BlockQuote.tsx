import { ReactNode } from "react";

interface BlockQuoteProps {
    children: ReactNode;
}

export default function BlockQuote({ children }: BlockQuoteProps) {
    return (
        <p className="border-l-4 border-gray-400 bg-gray-50 px-4 py-2 italic text-gray-500 my-4">
            {children}
        </p>
    );
}
