package de.cleargroup.project.clara.domain.survey;

/**
 * Created by jonas on 27.10.2017.
 */
public class TextQuestion extends Question{
    public TextQuestion(Long id, String questionText, String description, boolean mandatory) {
        super(id, QuestionType.TEXT_QUESTION, questionText, description, mandatory);
    }

    public TextQuestion(String questionText, String description, boolean mandatory) {

        this(null,questionText, description, mandatory);
    }
}
