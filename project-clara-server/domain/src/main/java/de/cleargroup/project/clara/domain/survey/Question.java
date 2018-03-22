package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.google.common.base.Preconditions;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonTypeInfo(use= JsonTypeInfo.Id.NAME, include= JsonTypeInfo.As.PROPERTY, property="questionType")
@JsonSubTypes({
        @JsonSubTypes.Type(value=TextQuestion.class),
        @JsonSubTypes.Type(value=SingleChoiceQuestion.class),
        @JsonSubTypes.Type(value=MultiChoiceQuestion.class)
})
public abstract class Question {
    @JsonProperty
    public final Long id;

    @JsonProperty
    public final String questionText;

    @JsonProperty
    public final String description;

    @JsonProperty
    public final boolean mandatory;


    public Question(Long id, String questionText, String description, boolean mandatory){
        Preconditions.checkNotNull(questionText,"QuestionText must not be null");

        this.id = id;
        this.questionText = questionText;
        this.description = description;
        this.mandatory = mandatory;
    }
}

