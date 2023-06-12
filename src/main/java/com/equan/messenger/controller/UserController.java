package com.equan.messenger.controller;


import com.equan.messenger.model.User;
import com.equan.messenger.service.UserService;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController (UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        return userService.saveUser(user);
    }

}
