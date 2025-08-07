
document.addEventListener("DOMContentLoaded", () => {
  const programSelect = document.getElementById("programSelect");
  const programDetails = document.getElementById("programDetails");

  programs.forEach((program, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = program.name;
    programSelect.appendChild(option);
  });

  programSelect.addEventListener("change", (e) => {
    const selected = programs[e.target.value];
    renderProgram(selected);
  });

  function renderProgram(program) {
    programDetails.innerHTML = `
      <h2>${program.name}</h2>
      <p>${program.description}</p>
      <h3>Required Courses</h3>
      <ul>${program.required.map(course => `<li>${course}</li>`).join("")}</ul>
      <h3>Electives</h3>
      <ul>${program.electives.map(course => `<li>${course}</li>`).join("")}</ul>
    `;
  }

  programSelect.selectedIndex = 0;
  renderProgram(programs[0]);
});
