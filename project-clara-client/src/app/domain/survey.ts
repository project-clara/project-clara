import { Question } from './question';

export class Survey {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
