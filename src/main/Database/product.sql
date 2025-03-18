-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: uni_library
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Biecka 5','Rzeszow','Podkarpackie');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `attachment`
--

LOCK TABLES `attachment` WRITE;
/*!40000 ALTER TABLE `attachment` DISABLE KEYS */;
INSERT INTO `attachment` VALUES ('3738ae11-0684-4c6e-b24c-ec842a4648be','','','application/octet-stream');

/*!40000 ALTER TABLE `attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customer_user`
--

LOCK TABLES `customer_user` WRITE;
/*!40000 ALTER TABLE `customer_user` DISABLE KEYS */;
INSERT INTO `customer_user` VALUES ('admin','$2a$10$BrtBazXL7xhUuCbeKD4XVOwnuIzACq4jRS6OzRgIH76vSAyb92M2a');
/*!40000 ALTER TABLE `customer_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Crime and punishment','Raskolnikov, an impoverished student, commits a murder he believes justified, then descends into a psychological torment that forces him to confront his guilt and seek redemption.',24,'a7068fb6-735b-4ebb-92a7-acfed2c29e1d'),(2,'48 Laws of Power','The 48 Laws of Power outlines a ruthless and amoral guide to acquiring and maintaining power through strategic manipulation and calculated actions.',49.99,'faa13f47-a66e-4299-8823-4a9e4d80d8fd'),(3,'Data Structures and Algorithms in Java','Data Structures and Algorithms in Java\" is a comprehensive guide to implementing and understanding fundamental data structures and algorithmic techniques using the Java programming language.',75,NULL),(4,'The short story of tommorow','The Short Story of Tomorrow - explores potential near-future scenarios through concise narratives, examining the impact of emerging technologies and societal shifts on human experience',50.99,NULL),(6,'To Kill a Mockingbird','A novel about racial injustice in the Deep South.',15.99,NULL),(7,'1984','A dystopian novel about totalitarianism and surveillance.',14.99,NULL),(8,'Pride and Prejudice','A classic romance novel set in Regency England.',12.99,NULL),(9,'The Great Gatsby','A tragic story of wealth and love in the 1920s.',13.99,NULL),(10,'Moby Dick','A tale of obsession and revenge on the high seas.',17.99,NULL),(11,'War and Peace','A historical novel set during the Napoleonic Wars.',19.99,NULL),(12,'The Catcher in the Rye','A story about teenage alienation and angst.',11.99,NULL),(13,'Brave New World','A dystopian novel exploring a futuristic society.',14.49,NULL),(14,'Wuthering Heights','A gothic novel of love and revenge.',13.49,NULL),(15,'Jane Eyre','A story of love, morality, and resilience.',12.49,NULL),(16,'Frankenstein','A gothic tale of science and monstrosity.',11.99,NULL),(17,'The Odyssey','An epic poem about the journey of Odysseus.',14.99,NULL),(18,'The Iliad','A classic epic about the Trojan War.',14.99,NULL),(19,'Dracula','A gothic horror novel about the legendary vampire.',12.99,NULL),(20,'The Hobbit','A fantasy adventure about Bilbo Baggins.',14.99,NULL),(21,'Lord of the Rings','An epic fantasy trilogy about the One Ring.',22.99,NULL),(22,'A Tale of Two Cities','A historical novel set during the French Revolution.',10.99,NULL),(23,'The Scarlet Letter','A novel about sin and redemption in Puritan America.',11.49,NULL),(24,'Anna Karenina','A tragic love story set in Imperial Russia.',18.99,NULL),(25,'Les Misérables','A novel about justice and redemption in 19th-century France.',16.99,NULL),(26,'Don Quixote','A satirical novel about a delusional knight.',14.49,NULL),(27,'Fahrenheit 451','A dystopian novel about book burning and censorship.',13.99,NULL),(28,'The Picture of Dorian Gray','A novel about vanity and moral corruption.',12.49,NULL),(29,'The Brothers Karamazov','A philosophical novel about faith and doubt.',18.49,NULL),(30,'Alice in Wonderland','A whimsical tale of a girl’s journey through Wonderland.',10.99,NULL),(31,'The Count of Monte Cristo','A tale of revenge and justice.',17.99,NULL),(32,'The Grapes of Wrath','A novel about the struggles of migrant workers.',14.99,NULL),(33,'One Hundred Years of Solitude','A magical realism novel about the Buendía family.',16.99,NULL),(34,'The Alchemist','A philosophical novel about following one’s dreams.',11.99,NULL),(35,'The Old Man and the Sea','A story of endurance and struggle at sea.',10.49,NULL),(36,'The Sun Also Rises','A novel about the Lost Generation in postwar Europe.',12.99,NULL),(37,'Of Mice and Men','A tragic tale of friendship and dreams.',9.99,NULL),(38,'Catch-22','A satirical novel about war and bureaucracy.',13.99,NULL),(39,'Slaughterhouse-Five','A novel blending time travel and war trauma.',12.99,NULL),(40,'Beloved','A powerful novel about the legacy of slavery.',14.99,NULL),(41,'The Handmaid’s Tale','A dystopian novel about oppression and resistance.',15.49,NULL),(42,'Invisible Man','A novel about race and identity in America.',13.99,NULL),(43,'The Road','A post-apocalyptic story of survival.',14.99,NULL),(44,'The Stranger','An existential novel about absurdity and detachment.',11.99,NULL),(45,'Gone with the Wind','A historical novel set during the Civil War.',16.99,NULL),(46,'The Wind in the Willows','A charming tale of woodland creatures.',10.99,NULL),(47,'The Little Prince','A philosophical children’s book with deep themes.',9.99,NULL),(48,'Dune','A sci-fi epic about politics and ecology.',18.99,NULL),(49,'Foundation','A sci-fi novel about the fall and rise of civilizations.',14.99,NULL),(50,'The Hitchhiker’s Guide to the Galaxy','A humorous sci-fi adventure.',12.49,NULL),(51,'A Clockwork Orange','A dystopian novel about free will and violence.',13.49,NULL),(52,'The Shining','A horror novel about a haunted hotel.',15.99,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Atai','Ibragimov',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'uni_library'
--

--
-- Dumping routines for database 'uni_library'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-18 23:10:01
