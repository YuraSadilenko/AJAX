firstTask();
getCardData();

function firstTask() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://mate-academy.github.io/phone-catalogue-static/phones/phones.json', true);
	xhr.send();

	xhr.onreadystatechange = function() { // (3)
  	if (xhr.readyState != 4) return;

		if (xhr.status !== 200) {
			console.log(xhr.status + ':' + xhr.statusText);
		} else {
			console.log(xhr.responseText);
		}
	}
}

function getCardData() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://tanuhaua.github.io/datas-file-json/data.json', true);
	xhr.send();

	xhr.onreadystatechange = function() { // (3)
  	if (xhr.readyState != 4) return;

		if (xhr.status !== 200) {
			console.log(xhr.status + ':' + xhr.statusText);
		} else {
			console.log(xhr.responseText);
		}
	}

	function createCards(object) {
		var block = document.createElement('div');
		block.style.display = 'flex';
		block.style.flexDirection = 'row';
	
		block.style.justifyContent = 'space-around';
		block.style.flexWrap = 'wrap';
		document.body.appendChild(block);
	
		for (var i = 0; i < object.length; i++) {
			var div = document.createElement('div');
			div.style.boxShadow = "5px 5px 10px rgba(0,0,0,.2)";
			div.style.borderRadius = '10px';
			div.style.backgroundColor = '#f9f1a8';
			div.style.width = '20%';
			div.style.padding = '20px';
			div.style.marginBottom = '20px';
			div.style
			block.appendChild(div);
			console.log(object[i]);
	
			var name = document.createElement('p');
			name.innerText = 'Name: ' + object[i].name + ';';
			name.style.textAlign = 'center';
			name.style.fontWeight = '900';
			name.style.fontSize = '22px';
			div.appendChild(name);
	
			var sex = document.createElement('p');
			sex.innerText = 'Sex: ' + object[i].sex + ';';
			sex.style.textAlign = 'center';
			div.appendChild(sex);
	
			var born = document.createElement('p');
			born.innerText = 'Born: ' + object[i].born + ';';
			born.style.textAlign = 'center';
			div.appendChild(born);
	
			var died = document.createElement('p');
			died.innerText = 'Died: ' + object[i].died + ';';
			died.style.textAlign = 'center';
			div.appendChild(died);
	
			var father = document.createElement('p');
			father.innerText = 'Father: ' + object[i].father + ';';
			father.style.textAlign = 'center';
			div.appendChild(father);
	
			var mother = document.createElement('p');
			mother.innerText = 'Mother: ' + object[i].mother + ';';
			mother.style.textAlign = 'center';
			div.appendChild(mother);
		}
		var summaryBlock = document.createElement('div');
		summaryBlock.style.borderRadius = '5px';
		summaryBlock.style.textAlign = 'center';
		summaryBlock.style.width = '50%';
		summaryBlock.style.padding = '40px';
		summaryBlock.style.backgroundColor = '#d9f1a9';
		summaryBlock.style.boxShadow = '5px 5px 10px rgba(0,0,0,.2)';
		div.style.borderRadius = '10px';
		block.appendChild(summaryBlock);
	
		var blockName = document.createElement('h2');
		blockName.innerText = "Statistics:";
		blockName.style.marginBottom = '20px';
		summaryBlock.appendChild(blockName);
	
		var motherAndChildren = document.createElement('p');
		motherAndChildren.innerText = 'Difference between mothers and children: ' + calculateDifference(ANCESTRY_FILE) + ' years';
		summaryBlock.appendChild(motherAndChildren);
	
		var middleMaleAge = document.createElement('p');
		middleMaleAge.innerText = 'Average male age: ' + calculateMiddleAge(ANCESTRY_FILE, 'm') + ' years';
		summaryBlock.appendChild(middleMaleAge);
	
		var middleFemaleAge = document.createElement('p');
		middleFemaleAge.innerText = 'Average female age: ' + calculateMiddleAge(ANCESTRY_FILE, 'f') + ' years';
		summaryBlock.appendChild(middleFemaleAge);
	};
	
	function calculateAge(person) {
		return person.died - person.born;
	};
	
	function calculateDifference(object) {
		var sum = 0;
		var count = 0;
		for (var i = 0; i < object.length; i++) {
			if (object[i].mother) {
				var child = object[i];
				for (var j = 0; j < object.length; j++) {
					var mother = object[j];
					if (child.mother === mother.name) {
						sum += Math.abs(calculateAge(mother) - calculateAge(child));
						count++;
					}
				}
			}
		}
		return Math.round(sum / count);
	};
	
	function calculateMiddleAge(object, sex) {
		var sum = 0;
		var count = 0;
		for (var i = 0; i < object.length; i++) {
			if (object[i].sex === sex) {
				sum += calculateAge(object[i]);
				count++;
			}
		}
		return Math.round(sum / count);
	};
	
	createCards(ANCESTRY_FILE);
}