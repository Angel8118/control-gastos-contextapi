import type { ReactNode } from "react";

type ErrorMesageProps = {
  children: ReactNode;}

export default function ErrorMesage(children: ErrorMesageProps) {
  return (
    <p className="bg-red-600 text-white font-bold
    text-sm text-center p-3 rounded-lg mb-5">
        {children.children}
    </p>
  )
}
