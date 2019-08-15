import googleTTS from 'google-tts-api';


export const initTts = () => {};
export const speak = (message) => googleTTS(message, 'en', 1, 3000);
