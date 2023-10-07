import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Progress } from "@nextui-org/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Getallpokemon } from "./exportData";

function ProductDescriptionPage() {
  let { animeName } = useParams();
  // console.log(animeName);
  const [details, setDetails] = useState();

  useEffect(() => {
    async function animeData() {
      const res = await Getallpokemon(animeName);
      console.log(res);
      setDetails(res);
    }
    animeData();
  }, [animeName]);

  //   console.log("details",details);

  return (
    <>
      {details?.abilities ? (
        <>
          <Card className="bg-danger-100 w-[full]">
            <CardHeader>
              <p className="text-6xl font-semibold uppercase">{details.name}</p>
            </CardHeader>
            <CardBody>
              <div className="gap-2 grid grid-cols-12 px-8">
                <div className="w-full h-full col-span-12 sm:col-span-5">
                  <Image
                    alt={details.name}
                    className="object-cover"
                    height={150}
                    src={details.sprites.other.dream_world.front_default}
                    width="100%"
                  />
                </div>
                <div className="w-full h-full col-span-12 sm:col-span-7">
                  <Card className="bg-rose-300">
                    <CardHeader>ABOUT</CardHeader>
                    <CardBody>
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <div>
                            <h3 className="font-semibold text-foreground/90">
                              Height : {details.height} cm
                            </h3>
                            <h3 className="font-semibold text-foreground/90">
                              Weight : {details.weight} kg
                            </h3>
                          </div>
                          <div>
                            <h1 className="text-large font-medium mt-3">
                              ABILITIES
                            </h1>
                            {details.abilities.map((item, index) => (
                              <li
                                key={index}
                                className="font-semibold text-foreground/90"
                              >
                                {item.ability.name}
                              </li>
                            ))}
                          </div>
                          <div>
                            <h1 className="text-large font-medium mt-3">
                              TYPES
                            </h1>
                            {details.types.map((item, index) => (
                              <li
                                key={index}
                                className="font-semibold text-foreground/90"
                              >
                                {item.type.name}
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="mt-4 bg-pink-300">
                    <CardHeader>Base stats</CardHeader>
                    <CardBody>
                      {details.stats.map((item,index)=>
                      <ul key={index}>
                         <Progress
                         label={item.stat.name}
                        isStriped
                        aria-label="Loading..."
                        color="danger"
                        showValueLabel={true}
                        value={item.base_stat}
                        className="max-w-md mb-2"
                      />
                      </ul>
                      
                      )}
                     
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default ProductDescriptionPage;
