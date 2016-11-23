let container = document.querySelector('.container');
const num = prompt('How many boxes do you want?');
const destiny = Math.floor(Math.random() * num);
let index = 0;
for(let i=0; i<num; i++){
	let box = document.createElement('div');
	box.className = 'box';
	container.appendChild(box);
	box.addEventListener('click', function(){
		index += 1;
		if(i == destiny){
			box.className += ' guessed';
			alert(`Congratulations, this is the box! It takes you ${index} times to guess it`);
		} else{
			box.className += ' wrongGuess'
			console.log('Sorry, this is not the box.');
			
		}
	});
}
