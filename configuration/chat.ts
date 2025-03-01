import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}! ${OWNER_NAME} has set me up to help you get the best sleep of your life! Feel free to tell me a little about
your sleep woes, who you're shopping for (yourself, kids, etc.), and any preferences you may have for sleep aid supplements (ingredients, flavor, strength, etc.). I'll
work with you to help you find the perfect supplement to get you the best sleep possible!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
