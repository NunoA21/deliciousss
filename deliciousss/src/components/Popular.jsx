import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  //no use state podemos inicializar com o que quisermos (array, string, bool, etc), apenas inicializamos com o tipo de dados que precisamos
  const [popular, setPopular] = useState([]);

  //o useEffect é utilizado assim que é montado o componente, ou seja o que está dentro é logo chamado
  //o [] no fnial é o estado por defeito quando não se tem dados ou se está a montar
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    //primeiro verificamos se temos os dados em sessão, para não estarmosa gastar pedidos da API e para melhorarmos a performance da app
    const check = localStorage.getItem("popular");

    if (check) {
      //no localStorage só podemos guardar strings, por isso é qe aqui fazemos um parse para JSON e em baixo fazemos um stringify
      setPopular(JSON.parse(check));
    } else {
      //em baixo vamos buscar 9 receitas ao calhas
      //*NOTA: quando se adiciona um ficheiro .env, tem de se dar restart ao servidor para podermos aplicar as definições (Ctrl + C e depois npm start)
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));

      //usamos o setPopular, que é uma função, a qual vamos passar o estado. Em React não se altera diretamente o estado
      setPopular(data.recipes); //a api retorna um objecto onde tem uma lista com o nome recipes
      console.log(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popoular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
          //tem d ese adicionar uma key para que se possa fazer o tracking das alterações
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}></img>
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

//o styled components permite-nos criar este tipo de componentes
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

//aqui são as cartas onde vão estar as imagens
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

//O Gradient é o sombreado que fica nas cartas do carrossel para que fique mais perceptivel o nome dos pratos
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
