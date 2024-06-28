-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema JoyaDelCaribe
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema JoyaDelCaribe
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `JoyaDelCaribe` DEFAULT CHARACTER SET utf8 ;
USE `JoyaDelCaribe` ;

-- -----------------------------------------------------
-- Table `JoyaDelCaribe`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JoyaDelCaribe`.`administrador` (
  `idadministrador` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`idadministrador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `JoyaDelCaribe`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JoyaDelCaribe`.`usuarios` (
  `idusuarios` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `password` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `JoyaDelCaribe`.`ordenCompras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JoyaDelCaribe`.`ordenCompras` (
  `idordenCompras` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `usuarios_idusuarios` INT UNSIGNED NOT NULL,
  `fecha` DATE NULL,
  `cantidad` INT NULL,
  `precio` DOUBLE NULL,
  PRIMARY KEY (`idordenCompras`, `usuarios_idusuarios`),
  INDEX `fk_ordenCompras_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_ordenCompras_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `JoyaDelCaribe`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `JoyaDelCaribe`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `JoyaDelCaribe`.`productos` (
  `idproductos` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `product` VARCHAR(250) NOT NULL,
  `price` DOUBLE NOT NULL,
  `img` VARCHAR(250) NOT NULL,
  `category` VARCHAR(250) NOT NULL,
  `description` VARCHAR(250) NULL,
  `discount` INT NULL,
  `administrador_idadministrador` INT UNSIGNED NOT NULL,
  `ordenCompras_idordenCompras` INT UNSIGNED NOT NULL,
  `ordenCompras_usuarios_idusuarios` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idproductos`, `administrador_idadministrador`, `ordenCompras_idordenCompras`, `ordenCompras_usuarios_idusuarios`),
  INDEX `fk_productos_administrador1_idx` (`administrador_idadministrador` ASC) VISIBLE,
  INDEX `fk_productos_ordenCompras1_idx` (`ordenCompras_idordenCompras` ASC, `ordenCompras_usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_productos_administrador1`
    FOREIGN KEY (`administrador_idadministrador`)
    REFERENCES `JoyaDelCaribe`.`administrador` (`idadministrador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_ordenCompras1`
    FOREIGN KEY (`ordenCompras_idordenCompras` , `ordenCompras_usuarios_idusuarios`)
    REFERENCES `JoyaDelCaribe`.`ordenCompras` (`idordenCompras` , `usuarios_idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
