async function search(route) {
    const request = await fetch(route);
    const dataEntries = await request.json();
    console.log(dataEntries)
    return(dataEntries)
};

async function display(diningArray) {
    const html = matchesArray.map((place) => `<li class="box">
        <span class="name"><b>${place.name}</b></span><br>
        <address><b>${place.address_line_1}</b><br>
        <b>${place.zip}</b><address>
        <br>
        </li>`).join('');

      suggestions.innerHTML = html;

    const suggestions = document.querySelector('#diningTable');
  }


async function windowActions() {
    diningArray = await search('/api/dining')
    display(diningArray)
};
      

window.onload = windowActions;