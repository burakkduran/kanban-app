import { todos } from "@/store/initialData";

import { GridListItem, Button, Text } from "react-aria-components";

type CardProps = {
  id?: string;
  item: (typeof todos)[0];
  className?: string;
  onDelete: (id: string) => void;
};

export function Card({ id, item, className, onDelete }: CardProps) {
  return (
    <GridListItem
      id={id}
      textValue={item.title}
      className={` group grid grid-cols-[1fr_auto] gap-1 p-2 rounded-lg border border-solid border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 forced-colors:!border-[ButtonBorder] bg-white/80 dark:bg-zinc-900/70 bg-clip-padding hover:shadow-md selected:shadow-md dragging:opacity-50 transition text-slate-700 dark:text-slate-200 cursor-default select-none outline outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] forced-colors:!text-[ButtonText] forced-colors:selected:!bg-[Highlight] forced-colors:selected:!text-[HighlightText] forced-color-adjust-none ${className}`}
    >
      <span className="font-bold truncate">{item.title}</span>
      <Button
        className="justify-self-end text-sm"
        onPress={() => {
          onDelete(item.id);
        }}
      >
        ✎
      </Button>

      <Text
        slot="description"
        className="text-sm line-clamp-2 col-span-2 text-slate-500 dark:text-zinc-300 forced-colors:!text-inherit"
      >
        {item.description}
      </Text>
      <span className="flex ">
        <span className="text-sm">2023-09-15</span>
      </span>
      <span>
        <Button
          slot="drag"
          className="bg-transparent border-none text-gray-500 dark:text-zinc-300 text-base leading-none w-fit aspect-square p-0 justify-self-end outline outline-0 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] rounded-sm sr-only group-focus-visible:not-sr-only focus:not-sr-only forced-colors:group-selected:text-[HighlightText] forced-colors:group-selected:outline-[HighlightText]"
        >
          ≡
        </Button>
      </span>
    </GridListItem>
  );
}
