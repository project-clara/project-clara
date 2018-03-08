import { Survey } from './survey/domain/survey';
import { Question } from './survey/domain/question';
import { ChoiceEntry } from './survey/domain/choice-entry';
import {QuestionType} from './survey/domain/question-type';

const TEXT_QUESTION_MOCK: Question[] = [
  {
    id: 1,
    questionText: "Was hälst du generell von der Veranstaltung?",
    description: "Ich finde die Veranstaltung... ",
    mandatory: true,
    questionType: QuestionType.TextQuestion,
    choiceEntries: []
}]

const SINGLE_CHOICE_ENTRIES_MOCK: ChoiceEntry[] = [
  {key: 'java', choiceText: 'Java', preSelected: true},
  {key: 'c', choiceText: 'C', preSelected: false},
  {key: 'asm', choiceText: 'Assembler', preSelected: false}
]

const MULTI_CHOICE_ENTRIES_MOCK: ChoiceEntry[] = [
  {key: 'architektur', choiceText: 'Architektur', preSelected: false},
  {key: 'docker', choiceText: 'Docker', preSelected: false},
  {key: 'java9', choiceText: 'Java 9', preSelected: true},
  {key: 'scrum', choiceText: 'Scrum', preSelected: false}
]


const SINGLE_CHOICE_QUESTION_MOCK: Question[] = [
  {
    id: 1,
    questionText: "Welches ist deine bevozugte Programmiersprache?",
    description: "Frage nach der Lieblingssprache",
    mandatory: true,
    questionType: QuestionType.SingleChoiceQuestion,
    choiceEntries: SINGLE_CHOICE_ENTRIES_MOCK
}]


const MULTI_CHOICE_QUESTION_MOCK: Question[] = [
  {
    id: 1,
    questionText: "Welche Themen interessieren dich am meisten?",
    description: "Technologien / Agile / Communities",
    mandatory: true,
    questionType: QuestionType.MultiChoiceQuestion,
    choiceEntries: MULTI_CHOICE_ENTRIES_MOCK
}]


const MIXED_QUESTION_MOCK: Question[] = [
  {
    id: 1,
    questionText: "Was hälst du generell von der Veranstaltung?",
    description: "Ich finde die Veranstaltung... ",
    mandatory: true,
    questionType: QuestionType.TextQuestion,
    choiceEntries: []
  },
  {
    id: 2,
    questionText: "Welches ist deine bevozugte Programmiersprache?",
    description: "Frage nach der Lieblingssprache",
    mandatory: true,
    questionType: QuestionType.SingleChoiceQuestion,
    choiceEntries: SINGLE_CHOICE_ENTRIES_MOCK
},
{
  id: 3,
  questionText: "Welche Themen interessieren dich am meisten?",
  description: "Technologien / Agile / Communities",
  mandatory: true,
  questionType: QuestionType.MultiChoiceQuestion,
  choiceEntries: MULTI_CHOICE_ENTRIES_MOCK
}
]

export const SURVEY_MOCK: Survey  = {
  id: 1,
  title: "Java Konferenz",
  description: "Tolle Konferenz im November",
  questions:  MIXED_QUESTION_MOCK
};
