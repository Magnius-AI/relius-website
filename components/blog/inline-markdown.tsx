import Link from "next/link";

type InlineToken =
  | { type: "text"; content: string }
  | { type: "bold"; content: string }
  | { type: "italic"; content: string }
  | { type: "link"; text: string; href: string };

function tokenize(input: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  // Match **bold**, *italic*, and [text](url)
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", content: input.slice(lastIndex, match.index) });
    }

    if (match[1] !== undefined) {
      tokens.push({ type: "bold", content: match[1] });
    } else if (match[2] !== undefined) {
      tokens.push({ type: "italic", content: match[2] });
    } else if (match[3] !== undefined && match[4] !== undefined) {
      tokens.push({ type: "link", text: match[3], href: match[4] });
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < input.length) {
    tokens.push({ type: "text", content: input.slice(lastIndex) });
  }

  return tokens;
}

function isInternal(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

export function InlineMarkdown({ text }: { text: string }) {
  const tokens = tokenize(text);

  return (
    <>
      {tokens.map((token, i) => {
        switch (token.type) {
          case "text":
            return <span key={i}>{token.content}</span>;
          case "bold":
            return <strong key={i} className="font-semibold text-slate-900">{token.content}</strong>;
          case "italic":
            return <em key={i}>{token.content}</em>;
          case "link":
            if (isInternal(token.href)) {
              return (
                <Link key={i} href={token.href} className="text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors">
                  {token.text}
                </Link>
              );
            }
            return (
              <a key={i} href={token.href} target="_blank" rel="noopener noreferrer" className="text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors">
                {token.text}
              </a>
            );
        }
      })}
    </>
  );
}
