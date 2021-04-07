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
  data = data.sort(() => 0.5 - Math.random());
  data = data.slice(0,10)

  finalChartData = []
  for (const row of data) {
    finalChartData.push(
    {
      type: "stackedBar",
      name: row.meal_name,
      showInLegend: "true",

      dataPoints: [
        { x: 10, y: row.calories, label : 'calories' },
        { x: 20, y: row.serving_size, label : 'serving_size' },
        { x: 30, y: row.cholesterol, label : 'cholesterol' },
        { x: 40, y: row.sodium, label : 'sodium' },
        { x: 50, y: row.carbs, label : 'carbs' },
        { x: 60, y: row.protein, label : 'protein' },
        { x: 70, y: row.fat, label : 'fat' }
      ]
    }
    )
  };

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