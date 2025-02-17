import * as vscode from "vscode";

export interface CompilationResult {
  status: "ok" | "error";
  html?: string;
  error?: {
    message: string;
  }
  last_html?: string | undefined;
}

export function getResourceUri(context: vscode.ExtensionContext, filename: string) {
  return vscode.Uri.joinPath(context.extensionUri, "resources", filename);
}

export function normalizeThemeName(currentTheme: string): string {
  return currentTheme
    .toLowerCase()
    .replace("theme", "")
    .replace(/\s+/g, "-");
}

export function debounce(fn: () => any, timeout: number) {
  let timer: NodeJS.Timeout | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => { fn(); }, timeout);
  };
}
