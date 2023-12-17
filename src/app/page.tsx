import Image from "next/image";
import Link from "next/link";
import Products from "@/utils/mock";

const Product = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold font-sans text-center text-gray-700">Demo E-Commerce Website</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center lg:px-20 gap-8 mt-4">
                {Products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link href={`/productdetail/${product.id}`}>
                                <Image className="transform hover:scale-90 ease-in-out duration-300 lg:h-[24rem] lg:w-96 md:h-[22rem] w-80 my-4" src={product.Image}
                                    alt="product1"
                                    width={300}
                                    height={300}
                                />
                            </Link>
                            <h6 className="text-[1.2rem] font-bold ">{product.name}</h6>
                            <h6 className="text-md font-semibold -mt-1">{product.producttype}</h6>
                            <h6 className="text-[1.2rem] font-bold py-2">{product.price}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product;