package de.cleargroup.project.clara.server.servermock;

import de.cleargroup.project.clara.domain.ResponseContainer;
import de.cleargroup.project.clara.domain.ResponseMetadata;
import de.cleargroup.project.clara.domain.survey.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by jonas on 28.10.2017.
 */
public class SurveyMockHelper {

    public static ResponseEntity<ResponseContainer> getResponseForSurveyId(String idString){
        try {
            long id = Long.parseLong(idString);
            if(id == 403L){
                return new ResponseEntity(HttpStatus.FORBIDDEN);
            }
            if(id == 404L){
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            }
            if(id == 42L){
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("survey",getSurvey42());
                return new ResponseEntity<>(new ResponseContainer(dataMap), HttpStatus.OK);
            }
        } catch(NumberFormatException e){
            return new ResponseEntity<>(new ResponseContainer(
                    new ResponseMetadata(new String[]{"SurveyId not valid"},null)),HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ResponseContainer(
                new ResponseMetadata(new String[]{"SurveyId not found"},null)),HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity<ResponseContainer> getResponseForAllSurveys(){
        Map<String,Object> dataMap = new HashMap<>();
        dataMap.put("surveys",new Survey[]{getSurvey42()});
        return new ResponseEntity<>(new ResponseContainer(dataMap), HttpStatus.OK);
    }

    private static Survey[] getAllSurveys(){
        return new Survey[]{getSurvey42()};
    }

    private static Survey getSurvey42() {
        Question[] listOfQuestions = {
                new TextQuestion("This is a question",null,true),
                new TextQuestion("This is another question",null,false),
                new SingleChoiceQuestion("What is the best language?",null,true,Arrays.asList(
                        new ChoiceEntry("CSharp","C#"),
                        new ChoiceEntry("Java","Java"),
                        new ChoiceEntry("Asm","Assembler")
                ))
        };
        return new Survey("Survey 42","The magic survey", Arrays.asList(listOfQuestions));
    }
}
