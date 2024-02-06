"use client";

import { AlertCircle } from "lucide-react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

function ModalExample() {
  return (
    <div>
      <DialogTrigger>
        <Button className="inline-flex items-center justify-center rounded-md bg-black bg-opacity-20 bg-clip-padding border border-white/20 px-3.5 py-2 font-medium font-[inherit] text-base text-white hover:bg-opacity-30 pressed:bg-opacity-40 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          Delete…
        </Button>
        <ModalOverlay
          className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 dark:bg-zinc-900/70 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
        >
          <Modal
            className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg--800 p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
          >
            <Dialog role="alertdialog" className="outline-none relative">
              {({ close }) => (
                <>
                  <Heading
                    slot="title"
                    className="text-2xl font-semibold leading-6 my-0 text-slate-700 dark:text-slate-200"
                  >
                    Delete folder
                  </Heading>
                  <div className="w-6 h-6 text-red-500 absolute right-0 top-0 stroke-2">
                    <AlertCircle />
                  </div>
                  <p className="mt-3 text-slate-500 dark:text-slate-300">
                    Are you sure you want to delete Documents? All contents will
                    be permanently destroyed.
                  </p>
                  <div className="mt-6 flex justify-end gap-2">
                    <DialogButton
                      className="bg-slate-200 text-slate-800 hover:border-slate-300 pressed:bg-slate-300"
                      onPress={close}
                    >
                      Cancel
                    </DialogButton>
                    <DialogButton
                      className="bg-red-500 text-white hover:border-red-600 pressed:bg-red-600"
                      onPress={close}
                    >
                      Delete
                    </DialogButton>
                  </div>
                </>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </div>
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

export default function Example() {
  return (
    <main className="flex justify-center">
      <ModalExample />
    </main>
  );
}
