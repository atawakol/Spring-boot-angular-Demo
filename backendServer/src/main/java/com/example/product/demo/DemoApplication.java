package com.example.product.demo;

import com.example.product.demo.model.Product;
import com.example.product.demo.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

	private static final Logger LOGGER = LoggerFactory.getLogger(DemoApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public ApplicationRunner init(ProductRepository productRepository){
		LOGGER.trace("ApplicationRunner for DB Initialization started .... ");
		return args -> {
			List<String> productsName = Arrays.asList("Pen", "Pencil", "Mouse", "Key board", "Mother Board", "CPU");
			List<Product> products = productsName.stream()
					.map(productName -> {
							Product product = new Product();
							product.setName(productName);
							product.setDiscount(true);
							return product;
					}).collect(Collectors.toList());

			productRepository.saveAll(products);

			productRepository.findAll().forEach(product -> LOGGER.debug(product.toString()));

		};
	}
}
