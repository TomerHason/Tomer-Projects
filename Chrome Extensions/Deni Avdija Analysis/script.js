const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const answer = selectedOption.value;

    if (answer === "3") {
      alert("Correct! Come back next week");
    } else {
      alert("Incorrect. The correct answer is 6'9");
    }
  } else {
    alert("Please select an option.");
  }
});
