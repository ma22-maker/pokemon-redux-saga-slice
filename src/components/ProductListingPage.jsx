import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData, Getallpokemon } from "./exportData";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function ProductListingPage() {
  let isempty = true;
  const [allpokemon, setAllpokemon] = useState([]);
  useEffect(() => {
    async function animeData() {
      const data = await getData();
      data.forEach(async (anime) => {
        const res = await Getallpokemon(anime.name);
        setAllpokemon((currentList) => [...currentList, res]);
      });
    }
    animeData();
  }, []);

  console.log(allpokemon);

  if (allpokemon.length >= 0) {
    isempty = false;
  }

  return (
    <>
      {isempty ? (
        <h1>no listing found</h1>
      ) : (
        <div className="w-full gap-2 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-8">
          {allpokemon.map((item, index) => (
            <Link to={`/about/${item.name}`} key={index}>
              <Card shadow="sm" key={index}>
                <CardBody className="flex flex-row p-0 justify-between items-center">
                  <Image
                    shadow="lg"
                    radius="lg"
                    width="100%"
                    alt={item.name}
                    className="w-[200px] object-contain h-[200px]"
                    src={item.sprites.other.dream_world.front_default}
                  />              
                  <div>
                  <h4 className="font-bold text-large mr-4">{item.name}</h4>
                  <div  className="flex flex-col ">
                    { item.types.map((item,index)=>
                      <ul key={index}>{item.type.name}</ul>
                    )}
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

export default ProductListingPage;
