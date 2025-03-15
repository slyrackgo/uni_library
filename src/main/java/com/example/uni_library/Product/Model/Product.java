package com.example.uni_library.Product.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity //maps java class to mysql
@Data
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto generate id
    @Column(name = "id")
    private Integer id;

    @NotNull(message = "Name Is Required")
    @Column(name = "name")
    private String name;


    @Size(min = 20, message = "Description Must Be At Least 20 Characters!")
    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;
    private String attachmentId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
