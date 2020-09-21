let toggle = true;
let interval;
document.addEventListener('DOMContentLoaded', function(){
	keepTime();
	interval = setInterval(keepTime, 1000);
})

let button = document.getElementById('toggle');
button.addEventListener('click', (e) => {
	toggle = !toggle;
	clearInterval(interval);
	keepTime();
	interval = setInterval(keepTime, 1000);
});
	
const keepTime = () => {
	const date = document.getElementById('date');
	const day = document.getElementById('day');
	const time = document.getElementById('time');
	let newDate = new Date();
	let seconds = formatTime(newDate.getSeconds());
	let hours = newDate.getHours();
	let minutes = formatTime(newDate.getMinutes());
	let month = newDate.getMonth() + 1;
	let dateNumber = newDate.getDate();
	let dayName = newDate.getDay();
	let year = newDate.getFullYear();

	const dayOfweek = [
		'Sunday',
		'Monday', 
		'Tuesday', 
		'Wednesday', 
		'Thursday', 
		'Friday',
		'Saturday',
		]

		date.innerText = (month+ "/" + dateNumber + "/" + year);
		day.innerText = dayOfweek[dayName];

		 if(toggle){
			hours = hours > 12 
			? time.innerText = hours % 12 + ":" + minutes + ":" + seconds + " PM" 
			: time.innerText = hours  % 12 + ":" + minutes + ":" + seconds + " AM" 
		 } else {
		 	time.innerText = hours + ":" + minutes + ":" + seconds;
		 }
}

const formatTime = (unit) => {
	return unit.toString().length < 2 ? "0" + unit : unit;
}



