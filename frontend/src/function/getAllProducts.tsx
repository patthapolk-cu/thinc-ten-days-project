
const getAllProducts = async() =>{
    const response = await fetch(`http://localhost:3000/api/products`,{
        method: 'GET'
    });
    if (response.ok){
        const Products = response.json();
        return Products;
    }

}
export default getAllProducts;
