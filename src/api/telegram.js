const baseUrl = 'https://api.telegram.org/bot8013607173:AAHHlIS6gY4OLw21PIdOuZ4w03EYyL3pyqs/'
export const sendMessage = async (message) => {
    // Кодируем текст сообщения для URL
    const encodedMessage = encodeURIComponent(message);

    // Формируем URL с правильным параметром chat_id
    const url = `${baseUrl}sendMessage?chat_id=-4691666749&text=${encodedMessage}`;

    try {
        const response = await fetch(url);
        const data = await response.json(); // Парсим JSON-ответ
        console.log(data);

        if (!response.ok) {
            console.error("Ошибка при отправке:", data);
        } else {
            console.log("Сообщение отправлено успешно:", data);
        }
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
    }
};