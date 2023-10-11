import { Link } from "react-router-dom";
import { Card, CardBody, Image } from "@nextui-org/react";
import {  useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { listingData } from "../GlobalStore/reduxStore";



export default function ProductListingPage() {
  const dispatch = useDispatch() 
const pokemondata = useSelector((state) => {
  return state.data;
})
const loading = useSelector((state) => {
  return state.loading;
})

useEffect(()=>{
  
  if(pokemondata?.length <=0) 
  { console.log("calling dispatch")
    dispatch(listingData()); 
    }
},[])
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full gap-2 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-8">
          {pokemondata?.map((item) => (
            <Link to={`/about/${item.name}`} key={item.id}>
              <Card shadow="sm">
                <CardBody className="flex flex-row p-0 justify-between items-center">
                  <Image
                    shadow="lg"
                    radius="lg"
                    width="100%"
                    alt={item.name}
                    className="w-[200px] object-contain h-[200px]"
                    src={item.image}
                  />
                  <div>
                    <h4 className="font-bold text-large mr-4">{item.name}</h4>
                    <div className="flex flex-col">
                      {item.types.map((type, index) => (
                        <ul key={index}>{type}</ul>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}




// return (
//   <>
//     {loading ? (
//       <h1>Loading...</h1>
//     ) : (
//       <div className="w-full gap-2 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-8">
//         {pokemondata?.map((item) => (
//           <Link to={`/about/${item.name}`} key={item.id}>
//             <Card shadow="sm">
//               <CardBody className="flex flex-row p-0 justify-between items-center">
//                 <Image
//                   shadow="lg"
//                   radius="lg"
//                   width="100%"
//                   alt={item.name}
//                   className="w-[200px] object-contain h-[200px]"
//                   src={item.sprites.other.dream_world.front_default}
//                 />
//                 <div>
//                   <h4 className="font-bold text-large mr-4">{item.name}</h4>
//                   <div className="flex flex-col">
//                     {item.types.map((type, index) => (
//                       <ul key={index}>{type.type.name}</ul>
//                     ))}
//                   </div>
//                 </div>
//               </CardBody>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     )}
//   </>
// );