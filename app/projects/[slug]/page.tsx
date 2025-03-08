"use client";  // 👈 Add this at the very top!

import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p>Project details go here...</p>
    </section>
  );
}
