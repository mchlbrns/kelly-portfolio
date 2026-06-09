export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black dark:focus:bg-gray-950 dark:focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Skip to content
    </a>
  );
}
