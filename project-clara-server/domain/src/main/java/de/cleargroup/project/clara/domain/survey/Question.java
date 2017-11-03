package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

@JsonInclude(JsonInclude.Include.NON_NULL)
public abstract class Question {
    @JsonProperty
    public final Long id;

    @JsonProperty
    public final String questionText;

    @JsonProperty
    public final String description;

    @JsonProperty
    public final boolean mandatory;


    public final QuestionType questionType;

    @JsonProperty("questionType")
    public final String questionTpeAsString(){
        return questionType.toString();
    }



    public Question(Long id, QuestionType questionType, String questionText, String description, boolean mandatory){
        Preconditions.checkNotNull(questionText,"QuestionText must not be null");

        this.id = id;
        this.questionType = questionType;
        this.questionText = questionText;
        this.description = description;
        this.mandatory = mandatory;
    }
}

