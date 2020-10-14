CREATE DATABASE IF NOT EXISTS nick_site;
USE nick_site;

DROP TABLE IF EXISTS `now`;
CREATE TABLE `now` (
    `location` VARCHAR(100) DEFAULT NULL,
    `foci` LONGTEXT DEFAULT NULL,
    `updated` DATE DEFAULT NULL
);

INSERT INTO `now` 
	VALUES (
	'New England', 
	'[{"text":"Privakey software development","link":"https://privakey.com"},{"text":"Valley of Shadow development","link":"https://valleyofshadowgame.com"},{"text":"Playing A Monsters Expedition","link":"https://store.steampowered.com/app/1052990/A_Monsters_Expedition/"}]', 
	CURRENT_TIMESTAMP);

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
    `id` MEDIUMINT(9) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `excerpt` LONGTEXT NOT NULL,
    `excerpt_image` LONGTEXT DEFAULT NULL,
    `image_alt` LONGTEXT DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `posts` VALUES (1, 'Sample Post', '# This is a sample post!', 'And this is the excerpt', 'https://i.imgur.com/JDMpAi1.jpg', 'Image for sample post', CURRENT_TIMESTAMP-100000000);
INSERT INTO `posts` VALUES (2, 'Second Post', '# This is a second post', 'Here is an excerpt', NULL, NULL, CURRENT_TIMESTAMP);