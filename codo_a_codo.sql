-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-02-2022 a las 00:23:24
-- Versión del servidor: 5.7.33
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codo_a_codo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Producto Nro 1', NULL),
(2, 'Producto Nro 2', NULL),
(3, 'Producto desde la DB', 'Nunc pretium maximus velit sed mollis. Donec eget tincidunt nisi. Phasellus at ipsum tristique enim egestas faucibus. Duis feugiat porta enim, in pretium odio suscipit sit amet. Ut volutpat sed leo convallis volutpat. Pellentesque vitae ipsum vel arcu tristique tempor. Vestibulum id finibus orci. Donec vel posuere leo. Nulla dolor felis, imperdiet vitae aliquet eu, rhoncus id nisi. In non diam non elit varius dapibus. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc bibendum nibh leo. Duis rhoncus porttitor leo quis ultricies.\n\nCras in feugiat libero. Curabitur id tortor a justo iaculis auctor. Suspendisse in diam nulla. Suspendisse in luctus magna. Pellentesque enim justo, gravida at leo at, accumsan bibendum tortor. Morbi consectetur porttitor tellus, ut pharetra risus facilisis ut. Donec malesuada elit eu mauris sagittis ornare. Ut sit amet malesuada urna, quis maximus nulla. Nullam in ligula nisl.'),
(4, 'Producto Nro 4', '            \r\n        '),
(5, 'Producto Nro 5', '              Quisque quis bibendum magna, vitae semper orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus arcu, vestibulum a tincidunt tempus, rutrum vitae ligula. Donec massa sapien, finibus eget magna eget, mollis consequat leo. Fusce convallis magna sapien, at sagittis odio tincidunt quis. Ut erat urna, vestibulum imperdiet elit ut, ultrices efficitur lacus. Etiam porttitor diam in nisl dapibus, et ultrices augue sodales.        \r\n        \r\n        ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
