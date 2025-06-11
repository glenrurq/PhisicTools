
const leverTarget = document.getElementById("lever_target");
const inputsLforce = document.querySelector(".inputs-Lforce");
const inputsResistance = document.querySelector(".inputs-resistance");
const inputsResistanceArm = document.querySelector(".inputs-resistance_arm");
const inputsLforceArm = document.querySelector(".inputs-Lforce_arm");
const resultL = document.getElementById("result_lever");
const leverInputs = document.querySelectorAll('.inputs-Lforce input, .inputs-resistance input, .inputs-resistance_arm input, .inputs-Lforce_arm input');

if (leverTarget) {
  leverTarget.addEventListener("change", () => {
    const value = leverTarget.value;
    inputsLforce.style.display = "none";
    inputsResistance.style.display = "none";
    inputsLforceArm.style.display = "none";
    inputsResistanceArm.style.display = "none";

    if (value === "Lforce") inputsLforce.style.display = "block";
    else if (value === "resistance") inputsResistance.style.display = "block";
    else if (value === "Lforce_arm") inputsLforceArm.style.display = "block";
    else if (value === "resistance_arm") inputsResistanceArm.style.display = "block";
  });

  document.getElementById('calculate_lever').addEventListener('click', () => {
    const target = leverTarget.value
    let F, R, RA, FA

    switch (target) {
      case 'Lforce': 
        R = parseFloat(document.getElementById('resistance_input').value)
        FA = parseFloat(document.getElementById('Lforce_arm_input').value)
        RA = parseFloat(document.getElementById('resistance_arm_input').value)
        if (R >= 0 && FA > 0 && RA > 0) {
          F = (R * RA) / FA
          resultL.textContent = `To balance the lever, you need to apply a force of ${F.toFixed(3)} N.`
        } else resultL.textContent = 'Please enter valid positive values for resistance and arms.'
        break

      case 'resistance': 
        F = parseFloat(document.getElementById('Lforce_input').value)
        FA = parseFloat(document.getElementById('Lforce_arm_input2').value)
        RA = parseFloat(document.getElementById('resistance_arm_input2').value)
        if (F >= 0 && FA > 0 && RA > 0) {
          R = (F * FA) / RA
          resultL.textContent = `The resistance that can be balanced with this force is ${R.toFixed(3)} N.`
        } else resultL.textContent = 'Please enter valid positive values for force and arms.'
        break

      case 'resistance_arm': 
        R = parseFloat(document.getElementById('resistance_input2').value)
        FA = parseFloat(document.getElementById('Lforce_arm_input3').value)
        F = parseFloat(document.getElementById('Lforce_input2').value)
        if (R >= 0 && FA > 0 && F > 0) {
          RA = (F * FA) / R
          resultL.textContent = `The resistance arm required for balance is ${RA.toFixed(3)} m.`
        } else resultL.textContent = 'Please enter valid positive values for resistance, force, and force arm.'
        break

      case 'Lforce_arm':
        R = parseFloat(document.getElementById('resistance_input3').value)
        RA = parseFloat(document.getElementById('resistance_arm_input3').value)
        F = parseFloat(document.getElementById('Lforce_input3').value)
        if (R >= 0 && RA > 0 && F > 0) {
          FA = (R * RA) / F
          resultL.textContent = `The force arm required for balance is ${FA.toFixed(3)} m.`
        } else resultL.textContent = 'Please enter valid positive values for resistance, force, and resistance arm.'
        break
    }
  });

  leverInputs.forEach(input => {
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("calculate_lever").click(); 
      }
    });
  });
}