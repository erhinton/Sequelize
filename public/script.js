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



async function makeChart() {

  async function getChartData(route) {
    const request = await fetch(route);
    const dataEntries = await request.json();
    return (dataEntries);
  };

  data = await getChartData('/api/mealmacro')
  data = data.slice(0,10)
  console.log(typeof data[0].serving_size)


  finalChartData = []
  for (const row of data) {
    finalChartData.push(
    {
      type: "stackedBar",
      name: row.meal_name,
      showInLegend: "true",

      dataPoints: [
        { x: 'calories', y: row.calories},
        { x: 'serving_size', y: row.serving_size},
        { x: 'cholesterol', y: row.cholesterol},
        { x: 'sodium', y: row.sodium},
        { x: 'carbs', y: row.carbs},
        { x: 'protein', y: row.protein},
        { x: 'fat', y: row.fat}
      ]
    }
    )
  };
  console.log(finalChartData)

  const chart = new CanvasJS.Chart('mealChart', {
    animationEnabled: true,
    title:{
      text: 'Meal Macros Chart'
    },
    axisX: {
      title: 'Macros'
    },
    axisY: {
      title: 'Meals'
    },
    toolTip: {
      shared: true
    },
    data: finalChartData
  });

    chart.render();
  };





async function windowActions() {
  diningRows = await search('/api/dining');
  for (const obj of diningRows) {
    display(diningRows, '#diningTableBody');
  };
  await makeChart()
}

window.onload = windowActions;