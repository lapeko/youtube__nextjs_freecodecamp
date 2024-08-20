import Link from "next/link";
import React from "react";
import Card from "@/src/components/card";

// TODO style the app
// TODO add register form and send email to API. Save it into JSON

export default async () => {
  const {events_categories: categories} = await import("@/data/events.json");

  return (
    <main>
      {categories.map(category => (
        <Link href={`categories/${category.id}`} key={category.id}>
          <Card item={category}/>
        </Link>
      ))}
    </main>
  );
}
