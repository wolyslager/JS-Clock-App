const date = document.getElementById('date');
const day = document.getElementById('day');
const time = document.getElementById('time');
let toggle = false;
const week = ['Monday', 
			  'Tuesday', 
			  'Wednesday', 
			  'Thursday', 
			  'Friday',
			  'Saturday',
			  'Sunday']

const clear = () => {
	clearInterval(interval);
	toggle = !toggle;
	interval = setInterval(keepTime, 1000, toggle);
}

const keepTime = (toggle) => {
	console.log(toggle)
		//set date
		date.innerText = (new Date().getMonth() + 1)
			+ "/" + new Date().getDay() + "/" + new Date().getFullYear();
		//set day
		day.innerText = (week[new Date().getDay()-1]);
		//set time
		let seconds = new Date().getSeconds();
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();

		if(seconds.toString().length < 2){
			seconds = "0" + seconds;
		}

		if(hours.toString().length < 2){
			hours = "0"	+ hours;
		} 

		if(minutes.toString().length < 2){
			minutes = "0" + minutes;
		}

		 if(toggle){
			hours = hours > 12 
			? time.innerText = hours % 12 + ":" + minutes + ":" + seconds + " PM" 
			: time.innerText = hours  % 12 + ":" + minutes + ":" + seconds + " AM" 
		 } else {
		 	time.innerText = hours + ":" + minutes + ":" + seconds;
		 }
}

let interval = setInterval(keepTime, 1000, toggle);

document.getElementById('toggle').addEventListener("click", function(){clear()});




