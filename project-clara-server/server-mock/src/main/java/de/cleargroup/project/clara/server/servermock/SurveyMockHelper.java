package de.cleargroup.project.clara.server.servermock;

import de.cleargroup.project.clara.domain.ResponseContainer;
import de.cleargroup.project.clara.domain.ResponseMetadata;
import de.cleargroup.project.clara.domain.survey.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by jonas on 28.10.2017.
 */
@RestController
@CrossOrigin()
public class SurveyMockHelper {

    public static ResponseEntity<ResponseContainer> getResponseForSurveyId(String idString) {
        try {
            long id = Long.parseLong(idString);
            if (id == 403L) {
                return new ResponseEntity(HttpStatus.FORBIDDEN);
            }
            if (id == 42L) {
                Map<String, Object> dataMap = new HashMap<>();
                dataMap.put("survey", getSurvey42());
                return new ResponseEntity<>(new ResponseContainer(dataMap), HttpStatus.OK);
            }
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(new ResponseContainer(
                    new ResponseMetadata(new String[]{"SurveyId not valid"}, null)), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ResponseContainer(
                new ResponseMetadata(new String[]{"SurveyId not found"}, null)), HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity<ResponseContainer> getResponseForAllSurveys() {
        Map<String, Object> dataMap = new HashMap<>();
        dataMap.put("surveys", new Survey[]{getSurvey42(), getSurvey43(), getSurvey44()});
        return new ResponseEntity<>(new ResponseContainer(dataMap), HttpStatus.OK);
    }

    private static Survey[] getAllSurveys() {
        return new Survey[]{getSurvey42()};
    }

    private static Survey getSurvey42() {
        Question[] listOfQuestions = {
                new TextQuestion(1L, "This is a question", "", true),
                new TextQuestion(2L, "This is another question", "", false),
                new SingleChoiceQuestion(3L, "What is the best language?", "", true, Arrays.asList(
                        new ChoiceEntry("CSharp", "C#", false),
                        new ChoiceEntry("Java", "Java", true),
                        new ChoiceEntry("Asm", "Assembler", false)
                )),
                new MultiChoiceQuestion(4L, "Which topics are most interesting?", "Technologien / Agile / Communities", true, Arrays.asList(
                        new ChoiceEntry("architektur", "Architektur", false),
                        new ChoiceEntry("docker", "Docker", true),
                        new ChoiceEntry("java9", "Java 9", false),
                        new ChoiceEntry("scrum", "Scrum", false)
                ))
        };
        return new Survey(42L, "JavaLand 2016", "JavaLand 2016 in Brühl", Arrays.asList(listOfQuestions));
    }

    private static Survey getSurvey43() {
        Question[] listOfQuestions = {
                new TextQuestion(1L, "What is the best location for lunch there?", "", true),
                new TextQuestion(2L, "What do you think about Speaker I?", "", false),
                new SingleChoiceQuestion(3L, "What was your first talk?", "", true, Arrays.asList(
                        new ChoiceEntry("tdd", "Test-Driven-Development", false),
                        new ChoiceEntry("bdd", "Behaviour-Driven-Development with Spring", true),
                        new ChoiceEntry("junit", "Quo vadis - JUnit im Wandel der Zeit", false)
                )),
                new MultiChoiceQuestion(4L, "Which topics are most interesting?", "Technologien / Agile / Communities", true, Arrays.asList(
                        new ChoiceEntry("architektur", "Architektur", false),
                        new ChoiceEntry("junit", "JUnit 5", true),
                        new ChoiceEntry("java10", "Java 10", false),
                        new ChoiceEntry("scrum2", "Scrum 2", false)
                ))
        };
        return new Survey(43L, "JavaLand 2017", "JavaLand 2017 in Brühl", Arrays.asList(listOfQuestions));
    }

    private static Survey getSurvey44() {
        Question[] listOfQuestions = {
                new TextQuestion(1L, "What is your motivation to go there?", "", true),
                new TextQuestion(2L, "What do you think about Speaker IV?", "", false),
                new SingleChoiceQuestion(3L, "What was your first talk?", "", true, Arrays.asList(
                        new ChoiceEntry("nocode", "Software development without code?", false),
                        new ChoiceEntry("sass", "Nice pages by SASS", true),
                        new ChoiceEntry("ee4J", "EE4J - Names change by the time", false)
                )),
                new MultiChoiceQuestion(4L, "Which topics are most interesting?", "Technologien / Agile / Communities", true, Arrays.asList(
                        new ChoiceEntry("architektur", "Architektur", false),
                        new ChoiceEntry("junit", "JUnit 5.1", true),
                        new ChoiceEntry("java10-3", "Java 10 Patch 3", false),
                        new ChoiceEntry("scrum3", "Scrum 3", false)
                ))
        };
        return new Survey(44L, "JavaLand 2018", "JavaLand 2017 in Brühl", Arrays.asList(listOfQuestions));
    }
}
