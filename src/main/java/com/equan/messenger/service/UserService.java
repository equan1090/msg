package com.equan.messenger.service;

import com.equan.messenger.repository.UserRepository;
import com.equan.messenger.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return List.of(
                new User(
                        "Eric",
                        "Quan",
                        "ericq1090@gmail.com",
                        "password"
                )
        );
    }
}