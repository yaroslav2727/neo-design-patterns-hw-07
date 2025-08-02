import { BaseRenderer } from "./BaseRenderer";

export class HTMLRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const escapedText = this.escape(text);
    return `<h${level}>${escapedText}</h${level}>\n`;
  }

  renderParagraph(text: string): string {
    const escapedText = this.escape(text);
    return `<p>${escapedText}</p>\n`;
  }

  renderList(items: string[]): string {
    const listItems = items
      .map((item) => `  <li>${this.escape(item)}</li>`)
      .join("\n");
    return `<ul>\n${listItems}\n</ul>\n`;
  }

  wrapDocument(content: string): string {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
${content}</body>
</html>`;
  }
}
