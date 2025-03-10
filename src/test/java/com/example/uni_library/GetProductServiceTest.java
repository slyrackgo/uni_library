package com.example.uni_library;

import com.example.uni_library.Exceptions.ProductNotFoundException;
import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.Product.Services.GetProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;


import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class GetProductServiceTest {
    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private GetProductService getProductService;

    @BeforeEach //before test runs to set up properly
    public void setup(){
        MockitoAnnotations.openMocks(this);
    }

    @Test //1
    public void given_product_exists_when_get_product_service_return_product_dto(){
        //given
        Product product = new Product();

        product.setId(1);
        product.setName("Product Name");
        product.setDescription("Product Description which is at least 20 characters");
        product.setPrice(9.99);

        when(productRepository.findById(1)).thenReturn(Optional.of(product));

        //when
        ResponseEntity<ProductDTO> response = getProductService.execute(1);

        //then
        assertEquals(ResponseEntity.ok(new ProductDTO(product)), response);
        verify(productRepository, times(1)).findById(1);
    }

    @Test //2
    public void given_product_does_not_exist_when_get_product_service_throw_product_not_found_exception(){
        when(productRepository.findById(1)).thenReturn(Optional.empty());

        assertThrows(ProductNotFoundException.class, () -> getProductService.execute(1));
        verify(productRepository, times(1)).findById(1);
    }




}
