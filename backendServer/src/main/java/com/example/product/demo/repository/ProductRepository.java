package com.example.product.demo.repository;


import com.example.product.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface ProductRepository extends JpaRepository<Product, Long> {
}
