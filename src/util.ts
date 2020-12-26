export const emojiUnicode = (emoji: string): string => {
    let comp;
    if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
    }
    comp = (emoji.charCodeAt(0) - 0xd800) * 0x400 + (emoji.charCodeAt(1) - 0xdc00) + 0x10000;
    if (comp < 0) {
        comp = emoji.charCodeAt(0);
    }
    return comp.toString(16);
};
