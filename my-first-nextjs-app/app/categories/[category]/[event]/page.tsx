import {FC} from "react";
import {redirect} from "next/navigation";
import Card from "@/src/components/card";
import RegistrationForm from "@/src/components/registration-form";

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

  return (
    <main>
      <Card item={event} highlight={false}/>
      <RegistrationForm event={event}/>
    </main>
  )
}

export default EventPage;