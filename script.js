//your JS code here. If required.
let arr = [1,2, 3, 4]

let p1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(arr)
		return arr;
	}, 3000)
}).then((arr)=>{
	arr = arr.filter((item)=>{
		return item%2 === 0;
	})
	return arr;
}).then((arr)=>{
	arr = arr.map((item) =>{
		return item; 
	})
	return arr;
}).then((arr)=>{
	let outElement = document.getElementById('output')
	outElement.innerHTML = arr; 
})