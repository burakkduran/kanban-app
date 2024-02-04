import { todos } from "@/store/initialData";
import { GridListItem, Button, Text } from "react-aria-components";
import { Icon } from "@adobe/react-spectrum";

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
      className={`group grid grid-cols-[1fr_auto] gap-1 p-2 rounded-lg border border-solid border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 forced-colors:!border-[ButtonBorder] bg-white/80 dark:bg-zinc-900/70 bg-clip-padding hover:shadow-md selected:shadow-md dragging:opacity-50 transition text-slate-700 dark:text-slate-200 cursor-default select-none outline outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] forced-colors:!text-[ButtonText] forced-colors:selected:!bg-[Highlight] forced-colors:selected:!text-[HighlightText] forced-color-adjust-none ${className}`}
    >
      <span className="font-bold truncate">{item.title}</span>
      <Button
        className="justify-self-end"
        onPress={() => {
          onDelete(item.id);
        }}
      >
        <Icon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </Icon>
      </Button>

      <Text
        slot="description"
        className="text-sm  text-slate-500 dark:text-zinc-300 forced-colors:!text-inherit"
      >
        {item.description}
      </Text>
   
      <span className="justify-self-end self-end">
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
