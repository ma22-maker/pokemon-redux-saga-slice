import { getData,Getallpokemon } from "./exportData";
import { actioname } from "../GlobalStore/store";


export default function Asyncfun(dispatch,pokemondata) {
    async function animeData() {
      try {
        const data = await getData();
        const animeData = await Promise.all(
          data.map(async (anime) => {
            const res = await Getallpokemon(anime.name);
            return res;
          })
        );

        dispatch(actioname({ data: animeData }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if(!pokemondata?.length)
      animeData();
  }








//   useEffect(() => {
//     async function animeData() {
//       try {
//         const data = await getData();
//         const animeData = await Promise.all(
//           data.map(async (anime) => {
//             const res = await Getallpokemon(anime.name);
//             return res;
//           })
//         );

//         dispatch(actioname({ data: animeData }));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }animeData();
//   }, [dispatch]);



// async function animeData() {
//   try {
//     const data = await getData();
//     const animeData = await Promise.all(
//       data?.map(async (anime) => {
//         const res = await Getallpokemon(anime.name);
//         return res;
//       })
//     );
//     dispatch(actioname({ data: animeData }));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// animeData();
// useEffect(() => {
//   async function animeData() {
//     try {
//       const data = await getData();
//       const animeData = await Promise.all(
//         data.map(async (anime) => {
//           const res = await Getallpokemon(anime.name);
//           return res;
//         })
//       );

//       dispatch(actioname({ data: animeData }));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
//   if(!pokemondata?.length)
//     animeData();
// }, [dispatch,pokemondata]);
