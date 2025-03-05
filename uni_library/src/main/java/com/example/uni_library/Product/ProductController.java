package com.example.uni_library.Product;

import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Services.CreateProductService;
import com.example.uni_library.Product.Services.DeleteProductService;
import com.example.uni_library.Product.Services.GetProductsService;
import com.example.uni_library.Product.Services.UpdateProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    private final CreateProductService createProductService;
    private final GetProductsService getProductsService;
    private final UpdateProductService updateProductService;
    private final DeleteProductService deleteProductService;

    public ProductController(CreateProductService createProductService,
                             GetProductsService getProductsService,
                             UpdateProductService updateProductService,
                             DeleteProductService deleteProductService) {
        this.createProductService = createProductService;
        this.getProductsService = getProductsService;
        this.updateProductService = updateProductService;
        this.deleteProductService = deleteProductService;
    }



    @PostMapping
    public ResponseEntity<String> createProduct(){
        return createProductService.execute(null);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getProducts(){
        return  getProductsService.execute(null);
    }

    @PutMapping ResponseEntity<String> postProduct(){
        return  updateProductService.execute(null);
    }

    @DeleteMapping ResponseEntity<String> deleteProduct(){
        return  deleteProductService.execute(null);
    }
}
