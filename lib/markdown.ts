export function safeMarkdownUrl(value: string): string {
  if (!value || /[\u0000-\u0020\u007f\\]/.test(value)) return "";
  if (value.startsWith("#")) return value;
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && !url.username && !url.password ? value : "";
  } catch { return ""; }
}
export function codeNeedsEdits(code: string, meta = ""): boolean {
  return /\bneeds-edit\b/i.test(meta) || /YOUR[_ -](?:API[_ -])?(?:KEY|TOKEN|SECRET|PASSWORD|VALUE)|REPLACE_ME|<YOUR_[^>]+>|<API_KEY>|\[YOUR_[^\]]+\]/i.test(code);
}
export function codeKind(language: string): "Command" | "File content" | "Output / text" {
  if (["bash", "sh", "shell", "zsh", "powershell", "pwsh", "cmd", "bat"].includes(language)) return "Command";
  if (["json", "yaml", "yml", "toml", "ini", "env", "dockerfile", "xml", "conf"].includes(language)) return "File content";
  return "Output / text";
}
