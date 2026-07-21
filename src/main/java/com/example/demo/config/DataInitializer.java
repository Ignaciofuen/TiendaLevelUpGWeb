package com.example.demo.config;

import com.example.demo.model.entity.ProductoEntity;
import com.example.demo.model.entity.UsuarioEntity;
import com.example.demo.repository.ProductoRepository;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@Configuration
public class DataInitializer {

    
    private final String BASE_IMAGE_URL = "http://98.90.253.99:8080/images/";

    @Bean
    CommandLineRunner initDatabase(ProductoRepository productoRepo, 
                                   UsuarioRepository usuarioRepo, 
                                   PasswordEncoder passwordEncoder) {
        return args -> {
            
            
            
            // Solo creamos el ADMIN automáticamente (porque no se puede registrar por web)
            if (usuarioRepo.findByEmail("usuario@admin.cl").isEmpty()) {
                UsuarioEntity admin = new UsuarioEntity();
                admin.setEmail("usuario@admin.cl");
                admin.setPassword(passwordEncoder.encode("admin999"));
                admin.setRol("ADMIN");
                usuarioRepo.save(admin);
                System.out.println("Usuario ADMIN creado.");
            } else {
                System.out.println("El Admin ya existe.");
            }

        

            //  PRODUCTOS 
            
            if (productoRepo.count() == 0) {
                System.out.println("--- Creando Productos Iniciales ---");

                // 1. PC GAMER 1
                ProductoEntity p1 = new ProductoEntity();
                p1.setNombre("PC GAMER RDY Y70 TI B04");
                p1.setPrecio(2499000);
                p1.setImagen(BASE_IMAGE_URL + "pc2.webp");
                p1.setDescripcion("Intel® Core™ i9-14900KF, MSI PRO Z790-A MAX Wi-Fi");
                p1.setCategoria("PC Gamer");

                // 2. PC GAMER 2
                ProductoEntity p2 = new ProductoEntity();
                p2.setNombre("PC GAMER RDY Y70 R06");
                p2.setPrecio(1499000);
                p2.setImagen(BASE_IMAGE_URL + "pc1.avif");
                p2.setDescripcion("Ryzen™ 9 9950X, ASUS PRIME X870-P WIFI");
                p2.setCategoria("PC Gamer");

                // 3. PC GAMER 3
                ProductoEntity p3 = new ProductoEntity();
                p3.setNombre("PC GAMER RDY Y70 Liquid Hybrid Max");
                p3.setPrecio(2000000);
                p3.setImagen(BASE_IMAGE_URL + "pc3.webp");
                p3.setDescripcion("Intel® Core™ Ultra 9, ASUS ROG STRIX Z890-E WIFI");
                p3.setCategoria("PC Gamer");

                // 4. TECLADO 1
                ProductoEntity p4 = new ProductoEntity();
                p4.setNombre("TECLADO GAMER REDRAGON UCAL K673");
                p4.setPrecio(62350);
                p4.setImagen(BASE_IMAGE_URL + "teclado1.webp");
                p4.setDescripcion("Keycaps PBT Premium");
                p4.setCategoria("Teclado");

                // 5. TECLADO 2
                ProductoEntity p5 = new ProductoEntity();
                p5.setNombre("TECLADO REDRAGON K530W DRACONIC BLC");
                p5.setPrecio(70350);
                p5.setImagen(BASE_IMAGE_URL + "teclado2.png");
                p5.setDescripcion("Keycaps PBT Premium");
                p5.setCategoria("Teclado");

                // 6. MOUSE
                ProductoEntity p6 = new ProductoEntity();
                p6.setNombre("GAMING MOUSE Logitech G305");
                p6.setPrecio(68000);
                p6.setImagen(BASE_IMAGE_URL + "mouse1.webp");
                p6.setDescripcion("Sensor HERO");
                p6.setCategoria("Mouse");

                // 7. SILLA
                ProductoEntity p7 = new ProductoEntity();
                p7.setNombre("SILLA GAMER COUGAR TERMINATOR");
                p7.setPrecio(265000);
                p7.setImagen(BASE_IMAGE_URL + "silla1.png");
                p7.setDescripcion("Polipiel Hyper-Dura");
                p7.setCategoria("Silla");

                // 8. CONSOLA
                ProductoEntity p8 = new ProductoEntity();
                p8.setNombre("CONSOLA PS5");
                p8.setPrecio(699000);
                p8.setImagen(BASE_IMAGE_URL + "ps5.png");
                p8.setDescripcion("500 GB, lector Blu-ray 4K");
                p8.setCategoria("Consola");

                // 9. CONTROL
                ProductoEntity p9 = new ProductoEntity();
                p9.setNombre("CONTROL GAME PAD XBOX");
                p9.setPrecio(55000);
                p9.setImagen(BASE_IMAGE_URL + "control1.png");
                p9.setDescripcion("Inalámbrico Sky Cipher");
                p9.setCategoria("Control");

                // 10. ROPA
                ProductoEntity p10 = new ProductoEntity();
                p10.setNombre("POLERA LEVEL-UP-GAMER");
                p10.setPrecio(20000);
                p10.setImagen(BASE_IMAGE_URL + "polera.png");
                p10.setDescripcion("Algodón con serigrafía");
                p10.setCategoria("Ropa");

                // Guardar todos los productos
                productoRepo.saveAll(List.of(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
                
                System.out.println("✅ 10 Productos iniciales creados.");
            }
        };
    }
}