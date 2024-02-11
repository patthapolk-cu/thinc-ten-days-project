const handlePayment = async (userId: number, amount: number) => {
  console.log("paying");
  try {
    const response = await fetch(`http://localhost:3000/api/members/${userId}`);
    if (response.ok) {
      const memberInfo = await response.json();
      const currentMoney = memberInfo.cash;

      if (currentMoney >= amount) {
        const updatedMoney = currentMoney - amount;
        const updatedMember = { ...memberInfo, cash: updatedMoney };
        const updateResponse = await fetch(
          `http://localhost:3000/api/members/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMember),
          }
        );

        if (updateResponse.ok) {
          console.log("Payment successful");
        } else {
          console.log("Error updating cash");
        }
      } else {
        console.log("Insufficient cash");
      }
    } else {
      console.log("Member not found");
    }
  } catch (error) {
    console.log("Error processing payment");
  }
};

export default handlePayment;
