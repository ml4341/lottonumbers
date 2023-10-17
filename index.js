let wrapper = document.getElementById("combinations");

let numBalls = 0;
let lines = [];
let line = "";
let count = 0;

// Event Listeners

// Scroll to the view of the line Selected
document.getElementById("generate").addEventListener("click", () => {
	let randomLine = Math.floor(Math.random() * count);

	console.log("LINES NUMBER: ",count);
	console.log("Random Line: ",randomLine);
  	let target = document.getElementById(randomLine);
  	target.style.color = "red";
  	
  	let rect = target.getBoundingClientRect();
  	
  	window.scrollTo({
  		top: rect.top - 50,
  		left: rect.left,
  		behavior: "smooth",
	});

	for (const key in rect) {
  		if (typeof rect[key] !== "function") {
    	
    		console.log(`${key} : ${rect[key]}`);
  	}
}
  
});

// Display all 3 Number Combinations
document.querySelector("#seeComb").addEventListener("click", (e) => {
	numBalls = document.getElementById("numballs").value;
	nbpl = document.getElementById("nbpl").value;
	console.log("typeof nbpl", typeof(nbpl));
	switch (nbpl) 
	{
  		case "1":
    			oneNumber(numBalls);
    			break;
  		case "2":
  			twoNumber(numBalls);
  			break;
  		case "3":
    			threeNumber(numBalls);
    			break;
    		case "4":
    			fourNumber(numBalls);
    			break;
		case "5":
    			fiveNumber(numBalls);
    			break;
		case "6":
    			sixNumber(numBalls);
    			break;
		case "7":
    			sevenNumber(numBalls);
    			break;
		default:
   			console.log(`Sorry, we are out of error.`);
	};
	document.getElementById("wrap").style.display="flex";
});
























// print line to the dom
function printLine(line){
	let p = document.createElement("p");
	p.id = count;
	p.textContent = line;
	wrapper.appendChild(p);
};

// cut the end of a string and return the new trimmed string
function cutEnd(text){
	let tempArr1 = text.split("-");
	tempArr1.reverse();
	text = tempArr1.join("-");
	text = text.substring(text.indexOf("-") +1);
	let tempArr2 = text.split("-");
	tempArr2.reverse();
	text = tempArr2.join("-");
	delete tempArr1;
	delete tempArr2;
	return text;

};

function oneNumber(total){
	for (a=1; a<= total; a++)
	{
		printLine(a);
		count += 1;
	}
};

function twoNumber(total){
	for (a=1; a<= total - 1; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			printLine(line);
			count += 1;
			line = cutEnd(line);
		}
	}
};


function threeNumber(total){
	for (a=1; a<= total - 2; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				line += "-" + c;
		
				printLine(line);
				count += 1;
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
};


function fourNumber(total){
	for (a=1; a<= total - 2; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				line += "-" + c;
				
				for (d=c+1; d<= total; d++)
				{
					line += "-" + d;
					printLine(line);
					count += 1;
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
};


function fiveNumber(total){
	for (a=1; a<= total - 2; a++)
	{
		line = a;
		if (a == 3)
			break;
			
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				line += "-" + c;
				
				for (d=c+1; d<= total; d++)
				{
					line += "-" + d;

					for (e=d+1; e<= total; e++)
					{
						line += "-" + e;
						printLine(line);
						count += 1;
						line = cutEnd(line);
					}
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
};


function sixNumber(total){
	for (a=1; a<= total - 2; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				line += "-" + c;
				
				for (d=c+1; d<= total; d++)
				{
					line += "-" + d;
					
					for (e=d+1; e<= total; e++)
					{
						line += "-" + e;

						for (f=e+1; f<= total; f++)
						{
							line += "-" + f;
							printLine(line);
							count += 1;
							line = cutEnd(line);
						}
						line = cutEnd(line);
					}
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
};

function sevenNumber(total){
	for (a=1; a<= total - 2; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				line += "-" + c;
				
				for (d=c+1; d<= total; d++)
				{
					line += "-" + d;
					
					for (e=d+1; e<= total; e++)
					{
						line += "-" + e;
						
						for (f=e+1; f<= total; f++)
						{
							line += "-" + f;

							for (g=f+1; g<= total; g++)
							{
								line += "-" + g;
								printLine(line);
								count += 1;
								line = cutEnd(line);
							}
							line = cutEnd(line);
						}
						line = cutEnd(line);
					}
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
};

