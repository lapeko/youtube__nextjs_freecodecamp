import {FC} from "react";
import {redirect} from "next/navigation";
import Card from "@/src/components/card";

export async function getStaticPaths() {
  const {allEvents} = await import("@/data/events.json");
  const paths = allEvents.map(({id: event, city: category}) => ({params: {event, category}}));
  return {paths, fallback: false};
}

const EventPage: FC<{ params: { event: string, city: string } }> = async ({params}) => {
  const {allEvents} = await import("@/data/events.json");
  const event = allEvents.find(e => e.id === params.event);
  if (!event)
    redirect("/not-found")

  return <Card item={event} highlight={false}/>
}

export default EventPage;