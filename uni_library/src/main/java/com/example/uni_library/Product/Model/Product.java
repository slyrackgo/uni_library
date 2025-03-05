package com.example.uni_library.Product.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity //maps java class to mysql
@Data
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto generate id
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Integer price;
}
