"use client";

import { useEffect } from "react";

export default function WritingRedirect() {
  useEffect(() => {
    window.location.replace("/ideas");
  }, []);

  return <main className="redirectPage"><p>This page has moved to <a href="/ideas">Writing</a>.</p></main>;
}
