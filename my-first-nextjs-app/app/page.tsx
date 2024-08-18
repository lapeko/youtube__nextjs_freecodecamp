export default () => {
  const cities = ["London", "San Francisco", "Barcelona"];
  return (
    <main>
      {cities.map(city => (
        <article className="p-4">
          <h2 className="font-bold text-xl">{city}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto aut, dicta distinctio dolorem esse fugit nobis officia perspiciatis!</p>
        </article>
      ))}
    </main>
  );
}
