package de.cleargroup.project.clara.domain.survey;

/**
 * Created by jonas on 02.11.2017.
 */
public class TextAnswer extends Answer{
    public final String answerText;
    public TextAnswer(Long questionId, String answerText) {
        super(questionId);

        this.answerText = answerText;
    }
}
