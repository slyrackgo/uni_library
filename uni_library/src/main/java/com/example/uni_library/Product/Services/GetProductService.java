package com.example.uni_library.Product.Services;

import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.ProductRepository;
import com.example.uni_library.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GetProductService implements Query<Integer, ProductDTO> {
    private final ProductRepository productRepository;

    public GetProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ResponseEntity<ProductDTO> execute(Integer input) {
        Optional<Product> productOptional =  productRepository.findById(input);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(new ProductDTO(productOptional.get()));
        }
        return null;
    }
}
