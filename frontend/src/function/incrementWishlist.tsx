const increaseWishList = async (index: number, type: number) => {
  try {
    const response = await fetch(`http://localhost:3000/api/members/1`);
    if (response.ok) {
      const memberInfo = await response.json();
      const new_wishlist = memberInfo.wishlist;
      const currentAmount = new_wishlist[index].amount;
      const updatedAmount = Math.max(currentAmount + type, 0);
      new_wishlist[index].amount = updatedAmount;
      const updatedMember = {
        ...memberInfo,
        wishlist: new_wishlist,
      };
      const updateResponse = await fetch(
        `http://localhost:3000/api/members/1`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMember),
        }
      );
      if (updateResponse.ok) {
        console.log("Success");
        return true;
      } else {
        console.log("Error");
        return false;
      }
    } else {
      console.log("Member not found");
      return false;
    }
  } catch (error) {
    console.log("Error processing incrementation");
    return false;
  }
};

export default increaseWishList;
