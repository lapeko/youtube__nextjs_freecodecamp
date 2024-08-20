import Link from "next/link";
import React from "react";
import Card from "@/src/components/card";
import {clsx} from "clsx";

// TODO add register form and send email to API. Save it into JSON

export default async () => {
  const {events_categories: categories} = await import("@/data/events.json");

  return (
    <main>
      <h1 className="font-bold text-2xl text-center mb-8 text-gray-300">Categories</h1>
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={`categories/${category.id}`}
          className={clsx("block w-6/12", index % 2 && "ml-auto")}
        >
          <Card item={category}/>
        </Link>
      ))}
    </main>
  );
}
