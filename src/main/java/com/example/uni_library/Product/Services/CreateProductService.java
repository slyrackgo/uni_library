package com.example.uni_library.Product.Services;

import com.example.uni_library.Command;
import com.example.uni_library.Exceptions.ErrorMessages;
import com.example.uni_library.Exceptions.ProductNotFoundException;
import com.example.uni_library.Exceptions.ProductNotValidException;
import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.Product.Validators.ProductValidator;
import com.example.uni_library.ProductRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CreateProductService implements Command<Product, ProductDTO> {
    private final ProductRepository productRepository;

    public CreateProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ResponseEntity<ProductDTO> execute(Product product) {
        //validation before saving into database
//        ProductValidator.execute(product);
        Product savedProduct = productRepository.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ProductDTO(savedProduct));
    }


}
