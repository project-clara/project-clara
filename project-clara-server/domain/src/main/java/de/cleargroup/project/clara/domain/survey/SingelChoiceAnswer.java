package de.cleargroup.project.clara.domain.survey;

/**
 * Created by jonas on 02.11.2017.
 */
public class SingelChoiceAnswer extends Answer{
    public final String choiceKey;
    public SingelChoiceAnswer(Long questionId, String choiceKey) {
        super(questionId);

        this.choiceKey = choiceKey;
    }
}
