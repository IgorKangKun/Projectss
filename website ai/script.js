  // Function to handle the change event of the select element
  function handleGameSelectChange() {
    // Get the selected option
    var selectedOption = document.querySelector('select[name="game"]').value;

    // Get the container for the additional input
    var fifaInputContainer = document.getElementById("fifaInputContainer");

    // Clear any previous content in the container
    fifaInputContainer.innerHTML = "";

    // If the selected game is "FIFA," add an input field
    if (selectedOption === "FIFA") {
        var inputLabel = document.createElement("label");
        inputLabel.textContent = "Numeros dos Alunos para FIFA";
        
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "NumerosAlunosFIFA";
        inputField.id = "NumerosAlunosFIFA";

        fifaInputContainer.appendChild(inputLabel);
        fifaInputContainer.appendChild(inputField);

        // Optionally, you can add a line break
        var lineBreak = document.createElement("br");
        fifaInputContainer.appendChild(lineBreak);
    }
}

// Attach an event listener to the select element
var selectElement = document.querySelector('select[name="game"]');
selectElement.addEventListener("change", handleGameSelectChange);

// Trigger the change event initially to set the initial state
handleGameSelectChange();