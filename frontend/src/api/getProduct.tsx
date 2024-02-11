const getProduct = async(p: string) =>{
    const response = await fetch(`http://localhost:3000/api/products/name/${p}`,{
        method: 'GET'
    });
    if (response.ok){
        const Products = response.json();
        return Products;
    }
}
export default getProduct;