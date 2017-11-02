package de.cleargroup.project.clara.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseContainer<T>{
    @JsonProperty("data")
    private final Map<String,Object> data;

    @JsonProperty("meta")
    private final ResponseMetadata responseMetadata;


    public ResponseContainer(Map<String,Object> data) {
        this(data,new ResponseMetadata());
    }

    public ResponseContainer(Map<String,Object> data, ResponseMetadata responseMetadata) {
        this.data = new HashMap<>(data);
        this.responseMetadata = responseMetadata == null ? new ResponseMetadata() : responseMetadata;
    }

    public ResponseContainer(ResponseMetadata responseMetadata) {
        this(null,responseMetadata);
    }
}
