export function normalizePokemon(pokemon) {
  const { isFromDB } = pokemon;
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: isFromDB ? pokemon.image : pokemon.sprites.front_default,
    hp: isFromDB
      ? pokemon.health
      : pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat,
    attack: isFromDB
      ? pokemon.attack
      : pokemon.stats.find((stat) => stat.stat.name === "attack").base_stat,
    defense: isFromDB
      ? pokemon.defense
      : pokemon.stats.find((stat) => stat.stat.name === "defense").base_stat,
    speed: isFromDB
      ? pokemon.speed
      : pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat,
    height: pokemon.height,
    weight: pokemon.weight,
    types: isFromDB
      ? pokemon.types.map((type) => type.name)
      : pokemon.types.map((type) => type.type.name),
  };
}
