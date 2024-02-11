const getCurrentUser = async() =>{
    const response = await fetch(`http://localhost:3000/api/currentUser`,{
        method: 'GET'
    });
    if (response.ok){
        const currentUser = response.json();
        return currentUser;
    }
}
export default getCurrentUser;