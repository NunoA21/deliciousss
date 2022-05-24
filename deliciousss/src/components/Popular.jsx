import { useEffect, useState } from "react";

function Popular() {
  //no use state podemos inicializar com o que quisermos (array, string, bool, etc), apenas inicializamos com o tipo de dados que precisamos
  const [popular, setPopular] = useState([]);

  //o useEffect é utilizado assim que é montado o componente, ou seja o que está dentro é logo chamado
  //o [] no fnial é o estado por defeito quando não se tem dados ou se está a montar
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    //em baixo vamos buscar 9 receitas ao calhas
    //*NOTA: quando se adiciona um ficheiro .env, tem de se dar restart ao servidor para podermos aplicar as definições (Ctrl + C e depois npm start)
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    const data = await api.json();
    //usamos o setPopular, que é uma função, a qual vamos passar o estado. Em React não se altera diretamente o estado
    setPopular(data.recipes); //a api retorna um objecto onde tem uma lista com o nome recipes
  };

  return (
    <div>
      {popular.map((recipe) => {
        //tem d ese adicionar uma key para que se possa fazer o tracking das alterações
        return <div key={recipe.id}>{recipe.title}</div>;
      })}
    </div>
  );
}

export default Popular;
