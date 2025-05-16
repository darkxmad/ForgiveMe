const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');

function handleAnswer(answer) {
  if (questionText.textContent.includes("Did You Forgive Me")) {
    if (answer === 'yes') {
      questionText.textContent = "Q2: Really";
      answersDiv.innerHTML = `
        <button onclick="finalAnswer('really_yes')">Yes</button>
        <button onclick="finalAnswer('really_no')">No</button>
      `;
    } else if (answer === 'no') {
      questionText.textContent = "Q2: Please??";
      answersDiv.innerHTML = `
        <button onclick="finalAnswer('please_okay')">Okay</button>
        <button onclick="finalAnswer('please_no')">No</button>
      `;
    }
  }
}

function finalAnswer(response) {
  switch (response) {
    case 'really_yes':
      questionText.textContent = "GO AND DM ME THEN !! (❁´◡`❁)";
      break;
    case 'please_okay':
      questionText.textContent = "ThankYou !!";
      break;
    case 'please_no':
    case 'really_no':
      questionText.textContent = "No Worries 😔";
      break;
  }
  answersDiv.innerHTML = "";
}
