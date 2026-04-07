const data = [
  {
    name: "Marketing Tools",
    items: "0 items",
    date: "Jan 5, 2022",
    views: 21,
  },

  {
    name: "Time management tools",
    items: "0 items",
    date: "Jan 5, 2022",
    views: 3,
  },
];

setTimeout(() => {
  const table = document.getElementById("table-body");

  table.innerHTML = "";

  data.forEach((item, i) => {
    const row = document.createElement("tr");

    row.classList.add("fade-in");

    row.style.animationDelay = i * 0.2 + "s";

    row.innerHTML = `

<td><input type="checkbox"></td>

<td>

<i class="fa-regular fa-folder folder"></i>

<div>

<div>${item.name}</div>

<small>${item.items}</small>

</div>

</td>

<td>${item.date}</td>

<td>${item.views}</td>

<td>☆ 0</td>

<td class="member">

<i class="fa fa-user"></i> 

Member

</td>

<td>⋮</td>

`;

    table.appendChild(row);
  });
}, 1200);
