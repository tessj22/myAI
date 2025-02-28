import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}! ${OWNER_NAME} has set me up to help you dive into the wonderful and important world of sleep! We all need it,
but most of us could benefit from learning more about it and how to achieve better sleep. Please ask me any questions that come to mind about your own sleep habits or
questions, and I'll do my best to help you out!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
