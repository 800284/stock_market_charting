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


CREATE TABLE IF NOT EXISTS `stock_market_chart`.`confirm_email` (
  `ce_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ce_token` VARCHAR(450) NOT NULL,
  `ce_us_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ce_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `stock_market_chart`.`board_members` (
  `bm_id` INT NOT NULL AUTO_INCREMENT,
  `bm_cp_name` VARCHAR(30) NOT NULL,
  `bm_cp_id` INT NOT NULL,
  PRIMARY KEY (`bm_id`),
  INDEX `bm_cp_fk_idx` (`bm_cp_id` ASC),
   CONSTRAINT `bm_cp_fk`
    FOREIGN KEY (`bm_cp_id`)
    REFERENCES `stock_market`.`company` (`cp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  );

INSERT INTO `stock_market_chart`.`role` (`ro_id`, `ro_name`) VALUES ('1', 'ADMIN');
INSERT INTO `stock_market_chart`.`role` (`ro_id`, `ro_name`) VALUES ('2', 'USER');

INSERT INTO `stock_market_chart`.`user` (`us_id`, `us_username`, `us_password`, `us_email`, `us_contact_no`, `us_confirmation`) VALUES ('1', 'admin', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK', 'a@gmail.com', '7894561230', '1');

INSERT INTO `stock_market_chart`.`user_role` (`ur_id`, `ur_us_id`, `ur_ro_id`) VALUES ('1', '1', '1');

INSERT INTO `stock_market_chart`.`sector` (`se_id`, `se_sector_name`, `se_brief`) VALUES ('1', 'Banking', 'banks sector');
INSERT INTO `stock_market_chart`.`company` (`cp_id`, `cp_code`, `cp_name`, `cp_turnover`, `cp_ceo`, `cp_listed`, `cp_se_id`, `cp_brief`) VALUES ('1', '500112', 'BOI', '54685', 'GURU', '1', '1', 'bank of India');
INSERT INTO `stock_market_chart`.`stock_exchange` (`ex_id`, `ex_stock_exchange`, `ex_brief`, `ex_address`, `ex_remarks`) VALUES ('1', 'BSE', 'british', 'kuruku theru', 'nil');
INSERT INTO `stock_market_chart`.`company_stock` (`cs_id`, `cs_cp_id`, `cs_ex_id`) VALUES ('1', '1', '1');
