export default function Text({ addEmoji }) {
  const text = "Hello! Programmers";
  return <div>{addEmoji ? addEmoji(text, "🍆🍩🛏", text) : text}</div>;
}
