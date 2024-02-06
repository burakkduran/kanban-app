import KanbanBoard from "@/components/KanbanBoard";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center pt-6 md:pt-12 ">
      <h3 className="text-6xl font-bold">Kanban</h3>
      <KanbanBoard />
    </main>
  );
}
