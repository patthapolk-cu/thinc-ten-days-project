const getUser = async () => {
  const response = await fetch(`http://localhost:3000/api/members/1`, {
    method: "GET",
  });
  if (response.ok) {
    const user = response.json();
    return user;
  }
};
export default getUser;
