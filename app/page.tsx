import KanbanBoard from "@/components/KanbanBoard";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center pt-6 md:pt-12 lg:container sm:mx-auto 2xl:px-60 ">
      <div className="w-full flex justify-between">
        <h3 className="text-6xl font-bold dark:text-white text-black">
          Kanban
        </h3>
        <ThemeSwitch />
      </div>
      <KanbanBoard />
    </main>
  );
}
