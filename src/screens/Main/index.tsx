import './index.scss';

function MainScreen() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="w-full flex flex-col">
        <span className="text-xxs ml-1 font-bold text-black dark:text-white">INPUT URL</span>
        <input
          placeholder="https://..."
          className="w-full border rounded-md h-10 shadow shadow-zinc-200 px-3 mt-1 dark:bg-zinc-900 dark:text-white dark:border-zinc-400 outline-transparent dark:shadow-zinc-700"
        />
      </div>
    </div>
  );
}

export { MainScreen };
