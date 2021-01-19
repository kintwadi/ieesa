package org.ieesa.util;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Util {
	
	
	
	public static void setLogger (Object clazz, Object message) {
		
		Logger logger = Logger.getLogger(clazz.getClass().getName());
		logger.log(Level.INFO, message.toString());
		
	}

}
