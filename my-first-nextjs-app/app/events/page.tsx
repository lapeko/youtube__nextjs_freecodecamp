import Card from "@/src/components/card";

const EventsPage = async () => {
  const {events_categories: categories} = await import("@/data/events.json");

  return (
    <main>
      {categories.map(category => <Card item={category}/>)}
    </main>
  );
}

export default EventsPage;