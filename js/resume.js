// Step 1: Create the container element
const timelineContainer = document.getElementById('timelinediv').createElement('div');
timelineContainer.classList.add('timeline-container');

// Step 2: Define the data for the timeline
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

// Step 3: Create the elements for the timeline
timelineData.forEach(point => {
  const timelinePoint = document.createElement('div');
  timelinePoint.classList.add('timeline-point');

  const timelineDate = document.createElement('p');
  timelineDate.classList.add('timeline-date');
  timelineDate.textContent = point.date;

  const timelineEvent = document.createElement('p');
  timelineEvent.classList.add('timeline-event');
  timelineEvent.textContent = point.event;

  const timelineDescription = document.createElement('p');
  timelineDescription.classList.add('timeline-description');
  timelineDescription.textContent = point.description;

  timelinePoint.appendChild(timelineDate);
  timelinePoint.appendChild(timelineEvent);
  timelinePoint.appendChild(timelineDescription);
  timelineContainer.appendChild(timelinePoint);
});


  
