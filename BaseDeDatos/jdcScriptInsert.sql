-- INSERT USUARIOS

INSERT INTO `joyadelcaribe`.`usuarios` (`nombre`, `apellido`, `telefono`, `correo`, `contrasena`, `rol`)
VALUES ('Juan', 'Mendez', '6620147530', 'admin@gmail.com', 'Juan-178', 'ADMINISTRADOR'),
('Sandra', 'Salinas', '5571224963', 'sandrasal@gmail.com ', 'Sandra-5', 'CLIENTE'),
('Carmen', 'Zapata', '5611227849', 'zapatacar@hotmail.com', 'Carmen-8', 'CLIENTE'),
('Simon', 'Chavez', '5512477894', 'chavezsimon@hotmail.com', 'Simon55.44', 'CLIENTE'),
('Ashley', 'Anderson', '5622587941', 'andersonash@gmail.com', 'And23.23', 'CLIENTE');

-- INSERT ORDEN

INSERT INTO `JoyaDelCaribe`.`orden` (`fecha`, `total`, `usuarios_id`)
VALUES ('2024-05-28', 1230, 2),
('2024-05-30', 950, 2),
('2024-06-2', 750, 3),
('2024-06-10', 1860, 4),
('2024-06-13', 2020, 5);

-- INSERT PRODUCTOS

INSERT INTO `JoyaDelCaribe`.`productos` (`nombre`, `producto`, `precio`, `imagen`, `categoria`, `descripcion`, `descuento`)
VALUES
('Frescura Marina', 'Limpiador facial suave', 499.00, 'frescuraMarina.webp', 'Skincare', 'Ilumina tu rostro con el poder antioxidante de la vitamina C, capturando la esencia de los cítricos caribeños en cada gota.', 0.5),
('Bruma de Cenote', 'Tónico facial con ácido hialurónico', 559.00, 'brumaCenote.webp', 'Skincare', 'Refresca y prepara tu piel con la hidratación del ácido hialurónico inspirado en las aguas cristalinas de los cenotes del Caribe.', 0.7),
('Esencia Citrus', 'Serum de vitamina C', 199.00, 'escenciaCitrus.webp', 'Skincare', ' Ilumina tu rostro con el poder antioxidante de la vitamina C, capturando la esencia de los cítricos caribeños en cada gota.', 0),
('Sol Caribeño', 'Crema hidratante con SPF', 329.00, 'solCaribenio.webp', 'Skincare', ' Protege y nutre tu piel bajo el sol tropical con nuestra crema hidratante que combina hidratación profunda y protección solar eficaz.', 0),
('Arcilla de Tulum', 'Mascarilla de arcilla', 189.00, 'arcillaTulum.webp', 'Skincare', ' Purifica y renueva tu piel con la rica arcilla extraída de la profundidad de Tulum, perfecta para un tratamiento detoxificante.', 0.5),
('Arena Coralina', 'Exfoliante facial', 89.00, 'arenaCoralina.webp', 'Skincare', 'Suaviza y renueva tu piel con granos de arena coralina, diseñados para exfoliar delicadamente y promover la regeneración cutánea.', 0),
('Elixir Tropical', 'Aceite facial nutritivo', 199.00, 'elixirTropical.webp', 'Skincare', ' Rico en nutrientes y antioxidantes, este aceite facial envuelve tu piel en un velo de hidratación tropical intensiva.', 0),
('Mirada de Sirena', 'Contorno de ojos', 119.00, 'miradaDeSirena.webp', 'Skincare', ' Rejuvenece e ilumina el contorno de tus ojos con esta fórmula especial, diseñada para reducir visiblemente signos de cansancio y envejecimiento.', 0.25),
('Velo de Playa', 'Pre-base de maquillaje', 249.00, 'veloDePlaya.webp', 'Maquillaje', ' Prepara tu piel para un maquillaje impecable con nuestro primer Velo de Playa, que suaviza la piel y prolonga la duración de tu look.', 0),
('Tonos del Caribe', 'Base líquida de maquillaje', 299.00, 'tonosDelCaribe.webp', 'Maquillaje', ' Consigue un acabado perfecto y natural con nuestra base de maquillaje, disponible en varias tonalidades para coincidir con el verdadero tono de tu piel.', 0);

-- INSERT ORDEN_TIENE_PRODUCTOS

INSERT INTO `JoyaDelCaribe`.`orden_tiene_productos` (`orden_id`, `orden_usuarios_id`, `productos_id`, `cantidad`)
VALUES (1, 2, 2, 10),
(2, 2, 5, 15),
(3, 3, 7, 1),
(4, 4, 4,3),
(5, 5, 9, 6);