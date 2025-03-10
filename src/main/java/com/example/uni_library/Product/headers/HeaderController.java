package com.example.uni_library.Product.headers;

import com.example.uni_library.Product.Model.Product;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeaderController {
    @GetMapping("/header")
    public String getRegionalResponse(@RequestHeader(required = false, defaultValue = "PL") String region){
        if(region.equals("PL")) return "Library located in Poland!";
        if(region.equals("US")) return "You can get e-books from a library!";

        return "Country not supported!";
    }

    @GetMapping(value = "/header/product", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Product> getProduct(){
        Product product = new Product();
        product.setId(1);
        product.setName("All genres of book!");
        product.setDescription("In 2 format: paper & e-book");

        return ResponseEntity.ok(product);

    }

}
