import { useState } from "react";
import { t, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

export function PublishToggle({ lang, id, isPublic }: { lang: Lang; id: number; isPublic: boolean }) {
  const [busy, setBusy] = useState(false);
  async function toggle() {
    setBusy(true);
    await fetch("/api/publish", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ id, isPublic: !isPublic }) });
    window.location.reload();
  }
  return (
    <div className="toggle">
      <span className={`badge ${isPublic ? "badge-ok" : "badge-muted"}`}>
        <Icon name={isPublic ? "Globe" : "Lock"} size={14} /> {isPublic ? t(lang, "published") : t(lang, "private")}
      </span>
      <button type="button" className="btn btn-ghost btn-sm" onClick={toggle} disabled={busy}>
        {isPublic ? t(lang, "makePrivate") : t(lang, "makePublic")}
      </button>
    </div>
  );
}
