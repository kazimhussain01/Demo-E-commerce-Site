'use client'
import Quantity from "@/utils/Quantity"
import Product from "@/utils/mock"
import { StaticImageData } from "next/image"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { cartActions } from "@/app/store/slices/cartSlice"
import toast, { Toaster } from 'react-hot-toast';


const getProductDetail = (id: number) => {
    return Product.filter((Product)=> Product.id == id)
}

const sizes = ["xs", "sm", "md", "lg", "xl"]
export default function Page({ params }: {params: {id: number} }){
    const result = getProductDetail(params.id)
    const dispatch = useDispatch();
    const addItems = () => {
        dispatch(cartActions.addToCart({ quantity : 1 }));
        toast.success("Product Add to Cart")
    };
    
    return (
        <div className="flex py-16 lg:px-12 justify-between">
          {result.map((product) => {
              return (
                  <div key={product.id} className="lg:flex justify-between gap-6">
                      {/* Left Image */}
                      <div className="p-3">
                          <Image className="rounded-xl lg:w-[42rem] lg:h-[43rem] w-[50rem] md:h-[40rem] h-[23rem]" src={product.Image} alt={product.name}
                              width={500}
                              height={500} />
                      </div>
                      {/* Right Content */}
                      <div className="lg:ml-10">
                          <div className="py-10">
                              <h1 className="text-3xl">{product.name}</h1>
                              <h2 className="text-2xl text-gray-400 font-semibold">{product.producttype}</h2>
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold font-sans">SELECT SIZE</h3>

                              {/* Sizes */}
                              <div className="flex gap-6">
                                  {sizes.map((sizes) => {
                                      return (
                                          <div className="center w-10 h-10 mt-2 duration-300 border rounded-full hover:shadow-xl cursor-pointer">
                                              <span className="text-xl font-semibold font-sans text-center text-gray-500">
                                                  {sizes}
                                              </span>
                                          </div>
                                      )
                                  })}
                              </div>

                              {/* Quantity */}
                              <div className="flex gap-5 mt-6 items-center">
                                  <h3 className="text-lg font-bold font-sans">Quantity:</h3>
                                  <Quantity />
                              </div>
                              <div className="flex text-xl mt-6 font-bold font-sans gap-6 items-center">
                               Total: 
                               <span className="text-xl font-bold">{product.price}</span>
                              </div>
                            {/* Add To Cart Button */}
                            <div className="py-6">
                            <button onClick={addItems} className="font-bold font-sans text-2xl px-2 py-2 bg-indigo-800 rounded-lg text-white">Add to Cart</button>
                            </div>
                        </div>
                      </div>
                  </div>
              )
          })}
        </div>
      );
    }