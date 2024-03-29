import { todos } from "@/store/initialData";
import { GridListItem, Button } from "react-aria-components";
import CardDeleteModal from "../CardDeleteModal";
import CardEditModal from "../CardEditModal";

type CardProps = {
  id?: string;
  item: (typeof todos)[0];
  className?: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
};

export function Card({ id, item, className, onDelete, onEdit }: CardProps) {
  return (
    <GridListItem
      id={id}
      textValue={item.title}
      className={` min-h-10 items-center p-2 rounded-lg border border-solid border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 forced-colors:!border-[ButtonBorder] bg-white/80 dark:bg-zinc-900/70 bg-clip-padding hover:shadow-md selected:shadow-md dragging:opacity-50 transition text-slate-700 dark:text-slate-200 cursor-default select-none outline outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] forced-colors:!text-[ButtonText] forced-colors:selected:!bg-[Highlight] forced-colors:selected:!text-[HighlightText] forced-color-adjust-none ${className}`}
    >
      <div className="flex justify-between items-center">
        <span className="break-words w-56 text-sm font-normal">
          {item.title}
        </span>
        <span className="flex gap-1 h-5 items-center justify-center w-8 ">
          <Button
            slot="drag"
            className="bg-transparent border-none text-gray-500 dark:text-zinc-300 text-base leading-none w-fit aspect-square p-0 justify-self-end outline outline-0 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] rounded-sm sr-only group-focus-visible:not-sr-only focus:not-sr-only forced-colors:group-selected:text-[HighlightText] forced-colors:group-selected:outline-[HighlightText]"
          >
            ≡
          </Button>

          <CardEditModal onEdit={onEdit} item={item} />
          <CardDeleteModal onDelete={onDelete} item={item} />
        </span>
      </div>
    </GridListItem>
  );
}
