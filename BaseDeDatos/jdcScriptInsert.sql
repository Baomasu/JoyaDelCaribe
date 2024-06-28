-- INSERT USUARIOS

INSERT INTO `joyadelcaribe`.`usuarios` (`nombre`, `apellido`, `telefono`, `correo`, `password`)
VALUES ('Juan', 'Mendez', '6620147530', 'juanmen@gmail.com', 'Juan-178'),
('Sandra', 'Salinas', '5571224963', 'sandrasal@gmail.com ', 'Sandra-5'),
('Carmen', 'Zapata', '5611227849', 'zapatacar@hotmail.com', 'Carmen-8'),
('Simon', 'Chavez', '5512477894', 'chavezsimon@hotmail.com', 'Simon55.44'),
('Ashley', 'Anderson', '5622587941', 'andersonash@gmail.com', 'And23.23');

-- INSERT ORDENCOMPRAS

INSERT INTO `JoyaDelCaribe`.`ordenCompras` (`usuarios_idusuarios`, `fecha`, `cantidad`, `precio`)
VALUES ('1', '2024-05-28', 4, 1230),
('2', '2024-05-30', 3, 950),
('3', '2024-06-2', 2, 750),
('4', '2024-06-10', 5, 1860),
('5', '2024-06-13', 7, 2020);

-- INSERT ADMINISTRADOR

INSERT INTO `JoyaDelCaribe`.`administrador` (`correo`, `contraseña`)
VALUES ('lauraahumada@gmail.com', 'Ahumada*1'),
('estebanmartinez@gmail.com', 'Martinez*/1'),
('airamtorres@gmail.com', 'AiramTorres1-'),
('diegojuarez@gmail.com', 'DiegoJuarez*1'),
('jacoboferreira@gmail.com', 'JacoboFer-1');

-- INSERT PRODUCTOS

INSERT INTO `JoyaDelCaribe`.`productos` (`name`, `product`, `price`, `img`, `category`, `description`, `discount`, `administrador_idadministrador`, `ordenCompras_idordenCompras`, `ordenCompras_usuarios_idusuarios`)
VALUES
('Frescura Marina', 'Limpiador facial suave', 499.00, 'frescuraMarina.webp', 'Skincare', 'Ilumina tu rostro con el poder antioxidante de la vitamina C, capturando la esencia de los cítricos caribeños en cada gota.', 0, 1, 1, 1),
('Bruma de Cenote', 'Tónico facial con ácido hialurónico', 559.00, 'brumaCenote.webp', 'Skincare', 'Refresca y prepara tu piel con la hidratación del ácido hialurónico inspirado en las aguas cristalinas de los cenotes del Caribe.', 0, 1, 1, 1),
('Esencia Citrus', 'Serum de vitamina C', 199.00, 'escenciaCitrus.webp', 'Skincare', ' Ilumina tu rostro con el poder antioxidante de la vitamina C, capturando la esencia de los cítricos caribeños en cada gota.', 20, 1, 3, 3),
('Sol Caribeño', 'Crema hidratante con SPF', 329.00, 'solCaribenio.webp', 'Skincare', ' Protege y nutre tu piel bajo el sol tropical con nuestra crema hidratante que combina hidratación profunda y protección solar eficaz.', 0, 1, 5, 5),
('Arcilla de Tulum', 'Mascarilla de arcilla', 189.00, 'arcillaTulum.webp', 'Skincare', ' Purifica y renueva tu piel con la rica arcilla extraída de la profundidad de Tulum, perfecta para un tratamiento detoxificante.', 5, 2, 4, 4),
('Arena Coralina', 'Exfoliante facial', 89.00, 'arenaCoralina.webp', 'Skincare', 'Suaviza y renueva tu piel con granos de arena coralina, diseñados para exfoliar delicadamente y promover la regeneración cutánea.', 0, 2, 2, 2),
('Elixir Tropical', 'Aceite facial nutritivo', 199.00, 'elixirTropical.webp', 'Skincare', ' Rico en nutrientes y antioxidantes, este aceite facial envuelve tu piel en un velo de hidratación tropical intensiva.', 0, 1, 2, 2),
('Mirada de Sirena', 'Contorno de ojos', 119.00, 'miradaDeSirena.webp', 'Skincare', ' Rejuvenece e ilumina el contorno de tus ojos con esta fórmula especial, diseñada para reducir visiblemente signos de cansancio y envejecimiento.', 10, 4, 2, 2),
('Velo de Playa', 'Pre-base de maquillaje', 249.00, 'veloDePlaya.webp', 'Maquillaje', ' Prepara tu piel para un maquillaje impecable con nuestro primer Velo de Playa, que suaviza la piel y prolonga la duración de tu look.', 0, 4, 1, 1),
('Tonos del Caribe', 'Base líquida de maquillaje', 299.00, 'tonosDelCaribe.webp', 'Maquillaje', ' Consigue un acabado perfecto y natural con nuestra base de maquillaje, disponible en varias tonalidades para coincidir con el verdadero tono de tu piel.', 0, 4, 2, 2);