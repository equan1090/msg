package com.equan.messenger.service;

import com.equan.messenger.repository.UserRepository;
import com.equan.messenger.model.User;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Service
public class UserService {

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {

        String hashedPassword = encoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        try {
            return userRepository.save(user);
        } catch (DuplicateKeyException ex) {

            throw new DuplicateKeyException("Email address already exists");
        }


    }

    public User findUserByEmailAndPassword (String email, String password) {

        User user = userRepository.findByEmailAddress(email);

        if (user != null && encoder.matches(password, user.getPassword())) {
            return user;
        }
        return null;

    }

    public List<User> getAllEntities() {
        return userRepository.findAll();
    }

}