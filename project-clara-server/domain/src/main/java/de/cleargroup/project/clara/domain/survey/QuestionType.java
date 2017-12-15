package de.cleargroup.project.clara.domain.survey;

/**
 * Created by jonas on 02.11.2017.
 */
public enum QuestionType {
    TEXT_QUESTION("TextQuestion"), SINGLE_CHOICE_QUESTION("SingleChoiceQuestion"),
    MULTI_CHOICE_QUESTION("MultiChoiceQuestion");

    public final String questionType;

    QuestionType(String questionType){
        this.questionType = questionType;
    }

    public String toString(){
        return questionType;
    }
}
