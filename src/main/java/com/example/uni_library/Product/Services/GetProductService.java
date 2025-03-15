package com.example.uni_library.Product.Services;

import com.example.uni_library.Exceptions.ProductNotFoundException;
import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.ProductRepository;
import com.example.uni_library.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class GetProductService implements Query<Integer, ProductDTO> {
    private final ProductRepository productRepository;
    private static final Logger logger = LoggerFactory.getLogger(GetProductService.class);

    public GetProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    @Cacheable("productCache")
    public ResponseEntity<ProductDTO> execute(Integer input ) {
        logger.info("Executing" + getClass() + " input: " + input);
        Optional<Product> productOptional =  productRepository.findById(input);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(new ProductDTO(productOptional.get()));
        }
        throw  new ProductNotFoundException();
    }


    public Product getProduct(Integer productId) {
        return productRepository.findById(productId).orElseThrow(ProductNotFoundException::new);
    }
}
