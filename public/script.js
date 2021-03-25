async function search(route) {
  const request = await fetch(route);
  const dataEntries = await request.json();
  return (dataEntries.data);
}

async function display(diningRows, table) {
  const html = diningRows.map((hall) => `<tr>
        <th>${hall.hall_id}</th>
        <th>${hall.hall_name}</th>
        <th>${hall.hall_address}</th>
    </tr>`).join('');

  const suggestions = document.querySelector(table);
  suggestions.innerHTML = html;
}

async function windowActions() {
  diningRows = await search('/api/dining');
  for (const obj of diningRows) {
    display(diningRows, '#diningTableBody');
  }
}

window.onload = windowActions;