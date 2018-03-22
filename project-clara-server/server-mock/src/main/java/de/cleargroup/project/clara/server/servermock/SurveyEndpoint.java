package de.cleargroup.project.clara.server.servermock;

import de.cleargroup.project.clara.domain.ResponseContainer;
import de.cleargroup.project.clara.domain.ResponseMetadata;
import de.cleargroup.project.clara.domain.survey.Question;
import de.cleargroup.project.clara.domain.survey.Survey;
import org.immutables.value.Value;
import org.omg.PortableServer.POAPackage.AdapterAlreadyExistsHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.swing.text.html.Option;
import java.io.UnsupportedEncodingException;
import java.util.*;

/**
 * Created by jonas on 27.10.2017.
 */
@RestController
@CrossOrigin()
public class SurveyEndpoint {
    private final AuthEndpoint auth;

    public SurveyEndpoint(@Autowired AuthEndpoint auth){
        this.auth = auth;
    }

    @RequestMapping(value = "/api/survey/v1/survey", method=RequestMethod.POST)
    public ResponseEntity createSurvey(@RequestHeader(value = "x-auth-token", required = false) String reqToken, @RequestBody Survey survey) {
        return auth.authOkOr(reqToken, new ResponseEntity(HttpStatus.OK));

    }
    @RequestMapping(value = "/api/survey/v1/survey/{idAsString}", method = RequestMethod.GET)
    public ResponseEntity getSurveyIfParameterEqual42(@PathVariable String idAsString, @RequestHeader(value = "x-auth-token", required = false) String reqToken) {
        return auth.authOkOr(reqToken, SurveyMockHelper.getResponseForSurveyId(idAsString));

    }

    @RequestMapping(value = "/api/survey/v1/surveys", method = RequestMethod.GET)
    public ResponseEntity getSurveys(@RequestHeader(value = "x-auth-token", required = false) String reqToken) {
        return auth.authOkOr(reqToken, SurveyMockHelper.getResponseForAllSurveys());
    }



    @RequestMapping(value = "/help")
    public String help() {
        return "<html>" +
                "<body>" +
                "<p><a href='/configMock/setCredentials/user/pass'>Set Username to user and Password to pass</a></p>" +
                "<p><a href='/configMock/setCredentials/reset'>Reset Username and Password </a></p>" +
                "</body>" +
                "</html>";

    }

}
