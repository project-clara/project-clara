package de.cleargroup.project.clara.domain.survey;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by jonas on 27.10.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Survey {
    @JsonProperty("id")
    private Long id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    private String description;

    @JsonProperty("questions")
    private List<Question> questions = new ArrayList<>();

    @JsonCreator
    public Survey(Long id, String title, String description, Collection<Question> questions) {
        Preconditions.checkNotNull(title,"Title must not be null");
        Preconditions.checkNotNull(questions,"Questions must not be null");
        Preconditions.checkArgument(questions.size() > 0,"Survey must have at least one question");

        this.id = id;
        this.title = title;
        this.description = description;
        this.questions.addAll(questions);
    }

    public Survey(String title, String description, Collection<Question> questions){
        this(null,title,description,questions);
    }
}
