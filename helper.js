export function getRandomPositiveReaction(reaction) {
    const randomIndex = Math.floor(Math.random() * reaction.length);
    return reaction[randomIndex];
}

export function splitEmojis(emojiString) {
    return emojiString.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji_Modifier_Base})/gu) || [];
}

export function getChatIds(chats) {
    return chats ? chats.split(',').map(Number).filter(Boolean) : [];
}
