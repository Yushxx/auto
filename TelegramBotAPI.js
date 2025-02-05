import fetch from 'node-fetch';

export default class TelegramBotAPI {
    constructor(botToken) {
        this.apiUrl = `https://api.telegram.org/bot${botToken}/`;
    }

    async callApi(action, body) {
        const response = await fetch(this.apiUrl + action, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return response.json();
    }

    async setMessageReaction(chatId, messageId, emoji) {
        await this.callApi('setMessageReaction', {
            chat_id: chatId,
            message_id: messageId,
            reaction: [{ type: 'emoji', emoji: emoji }],
            is_big: true
        });
    }

    async sendMessage(chatId, text, inlineKeyboard = null) {
        await this.callApi('sendMessage', {
            chat_id: chatId,
            text: text,
            parse_mode: "Markdown",
            disable_web_page_preview: true,
            ...(inlineKeyboard && { reply_markup: { inline_keyboard: inlineKeyboard } })
        });
    }
};
