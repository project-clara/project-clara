package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * Created by jonas on 27.10.2017.
 */
@JsonTypeInfo(use= JsonTypeInfo.Id.NAME, include= JsonTypeInfo.As.PROPERTY, property="questionType")
public class TextQuestion extends Question{
    public TextQuestion(Long id, String questionText, String description, boolean mandatory) {
        super(id, questionText, description, mandatory);
    }

    @JsonCreator
    public TextQuestion(@JsonProperty("questionText") String questionText, @JsonProperty("description") String description, @JsonProperty("mandatory")boolean mandatory) {
        this(null,questionText, description, mandatory);
    }
}
