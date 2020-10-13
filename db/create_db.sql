CREATE DATABASE IF NOT EXISTS nick_site;
USE nick_site;

DROP TABLE IF EXISTS `now`;
CREATE TABLE `now` (
    `location` varchar(100) DEFAULT NULL,
    `foci` longtext DEFAULT NULL,
    `updated` date DEFAULT NULL
);

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
    `title` varchar(100) DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `date` date DEFAULT NULL,
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
);