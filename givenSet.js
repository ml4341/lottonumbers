const glcs = gebyid("givenSetCombinationsSection");
const givenlistInput = gebyid("givenSet");
const generateFromlistBtn = gebyid("generateFromSetBtn");
let count = 0;

generateFromlistBtn.addEventListener("click", () => {
	const set = givenlistInput.value.split("-");
	const twoNumberLines = twoNumberLinesFromlist(set);
	const threeNumberLines = threeNumberLinesFromlist(set);
	const fourNumberLines = fourNumberLinesFromlist(set);
	
	let ul1 = document.createElement("ol");
	ul1.innerHTML = `<h4>Two Number Combinations</h4>${twoNumberLines}`;

	let ul2 = document.createElement("ol");
	ul2.innerHTML = `<h4>Three Number Combinations</h4>${threeNumberLines}`;
	
	let ul3 = document.createElement("ol");
	ul3.innerHTML = `<h4>Four Number Combinations</h4>${fourNumberLines}`;
	
	glcs.appendChild(ul1);
	glcs.appendChild(ul2);
	glcs.appendChild(ul3);
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

function twoNumberLinesFromlist(list){
	let para = "\n";
	for (a=0; a< list.length; a++)
	{
		line = list[a];
		for (b=a+1; b< list.length; b++)
		{
			line += "-" + list[b];
			count += 1;
			para += `<li id=${count}>${line}</li>`
			line = cutEnd(line);
		}
	}
	return para;
};


function threeNumberLinesFromlist(list){
	let para = "\n";
	for (a=0; a< list.length; a++)
	{
		line = list[a];
		for (b=a+1; b< list.length; b++)
		{
			line += "-" + list[b];
			for (c=b+1; c< list.length; c++)
			{	
				line += "-" + list[c];
				count += 1;
				para += `<li id=${count}>${line}</li>`
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	return para;
};


function fourNumberLinesFromlist(list){
	//const small = Number(gebyid("firstSmallValue").value);
	let para = "\n";
	for (a=0; a< list.length - 2; a++)
	{
		line = list[a];
		for (b=a+1; b< list.length; b++)
		{
			line += "-" + list[b];
			for (c=b+1; c< list.length; c++)
			{	
				line += "-" + list[c];
				
				for (d=c+1; d< list.length; d++)
				{
					line += "-" + list[d];
					count += 1;
					para += `<li id=${count}>${line}</li>`
					line = cutEnd(line);
				}
				line = cutEnd(line);
			}
			line = cutEnd(line);
		}
	}
	return para;
};
