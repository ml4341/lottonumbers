const givenSetCombinationsSection = gebyid("givenSetCombinationsSection");
const givenSetInput = gebyid("givenSet");
const generateFromSetBtn = gebyid("generateFromSetBtn");


generateFromSetBtn.addEventListener("click", () => {
	const set = givenSetInput.value.split("-");
	const twoNumberLines = twoNumberLinesFromSet(set);
	const threeNumberLines = twoNumberLinesFromSet(set);
	const fourNumberLines = twoNumberLinesFromSet(set);
	
	document.createElemet("ol");
	givenSetCombinationsSection.textContent
	givenSetCombinationsSection.appendChild(threeNumberLinesFromSet);
	givenSetCombinationsSection.appendChild(fourNumberLinesFromSet);
	
	});




// replaces document.getElementById(
function gebyid(id){
	return document.getElementById(id);
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

function twoNumberLinesFromSet(set){
	let para = "\n";
	for (a=0; a< set.length; a++)
	{
		line = list[a];
		for (b=a+1; b< set.length; b++)
		{
			line += "-" + list[b];
			count += 1;
			//para += `<li id=${count}>${line}</li>`
			para += line + "\n";
			line = cutEnd(line);
		}
	}
	//printLineX(wrapper, para);
	console.log("2 number lines::  ", para);
	return para;
};


function threeNumberLinesFromSet(set){
	let para = "\n";
	for (a=0; a< set.length; a++)
	{
		line = list[a];
		for (b=a+1; b< set.length; b++)
		{
			line += "-" + list[b];
			for (c=b+1; c< set.length; c++)
			{	
				line += "-" + list[c];
				count += 1;
				//para += `<li id=${count}>${line}</li>`
				para += line + "\n";
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	
	//printLineX(wrapper, para);
	console.log("3 number lines::  ", para);
	return para;
};


function fourNumberLinesFromSet(set){
	//const small = Number(gebyid("firstSmallValue").value);
	let para = "\n";
	for (a=0; a< set.length - 2; a++)
	{
		line = list[a];
		for (b=a+1; b< set.length; b++)
		{
			line += "-" + list[b];
			for (c=b+1; c< set.length; c++)
			{	
				line += "-" + list[c];
				
				for (d=c+1; d< set.length; d++)
				{
					line += "-" + list[d];
					count += 1;
					//para += `<li id=${count}>${line}</li>`
					para += line + "\n";
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	console.log("4 number lines::  ", para);
	return para;
};

