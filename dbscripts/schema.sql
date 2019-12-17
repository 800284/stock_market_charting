SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema stock_market_chart
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `stock_market_chart` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `stock_market_chart` ;


-- -----------------------------------------------------
-- Table `stock_market_chart`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_chart`.`user` (
  `us_id` INT NOT NULL AUTO_INCREMENT,
  `us_username` VARCHAR(60) NULL,
  `us_password` VARCHAR(60) NOT NULL,
  `us_email` VARCHAR(50) NOT NULL,
  `us_contact_no` VARCHAR(10) NOT NULL,
  `us_confirmation` BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `stock_market_chart`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_chart`.`role` (
  `ro_id` INT NOT NULL AUTO_INCREMENT,
  `ro_name` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `stock_market_chart`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_chart`.`user_role` (
  `ur_id` INT NOT NULL AUTO_INCREMENT,
  `ur_us_id` INT NULL,
  `ur_ro_id` INT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `ur_us_fk_idx` (`ur_us_id` ASC),
  INDEX `ur_ro_fk_idx` (`ur_ro_id` ASC),
  CONSTRAINT `ur_us_fk`
    FOREIGN KEY (`ur_us_id`)
    REFERENCES `stock_market_chart`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ur_ro_fk`
    FOREIGN KEY (`ur_ro_id`)
    REFERENCES `stock_market_chart`.`role` (`ro_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `stock_market_chart`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_chart`.`company` (
  `cp_id` INT NOT NULL AUTO_INCREMENT,
  `cp_code` BIGINT NOT NULL,
  `cp_name` VARCHAR(30) NOT NULL,
  `cp_turnover` BIGINT NOT NULL,
  `cp_ceo` VARCHAR(30) NOT NULL,
  `cp_board_of_directors` VARCHAR(500) NOT NULL,
  `cp_listed` BOOLEAN DEFAULT FALSE,
  `cp_se_id` INT NOT NULL,
  `cp_brief` VARCHAR(600) NOT NULL,
  PRIMARY KEY (`cp_id`),
  INDEX `cp_se_fk_idx` (`cp_se_id` ASC),
  CONSTRAINT `cp_se_fk`
    FOREIGN KEY (`cp_se_id`)
    REFERENCES `stock_market_chart`.`sector` (`se_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

insert into  `stock_market_chart`.`company`(cp_id,cp_code,cp_name,cp_turnover,cp_ceo,cp_board_of_directors,cp_listed,
cp_se_id,cp_brief) values(1,500112,"SBI",112333,"JOHN","ABNCDFGGGG",TRUE,1,"NICE COMPANY");
-- -----------------------------------------------------
-- Table `stock_market_chart`.`stock_price`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `stock_market_chart`.`stock_price` (
  `sp_id` INT NOT NULL AUTO_INCREMENT,
  `sp_company_code` BIGINT NOT NULL,
  `sp_stock_exchange` VARCHAR(30) NOT NULL,
  `sp_current_price` BIGINT NOT NULL,
  `sp_date` DATE NOT NULL,
  `sp_time` TIME(0) NOT NULL ,
   PRIMARY KEY (`sp_id`) )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `stock_market_chart`.`ipo`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `stock_market_chart`.`ipo` (
  `ipo_id` INT NOT NULL AUTO_INCREMENT,
  `ipo_company_name` VARCHAR(30) NOT NULL,
  `ipo_stock_exchange` VARCHAR(30) NOT NULL,
  `ipo_share_price` BIGINT NOT NULL,
  `ipo_total_shares` INT NOT NULL,
  `ipo_date` DATETIME NOT NULL,
  `ipo_remarks` VARCHAR(400) NULL,
   PRIMARY KEY (`ipo_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `stock_market_chart`.`sector`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `stock_market_chart`.`sector` (
  `se_id` INT NOT NULL AUTO_INCREMENT,
  `se_sector_name` VARCHAR(30) NOT NULL,
  `se_brief` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`se_id`))
ENGINE = InnoDB;

INSERT INTO `stock_market_chart`.`sector`(se_id,se_sector_name,se_brief) values(1,"IT","software and tech");
-- -----------------------------------------------------
-- Table `stock_market_chart`.`company`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `stock_market_chart`.`stock_exchange` (
  `ex_id` INT NOT NULL AUTO_INCREMENT,
  `ex_stock_exchange` VARCHAR(30) NOT NULL,
  `ex_brief` VARCHAR(400) NOT NULL,
  `ex_address` VARCHAR(200) NOT NULL,
  `ex_remarks` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`ex_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `stock_market_chart`.`company_stock` (
	`cs_id` INT NOT NULL AUTO_INCREMENT,
	`cs_cp_id` INT NULL,
	`cs_ex_id` INT NULL,
	PRIMARY KEY (`cs_id`),
	INDEX `cs_cp_fk_idx` (`cs_cp_id` ASC),
	INDEX `cs_ex_fk_idx` (`cs_ex_id` ASC),
	CONSTRAINT `cs_cp_fk`
		FOREIGN KEY (`cs_cp_id`)
		REFERENCES `stock_market_chart`.`company` (`cp_id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	CONSTRAINT `cs_ex_fk`
		FOREIGN KEY (`cs_ex_id`)
		REFERENCES `stock_market_chart`.`stock_exchange` (`ex_id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;

