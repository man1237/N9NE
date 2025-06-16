const branches = [
  {
    name: "Kandukur",
    address: "Main Road, Kandukur, Andhra Pradesh",
    map: "https://www.google.com/maps?q=kandukur"
  },
  {
    name: "Nellore",
    address: "Downtown Area, Nellore, Andhra Pradesh",
    map: "https://www.google.com/maps?q=nellore"
  },
  {
    name: "Guntur",
    address: "Ring Road, Guntur, Andhra Pradesh",
    map: "https://www.google.com/maps?q=guntur"
  }
];

window.onload = () => {
  const container = document.getElementById("branch-list");
  branches.forEach(branch => {
    const div = document.createElement("div");
    div.className = "branch";
    div.innerHTML = `
      <h3>${branch.name} Branch</h3>
      <p>${branch.address}</p>
      <a href="${branch.map}" target="_blank" style="color: #4faaff;">View on Map</a>
    `;
    container.appendChild(div);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
};

function joinNow() {
  alert("Thank you for your interest! Our team will contact you shortly.");
}
