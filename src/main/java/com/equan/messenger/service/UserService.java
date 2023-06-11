package com.equan.messenger.service;

import com.equan.messenger.repository.UserRepository;
import com.equan.messenger.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class UserService {


    private UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        System.out.println("this is my user inside service" + user);
        return userRepository.save(user);
    }

}