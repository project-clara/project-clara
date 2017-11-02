package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.google.common.base.Preconditions;

/**
 * Created by jonas on 02.11.2017.
 */
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = TextAnswer.class, name = "TextAnswer"),
        @JsonSubTypes.Type(value = TextAnswer.class, name = "TextAnswer"),
})
public abstract class Answer {
    @JsonProperty
    public final Long questionId;

    public Answer(Long questionId){
        Preconditions.checkNotNull(questionId, "QuestionId must be not null");

        this.questionId = questionId;
    }
}
