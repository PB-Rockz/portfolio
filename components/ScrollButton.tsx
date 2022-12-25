import React, { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

function ScrollButton({}: Props) {
  return (
    <div className="fixed bottom-4 right-6 z-30">
      <Link href={"#hero"}>
        <button className="inline-flex items-center rounded-full p-3 text-[#0adff7]/50 hover:text-[#0adff7]/80">
          <ArrowUpCircleIcon className="h-12 w-12" aria-hidden="true" />
        </button>
      </Link>
    </div>
  );
}

export default ScrollButton;
