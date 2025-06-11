
const pulleyTarget = document.getElementById("pulley_target");
const inputsForce = document.querySelector(".inputs-force");
const inputsWeight = document.querySelector(".inputs-weight");
const inputsNumber = document.querySelector(".inputs-number");
const result = document.getElementById("result_pulley");
const pulleyInputs = document.querySelectorAll('.inputs-force input, .inputs-weight input, .inputs-number input');

if (pulleyTarget) {
  pulleyTarget.addEventListener("change", () => {
    inputsForce.style.display = "none";
    inputsWeight.style.display = "none";
    inputsNumber.style.display = "none";
    if (pulleyTarget.value === "force") inputsForce.style.display = "block";
    else if (pulleyTarget.value === "weight") inputsWeight.style.display = "block";
    else if (pulleyTarget.value === "number") inputsNumber.style.display = "block";
  });

  document.getElementById("calculate_pulley").addEventListener("click", () => {
    const target = pulleyTarget.value;
    let output = "";

    if (target === "force") {
      const R = parseFloat(document.getElementById("force").value);
      const n = parseInt(document.getElementById("number").value);
      if (isNaN(R) || isNaN(n)) {
        output = "Please input valid numbers.";
        result.textContent = output;
        return;
      }
      const F = R / Math.pow(2, n);
      output = `The required Force(F) is: ${F.toFixed(2)} N`;
    } else if (target === "weight") {
      const F = parseFloat(document.getElementById("weight").value);
      const n = parseInt(document.getElementById("number2").value);
      if (isNaN(F) || isNaN(n)) {
        output = "Please input valid numbers.";
        result.textContent = output;
        return;
      }
      const R = F * Math.pow(2, n);
      output = `The required Weight(W) is: ${R.toFixed(2)} N`;
    } else if (target === "number") {
      const F = parseFloat(document.getElementById("force2").value);
      const R = parseFloat(document.getElementById("weight2").value);
      if (isNaN(F) || isNaN(R)) {
        output = "Please input valid numbers.";
        result.textContent = output;
        return;
      }
      const n = Math.log2(R / F);
      output = `The required quantity of movable pulleys is: ${n.toFixed(2)}`;
    }

    result.textContent = output;
  });

  pulleyInputs.forEach(input => {
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("calculate_pulley").click(); 
      }
    });
  });
}