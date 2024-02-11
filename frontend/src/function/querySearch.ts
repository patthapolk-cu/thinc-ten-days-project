const querySearch = async (searchInput: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/querySearch/${searchInput}`
    );
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.json());
    }
  } catch (err) {
    console.log(err);
  }
};

export default querySearch;
