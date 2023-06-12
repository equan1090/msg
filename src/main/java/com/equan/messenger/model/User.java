package com.equan.messenger.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data // Lombok annotation to generate getters, setters, equals, hashCode, and toString methods
@Document // Spring Data annotation to mark this class as a MongoDB document
@AllArgsConstructor // Lombok annotation to generate a constructor with all fields as arguments
@NoArgsConstructor // Lombok annotation to generate a no-argument constructor
public class User {
    @Id // Marks the field used for identity purposes
    private String id;
    private String firstName;
    private String lastName;

    @Indexed(unique = true) // This ensures that the email field has a unique index on it.
    private String emailAddress;

    private String password;

    // Manually added constructor for creating a user with only a subset of fields (excluding id).
    public User(String firstName, String lastName, String emailAddress,
                String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }
}
