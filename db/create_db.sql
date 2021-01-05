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

DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
	`id` MEDIUMINT(9) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(100) NOT NULL,
	`link` VARCHAR(150) DEFAULT NULL,
	`description` LONGTEXT NOT NULL,
	`image` LONGTEXT DEFAULT NULL,
	`stack` LONGTEXT DEFAULT NULL,
	`type` VARCHAR(100),
	PRIMARY KEY (`id`)
);

INSERT INTO `projects` VALUES (1, 'Valley of Shadow', 'https://valleyofshadowgame.com', '["Autobiographical puzzle game, still in development. Cast spells to solve puzzles, explore a dark world, & unravel a true story.", "Co-developing with my brother for Synersteel. I do all the programming, puzzle design, & project management. We have had booths at 2 conventions, with hopefully more in the future. Planned for a 2022 release."]', 'https://i.imgur.com/WsM3dVT.jpg', 'C#, Unity3D (HDRP), Shader Graph, VFX Graph', 'gamedev');
INSERT INTO `projects` VALUES (2, 'Privakey Admin Portal', 'https://cx.privakey.com/portal', '["Front-end portal to manage Transaction Intent Verification software configuration.", "Developing while working at Privakey. I completely ported the front-end from EJS to React and have extended it. It includes 30+ components, Redux, & role-based permissions."]', 'https://s3.amazonaws.com/privakey-prod-wordpress/wp-content/uploads/2016/10/18182515/privakey-logo.png', 'ReactJS, Redux, Axios, Bootstrap', 'software');
INSERT INTO `projects` VALUES (3, 'Privakey AuthWallet', 'https://www.privakey.com/', '["Mobile app (Android, iOS in development) for Transaction Intent Verification. Still in development", "Developing while working at Privakey. Created in React Native and interfaces with Android & iOS native libraries. Includes 10+ pages, dozens of components, notifications, & QR scanning. Tested using StorybookJS."]', 'https://i.imgur.com/vjyqqEE.jpg', 'React Native, Storybook, Android, iOS', 'software');