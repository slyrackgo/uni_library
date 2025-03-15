package com.example.uni_library;

import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class GetProductServiceImpl implements GetProductService {
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    public GetProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ResponseEntity<ProductDTO> execute(Integer id) {
        if (id == null) {
            return ResponseEntity.ok((ProductDTO) productRepository.findAll().stream()
                    .map(product -> modelMapper.map(product, ProductDTO.class))
                    .toList());
        }
        return productRepository.findById(id).map(product -> ResponseEntity.ok(modelMapper.map(product, ProductDTO.class)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @Override
    public Product getProduct(Integer id) { // This method must be here
        return productRepository.findById(id).orElse(null);
    }
}