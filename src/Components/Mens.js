import React from 'react'

const Mens = async () => {

  const url = 'https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69faaee0edmsh4942971e77c57bbp151731jsnbcf209f12294',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

  return (
    <div>Mens</div>
  )
}

export default Mens