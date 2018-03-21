package de.cleargroup.project.clara.server.servermock;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by jonas on 27.10.2017.
 */
@SpringBootApplication
@CrossOrigin
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
