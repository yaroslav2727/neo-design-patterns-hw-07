import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const underline = "=".repeat(text.length);
    if (level === 1) {
      return `${text}\n${underline}\n\n`;
    } else if (level === 2) {
      const underline = "-".repeat(text.length);
      return `${text}\n${underline}\n\n`;
    } else {
      return `${text}\n\n`;
    }
  }

  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  renderList(items: string[]): string {
    const listItems = items.map((item) => `• ${item}`).join("\n");
    return `${listItems}\n\n`;
  }
}
