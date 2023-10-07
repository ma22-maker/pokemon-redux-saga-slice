
export  async function getData () {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        //console.log(data.results);
        return data.results;
      } 
       catch (error) {
        console.error(error);
      }
    }

 export   async function Getallpokemon(animeName)
 {
    //  const data =  await getData();
    //   data.forEach( async (anime) => {
         try {
             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${animeName}`);
             const data = await response.json();
             //console.log(data);
             //setAllpokemon(currentList =>[...currentList ,data]);
             return data;
           } 
            catch (error) {
             console.error(error);
           }
    //   });
          }