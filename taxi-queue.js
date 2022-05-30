function TaxiQueue() {


	let queueCounter = 0;

	let taxiQueueCounter = 0;
	// let fullTaxi = 12;
	function joinQueue() {

		queueCounter++;
		
	}

	function leaveQueue() {

		if(queueCounter>0){
		queueCounter--;
		}
	}

	function joinTaxiQueue() {

		taxiQueueCounter++;

	}

	function queueLength() {

		return queueCounter;
	}

	function taxiQueueLength() {

		return taxiQueueCounter;
	}

	function taxiDepart(){

		if(taxiQueueLength()){
		if(queueLength()>=12){
			queueCounter= queueCounter - 12;
			// if(taxiQueueCounter>0){
			// taxiQueueCounter--;
			// }
			
			
			taxiQueueCounter--;

		}
	
		} 
		
		


	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}