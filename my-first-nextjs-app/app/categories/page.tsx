import Card from "@/src/components/card";
import Link from "next/link";

const CategoriesPage = async () => {
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

export default CategoriesPage;