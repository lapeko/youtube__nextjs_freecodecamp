import {FC} from "react";
import Card from "@/src/components/card";
import Link from "next/link";
import {clsx} from "clsx";

export async function getStaticPaths() {
  const {events_categories: events} = await import("@/data/events.json");
  const paths = events.map(({id}) => ({params: {category: id}}));
  return {paths, fallback: false};
}

const EventsPage: FC<{ params: { category: string } }> = async ({params}) => {
  const {allEvents: events} = await import("@/data/events.json");
  const eventsForCategory = events.filter(({city}) => city === params.category);

  return (
    <main>
      <h1 className="font-bold text-2xl text-center mb-8 text-gray-300">Events in
        {" "}<span className="capitalize">{params.category}</span>
      </h1>
      {eventsForCategory.map((event, index) => (
        <Link
          key={event.id}
          href={`${params.category}/${event.id}`}
          className={clsx("block w-6/12", index % 2 && "ml-auto")}
        >
          <Card item={event}/>
        </Link>
      ))}
    </main>
  );
}

export default EventsPage;