package de.cleargroup.project.clara.server.servermock;

import de.cleargroup.project.clara.domain.survey.*;

import java.util.Arrays;

/**
 * Created by jonas on 28.10.2017.
 */
public class SurveyMockHelper {

    public static Survey getSurvey42() {
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
