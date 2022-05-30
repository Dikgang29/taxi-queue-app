// write your DOM code here.



// DOM element references
//passangers queue
const joinQueueBtn = document.querySelector('.join_queue');
const leaveQueueBtn = document.querySelector('.leave_queue');
const passengersCounter = document.querySelector('.passenger_queue_count');

//taxi queue
const taxiQueueBtn = document.querySelector('.join_taxi_queue');
const taxiCount = document.querySelector('.taxi_queue_count');

//taxi depart
const departBtn = document.querySelector('.depart');



 


// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events



joinQueueBtn.addEventListener('click', function(){
    taxiQueue.joinQueue();
    passengersCounter.innerHTML = taxiQueue.queueLength();
});

leaveQueueBtn.addEventListener('click', function(){
    taxiQueue.leaveQueue();
    passengersCounter.innerHTML = taxiQueue.queueLength();
});

taxiQueueBtn.addEventListener('click', function(){
    taxiQueue.joinTaxiQueue();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();

});

departBtn.addEventListener('click', function(){
    // taxiQueue.taxiQueueLength()
    taxiQueue.taxiDepart();
    // taxiCount.innerHTML = taxiQueue.taxiQueueLength;
    
});
