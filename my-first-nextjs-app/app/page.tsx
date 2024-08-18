import Image from "next/image";

export default async () => {
  const {events_categories: categories} = await import("@/data/events.json");

  return (
    <main>
      {categories.map(category => (
        <article className="p-4" key={category.id}>
          <div className="relative h-64 w-64">
            <Image
              src={category.image}
              alt={category.title}
              priority={true}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl">{category.title}</h2>
          <p>{category.description}</p>
        </article>
      ))}
    </main>
  );
}
