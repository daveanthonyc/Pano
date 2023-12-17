const getAiResponse = async (aiPrompt: string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt: aiPrompt})
    }
    const res = await fetch(`${import.meta.env.VITE_REACT_BASE_URL}/ai/prompt`, requestOptions);
    const data = await res.json();
    return data.message;
}

export default getAiResponse;
