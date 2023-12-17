import Image from "next/image";
import Link from "next/link";
import Product from "@/utils/mock";
import Quantity2 from "@/utils/Quantity2";



const getProductDetail = (id: number) => {
    return Product.filter((Product)=> Product.id == id)
 }

const sizes = ["xs", "sm", "md", "lg", "xl"]

export default function page ({ params }: {params: {id: number} }) {
    const result = getProductDetail(params.id)
    return(
        <div className="flex py-16 px-12 justify-between">
            {result.map((product)=> {
                return(
                    <div key={product.id} className="lg:flex   justify-between gap-6">                      
                      {/* Left Image */}
                      <div className="p-3">
                      <Image className="rounded-xl lg:w-[42rem] lg:h-[43rem] w-[50rem] md:h-[40rem] h-[23rem]"
                      src={product.Image}
                      alt={product.producttype}
                      width={200}
                      height={200}
                      />
                      </div>

                      {/* Right Div for Content */}
                      <div className="py-10">
                        <h1 className="mt-10 font-semibold text-4xl">{product.name}</h1>
                        <h2 className="font-bold mt-1 text-3xl text-gray-400">{product.producttype}</h2>

                        {/* Sizes */}
                        <div className="mt-16">
                        <h3 className="text-lg font-semibold">
                            SELECT SIZE
                        </h3>
                        <div className="flex gap-6">
                        {sizes.map((size)=> {
                           return(
                            <div className="center w-12 h-12 mt-2 duration-300 rounded-full hover:shadow-xl cursor-pointer bg-gray-200">
                                 <span className="text-2xl font-semibold font-sans text-center text-gray-500">{size}</span>
                            </div>
                           )
                        })}
                        </div>
                        </div>

                         {/* Quantity */}
                         <div className="flex gap-5 mt-16 items-center">
                            <h3 className="text-lg font-bold font-sans">Quantity:</h3>
                            <Quantity2 />
                         </div>

                         {/* Price */}
                         <div className="flex text-xl mt-6 font-bold font-sans gap-6 items-center">
                            Total: 
                            <span className="text-xl font-bold">{product.price}</span>
                         </div>

                         {/* Add to Cart Button */}
                         <div className="py-10">
                            <button className="font-bold font-sans text-2xl px-4 py-2 bg-indigo-800 rounded-lg text-white">Add to Cart</button>
                         </div>
                      </div>
                    </div>
                )
            })}
        </div>
    )
}