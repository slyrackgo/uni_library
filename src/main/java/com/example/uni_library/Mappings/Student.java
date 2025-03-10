package com.example.uni_library.Mappings;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Student")
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name="last_name")
    private String last_name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="address_id")
    private Address address;
}
