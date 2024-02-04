"use client"

import { useListData } from "react-stately";
import { todos } from "@/store/initialData";
import { Column } from "@/components/Column";

export default function KanbanBoard() {
  const list = useListData({
    initialItems: todos,
  });

  return (
    <div>
      <div className="grid grid-cols-[repeat(3,minmax(280px,1fr))] md:justify-center gap-4 -mx-8 px-8 py-8 overflow-auto relative snap-x snap-mandatory no-scrollbar">
        <Column
          status="Open"
          list={list}
          itemClassName="selected:bg-green-100 selected:border-green-500 dark:selected:bg-green-900 dark:selected:border-green-700"
        />
        <Column
          status="In Progress"
          list={list}
          itemClassName="selected:bg-blue-100 selected:border-blue-500 dark:selected:bg-blue-900 dark:selected:border-blue-700"
        />
        <Column
          status="Closed"
          list={list}
          itemClassName="selected:bg-red-100 selected:border-red-500 dark:selected:bg-red-900 dark:selected:border-red-700 "
        />
      </div>
    </div>
  );
}
