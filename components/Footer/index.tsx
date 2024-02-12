export default function Footer() {
  return (
    <footer className="mt-auto block pb-2 pt-4 text-sm text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()}{" "}
      <a
        target="_blank"
        href={"https://github.com/burakkduran"}
        className="underline"
      >
        Burak Duran
      </a>
      . All Rights Reserved.
    </footer>
  );
}
