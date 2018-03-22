package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

import java.util.Collections;
import java.util.List;

/**
 * Created by tom on 10.12.2017.
 */
public class MultiChoiceQuestion  extends Question{
    @JsonProperty("choiceEntries")
    public final List<ChoiceEntry> choiceEntries;

    public MultiChoiceQuestion(Long id, String questionText, String description, boolean mandatory, List<ChoiceEntry> choiceEntries) {
        super(id, questionText, description, mandatory);
        Preconditions.checkNotNull(choiceEntries,"ChoiceOptions must be given for MultiChoiceQuestion");
        Preconditions.checkArgument(!choiceEntries.isEmpty(),"ChoiceOptions must contain at least one option");
        this.choiceEntries = Collections.unmodifiableList(choiceEntries);
    }

    public MultiChoiceQuestion(String questionText, String description, boolean mandatory, List<ChoiceEntry> choiceEntries) {
        this(null, questionText, description, mandatory, choiceEntries);
    }

}
