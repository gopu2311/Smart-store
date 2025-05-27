-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 15, 2023 at 07:05 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `billing`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
CREATE TABLE IF NOT EXISTS `bill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductName` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductDescription` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductPrice` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductQuintity` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `Total` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `BillDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CustomerId` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payment_status` varchar(500) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Pending',
  `razorpay_payment_id` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `CustomerName`, `ProductName`, `ProductDescription`, `ProductPrice`, `ProductQuintity`, `Total`, `BillDate`, `CustomerId`, `payment_status`, `razorpay_payment_id`) VALUES
(30, 'Customer', 'Cleaning', 'House Cleaning ', '80', '20', '1600', '2023-04-08 13:11:50', '17', 'Success', 'pay_LbDdtkEwRmGGHG'),
(31, 'Customer', 'FOOD', 'Food', '160', '36', '5760', '2023-04-08 13:12:00', '17', 'Pending', NULL),
(32, 'Customer 2 ', 'Care', 'Care', '120', '10', '1200', '2023-04-08 13:12:11', '18', 'Success', 'pay_LbDewrkve3XyGu'),
(33, 'Customer', 'Care', 'Care', '120', '30', '3600', '2023-04-08 13:12:22', '17', 'Success', 'pay_LbDct3XA6LxZIx'),
(34, 'Customer 2 ', 'FOOD', 'Food', '210', '50', '10500', '2023-04-08 13:12:36', '18', 'Pending', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

DROP TABLE IF EXISTS `contactus`;
CREATE TABLE IF NOT EXISTS `contactus` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerNumber` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerMessage` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerEmail` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerPassword` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerAddress` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerNumber` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `admin` varchar(50) COLLATE utf8mb4_general_ci DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `CustomerName`, `CustomerEmail`, `CustomerPassword`, `CustomerAddress`, `CustomerNumber`, `admin`, `created_at`) VALUES
(16, 'Admin', 'admin@admin.com', '123456', '', '', '1', '2023-04-08 12:34:26'),
(17, 'Customer', 'customer@gmail.com', '123456', 'AMBD', '9874563210', '0', '2023-04-08 12:35:48'),
(18, 'Customer 2 ', 'customer2@gmail.com', '123456', 'Rajkot', '7458960123', '0', '2023-04-08 13:11:12');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductDescription` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductPrice` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductQuintity` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductImage` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductCategory` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `ProductName`, `ProductDescription`, `ProductPrice`, `ProductQuintity`, `ProductImage`, `ProductCategory`, `created_at`) VALUES
(25, 'Cleaning', 'House Cleaning ', '80', '100', 'user_profiles/clining1.jpg', 'CLEANING & HOUSEHOLD', '2023-04-08 12:53:48'),
(26, 'Cleaning', 'House Cleaning ', '220', '100', 'user_profiles/clining2.jpg', 'CLEANING & HOUSEHOLD', '2023-04-08 12:54:19'),
(27, 'Cleaning', 'House Cleaning ', '80', '80', 'user_profiles/clining3.jpg', 'CLEANING & HOUSEHOLD', '2023-04-08 12:54:42'),
(28, 'Cleaning', 'House Cleaning ', '50', '100', 'user_profiles/clining5.jpg', 'CLEANING & HOUSEHOLD', '2023-04-08 12:55:03'),
(29, 'Cleaning', 'House Cleaning ', '250', '100', 'user_profiles/clining4.jpg', 'CLEANING & HOUSEHOLD', '2023-04-08 12:55:24'),
(30, 'FOOD', 'Food', '370', '100', 'user_profiles/weat.jpg', 'FOOD', '2023-04-08 12:59:31'),
(31, 'FOOD', 'Food', '210', '50', 'user_profiles/food.jpg', 'FOOD', '2023-04-08 13:00:08'),
(32, 'FOOD', 'Food', '160', '64', 'user_profiles/food2.jpg', 'FOOD', '2023-04-08 13:00:41'),
(34, 'FOOD', 'Food', '320', '100', 'user_profiles/food3.jpg', 'FOOD', '2023-04-08 13:02:00'),
(35, 'FOOD', 'Food', '220', '100', 'user_profiles/food4.jpg', 'FOOD', '2023-04-08 13:02:45'),
(36, 'Care', 'care', '280', '100', 'user_profiles/care.jpg', 'PERSONAL CARE', '2023-04-08 13:05:21'),
(37, 'Care', 'Care', '120', '60', 'user_profiles/bar-soap.jpg', 'PERSONAL CARE', '2023-04-08 13:06:37'),
(38, 'Care', 'Care', '240', '100', 'user_profiles/NourishingHairoil2.jpg', 'PERSONAL CARE', '2023-04-08 13:07:55'),
(39, 'Care', 'Care', '190', '100', 'user_profiles/care.jpeg', 'PERSONAL CARE', '2023-04-08 13:09:07'),
(40, 'Care', 'Care', '100', '100', 'user_profiles/care2.jpg', 'PERSONAL CARE', '2023-04-08 13:10:31');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
