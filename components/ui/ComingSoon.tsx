import { Card } from "./Card";

// Placeholder body for pages whose content is still being written (Readme.md is the source).
export function ComingSoon({ note }: { note?: string }) {
  return (
    <Card className="border-dashed">
      <p className="text-sm font-semibold text-highlight">Under construction 🚧</p>
      <p className="mt-2 text-muted">
        {note ??
          "We're writing this one. The plan lives in Plan/Readme.md — content lands here soon."}
      </p>
    </Card>
  );
}
