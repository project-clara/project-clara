package de.cleargroup.project.clara.server.servermock;

import de.cleargroup.project.clara.domain.ResponseContainer;
import de.cleargroup.project.clara.domain.ResponseMetadata;
import de.cleargroup.project.clara.domain.survey.Survey;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by jonas on 27.10.2017.
 */
@RestController
@CrossOrigin()
public class SurveyServiceMock {
    @RequestMapping(value = "/api/survey/v1/survey/{idAsString}",method = RequestMethod.GET)
    public ResponseEntity<ResponseContainer<Survey>> getSurveyIfParameterEqual42(@PathVariable String idAsString){
        try {
            long id = Long.parseLong(idAsString);
            if(id == 42L){
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("survey",SurveyMockHelper.getSurvey42());
                return new ResponseEntity<>(new ResponseContainer(dataMap), HttpStatus.OK);
            }
        } catch(NumberFormatException e){
            return new ResponseEntity(new ResponseContainer<Survey>(
                    new ResponseMetadata(new String[]{"SurveyId not valid"},null)),HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(new ResponseContainer<Survey>(
                new ResponseMetadata(new String[]{"SurveyId not found"},null)),HttpStatus.NOT_FOUND);
    }
}
