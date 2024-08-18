export default () => {
  const cities = ["London", "San Francisco", "Barcelona"];
  return (
    <main>
      {cities.map(city => <h1>{city}</h1>)}
    </main>
  )
}