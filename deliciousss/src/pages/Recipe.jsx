import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log("fetched details");
  };

  useEffect(() => {
    fetchDetails();
    console.log(params.name);
  }, [params.name]);

  //o dangerouslySetInnerHTML usa-se quando temos um campo que devolve HTML, isto retira todas as quotes e tags html que o texto tem
  //para usar, temos de envolver em {} e depois usar a tag "__html:" (dois underscores seguidos) e o nome do campo que traz HTML
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {console.log(details.extendedIngredients)}
        {
          //é preciso ter uma das tabs abertas para que ele possa mostrar essa informação
          activeTab === "instructions" && (
            <div>
              <br />
              <h1>Summary</h1>
              <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
              <br />
              <h1>Instructions</h1>
              <h4
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h4>
            </div>
          )
        }
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
