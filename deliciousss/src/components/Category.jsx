import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//O NavLink vai permitir criar referências para outras páginas, sendo que o "to" vai definir qual a página é que se vai redirecionar quando se clicar
//no componente
function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

//ao fazer o "styled(NavLink)" estou basicamente a dizer que posso fazer alterações no CSS do NavLink, que é um componente do React
//o &.active é uma classe a qual é ativada quando um certo elemento foi selecionado na nav
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
export default Category;
