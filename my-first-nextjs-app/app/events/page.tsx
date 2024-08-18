const cities = ["London", "San Francisco", "Barcelona"];
const title = "Hello world";

export default async () => {
  return (
    <>
      <h1>{title}</h1>
      <main>
        {cities.map(city => <h1 key={city}>{city}</h1>)}
      </main>
    </>
  )
}