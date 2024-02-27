export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();

  return anime.data;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.flatMap((result) => result.entry);
};

export const getRandomAnimeWhileReloadThePage = (data, n) => {
  const anime = data.sort(() => 0.5 - Math.random());
  return anime.slice(0, n);
};
