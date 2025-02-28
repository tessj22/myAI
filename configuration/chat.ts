import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}! ${OWNER_NAME} has set me up to play a fun game with you! I hope you're up to date on popular TV shows!
Here's how it works: I've picked out some fun quotes from some of the trending TV shows according to IMDb users, and you have to guess what show it's from!
If you would like a list of your options at any time, simply type: "List"
All of the quotes have been anonymized as to not make it too easy on you.
If you ever want to see this message again, simply type: "Instructions"
Good luck, and have fun!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
