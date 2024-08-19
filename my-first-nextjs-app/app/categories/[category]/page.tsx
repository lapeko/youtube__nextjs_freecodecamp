import {FC} from "react";
import Card from "@/src/components/card";
import Link from "next/link";

export async function getStaticPaths() {
  const {events_categories: events} = await import("@/data/events.json");
  const paths = events.map(({id}) => ({params: {category: id}}));
  return {paths, fallback: false};
}

const EventsPage: FC<{ params: { category: string } }> = async ({params}) => {
  const {allEvents: events} = await import("@/data/events.json");
  const eventsForCategory = events.filter(({city}) => city === params.category);

  return (
    <>
      <h1>Events in {params.category}</h1>
      <main>
        {eventsForCategory.map(event => (
          <Link href={`${params.category}/${event.id}`} key={event.id}>
            <Card item={event}/>
          </Link>
        ))}
      </main>
    </>
  );
}

export default EventsPage;