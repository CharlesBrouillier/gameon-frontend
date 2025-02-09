import type { GameEntity } from '~/types/gameEntity';
import type { MechanismEntity } from '~/types/mechanismEntity';

// Index.vue methods

/* Fetch and sort :
  - fetchGames
    -> fetchAllGames
    -> fetchFilteredGames
      -> sortGames
  - fetchMechanisms
*/
export const fetchGames = async (): Promise<GameEntity[]> => {
  const filterStore = useFilterStore();
  return filterStore.filtersChanged ? fetchFilteredGames() : fetchAllGames();
};

export const fetchAllGames = async (): Promise<GameEntity[]> => {
  const filterStore = useFilterStore();
  const config = useRuntimeConfig();
  
  try {
    const response = await fetch(`${config.public.apiUrl}/games`);    
    return sortGames(await response.json(), filterStore.sortItem);
  } catch {
    return [];
  }
};

export const fetchFilteredGames = async (): Promise<GameEntity[]> => {
  const gameStore = useGameStore();
  const filterStore = useFilterStore();
  const config = useRuntimeConfig();
  
  const query = new URLSearchParams({
    minPlayers: filterStore.players[0]?.toString() || '',
    maxPlayers: filterStore.players[1]?.toString() || '',
    minDuration: filterStore.duration[0]?.toString() || '',
    maxDuration: filterStore.duration[1]?.toString() || '',
    minPrice: filterStore.price[0]?.toString() || '',
    maxPrice: filterStore.price[1]?.toString() || '',
    mechanisms: gameStore.selectedMechanisms.map(m => m.id).join(','),
  });

  try {
    const response = await fetch(`${config.public.apiUrl}/games/filter?${query.toString()}`);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data: GameEntity[] = await response.json();
    return sortGames(data, filterStore.sortItem);
  } catch (error) {
    console.error('Error fetching filtered games:', error);
    return [];
  }
};

export const sortGames = (games: GameEntity[], sortItem: string): GameEntity[] => {  
  const sortedGames = [...games];

  switch (sortItem) {
    case 'Ordre alphabétique (A-Z)':
      sortedGames.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Ordre alphabétique (Z-A)':
      sortedGames.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'Date de sortie croissante':
      sortedGames.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
      break;
    case 'Date de sortie décroissante':
      sortedGames.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
      break;
    case 'Age minimum croissant':
      sortedGames.sort((a, b) => a.minAge - b.minAge);
      break;
    case 'Age minimum décroissant':
      sortedGames.sort((a, b) => b.minAge - a.minAge);
      break;
  }
  
  return sortedGames;
};

export const fetchMechanisms = async (): Promise<MechanismEntity[]> => {
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.apiUrl}/mechanisms`);
    if (!response.ok) throw new Error('Network response was not ok');
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching mechanisms:', error);
    return [];
  }
};

/* Slideover methods :
  - applyFilters
  - resetFilters
  - toggleMechanismSelection
*/
export const applyFilters = async () => {
  const gameStore = useGameStore();
  const filterStore = useFilterStore();

  gameStore.setGames(await fetchFilteredGames());
  filterStore.setFiltersChanged(true);
};

export const resetFilters = async () => {
  const gameStore = useGameStore();
  const filterStore = useFilterStore();
  
  gameStore.setGames(await fetchAllGames());
  gameStore.setSelectedMechanisms([]);
  filterStore.setFiltersChanged(false);
  filterStore.setPlayers([2, 5]);
  filterStore.setDuration([10, 120]);
  filterStore.setPrice([0, 54.99]);
};

export const toggleMechanismSelection = (mechanism: MechanismEntity) => {
  const gameStore = useGameStore();

  gameStore.setSelectedMechanisms(gameStore.selectedMechanisms.some(m => m.id === mechanism.id)
    ? gameStore.selectedMechanisms.filter(m => m.id !== mechanism.id)
    : [...gameStore.selectedMechanisms, mechanism]
  );
};

// [slug].vue methods
export const fetchGame = async (slug: string): Promise<GameEntity | null> => {
  const config = useRuntimeConfig();
  try {
    const response = await fetch(`${config.public.apiUrl}/games/${slug}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: GameEntity = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game:', error);
    return null;
  }
};

export const fetchRelatedGames = async (gameId: number, currentMechanisms: MechanismEntity[]): Promise<GameEntity[]> => {
  const config = useRuntimeConfig();
  try {
    const response = await fetch(`${config.public.apiUrl}/games/withMechanisms/${gameId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: GameEntity[] = await response.json();
    
    const relatedGames = data.map((relatedGame) => {
      const commonMechanisms = relatedGame.mechanisms.filter((relatedMechanism: MechanismEntity) =>
        currentMechanisms.some((currentMechanism: MechanismEntity) => currentMechanism.id === relatedMechanism.id));

      return {...relatedGame, commonMechanisms};
    });

    return relatedGames.sort((a, b) => b.commonMechanisms.length - a.commonMechanisms.length);
  } catch (error) {
    console.error('Error fetching related games:', error);
    return [];
  }
};