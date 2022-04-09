

let isAnagram = (str1, str2)=>{
	/// take the string split rearange it by abc=> put it
	/// back togter and make it into lowercase
	let sort1 = str1.split(``).sort().join().toLowerCase();
	let sort2 = str2.split(``).sort().join().toLowerCase();
	// check if equle and retur true or false
	return (sort1 === sort2);
}

console.log(isAnagram("hello", "Jolle"));
console.log(isAnagram("hel lo", "olleh"));


let isAnagram2 = (str1, str2)=>{
	let sort1 = charMap(str1);
	let sort2 = charMap(str2);
	if (Object.keys(sort1).length !== Object.keys(sort2).length){
		return false;
	}

	for(let char in sort1){
		if(sort1[char] !== sort2[char]){
			return false;
		}
	}
	return true;
}
function charMap(str){
	const cMap = {};
	for(let char of str.replace(/[^\w]/g, ``).toLowerCase()){
		cMap[char] = cMap[char] +1 || 1;
	}
	return cMap;
}
console.log(isAnagram2("hello", "Jolle"));
console.log(isAnagram2("he llo", "olleh"));