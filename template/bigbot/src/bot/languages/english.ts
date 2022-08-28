const english = {
  // Permissions
  BUTTON_NOT_ALLOWED: "❌ You are not allowed to use this button.",
  NEED_VIP: "❌ Only VIP users or servers can use this feature.",

  // Execute Command
  EXECUTE_COMMAND_NOT_FOUND: "❌ Something went wrong. I was not able to find this command.",
  EXECUTE_COMMAND_ERROR: "❌ Something went wrong. The command execution has thrown an error.",

  // Language Command
  LANGUAGE_NAME: "language",
  LANGUAGE_DESCRIPTION: "⚙️ Change the bots language.",
  LANGUAGE_KEY_NAME: "name",
  LANGUAGE_KEY_DESCRIPTION: "What language would you like to set?",
  LANGUAGE_MISSING_KEY: "❌ No language was provided.",
  LANGUAGE_INVALID_KEY: (languages: string[]) =>
    `❌ I could not find a language with that name. Valid languages are: ${languages.join(" ")}`,
  LANGUAGE_UPDATED: (language: string) => `The language has been updated to ${language}`,

  // Ping Command
  PING_NAME: "ping",
  PING_DESCRIPTION: "🏓 Check whether the bot is online and responsive.",
  PING_RESPONSE: "🏓 Pong! I am online and responsive! :clock10:",
  PING_RESPONSE_WITH_TIME: (time: number) => `🏓 Pong! ${time / 1000} seconds! I am online and responsive! :clock10:`,
} as const;

export default english;
