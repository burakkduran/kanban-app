import { ListData } from "react-stately";
import { todos } from "@/store/initialData";
import { Card } from "@/components/Card";
import { v4 as uuidv4 } from "uuid";

import {
  GridList,
  isTextDropItem,
  DropIndicator,
  useDragAndDrop,
  Button,
} from "react-aria-components";

type ColumnProps = {
  list: ListData<(typeof todos)[0]>;
  status: string;
  itemClassName?: string;
};

export function Column({ list, status, itemClassName }: ColumnProps) {
  // Filter by status
  const items = list.items.filter((t) => t.status === status);

  function deleteCard(id: string) {
    list.remove(id);
  }

  function onEdit(id: string, title: string) {
    list.update(id, { ...list.getItem(id), title });
  }

  function addCard(status: string) {
    const id = uuidv4();
    list.append({
      title: "Edit me!",
      id: id,
      status: status,
    });
  }

  const { dragAndDropHooks } = useDragAndDrop({
    getItems(keys) {
      return Array.from(keys).map((id) => ({
        "task-id": String(id),
        "text/plain": list.getItem(id).title,
      }));
    },

    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className="h-0 -my-1.5 -translate-y-[5px] -mx-2 invisible drop-target:visible"
        >
          <svg
            height={10}
            className="w-full stroke-blue-500 fill-none forced-colors:stroke-[Highlight]"
          >
            <circle cx={5} cy={5} r={5 - 1} strokeWidth={2} />
            <line
              x1={20}
              x2="100%"
              transform="translate(-10 0)"
              y1={5}
              y2={5}
              strokeWidth={2}
            />
            <circle
              cx="100%"
              cy={5}
              r={5 - 1}
              transform="translate(-5 0)"
              strokeWidth={2}
            />
          </svg>
        </DropIndicator>
      );
    },
    acceptedDragTypes: ["task-id"],
    getDropOperation: () => "move",
    async onInsert(e) {
      const ids = await Promise.all(
        e.items.filter(isTextDropItem).map((item) => item.getText("task-id"))
      );
      for (const id of ids) {
        list.update(id, { ...list.getItem(id), status });
      }
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, ids);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, ids);
      }
    },
    async onRootDrop(e) {
      const ids = await Promise.all(
        e.items.filter(isTextDropItem).map((item) => item.getText("task-id"))
      );
      for (const id of ids) {
        list.update(id, { ...list.getItem(id), status });
      }
    },
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    },
  });

  return (
    <section className="flex flex-col gap-2 snap-center  items-center">
      <header>
        <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 my-0">
          {status}
        </h3>
        <span className="text-sm text-zinc-700 dark:text-zinc-400">
          {items.length}{" "}
          {items.length === 0 || items.length === 1 ? "task" : "tasks"}
        </span>
      </header>
      <GridList
        items={items}
        aria-label={status}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => "No tasks."}
        className="min-h-36 w-[320px] p-1 md:p-3 outline outline-0 bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-black/10 dark:border-white/10 bg-clip-padding text-gray-700 dark:text-zinc-400 flex flex-col gap-3 rounded-xl rounded-b-none shadow-xl drop-target:bg-blue-200 dark:drop-target:bg-blue-800/60 drop-target:outline-2 outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-2 empty:items-center empty:justify-center"
      >
        {(item) => (
          <Card
            item={item}
            className={itemClassName}
            onDelete={deleteCard}
            onEdit={onEdit}
          />
        )}
      </GridList>
      {/* Add Task Card */}
      <div className="w-[320px] flex items-center justify-center p-1 md:p-3 outline outline-0 bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-black/10 dark:border-white/10 bg-clip-padding text-gray-700 dark:text-zinc-400 gap-3 rounded-xl rounded-t-none shadow-xl drop-target:bg-blue-200 dark:drop-target:bg-blue-800/60 drop-target:outline-2 outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-2 empty:items-center empty:justify-center">
        <Button
          className={
            "w-full px-5 py-2 text-sm text-center transition rounded-lg rounded-t-none border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-transparent dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100"
          }
          onPress={() => {
            addCard(status);
          }}
        >
          Add Card
        </Button>
      </div>
    </section>
  );
}
