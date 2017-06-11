
USE snap;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'friends'
--
-- ---

DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user1user2` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `from_user` INTEGER NOT NULL,
  `message` VARCHAR(120) NOT NULL DEFAULT '',
  `sent_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `life_span` INTEGER NOT NULL DEFAULT 10,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'requests'
--
-- ---

DROP TABLE IF EXISTS `requests`;

CREATE TABLE `requests` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `sent_by_user` INTEGER NULL,
  `receipient_id` INTEGER NULL,
  `message_id` INTEGER NULL,
  `status` VARCHAR(10) NOT NULL DEFAULT 'pending',
  `expired` VARCHAR(10) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'sent'
--
-- ---

DROP TABLE IF EXISTS `sent`;

CREATE TABLE `sent` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `message_id` INTEGER NOT NULL,
  `receiver_id` INTEGER NOT NULL,
  `status` VARCHAR(10) NOT NULL DEFAULT 'pending',
  `expired` VARCHAR(10) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `friends` ADD FOREIGN KEY (user1user2) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (from_user) REFERENCES `users` (`id`);
ALTER TABLE `requests` ADD FOREIGN KEY (sent_by_user) REFERENCES `users` (`id`);
ALTER TABLE `requests` ADD FOREIGN KEY (receipient_id) REFERENCES `users` (`id`);
ALTER TABLE `requests` ADD FOREIGN KEY (message_id) REFERENCES `messages` (`id`);
ALTER TABLE `sent` ADD FOREIGN KEY (message_id) REFERENCES `messages` (`id`);
ALTER TABLE `sent` ADD FOREIGN KEY (receiver_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `requests` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sent` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`display_name`,`username`,`password`,`email`) VALUES
-- ('','','','','');
-- INSERT INTO `friends` (`id`,`user1:user2`) VALUES
-- ('','');
-- INSERT INTO `messages` (`id`,`from_user`,`message`,`sent_date`,`life_span`) VALUES
-- ('','','','','');
-- INSERT INTO `requests` (`id`,`sent_by_user`,`receipient_id`,`message_id`,`status`,`expired`) VALUES
-- ('','','','','','');
-- INSERT INTO `sent` (`id`,`message_id`,`receiver_id`,`status`,`expired`) VALUES
-- ('','','','','');
