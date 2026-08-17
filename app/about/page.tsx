"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AboutRedirect() {
  useEffect(() => {
    window.location.replace("/#about");
  }, []);

  return <main className="redirectPage"><p>This page has moved to <Link href="/#about">About Yatin Dua</Link>.</p></main>;
}
