import  SnippetsChart  from "@/components/SnippetsChart";
import CardsMain from "@/components/ui/CardsMain";
import HeaderPages from "@/components/ui/HeaderPages";

export function Dashboard() {
  const currentPage = 'Dashboard';
  return (
    <>
      <HeaderPages currentPage={currentPage} />
      <main className="min-h-screen bg-gray-100">
        <CardsMain />
        <SnippetsChart />
      </main>
    </>
  );
}