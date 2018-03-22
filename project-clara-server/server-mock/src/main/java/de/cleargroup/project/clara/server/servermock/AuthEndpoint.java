package de.cleargroup.project.clara.server.servermock;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.StringTokenizer;
import java.util.UUID;

@RestController
@CrossOrigin()
public class AuthEndpoint {
    private static final ResponseEntity UNAUTHORIZED = new ResponseEntity(HttpStatus.UNAUTHORIZED);

    private String currentUsername;
    private String currentPassword;
    private String token;
    private boolean authRequired = false;

    @RequestMapping(value = "/auth/userstate", method = RequestMethod.GET)
    public ResponseEntity userstate(@RequestHeader(value = "x-auth-token", required = false) String reqToken) throws UnsupportedEncodingException {
        return authOkOr(reqToken, new ResponseEntity(HttpStatus.OK));
    }

    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestHeader(value = "Authorization") String authHeader) throws UnsupportedEncodingException {
        System.out.println(authHeader);
        StringTokenizer tokenizer = new StringTokenizer(authHeader);

        if (!tokenizer.hasMoreTokens()) {
            return new ResponseEntity<>("Authorization Header No Entries", HttpStatus.BAD_REQUEST);
        }
        if (!tokenizer.nextToken().equals("Basic")) {
            return new ResponseEntity<>("Authorization Header Entry not Basic", HttpStatus.BAD_REQUEST);
        }
        if (!tokenizer.hasMoreTokens()) {
            return new ResponseEntity<>("No Credentials given", HttpStatus.BAD_REQUEST);
        }

        byte[] credentialsByteArray = Base64.getDecoder().decode(tokenizer.nextToken());
        String credentials = new String(credentialsByteArray, "UTF-8");
        String[] usernamePassword = credentials.split(":");

        if (usernamePassword.length != 2) {
            return new ResponseEntity<>("Username / Password required", HttpStatus.BAD_REQUEST);
        }
        if (!usernamePassword[0].equals(currentUsername)) {
            return new ResponseEntity<>("Username not correct", HttpStatus.BAD_REQUEST);
        }

        if (!usernamePassword[1].equals(currentPassword)) {
            //FIXME: Only useful for debugging
            return new ResponseEntity<>("Password not correct", HttpStatus.BAD_REQUEST);
        }

        HttpHeaders responseHeaders = new HttpHeaders();
        token = UUID.randomUUID().toString();
        responseHeaders.set("x-auth-token", token);
        responseHeaders.set("access-control-expose-headers", "x-auth-token");
        return new ResponseEntity(responseHeaders, HttpStatus.OK);
    }

    public ResponseEntity authOkOr(String xAuthToken, ResponseEntity okResponse) {
        if (authRequired && (token == null || !token.equals(xAuthToken)) || (!authRequired && token != null)) {
            return UNAUTHORIZED;
        }
        return okResponse;
    }

    @RequestMapping(value = "/configMock/setCredentials/{username}/{password}")
    public String setCredentials(@PathVariable String username, @PathVariable String password) {
        currentUsername = username;
        currentPassword = password;
        authRequired = true;
        return username + ":" + password;
    }

    @RequestMapping(value = "/configMock/setCredentials/reset")
    public String setCredentials() {
        authRequired = false;

        return "Cred resetted";
    }

}
