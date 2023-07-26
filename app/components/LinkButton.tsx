import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type } from "os";
import React from "react";

type Props = {
  href: string;
  content: string;
};

export const LinkButton = (props: Props) => {
  return (
    <a href={props.href}>
      <button className="border rounded py-2 px-3 hover:bg-black/5 duration-100 flex items-center">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="pr-2 h-3" />
        <span>{props.content}</span>
      </button>
    </a>
  );
};
