// write your DOM code here.


// DOM element references
const joinQueueBtn = document.querySelector('.join_queue');
const leaveQueueBtn = document.querySelector('.leave_queue');
const passengersCounter = document.querySelector('.passenger_queue_count');
 


// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

joinQueueBtn.addEventListener('click', function(){
    taxiQueue.joinQueue();
    passengersCounter.innerHTML = taxiQueue.queueLength();
})