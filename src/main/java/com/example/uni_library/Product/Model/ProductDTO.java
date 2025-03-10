package com.example.uni_library.Product.Model;

import lombok.Data;

@Data
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;

    public ProductDTO(Product product){ //constructor, it takes values
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
    }

}
