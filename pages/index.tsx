import { Fira_Code } from 'next/font/google';
import CommandInput from '@/pages/components/CommandInput';
import CommandHistory from './components/CommandHistory';
import Head from 'next/head';

const fira_code = Fira_Code({ subsets: ['latin'] });
import { AiFillGithub } from 'react-icons/ai';
export default function Home() {
  const date = new Date();
  const formattedDate = `${date.toLocaleString('default', {
    weekday: 'short'
  })} ${date.toLocaleString('default', {
    month: 'short'
  })} ${date.getDate()}`;
  return (
    <main
      className={`xl:p14 flex  min-h-screen flex-col items-center  justify-center p-2  drop-shadow-2xl md:p-8 lg:p-12 ${fira_code.className}`}
    >
      <Head>
        <title>Akash Mane</title>
        <meta property="og:title" content="Akash Mane" key="title" />
        <meta
          name="description"
          content="Portfolio website in the form of a terminal built by Akash Mane"
        ></meta>
      </Head>

      <div className="toolbar flex h-8 w-full items-center justify-between rounded-tl-xl   rounded-tr-xl bg-white px-3">
        <div className="buttons flex items-center">
          <div className="mr-2 h-4 w-4 cursor-pointer rounded-full bg-red-500"></div>
          <div className="mr-2 h-4 w-4 cursor-pointer rounded-full bg-[#FEBB2E]"></div>
          <div className="h-4 w-4 cursor-pointer rounded-full bg-green-500"></div>
        </div>
        <p className=" text-center text-xs  hover:underline">
          <a
            target="_blank"
            href="https://github.com/akashmane2209/terminal-portfolio"
          >
            🦊 akash@portfolio -- zsh
          </a>
        </p>
        <div></div>
      </div>
      <div className="terminal max-h-[720px] w-full flex-1 overflow-y-scroll rounded-bl-xl rounded-br-xl bg-black p-1 text-sm">
        <p>Last login: {formattedDate}</p>
        <p className="my-2">
          Type <span className="font-bold text-green-400">help</span> for the
          list of all commands available
        </p>
        <CommandHistory />
        <CommandInput />
      </div>
      <a
        className="mt-4 flex items-center rounded-full px-2 py-1 text-xl hover:bg-gray-100 hover:shadow-xl"
        href="https://github.com/akashmane2209/terminal-portfolio"
        target="_blank"
      >
        <span className="mr-2 text-xs text-gray-800">Source code </span>
        <AiFillGithub />
      </a>
    </main>
  );
}
