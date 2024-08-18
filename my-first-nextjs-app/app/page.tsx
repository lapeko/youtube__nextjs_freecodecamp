import Image from "next/image";

export default async () => {
  const {events_categories} = await import("@/data/events.json");

  return (
    <main>
      {events_categories.map(event => (
        <article className="p-4" key={event.id}>
          <div className="relative h-64 w-64">
            <Image
              src={event.image}
              alt={event.title}
              priority={true}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl">{event.title}</h2>
          <p>{event.description}</p>
        </article>
      ))}
    </main>
  );
}
