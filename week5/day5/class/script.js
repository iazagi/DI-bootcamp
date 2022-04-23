//WITHOUT PROMISE.ALL

async function getSunrise () {
	const latNY = 48.864716;
	const lngNY = 2.349014;
	const latParis = 40.730610;
	const lngParis = -73.935242;
	const t0 = performance.now();
	try {
		let newYork = await fetch(`https://api.sunrise-sunset.org/json?lat=${latNY}&lng=${lngNY}`)
		let paris = await fetch(`https://api.sunrise-sunset.org/json?lat=${latParis}&lng=${lngParis}`)

		if (newYork.status !== 200 || paris.status !== 200){
			throw new Error("ERROR STATUS")
		} else {
			let dataNY = await newYork.json()
			let dataParis = await paris.json()
			console.log("dataNY", dataNY)
			console.log("dataParis", dataParis)
			console.log("t0")
		}
		
	} catch (err){
		console.log("IN THE CATCH", err.message)

	}

}

getSunrise()


//PROMISE.ALL

async function getSunrise () {
	const latNY = 48.864716;
	const lngNY = 2.349014;
	const latParis = 40.730610;
	const lngParis = -73.935242;
	const t1 = performance.now();
	try {
		let newYork = fetch(`https://api.sunrise-sunset.org/json?lat=${latNY}&lng=${lngNY}`)
		let paris = fetch(`https://api.sunrise-sunset.org/json?lat=${latParis}&lng=${lngParis}`)

		let [resultNY, resultParis] = await Promise.all([newYork,paris])
		console.log("resultNY", resultNY, "resultParis",resultParis)

		if (resultNY.status !== 200 || resultParis.status !== 200){
			throw new Error("ERROR STATUS")
		} else {
			let [objectsNewYork, objectParis] = await Promise.all([resultNY.json(), resultParis.json()])
			console.log(objectsNewYork, objectParis)
			console.log(t1);
		}
		
	} catch (err){
		console.log("IN THE CATCH", err)

	}
}

getSunrise()
