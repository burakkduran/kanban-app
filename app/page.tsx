import KanbanBoard from "@/components/KanbanBoard";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center pt-6 md:pt-12 container mx-auto">
        <h3 className="text-6xl font-bold dark:text-white text-black">
          Kanban
        </h3>
        <ThemeSwitch />
      <KanbanBoard />
    </main>
  );
}
