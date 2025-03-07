package com.example.uni_library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class UniLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(UniLibraryApplication.class, args);
		System.out.println("-----Applicatin running-----");
		System.out.println("  _________.____                      _____          __    \n" +
				" /   _____/|    |    ___.__._______  / ___ \\   ____ |  | __\n" +
				" \\_____  \\ |    |   <   |  |\\_  __ \\/ / ._\\ \\_/ ___\\|  |/ /\n" +
				" /        \\|    |___ \\___  | |  | \\<  \\_____/\\  \\___|    < \n" +
				"/_______  /|_______ \\/ ____| |__|   \\_____\\   \\___  >__|_ \\\n" +
				"        \\/         \\/\\/                           \\/     \\/");
	}

}
