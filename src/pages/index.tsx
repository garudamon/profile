import Link from "next/link";

export default function Home() {
  return (
    <div className="flex p-5 justify-center  w-full max-w-2xl">
      <div
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Hi there, I&apos;m Ali! 🚀
        </h2>
        <p className={`m-0 w-full text-sm text-gray-400 dark:text-gray-500`}>
          Frontend engineer <br />
          Working with Vue.js, React.js & React Native <br />
          Jr. Bonsai Trainer <br />
          Read my <Link href="/resume" className="normal-anchor">resume</Link>
        </p>
      </div>
    </div>
  );
}
