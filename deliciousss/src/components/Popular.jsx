function Popular() {
  const getPopoular = async () => {
    //em baixo vamos buscar 9 receitas ao calhas 
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_AP_API_KEY}&number=9`
    );
  };

  return <div>Popular</div>;
}

export default Popular;
