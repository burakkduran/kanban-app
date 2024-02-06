"use client";

import { Button, TextArea } from "react-aria-components";
import { useState, useRef } from "react";
import { Check, Pencil } from "lucide-react";

export default function Example() {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState("Edit here");


  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <main className="flex justify-center p-2">
      <div className="min-h-10 w-[294px] items-center p-2 rounded-lg border border-solid border-black/10 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20 forced-colors:!border-[ButtonBorder] bg-white/80 dark:bg-zinc-900/70 bg-clip-padding hover:shadow-md selected:shadow-md dragging:opacity-50 transition text-slate-700 dark:text-slate-200 cursor-default select-none outline outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 forced-colors:outline-[Highlight] forced-colors:!text-[ButtonText] forced-colors:selected:!bg-[Highlight] forced-colors:selected:!text-[HighlightText] forced-color-adjust-none ">
        {editable ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditable(!editable);
            }}
            className="flex justify-between items-center w-full gap-2"
          >
            <TextArea
              value={title}
              rows={3}
              onChange={handleTextareaChange}
              className="w-full px-2 py-1 text-sm rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none bg-gray-100 focus:bg-zinc-200 dark:bg-transparent dark:focus:bg-zinc-800 text-gray-800 dark:text-slate-200 focus:outline-none overflow-hidden"
              ref={textareaRef}
            />
            <Button
              onPress={() => {
                setEditable(!editable);
              }}
            >
              <Check size={16} />
            </Button>
          </form>
        ) : (
          <div className="flex justify-between items-center">
            <span className="break-words w-56 text-sm font-normal">
              {title}
            </span>
            <Button
              onPress={() => {
                setEditable(!editable);
              }}
            >
              <Pencil size={16} />
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
