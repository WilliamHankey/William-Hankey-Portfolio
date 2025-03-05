"use client"; // 👈 Add this to fix `useParams`

import { useParams } from "next/navigation";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Blog Post: {slug}</h1>
      <p>Blog post details go here...</p>
    </section>
  );
}