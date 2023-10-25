let wrapper = gebyid("combinationsWrapper");
let randomLinesWrapper = gebyid("randomLinesWrapper");
let numBalls = 0;
let lines = [];
let line = "";
let para = "";
let count = 0;
let spinner = `XXXX <div class="loadingio-spinner-spin-b224qdrx0v"><div class="spinner-self ldio-ysdfcau2qt">
		<div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
		</div></div>
  </div>`;

function showSpinner(){
 console.log("show spinner....");
	let div = document.createElement("div");
	div.id = "spinnerWrapper";
	div.innerHTML = spinner;
	wrapper.appendChild(div);
};

function removeSpinner(){
	gebyid("spinnerWrapper").remove();
};

// print line to the dom
function printLine(line){
	let p = document.createElement("p");
	p.id = count;
	p.textContent = line;
	p.classList.add("line");
	p.style.textAlign = "center";
	p.style.fontSize = "20px";
	wrapper.appendChild(p);
};

function printLineX(parent, line){
	let p = document.createElement("div");
	p.id = "linesSection";
	p.innerHTML = line;
	p.classList.add("line");
	p.style.textAlign = "center";
	p.style.fontSize = "20px";
	parent.appendChild(p);
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


// Counter functions 
function oneNumber(total){
	for (a=1; a<= total; a++)
	{
		//printLine(a);
		count += 1;
		para += `<p id=${count}>${a}</p>`
	}
	printLineX(wrapper, para);
};

function twoNumber(total){
	for (a=1; a<= total - 1; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			//printLine(line);
			count += 1;
			para += `<p id=${count}>${line}</p>`
			line = cutEnd(line);
		}
	}
	printLineX(wrapper, para);
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
		
				//printLine(line);
				//if (c 
				count += 1;
				para += `<p id=${count}>${line}</p>`
				
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	
	printLineX(wrapper, para);
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
					//printLine(line);
					count += 1;
					para += `<p id=${count}>${line}</p>`
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	printLineX(wrapper, para);
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
						//printLine(line);
						count += 1;
						para += `<p id=${count}>${line}</p>`
						line = cutEnd(line);
					}
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	
	printLineX(wrapper, para);
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
							//printLine(line);
							count += 1;
							para += `<p id=${count}>${line}</p>`
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
	printLineX(wrapper, para);
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
								//printLine(line);
								count += 1;
								para += `<p id=${count}>${line}</p>`
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
	printLineX(wrapper, para);
};


function filterLines(by, value) 
{
	let newLines = [];
	if (by.includes("below"))
	{
		newLines = document.getElementsByClassName("line");
		newLines = Array.prototype.filter.call(
  newLines, (line) => Number(line.textContent.substring(0, line.textContent.indexOf("-"))) < value);
		
		console.log(newLines);
	}
	
		
};

// Event Listeners...
// Scroll to the view of the line Selected
/*
gebyid("generate").addEventListener("click", () => {
	let randomLine = Math.floor(Math.random() * count);

	console.log("LINES NUMBER: ",count);
	console.log("Random Line: ",randomLine);
  	let target = gebyid(randomLine);
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

*/

// Display all 3 Number Combinations
gebyid("seeComb").addEventListener("click", (e) => {
	numBalls = gebyid("numballs").value;
	nbpl = gebyid("nbpl").value;

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
	//gebyid("wrap").style.display="flex";
});


// removes element from the dom
function removeE(id){
  gebyid(id).remove();
};

// gebyid("remove").addEventListener("click", () => removeE("linesSection"));

// replaces document.getElementById(
function gebyid(id){
	return document.getElementById(id);
	
	
	
	//TBC
	
	
	
};




// TBC
gebyid("btnPicker").addEventListener("click", () => {
    let numberOfLines = gebyid("randomLinesNumber").value;
    printRandomLines(numberOfLines);
});

function getRandomNumbers(howMany){
    let arr = []; 
    let ran = Math.floor((Math.random() * count) + 1);

    for (let i = 1; i <= howMany; i++){
        if (arr.includes(ran) !== true){
            arr.push(ran);
        }
        else{
            i -= 1;
        }
        ran = Math.floor((Math.random() * count) + 1);
    }
    
    return arr;
}

function printRandomLines(numberOfLines){
    let p = "";

    	let randomLines = getRandomNumbers(numberOfLines);
    	console.log(randomLines)
        randomLines.forEach((num) => {
	    p += `<p id=${count}>${gebyid(num).textContent}</p>`
        });

    printLineX(randomLinesWrapper, p);   
};

function checkSetArrFunction(list) {
	let setArr = [];
	let index1 = 0;
	let index2 = 0;

	for (let i = 0; i < list.length; i++){
	    
	    index1 = list[i].split("-")[0];
	    index2 = list[i].split("-")[1];
	    
	    if (!setArr.includes(index1))
		setArr.push(index1)
	    if (!setArr.includes(index2))
		setArr.push(index2)
	}

	if (setArr.length !== 5)
	{
	    console.log("Lines do not belong to a set!");
	    return false;
        }
	else
	{
	     console.log("Lines form a partion of the following set: !", setArr);
	     return setArr;
        }
	     
};



