package com.equan.messenger.controller;


import com.equan.messenger.model.User;
import com.equan.messenger.service.UserService;

import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController (UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllEntities();
    }


    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        User foundUser = userService.findUserByEmailAndPassword(user.getEmailAddress(), user.getPassword());

        if (foundUser != null) {
            return foundUser;
        } else {
            System.out.println("Incorrect email or password");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Incorrect email or password");
        }
    }

    @ExceptionHandler(DuplicateKeyException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public Map<String, String> handleDuplicateKeyException(DuplicateKeyException ex) {
        Map<String, String> response = new HashMap<>();
        response.put("error", ex.getMessage());
        return response;
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NullPointerException.class)
    @ResponseBody
    public Map<String, String> handleNullPointerException(NullPointerException ex) {
        Map<String, String> response = new HashMap<>();
        response.put("error", ex.getMessage());
        return response;
    }



}
