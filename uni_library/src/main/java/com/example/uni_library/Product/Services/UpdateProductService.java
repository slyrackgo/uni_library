package com.example.uni_library.Product.Services;

import com.example.uni_library.Command;
import com.example.uni_library.Exceptions.ProductNotFoundException;
import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.Product.Model.UpdateProductCommand;
import com.example.uni_library.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UpdateProductService implements Command<UpdateProductCommand, ProductDTO> {
    private ProductRepository productRepository;

    public UpdateProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ResponseEntity<ProductDTO> execute(UpdateProductCommand command) {
        Optional<Product> productOptional = productRepository.findById(command.getId());
        if(productOptional.isPresent()){
            Product product = command.getProduct();
            product.setId(command.getId());
            productRepository.save(product);
            return ResponseEntity.ok(new ProductDTO(product));
        }
        throw  new ProductNotFoundException();
    }
}
