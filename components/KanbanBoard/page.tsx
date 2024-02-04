import { useListData } from "react-stately";
import { todos } from "@/store/initialData";

export default function KanbanBoard() {
  const list = useListData({
    initialItems: todos,
  });

  return (
    <div>
      <div className="grid grid-cols-[repeat(3,minmax(280px,1fr))] md:justify-center gap-4 -mx-8 px-8 py-8 overflow-auto relative snap-x snap-mandatory no-scrollbar">

      </div>
    </div>
  );
}