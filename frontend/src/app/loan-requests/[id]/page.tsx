import Link from "next/link";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  const role = await getDemoRole();
  const { status, notice } = await searchParams;
  const selectedStatus = status === "pending" || status === "ready" ? status : undefined;

  
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.

  const { id } = await params;
  const response = await apiFetch(`/loan-requests/${encodeURIComponent(id)}`);
  if (!response.ok) notFound();

  const request: loan-requests | null = await response.json().catch(() => null);
  if (!request) notFound();


  return (
    <main>
      <h1>Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        <p>Complete the request details.</p>
      </section>
    </main>
  );
}

