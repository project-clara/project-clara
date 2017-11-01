package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

@JsonInclude(JsonInclude.Include.NON_NULL)
public abstract class Question {
    @JsonProperty("id")
    public final Long id;

    @JsonProperty("question")
    public final String question;

    public Question(Long id, String question){
        Preconditions.checkNotNull(question,"Question must not be null");

        this.id = id;
        this.question = question;
    }

    @JsonProperty("type")
    protected abstract String questionType();
}

