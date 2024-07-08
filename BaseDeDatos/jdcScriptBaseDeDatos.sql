-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema joyadelcaribe
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema joyadelcaribe
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `joyadelcaribe` DEFAULT CHARACTER SET utf8mb3 ;
USE `joyadelcaribe` ;

-- -----------------------------------------------------
-- Table `joyadelcaribe`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `joyadelcaribe`.`usuarios` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `correo` VARCHAR(254) NOT NULL,
  `contrasena` VARCHAR(128) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `joyadelcaribe`.`orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `joyadelcaribe`.`orden` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `usuarios_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_orden_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_orden_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `joyadelcaribe`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `joyadelcaribe`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `joyadelcaribe`.`productos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `producto` VARCHAR(250) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `imagen` VARCHAR(250) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NULL DEFAULT NULL,
  `descuento` DECIMAL(5,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `joyadelcaribe`.`orden_tiene_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `joyadelcaribe`.`orden_tiene_productos` (
  `orden_id` INT UNSIGNED NOT NULL,
  `orden_usuarios_id` INT UNSIGNED NOT NULL,
  `productos_id` INT UNSIGNED NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`orden_id`, `orden_usuarios_id`, `productos_id`),
  INDEX `fk_orden_has_productos_productos1_idx` (`productos_id` ASC) VISIBLE,
  INDEX `fk_orden_has_productos_orden1_idx` (`orden_id` ASC, `orden_usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_orden_has_productos_orden1`
    FOREIGN KEY (`orden_id` , `orden_usuarios_id`)
    REFERENCES `joyadelcaribe`.`orden` (`id` , `usuarios_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orden_has_productos_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `joyadelcaribe`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
