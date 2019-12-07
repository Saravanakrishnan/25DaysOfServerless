module.exports = async function (context, req) {
	try {
		let hebrewLetters = ['נ', 'ג', 'ה', 'ש'];
		let hebrewLettersLength = hebrewLetters.length;

		context.res = {
			'status': 200,
			'body': JSON.stringify({
				result: hebrewLetters[Math.floor(hebrewLettersLength * Math.random())]
			})
		}
	} catch (error) {
		console.error(error.message);
		context.res = {
			'status': 500,
			'body': error.message
		};
	}
};
