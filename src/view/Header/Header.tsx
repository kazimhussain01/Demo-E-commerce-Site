'use client'
import Link from "next/link"
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";


const Header = ()=> {
  const cartValue = useSelector(
    (state: RootState) => state.cart.totalQuantity)
    return(
        <div className="relative ml-2 mt-2 border h-12 w-12 justify-center items-center rounded-full center bg-gray-200">
          <Link href="/cart">
          <svg className="h-8 w-8" 
            fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          </Link>
          <span className="absolute ml-4 top-1 rounded-full bg-red-600 px-1 text-white text-xs">
            {cartValue}
          </span>
        </div>
    )
}

export default Header;

