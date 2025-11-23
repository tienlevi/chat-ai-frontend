export function formatMarkdown(text: string): string {
  /**
   * Basic Markdown formatter that converts common markdown syntax to HTML strings.
   * Note: This is a simple regex-based implementation and not a full markdown parser.
   * It returns an HTML string that should be used with dangerouslySetInnerHTML (sanitization recommended).
   */
  if (!text) return "";

  let formatted = text;

  // Escape HTML characters to prevent XSS (basic)
  formatted = formatted
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  // Code blocks
  formatted = formatted.replace(
    /```([\s\S]*?)```/g,
    "<pre><code>$1</code></pre>"
  );

  // Inline code
  formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Bold
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic
  formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");
  formatted = formatted.replace(/_(.*?)_/g, "<em>$1</em>");

  // Links
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">$1</a>'
  );

  // Line breaks (convert newlines to <br>)
  formatted = formatted.replace(/\n/g, "<br />");

  return formatted;
}
