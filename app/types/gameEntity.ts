import type { IllustratorEntity } from "./illustratorEntity";
import type { AuthorEntity } from "./authorEntity";
import type { PublisherEntity } from "./publisherEntity";
import type { GameImageEntity } from "./gameImageEntity";
import type { MechanismEntity } from "./mechanismEntity";

export interface GameEntity {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  releaseDate: string;
  minAge: number;
  minPlayers: number;
  maxPlayers: number;
  minDuration: number;
  maxDuration: number;
  ean: string;
  globalNote: number;
  authors: AuthorEntity[];
  illustrators: IllustratorEntity[];
  publisher: PublisherEntity;
  imageUrls: GameImageEntity[];   
  mechanisms: MechanismEntity[]; 
  commonMechanisms: MechanismEntity[]; 
  youtubeUrl: string;
  bgaUrl: string;
}