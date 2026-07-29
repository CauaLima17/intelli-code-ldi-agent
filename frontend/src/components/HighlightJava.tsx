import type { ReactNode } from "react";

const KEYWORDS = new Set([
    "public",
    "private",
    "protected",
    "static",
    "final",
    "void",
    "class",
    "interface",
    "extends",
    "implements",
    "new",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "try",
    "catch",
    "finally",
    "throw",
    "throws",
    "import",
    "package",
    "int",
    "long",
    "double",
    "float",
    "boolean",
    "char",
    "byte",
    "short",
    "true",
    "false",
    "null",
    "this",
    "super",
]);

const TYPE_RE = /^[A-Z][A-Za-z0-9_]*$/;

const TOKEN_RE =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][A-Za-z0-9_$]*)/g;

/** Tokenizes Java source into colored spans using design-system token colors. */
export function HighlightJava(code: string): ReactNode[] {
    const out: ReactNode[] = [];
    let last = 0;
    let key = 0;
    let match: RegExpExecArray | null;

    TOKEN_RE.lastIndex = 0;
    while ((match = TOKEN_RE.exec(code)) !== null) {
        if (match.index > last) out.push(code.slice(last, match.index));
        const [text, comment, str, num, word] = match;

        if (comment) {
            out.push(
                <span key={key++} className="text-code-comment italic">
          {text}
        </span>,
            );
        } else if (str) {
            out.push(
                <span key={key++} className="text-code-string">
          {text}
        </span>,
            );
        } else if (num) {
            out.push(
                <span key={key++} className="text-code-number">
          {text}
        </span>,
            );
        } else if (word) {
            if (KEYWORDS.has(word)) {
                out.push(
                    <span key={key++} className="text-code-keyword">
            {text}
          </span>,
                );
            } else if (code[match.index + text.length] === "(") {
                out.push(
                    <span key={key++} className="text-code-function">
            {text}
          </span>,
                );
            } else if (TYPE_RE.test(word)) {
                out.push(
                    <span key={key++} className="text-code-type">
            {text}
          </span>,
                );
            } else {
                out.push(text);
            }
        }
        last = match.index + text.length;
    }
    if (last < code.length) out.push(code.slice(last));
    return out;
}