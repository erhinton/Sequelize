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
async function getChartData(route){

};


async function makeChart() {
  data = getChartData('put route here')
  const chart = new CanvasJS.Chart('mealChart', {
    animationEnabled: true,
    title:{
      text: 'Meal Macros Chart'
    },
    axisX: {
      title: 'Meals'
    },
    axisY: {
      title: 'Macros'
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "stackedBar",
      name: "Meals",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 56 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 41 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 75 },
        { x: new Date(2017, 1, 5), y: 98 }
      ]
    },
    {
      type: "stackedBar",
      name: "Snacks",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 86 },
        { x: new Date(2017, 0, 31), y: 95 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 58 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 65 },
        { x: new Date(2017, 1, 5), y: 89 }
      ]
    },
    {
      type: "stackedBar",
      name: "Drinks",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 48 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 41 },
        { x: new Date(2017, 1, 2), y: 55 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 83 }
      ]
    },
    {
      type: "stackedBar",
      name: "Dessert",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 61 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 61 },
        { x: new Date(2017, 1, 2), y: 75 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 105 }
      ]
    },
    {
      type: "stackedBar",
      name: "Takeaway",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 52 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 20 },
        { x: new Date(2017, 1, 2), y: 35 },
        { x: new Date(2017, 1, 3), y: 30 },
        { x: new Date(2017, 1, 4), y: 45 },
        { x: new Date(2017, 1, 5), y: 25 }
      ]
    }]
  });
    chart.render();
  };





async function windowActions() {
  diningRows = await search('/api/dining');
  for (const obj of diningRows) {
    display(diningRows, '#diningTableBody');
  };
  makeChart()
}

window.onload = windowActions;