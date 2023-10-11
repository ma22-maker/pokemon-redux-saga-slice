
export  async function getData () {
    try {
      // console.log("hi")
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        // console.log(data)
        return data.results;
      } 
       catch (error) {
        console.error(error);
      }
    }

 export   async function Getallpokemon(animeName)
 {
         try {
             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${animeName}`);
             const data = await response.json();
             return data;
           } 
            catch (error) {
             console.error(error);
           }
          }