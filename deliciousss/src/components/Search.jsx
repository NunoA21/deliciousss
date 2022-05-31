import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Search() {
  const [input, setInput] = useState("");
  //o navigate permite que se possa navegar a partir daqui da barra de pesquisa, o que acontece é que ele vai colocar, na página principal (url), o 
  //que estamos a procurar, neste caso se procurarmos por "cookie" o link vai ficar localhost:3000/searched/cookie
  const navigate = useNavigate();
  //e.preventDefault() faz co mque ao carregar no enter que não faça o refresh da página
  //o facto de fazer refresh ao carregar no enter é um comportamento padrão do form
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
