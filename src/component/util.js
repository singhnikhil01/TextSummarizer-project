export async function query(data) {

	const response = await fetch(
		"https://api-inference.huggingface.co/models/Falconsai/text_summarization",
		{
			headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

export function removeSingleBackslash(inputText) {
	if (typeof inputText !== 'string') {
		console.error('Input must be a string');
		return null;
	}

	const resultText = inputText.replace(/\\/g, '');

	return resultText;
}


