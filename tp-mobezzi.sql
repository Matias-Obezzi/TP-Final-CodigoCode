-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-08-2020 a las 02:05:58
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp-mobezzi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `numero_socio` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `dni` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha_nacimiento` varchar(10) NOT NULL,
  `obra_social` varchar(30) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `fecha_pago` varchar(11) DEFAULT NULL,
  `nombre_tutor` varchar(30) DEFAULT NULL,
  `apellido_tutor` varchar(30) DEFAULT NULL,
  `dni_tutor` varchar(11) DEFAULT NULL,
  `mail_tutor` varchar(50) DEFAULT NULL,
  `telefono_tutor` varchar(20) DEFAULT NULL,
  `email_tutor` varchar(50) DEFAULT NULL,
  `certificado_data` longtext DEFAULT NULL,
  `certificado_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`numero_socio`, `nombre`, `apellido`, `dni`, `email`, `fecha_nacimiento`, `obra_social`, `id_curso`, `fecha_pago`, `nombre_tutor`, `apellido_tutor`, `dni_tutor`, `mail_tutor`, `telefono_tutor`, `email_tutor`, `certificado_data`, `certificado_name`) VALUES
INSERT INTO `alumnos` (`numero_socio`, `nombre`, `apellido`, `dni`, `email`, `fecha_nacimiento`, `obra_social`, `id_curso`, `fecha_pago`, `nombre_tutor`, `apellido_tutor`, `dni_tutor`, `mail_tutor`, `telefono_tutor`, `email_tutor`, `certificado_data`, `certificado_name`) VALUES

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `curso_clase_alumno` varchar(255) NOT NULL,
  `clase` varchar(10) NOT NULL COMMENT 'FECHA o NUMERO de clase',
  `id_curso` int(11) NOT NULL,
  `numero_socio` int(11) NOT NULL,
  `presente` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asistencia`
--

INSERT INTO `asistencia` (`curso_clase_alumno`, `clase`, `id_curso`, `numero_socio`, `presente`) VALUES
('6-0-10', '0', 6, 10, 0),
('6-0-14', '0', 6, 14, 0),
('6-1-10', '1', 6, 10, 1),
('6-1-14', '1', 6, 14, 0),
('6-2-10', '2', 6, 10, 0),
('6-2-14', '2', 6, 14, 0),
('6-3-10', '3', 6, 10, 1),
('6-3-14', '3', 6, 14, 0),
('6-5-10', '5', 6, 10, 0),
('6-5-14', '5', 6, 14, 1),
('6-6-10', '6', 6, 10, 0),
('6-6-14', '6', 6, 14, 0),
('6-7-10', '7', 6, 10, 1),
('6-7-14', '7', 6, 14, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `curso` int(11) NOT NULL,
  `nivel` varchar(30) NOT NULL,
  `categoria` varchar(30) DEFAULT NULL,
  `edades` varchar(30) NOT NULL,
  `dias` varchar(50) NOT NULL,
  `valor` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`curso`, `nivel`, `categoria`, `edades`, `dias`, `valor`) VALUES
(6, 'Escuelita', 'Pulgas', '3 y 4', 'Miércoles - Viernes', '1000'),
(15, 'Escuelita', 'Premini', '5 y 6', 'Miercoles y Viernes', '1000'),
(17, 'Escuelita', 'Mini', '7 y 8', 'Martes y Viernes', '1000'),
(18, 'Escuelita', 'Preinfantil', '9 y 10', 'Lunes y Miercoles', '1000'),
(19, 'Escuelita', 'Infantil', '11 y 12', 'Lunes y Miercoles', '1000'),
(20, 'Escuelita', 'Juveniles', '13 en adelante', 'Lunes y Miercoles', '1000'),
(21, 'Escuela', 'Avanzada', 'Cualquiera', 'Lunes, Miercoles y Viernes', '1500'),
(22, 'Pre equipo', '-', 'Cualquiera', 'Lunes, Miercoles y Viernes', '2000'),
(23, 'Equipo', '-', 'Cualquiera', 'Lunes, Martes, Miercoles y Viernes', '2000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(24);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`numero_socio`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`curso_clase_alumno`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`curso`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `numero_socio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;