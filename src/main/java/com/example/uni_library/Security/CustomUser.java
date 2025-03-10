package com.example.uni_library.Security;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name="customer_user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomUser {

    @Id
    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;
}
