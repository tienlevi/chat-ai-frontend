import "katex/dist/katex.min.css";

function MathRenderer({
  content,
  inline = false,
  className,
}: {
  content: string;
  inline?: boolean;
  className?: string;
}) {
  // Use KaTeX or your preferred math renderer
  const katex = require("katex");

  const html = katex.renderToString(content, {
    displayMode: !inline,
    throwOnError: false,
  });

  return (
    <span
      className={`${inline ? "inline-math" : "block-math"} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default MathRenderer;
