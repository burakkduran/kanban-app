"use client";

import { useListData } from "react-stately";
import { todos } from "@/store/initialData";
import { Column } from "@/components/Column";

export default function KanbanBoard() {
  const list = useListData({
    initialItems: todos,
  });


  return (
      <div className="flex justify-between gap-4 md:gap-8 py-8 overflow-auto w-full">
        <Column
          status="Open"
          list={list}
          itemClassName="selected:bg-green-100 selected:border-green-500 dark:selected:bg-green-900 dark:selected:border-green-700"
        />
        <Column
          status="In Progress"
          list={list}
          itemClassName="selected:bg-yellow-100 selected:border-yellow-500 dark:selected:bg-yellow-900 dark:selected:border-yellow-700"
        />
        <Column
          status="Closed"
          list={list}
          itemClassName="selected:bg-red-100 selected:border-red-500 dark:selected:bg-red-900 dark:selected:border-red-700 "
        />
      </div>
  );
}
