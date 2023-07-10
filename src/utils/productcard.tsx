// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";

// function ProductCard(props: {
//     title: string;
//     producttype: string;
//     price: number;
//     img: StaticImageData;
//     category: string;
//     id: number;
//   })  {
//     return (
//         <Link href={`/productdetail/${props.id}`}>
//         <div className="py-5">
//           <Image src={props.img} alt="product"/>
//           <h3 className="font-bold text-lg mt-3">{props.title}</h3>
//           <p className="font-bold text-lg">${props.price}</p>
//           <p className="font-bold text-lg">
//           <span className="text-base font-normal capitalize">
//             {props.category}
//           </span>
//         </p>
//         <p>{props.producttype}</p>
//       </div>
//       </Link>
//     );
//   }
  
//   export default ProductCard;