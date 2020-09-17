const date = document.getElementById('date');
const day = document.getElementById('day');
const time = document.getElementById('time');
const week = ['Monday', 
			  'Tuesday', 
			  'Wednesday', 
			  'Thursday', 
			  'Friday',
			  'Saturday',
			  'Sunday']

const keepTime = () => {
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

		time.innerText = hours 
						+ ":" + minutes
						+ ":" + seconds;
}
		


setInterval(keepTime, 1000);


