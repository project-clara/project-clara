package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by jonas on 29.10.2017.
 */
public class ChoiceEntry {
    @JsonProperty("key")
    public final String key;

    @JsonProperty("choiceText")
    public final String choiceText;

    public ChoiceEntry(String key, String choiceText){
        this.key = key;
        this.choiceText = choiceText;
    }
}
