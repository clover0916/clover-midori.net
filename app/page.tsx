"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard =
    (name: string): React.MouseEventHandler<SVGSVGElement> =>
    (event) => {
      navigator.clipboard.writeText(name);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Clover</h1>
        <p className="text-xl mt-2">I'm a software engineer and designer</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-2 grid gap-4 grid-cols-3">
          <div className="text-xl h-14 w-16 shadow-lg">Clover_Bot</div>
          <div className="text-xl h-14 w-16 shadow-lg">11Tube Music</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold pb-8">Contact</h2>
        <div className="flex gap-20 mt-2 items-center md:flex-row sm:flex-col">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faDiscord} className="h-8 pr-4" />
            <span className="text-xl">clover_0916</span>
            {isCopied ? (
              <div className="relative flex items-center">
                <FontAwesomeIcon icon={faCheck} className="h-4 pl-2" />
                <span className="absolute text-sm flex justify-center ml-6">
                  Copied!
                </span>
              </div>
            ) : (
              <FontAwesomeIcon
                icon={faCopy}
                className="h-3 pl-2 cursor-pointer"
                onClick={copyToClipboard("clover_0916")}
              />
            )}
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.open("https://github.com/clover0916")}
          >
            <FontAwesomeIcon icon={faGithub} className="h-8 pr-4" />
            <span className="text-xl">clover0916</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3 pl-2"
            />
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.open("https://twitter.com/@Clover_0916")}
          >
            <FontAwesomeIcon icon={faTwitter} className="h-8 pr-4" />
            <div className="text-xl">@Clover_0916</div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3 pl-2"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
