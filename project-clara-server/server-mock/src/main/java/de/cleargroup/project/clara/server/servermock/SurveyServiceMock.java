package de.cleargroup.project.clara.server.servermock;

import de.cleargroup.project.clara.domain.ResponseContainer;
import de.cleargroup.project.clara.domain.ResponseMetadata;
import de.cleargroup.project.clara.domain.survey.Survey;
import org.omg.PortableServer.POAPackage.AdapterAlreadyExistsHelper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.io.UnsupportedEncodingException;
import java.util.*;

/**
 * Created by jonas on 27.10.2017.
 */
@RestController
@CrossOrigin()
public class SurveyServiceMock {
    private String currentUsername;
    private String currentPassword;
    private String token;
    private boolean authRequired = false;

    private static final ResponseEntity UNAUTHORIZED = new ResponseEntity(HttpStatus.UNAUTHORIZED);

    @RequestMapping(value = "/auth/login",method = RequestMethod.POST)
    public ResponseEntity login(@RequestHeader(value = "Authorization") String authHeader) throws UnsupportedEncodingException {
        System.out.println(authHeader);
        StringTokenizer tokenizer = new StringTokenizer(authHeader);

        if(!tokenizer.hasMoreTokens()){
            return new ResponseEntity<>("Authorization Header No Entries", HttpStatus.BAD_REQUEST);
        }
        if(!tokenizer.nextToken().equals("Basic")){
            return new ResponseEntity<>("Authorization Header Entry not Basic", HttpStatus.BAD_REQUEST);
        }
        if(!tokenizer.hasMoreTokens()){
            return new ResponseEntity<>("No Credentials given", HttpStatus.BAD_REQUEST);
        }

        byte[] credentialsByteArray = Base64.getDecoder().decode(tokenizer.nextToken());
        String credentials = new String(credentialsByteArray, "UTF-8");
        String[] usernamePassword = credentials.split(":");

        if(usernamePassword.length != 2){
            return new ResponseEntity<>("No Credentials given", HttpStatus.BAD_REQUEST);
        }
        if(!usernamePassword[0].equals(currentUsername)){
            return new ResponseEntity<>("No Credentials given", HttpStatus.BAD_REQUEST);
        }

        if(!usernamePassword[1].equals(currentPassword)) {
            return new ResponseEntity<>("No Credentials given", HttpStatus.BAD_REQUEST);
        }

            HttpHeaders responseHeaders = new HttpHeaders();
            token = UUID.randomUUID().toString();
            responseHeaders.set("X-Auth-Token", token);
            return new ResponseEntity(responseHeaders, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/survey/v1/survey/{idAsString}",method = RequestMethod.GET)
    public ResponseEntity getSurveyIfParameterEqual42(@PathVariable String idAsString, @RequestHeader(value = "x-auth-token",required = false)String reqToken){
        return authOkOr(reqToken, SurveyMockHelper.getResponseForSurveyId(idAsString));

    }

    @RequestMapping(value ="/api/survey/v1/surveys", method = RequestMethod.GET)
    public ResponseEntity getSurveys(@RequestHeader(value = "x-auth-token",required = false)String reqToken){
        return authOkOr(reqToken, SurveyMockHelper.getResponseForAllSurveys());
    }

    @RequestMapping(value = "/configMock/setCredentials/{username}/{password}")
    public String setCredentials(@PathVariable String username, @PathVariable String password){
        currentUsername = username;
        currentPassword = password;
        authRequired = true;
        return username + ":" + password;
    }

    @RequestMapping(value = "/configMock/setCredentials/reset")
    public String setCredentials(){
        authRequired = false;

        return "Cred resetted";
    }


    private ResponseEntity authOkOr(String xAuthToken, ResponseEntity okResponse){
        if(authRequired && (token == null || !token.equals(xAuthToken))) {
            return UNAUTHORIZED;
        }
        return okResponse;
    }
}
