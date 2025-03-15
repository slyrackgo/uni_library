package com.example.uni_library.Product.Model;

import lombok.Data;

@Data
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private byte[] data;
    public ProductDTO(Product product){ //constructor, it takes values
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.data = data;
    }

}
