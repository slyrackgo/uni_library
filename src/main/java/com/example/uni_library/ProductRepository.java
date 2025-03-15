package com.example.uni_library;

import com.example.uni_library.Product.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    //spring data jpa
    List<Product> findByNameContaining(String name);


    //JPQL
    @Query("SELECT p FROM Product p WHERE p.name LIKE %:keyword% OR  p.description LIKE %:keyword%")
    List<Product> findbyNameOrDescriptionContaining(@Param("keyword") String name);
}
