package com.example.uni_library.Product.Services;

import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.ProductRepository;
import com.example.uni_library.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchProductService implements Query<String, List<ProductDTO>> {
    private final ProductRepository productRepository;

    public SearchProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ResponseEntity<List<ProductDTO>> execute(String name) {
        return ResponseEntity.ok(productRepository.findbyNameOrDescriptionContaining(name)
                        .stream()
                        .map(ProductDTO::new)
                        .toList());
    }
}
