const updateCurrentUser = async(userId: string) =>{
    try{
        const updatedUser = {"userid": parseInt(userId)};
        console.log(updatedUser);
        const response = await fetch(`http://localhost:3000/api/currentUser`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
        if (response.ok){
            console.log('update user successfully')
        }
        else{
            console.log('error updating user');
        }
    }
    catch(error){
        console.log(error);
    }
}

export default updateCurrentUser;