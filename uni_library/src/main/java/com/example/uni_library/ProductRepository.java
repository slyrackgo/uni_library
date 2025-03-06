package com.example.uni_library;

import com.example.uni_library.Product.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    //spring data jpa
    List<Product> findByNameContaining(String name);
}
