export const fetchProduct = () => {

};

export const fetchProductsList =  async(parameter) => {
  if(!parameter){
    throw new Error ('Termo de busca não informado')
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parameter}`);
  const data = await response.json();
  return (data.results);
};
