import { todos } from "@/store/initialData";
import { GridListItem, Button, TextArea } from "react-aria-components";
import { Check, Pencil, Trash2 } from "lucide-react";
import { useState, useRef } from "react";
import CardDeleteModal from "../CardDeleteModal";

type CardProps = {
  id?: string;
  item: (typeof todos)[0];
  className?: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
};

export function Card({ id, item, className, onDelete, onEdit }: CardProps) {
  const [editable, setEditable] = useState(false);
  const [itemTitle, setItemTitle] = useState(item.title);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItemTitle(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  const handleEditClick = () => {
    setEditable(!editable);
    onEdit(item.id, itemTitle);
  };

  return (
    <GridListItem
      id={id}
      textValue={itemTitle}
      className={` min-h-10 items-center p-2 rounded-lg border border-solid border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 forced-colors:!border-[ButtonBorder] bg-white/80 dark:bg-zinc-900/70 bg-clip-padding hover:shadow-md selected:shadow-md dragging:opacity-50 transition text-slate-700 dark:text-slate-200 cursor-default select-none outline outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] forced-colors:!text-[ButtonText] forced-colors:selected:!bg-[Highlight] forced-colors:selected:!text-[HighlightText] forced-color-adjust-none ${className}`}
    >
      {editable ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditable(!editable);
          }}
          className="flex justify-between items-center w-full gap-2"
        >
          <TextArea
            autoFocus={editable}
            value={itemTitle}
            rows={3}
            onChange={handleTextareaChange}
            className="w-full px-2 py-1 text-sm rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none bg-gray-100 focus:bg-zinc-200 dark:bg-transparent dark:focus:bg-zinc-800 text-gray-800 dark:text-slate-200 focus:outline-none overflow-hidden"
            ref={textareaRef}
          />
          <Button
            onPress={() => {
              handleEditClick();
            }}
          >
            <Check size={16} />
          </Button>
        </form>
      ) : (
        <div className="flex justify-between items-center">
          <span className="break-words w-56 text-sm font-normal">
            {itemTitle}
          </span>
          <span className="flex gap-1 h-5 items-center justify-center w-8 ">
            <Button
              slot="drag"
              className="bg-transparent border-none text-gray-500 dark:text-zinc-300 text-base leading-none w-fit aspect-square p-0 justify-self-end outline outline-0 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] rounded-sm sr-only group-focus-visible:not-sr-only focus:not-sr-only forced-colors:group-selected:text-[HighlightText] forced-colors:group-selected:outline-[HighlightText]"
            >
              ≡
            </Button>
            <Button
              aria-label="Edit Task"
              onPress={() => {
                setEditable(!editable);
              }}
            >
              <Pencil size={16} />
            </Button>
            <CardDeleteModal onDelete={onDelete} item={item} />
          </span>
        </div>
      )}
    </GridListItem>
  );
}
