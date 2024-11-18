

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sid` bigint NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `dni` bigint NOT NULL,
  `email` varchar(100) NOT NULL,
  `deleted` tinyint DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `sid`, `firstname`, `lastname`, `dni`, `email`, `deleted`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Lionel', 'Messi', 44580815, 'lionelmessi10@gmail.com', 0, '2024-11-18 18:02:52', NULL),
(2, 2, 'Aquiles', 'Bailo', 44776523, 'aquilesbailochacarera@gmail.com', 0, '2024-11-18 18:03:48', NULL),
(3, 3, 'Nicolas', 'Cabaleiro', 44580825, 'nicocabaleiro2002@gmail.com', 0, '2024-11-18 18:04:59', NULL),
(4, 4, 'Ivan', 'ochoa', 42765877, 'ivan8a@gmail.com', 0, '2024-11-18 18:05:31', NULL),
(5, 5, 'Armando Esteban', 'Quito', 41765547, 'armandoestabquito1@gmail.com', 0, '2024-11-18 18:07:22', NULL),
(6, 6, 'Dina', 'Marca', 40654433, 'dinamarca1997@gmail.com', 0, '2024-11-18 18:08:25', NULL),
(7, 7, 'Elba', 'Calao', 43766900, 'calaoelba04@gmail.com', 0, '2024-11-18 18:09:03', NULL),
(8, 8, 'Alan Brito', 'Delgado', 44336755, 'alabrito2003@gmail.com', 0, '2024-11-18 18:09:50', NULL),
(9, 9, 'Franco', 'Colapinto', 45997665, 'francolapintof1@gmail.com', 0, '2024-11-18 18:10:39', NULL),
(10, 10, 'Max', 'Vestappen', 56666348, 'maxverstappenfiiuum@gmail.com', 0, '2024-11-18 18:11:24', NULL),
(11, 11, 'Cristiano', 'Rolando', 26654987, 'cr7elbicho@gmail.com', 0, '2024-11-18 18:12:03', NULL),
(12, 12, 'Dibu', 'Martinez', 38564766, 'dibumartineztecomo@gmail.com', 0, '2024-11-18 18:12:35', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `deleted` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `deleted`, `createdAt`, `updatedAt`) VALUES
(1, 'nico', '$2b$10$Om9tBH5vqTDtl4bJ3Aa5jO8KJIYBSHpAQza1gqSA3AJFPGApgB6iS', 0, '2024-11-18 18:02:11', NULL),
(2, 'admin', '$2b$10$YGEeKuh9BXr8SUQ6IIV89O.k.2/DfkCRkoU8Mf4zYtLIMSHWzFwxW', 0, '2024-11-18 18:13:16', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
