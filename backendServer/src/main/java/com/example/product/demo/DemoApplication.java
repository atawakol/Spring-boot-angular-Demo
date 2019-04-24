package com.example.product.demo;

import com.example.product.demo.model.Product;
import com.example.product.demo.repository.ProductRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public ApplicationRunner init(ProductRepository productRepository){
		return args -> {
			Loo
			List<String> productsName = Arrays.asList("Pen", "Pencil", "Mouse", "Key board", "Mother Board", "CPU");
			List<Product> products = productsName.stream()
					.map(productName -> {
							Product product = new Product();
							product.setName(productName);
							return product;
					}).collect(Collectors.toList());

			productRepository.saveAll(products);
		};
	}
}
