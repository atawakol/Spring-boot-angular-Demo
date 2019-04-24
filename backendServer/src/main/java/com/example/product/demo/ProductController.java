package com.example.product.demo;

import com.example.product.demo.model.Product;
import com.example.product.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController()
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/discountProducts")
    public Collection<Product> discountedProducts(){
        return productRepository.findAll().stream().filter(Product::isDiscount).collect(Collectors.toList());
    }

    @GetMapping("/specialProducts")
    public Collection<Product> specialProducts(){
        return productRepository.findAll().stream().filter(this::isSpecail).collect(Collectors.toList());
    }

    private boolean isSpecail(Product product) {
        return product.getName().toLowerCase().startsWith("p");
    }
}
