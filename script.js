function guessBox(){
	let num = prompt('How many friends do you want?');
	let destiny = Math.floor(Math.random() * num);
	let index = 0;

	for(let i=0; i<num; i++){
		let box = document.createElement('div');
		box.className = 'box';
		container.appendChild(box);
		box.addEventListener('click', function(){
			index += 1;
			if(i == destiny){
				box.className += ' guessed';
				if(box.className == 'box guessed'){
					info.innerText = `Congratulations, Nana is here! 
					It takes you ${index} times to find out Nana.`;
				}
				var restart = document.createElement('div');
				restart.className = 'restart';
				restart.innerHTML = '<h3>RESTART</h3>';
				container.appendChild(restart);
				restart.addEventListener('mouseup', function(){
					while(container.children.length > 0){
						container.removeChild(container.children[0])
					}
					info.innerText = '';
					guessBox();
				})
			} else{
				box.className += ' wrongGuess'
				info.innerText = 'Oops! Nana is not here.';

			}
		});
	}
}


let container = document.querySelector('.container');
let info = document.querySelector('.info');
guessBox();
