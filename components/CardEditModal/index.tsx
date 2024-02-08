import { Pencil } from "lucide-react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  TextArea,
} from "react-aria-components";
import { useState } from "react";
import { todos } from "@/store/initialData";

type CardEditModalProps = {
  onEdit: (id: string, title: string) => void;
  item: (typeof todos)[0];
};

export default function CardDeleteModal({ onEdit, item }: CardEditModalProps) {
  const [title, setTitle] = useState(item.title);

  const handleUpdateClick = () => {
    onEdit(item.id, title);
  };

  return (
    <DialogTrigger>
      <Button aria-label="Edit Task">
        <Pencil size={16} />
      </Button>
      <ModalOverlay
        className={({
          isEntering,
          isExiting,
        }) => `fixed inset-0 z-10 overflow-y-auto bg-black/25 dark:bg-zinc-900/70 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}`}
      >
        <Modal
          className={({
            isEntering,
            isExiting,
          }) => `w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}`}
        >
          <Dialog role="alertdialog" className="outline-none relative">
            {({ close }) => (
              <>
                <Heading
                  slot="title"
                  className="text-2xl font-semibold leading-6 my-0 text-slate-700 dark:text-slate-200"
                >
                  Edit Card
                </Heading>
                <div className="w-6 h-6 text-green-500 absolute right-0 top-0 stroke-2">
                  <Pencil />
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full mt-6"
                >
                  <TextArea
                    value={title}
                    rows={4}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-2 py-1 text-sm rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none bg-gray-100 focus:bg-zinc-200 dark:bg-transparent dark:focus:bg-zinc-800 text-gray-800 dark:text-slate-200 focus:outline-none overflow-hidden"
                  />
                </form>
                <div className="mt-6 flex justify-end gap-2">
                  <DialogButton
                    className="bg-slate-200 text-slate-800 hover:border-slate-300 pressed:bg-slate-300"
                    onPress={close}
                  >
                    Cancel
                  </DialogButton>
                  <DialogButton
                    className="bg-green-500 text-white hover:border-green-600 pressed:bg-green-600"
                    onPress={() => {
                      handleUpdateClick();
                      close();
                    }}
                  >
                    Update
                  </DialogButton>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

function DialogButton({ className, ...props }: any) {
  return (
    <Button
      {...props}
      className={`inline-flex justify-center rounded-md border border-solid border-transparent px-5 py-2 font-semibold font-[inherit] text-base transition-colors cursor-default outline-none focus-visible:ring-2 ring-blue-500 ring-offset-2 ${className}`}
    />
  );
}
