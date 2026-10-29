import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card" style={{ maxWidth: 520, margin: "40px auto", textAlign: "center" }}>
      <h1>404</h1>
      <p className="muted">Page introuvable · الصفحة غير موجودة · Page not found</p>
      <Link href="/fr" className="btn btn-primary">Wedicine</Link>
    </div>
  );
}
