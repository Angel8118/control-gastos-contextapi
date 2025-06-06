import { useMemo, useState, type ChangeEvent, type FormEvent } from "react"
import { useBudget } from "../hooks/useBudget";


export default function BudgetForm() {
 
    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget((+e.target.value));
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type: 'add-budget', payload:{budget}})
    }

    return (
    <form className="space-y-5"onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl
            text-blue-600 font-bold text-center"></label>
            <input 
            type="number"
            id="budget"
            placeholder="Define tu presupuesto"
            className="w-full p-2 bg-white
            border border-gray-200  rounded-lg text-2xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={budget}
            onChange={handleChange}
            min={0}
            step={0.01}
            required
        
        />
        </div>
        
        <input 
        type="submit"
        value='Definir Presupuesto'
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer
        w-full p-2 text-white font-black uppercase rounded-lg
        disabled:opacity-48" 
        disabled={isValid}
        
        />
    </form>
  )
}
