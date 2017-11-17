package de.cleargroup.project.clara.domain.survey;

/**
 * Created by jonas on 02.11.2017.
 */
public class SingleChoiceAnswer extends Answer{
    public final String choiceKey;
    public SingleChoiceAnswer(Long questionId, String choiceKey) {
        super(questionId);

        this.choiceKey = choiceKey;
    }
}
