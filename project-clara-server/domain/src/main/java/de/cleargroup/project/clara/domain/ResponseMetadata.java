package de.cleargroup.project.clara.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by jonas on 27.10.2017.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseMetadata{
    @JsonProperty("errorMessages")
    private final String[] errorMessages;

    @JsonProperty("notifications")
    private final String[] notifications;

    public ResponseMetadata(String[] errorMessages, String[] notifications){
        this.errorMessages = errorMessages == null ? new String[0] : errorMessages;
        this.notifications = notifications == null ? new String[0] : notifications;
    }

    public ResponseMetadata(){
        this(null,null);
    }

}
