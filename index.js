let wrapper = gebyid("combinationsWrapper");
let randomLinesWrapper = gebyid("randomLinesWrapper");
let numBalls = 0;
let lines = [];
let line = "";
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
	const small = Number(gebyid("firstSmallValue").value);
	const numtype = Number(gebyid("numtype").value);
	let para = "";

	if (numtype !==0) {
	    let even = 1;
	    if (numtype === 2) {
		for (let i = 1; i <= total; i++){
		    even = (2*i);
		     if (even > total)
		        break;
		    count += 1;
		    para += `<li id=${count}>${even}</li>`
		}
	    }
	    else{
		let odd = 1;
		for (let i = 0; i <= total; i++){
		    odd = (2*i) + 1;
		    if (odd > total)
		        break;
	    		count += 1;
	    		para += `<li id=${count}>${odd}</li>`
		}
	    }
	}
	else {
		for (let a=small; a<= total; a++)
		{
			count += 1;
			para += `<li id=${count}>${a}</li>`
		}
	}
	printLineX(wrapper, para);
};

function twoNumber(total){
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 1; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			count += 1;
			para += `<li id=${count}>${line}</li>`
			line = cutEnd(line);
		}
	}
	printLineX(wrapper, para);
};


function threeNumberR(total){
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{	
				if (b === a+1 && c === b+1)
					continue;
				line += "-" + c;
				count += 1;
				para += `<li id=${count}>${line}</li>`
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	
	printLineX(wrapper, para);
};


function fourNumberR(total){
	const small = Number(gebyid("firstSmallValue").value);
    let firstEnd = Number(gebyid("firstSmallValueEnd").value);
  	let secondEnd = Number(gebyid("secondSmallValueEnd").value);
  
  	if (firstEnd === 0){
      firstEnd = total - 2;
    }
  
  	if (secondEnd === 0){
      secondEnd = total;
    }
  console.log("four numbers started....");
   console.log("firstEnd: ",firstEnd);
    console.log("secondEnd: ", secondEnd);
	let para = "";
	for (a=small; a<= firstEnd; a++)
	{
		line = a;
		for (b=a+1; b<= secondEnd; b++)
		{
			line += "-" + b;

			for (c=b+1; c<= total; c++)
			{	
				if (b === a+1 && c === b+1)
					continue;
				line += "-" + c;
				
				for (d=c+1; d<= total; d++)
				{
					if (c === b+1 && d === c+1)
						continue;
					line += "-" + d;
					count += 1;
					para += `<li id=${count}>${line}</li>`
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	printLineX(wrapper, para);
};


function fiveNumberR(total){
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
	{
		line = a;
		if (a == 10)
			break;
			
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				if (b === a+1 && c === b+1)
					continue;
				line += "-" + c;
				
				for (d=c+1; d<= total; d++)
				{
					if (c === b+1 && d === c+1)
						continue;
					line += "-" + d;

					for (e=d+1; e<= total; e++)
					{
						if (d === c+1 && e === d+1)
							continue;
						line += "-" + e;
						count += 1;
						para += `<li id=${count}>${line}</li>`
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

// Event Listeners...

function hideButtons() {
	gebyid("seeComb").classList.add("hidden");
	gebyid("clearComb").classList.remove("hidden");
}

function callNumberFunctions(){
	const consecutiveChecked = gebyid("consecutive").checked;
	numBalls = gebyid("numballs").value;
	nbpl = gebyid("nbpl").value;
	let textContent = "";
	switch (nbpl) 
	{
  		case "1":
    			oneNumber(numBalls);
    			break;
  		case "2":
		  	twoNumber(numBalls);
  			break;
  		case "3":
  			if (consecutiveChecked)
    				threeNumberR(numBalls);
			else
				threeNumber(numBalls);
    			break;
    		case "4":
    			if (consecutiveChecked)
    				fourNumberR(numBalls);
			else
    				fourNumber(numBalls);
    			break;
		case "5":
    			if (consecutiveChecked)
    				fiveNumberR(numBalls);
			else
    				fiveNumber(numBalls);
    			break;
		default:
   			console.log(`Sorry, we are out of error.`);
	};
	hideButtons();
};

// Display all 3 Number Combinations
gebyid("seeComb").addEventListener("click", (e) => {
	gebyid("seeComb").setAttribute('disabled', '');
	gebyid("clearComb").removeAttribute('disabled');
	callNumberFunctions();
	
	gebyid("randomLineSection").classList.remove("hidden");
});

gebyid("clearComb").addEventListener("click", (e) => {
	count = 0;
	gebyid("clearComb").setAttribute('disabled', '');
	gebyid("seeComb").removeAttribute('disabled');
	gebyid("linesSection").remove();
	gebyid("clearComb").classList.add("hidden");
	gebyid("seeComb").classList.remove("hidden");	
	
	let sec = gebyid("randomlinesSec");
	if (sec !== null){
		gebyid("btnPicker").removeAttribute('disabled');
		gebyid("randomlinesSec").remove();
		gebyid("clearRandomLines").classList.add("hidden");
		gebyid("btnPicker").classList.remove("hidden");
	}
	gebyid("btnPicker").classList.remove("hidden");
	gebyid("clearRandomLines").classList.add("hidden");
	gebyid("randomLineSection").classList.add("hidden");
	
	gebyid("nbpl").selectedIndex = 0;
	gebyid("numballs").selectedIndex = 0;
	gebyid("firstSmallValue").selectedIndex = 0;
	gebyid("randomLinesNumber").selectedIndex = 0;
});

// removes element from the dom
function removeE(id){
  gebyid(id).remove();
};

// gebyid("remove").addEventListener("click", () => removeE("linesSection"));

// replaces document.getElementById(
function gebyid(id){
	return document.getElementById(id);
};

// TBC
gebyid("btnPicker").addEventListener("click", () => {
    gebyid("btnPicker").setAttribute('disabled', '');
    let numberOfLines = gebyid("randomLinesNumber").value;
    if (numberOfLines > count)
    	numberOfLines = count;
    printRandomLines(numberOfLines);
    gebyid("btnPicker").classList.add("hidden");
    gebyid("clearRandomLines").classList.remove("hidden");
});

gebyid("clearRandomLines").addEventListener("click", () => {
    gebyid("btnPicker").removeAttribute('disabled');
    gebyid("randomlinesSec").remove();
    gebyid("randomLinesNumber").selectedIndex = 0;
    gebyid("clearRandomLines").classList.add("hidden");
    gebyid("btnPicker").classList.remove("hidden");
});

function getRandomNumbers(previous, howMany){
	console.log("count: ", count);
    let arr = []; 
    let ran = Math.floor((Math.random() * count) + 1);

    for (let i = 1; i <= howMany; i++){
        if (arr.includes(ran) !== true && previous.includes(ran) !== true){
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
	let nbpl = gebyid("nbpl").value;
	let para = '';
	let randomLines = getRandomNumbers([], numberOfLines);
	if (nbpl == 1) {
	    console.log("nbpll is 1");
	    let randomLinesJoined = randomLines.join("-");
	    para = `<li id=${1}x>${randomLinesJoined}</li>`  
	
	}
	else{
		randomLines.forEach((num, index) => {
          	para += `<li id=${index}x>${gebyid(num).textContent} (line ${num})</li>`
              });
	}
	let p = document.createElement("div");
	p.id = "randomlinesSec";
	p.innerHTML = para;
	p.classList.add("line");
	p.style.textAlign = "center";
	p.style.fontSize = "20px";
	randomLinesWrapper.appendChild(p);
};


// Previous combination generating functions
// Counter functions 
function threeNumber(total){
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
	{
		line = a;
		for (b=a+1; b<= total; b++)
		{
			line += "-" + b;
			for (c=b+1; c<= total; c++)
			{
				line += "-" + c;
				count += 1;
				para += `<li id=${count}>${line}</li>`
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	
	printLineX(wrapper, para);
};


function fourNumber(total){
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
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
					count += 1;
					para += `<li id=${count}>${line}</li>`
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
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
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
						count += 1;
						para += `<li id=${count}>${line}</li>`
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
}


function sixNumber(total){
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
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
							count += 1;
							para += `<li id=${count}>${line}</li>`
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
	const small = Number(gebyid("firstSmallValue").value);
	let para = "";
	for (a=small; a<= total - 2; a++)
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
								count += 1;
								para += `<li id=${count}>${line}</li>`
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


