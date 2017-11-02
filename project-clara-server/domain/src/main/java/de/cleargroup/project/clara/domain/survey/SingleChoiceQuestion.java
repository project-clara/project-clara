package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

import java.util.Collections;
import java.util.List;

/**
 * Created by jonas on 29.10.2017.
 */
public class SingleChoiceQuestion extends Question{
    @JsonProperty("questions")
    public final List<ChoiceEntry> choiceEntries;

    public SingleChoiceQuestion(Long id, String questionText, String description, boolean mandatory, List<ChoiceEntry> choiceEntries) {
        super(id, QuestionType.SINGLE_CHOICE_QUESTION, questionText, description, mandatory);
        Preconditions.checkNotNull(choiceEntries,"ChoiceOptions must be given for SingleChoiceQuestion");
        Preconditions.checkArgument(!choiceEntries.isEmpty(),"ChoiceOptions must contain at least one option");
        this.choiceEntries = Collections.unmodifiableList(choiceEntries);
    }

    public SingleChoiceQuestion(String questionText, String description, boolean mandatory, List<ChoiceEntry> choiceEntries) {
        this(null, questionText, description, mandatory, choiceEntries);
    }
}

