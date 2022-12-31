// Define the data for the timeline
const timelineData = [
    {
      date: 'Jan 1, 2022',
      event: 'New Year\'s Day',
      description: 'Celebrate the start of a new year!'
    },
    {
      date: 'Jul 4, 2022',
      event: 'Independence Day',
      description: 'Celebrate the United States\' independence!'
    },
    {
      date: 'Dec 25, 2022',
      event: 'Christmas Day',
      description: 'Celebrate the birth of Jesus Christ!'
    }
  ];

  google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const container = document.getElementById('timeline-chart');
  const chart = new google.visualization.Timeline(container);
  const dataTable = google.visualization.arrayToDataTable(timelineData);

  chart.draw(dataTable);
}
  
  function generateTimeline(){
  // Get the timeline container element
  const timeline = document.getElementById('timeline');
console.log('generateTimeline'+timeline);
  // Dynamically generate the timeline based on the data
  timelineData.forEach(point => {
    // Create the timeline item element
    const item = document.createElement('li');

    // Create the timeline date element
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = point.date;

    // Create the timeline content element
    const content = document.createElement('span');
    content.classList.add('content');
    content.textContent = point.event;

    // Add the date and content elements to the timeline item
    item.appendChild(date);
    item.appendChild(content);

    // Add the timeline item to the timeline container
    timeline.appendChild(item);
  
  });
}