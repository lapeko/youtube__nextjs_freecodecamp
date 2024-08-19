import {FC} from "react";
import Card from "@/src/components/card";
import Link from "next/link";

type EventData = {
  "id": string;
  "title": string;
  "city": string;
  "description": string;
  "image": string;
  "emails_registered": string[];
}

export async function getStaticPaths() {
  const {events_categories: events} = await import("@/data/events.json");
  const paths = events.map(({id}) => ({params: {category: id}}));
  return {paths, fallback: false};
}

const EventIdPage: FC<{ params: { category: string } }> = async ({params}) => {
  const {allEvents: events} = await import("@/data/events.json");
  const eventsForCategory = events.filter(({city}) => city === params.category);

  return (
    <>
      <h1>Events in {params.category}</h1>
      <main>
        {eventsForCategory.map(event => (
          <Link href={`${params.category}/events/${event.id}`} key={event.id}>
            <Card item={event}/>
          </Link>
        ))}
      </main>
    </>
  );
}

export default EventIdPage;