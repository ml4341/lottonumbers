let arr10 = ["A-B", "A-C", "A-D", "A-E", "B-C", "Z-D", "B-E", "C-D", "C-E", "D-E"];



function checkSetArrFunction(list) {
	let setArr = [];
	let index1 = 0;
	let index2 = 0;

	for (let i = 0; i < arr10.length; i++){
	    
	    index1 = list[i].split("-")[0];
	    index2 = list[i].split("-")[1];
	    
	    if (!setArr.includes(index1))
		setArr.push(index1)
	    if (!setArr.includes(index2))
		setArr.push(index2)
	}

	if (setArr.length !== 5)
	    console.log("Lines do not belong to a set!")
	else
	     console.log("Lines form a partion of the following set: !", setArr);
	     
};

checkSetArrFunction(arr10);


function printRandomLinesEdited(numberOfLines){
    let contentArr = [];
    let p = "";
    let lock = false;
    
    while (!lock) {
    	let randomLines = getRandomNumbers(numberOfLines);
    	console.log(randomLines)
	    randomLines.forEach((num) => {
		p += `<p id=${count}>${gebyid(num).textContent}</p>`
		contentArr.push(gebyid(num).textContent);
	    });
	    
       if (checkSetArrFunction(contentArr) !== false){
    		lock = true;
       }
    }
    printLineX(randomLinesWrapper, p);   
};
