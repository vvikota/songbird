export interface CategoryQuestions {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export interface DataCategory {
  category: string;
  data: CategoryQuestions[];
}