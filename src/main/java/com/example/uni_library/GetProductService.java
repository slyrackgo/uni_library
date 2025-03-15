package com.example.uni_library;

import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import org.springframework.http.ResponseEntity;
public interface GetProductService {
    ResponseEntity<ProductDTO> execute(Integer id);
    Product getProduct(Integer id); // This method must be here
}
