-- Adminer 4.7.8 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `checkout` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `checkout`;

DROP TABLE IF EXISTS `cartproducts`;
CREATE TABLE `cartproducts` (
  `id` varchar(36) NOT NULL,
  `cartId` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productId` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_495407224d97045987a2809e4b7` (`cartId`),
  KEY `FK_7e56a2dc5629e698408d79f6132` (`productId`),
  CONSTRAINT `FK_495407224d97045987a2809e4b7` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_7e56a2dc5629e698408d79f6132` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `carts` (`id`, `name`) VALUES
('6a7690d7-d229-4121-816e-0a880fcf11ab',	'default cart');

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `promotionId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5e39540b1cb0cac2f77e51fe69f` (`promotionId`),
  CONSTRAINT `FK_5e39540b1cb0cac2f77e51fe69f` FOREIGN KEY (`promotionId`) REFERENCES `promotions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`id`, `name`, `price`, `promotionId`) VALUES
('044d279b-a546-4664-98a2-51e22c92c71c',	'Product C',	2,	NULL),
('0a0b8a70-0b0e-4aae-946d-3b47909bd891',	'Product B',	4,	'790aafed-7c99-4904-8568-d1f9eefe1d3e'),
('397c9e85-7ec5-4582-8672-41dbddd6045d',	'Product A',	20,	'c9490c97-339c-4819-9089-353dfc1af315'),
('94399de5-b0ef-4a22-a10a-48f344b51640',	'Product D',	4,	'790aafed-7c99-4904-8568-d1f9eefe1d3e');

DROP TABLE IF EXISTS `promotions`;
CREATE TABLE `promotions` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `minQuantity` int(11) NOT NULL,
  `promotionType` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `promotions` (`id`, `name`, `minQuantity`, `promotionType`) VALUES
('790aafed-7c99-4904-8568-d1f9eefe1d3e',	'3 for 10',	3,	1),
('c9490c97-339c-4819-9089-353dfc1af315',	'Buy 1 Get 1 Free',	2,	0);

-- 2021-02-05 07:32:59
