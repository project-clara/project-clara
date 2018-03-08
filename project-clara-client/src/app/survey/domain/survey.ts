import {Question} from './question';


export class SurveyResponse {
  data: Data;
  meta: Meta;

}

export class Data {
  survey: Survey;

}

export class Meta {
  errorMessages: string[];
  notifications: string[];

}

export class Survey {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
