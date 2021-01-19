package org.ieesa.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

public class Setup {

	private static String DB_INSTALLER = "postgresql-13.1-1-windows-x64.exe";
	private static String DB_RESOURCE = "setup.properties";
	private static String DB_KEY = "ieesa.db.setup";

	public boolean resourceWrite() {

		FileOutputStream fileOut = null;
		FileInputStream fileIn = null;
		File file = new File(getClass().getClassLoader().getResource(DB_RESOURCE).getFile());

		try {

			Properties prop = new Properties();
			fileIn = new FileInputStream(file.getAbsolutePath());
			prop.load(fileIn);
			String value = (String) prop.get(DB_KEY);
			if (value != null && value.equals("0")) {
				prop.setProperty(DB_KEY, "1");
				fileOut = new FileOutputStream(file.getAbsoluteFile());
				prop.store(fileOut, "");
				fileOut.close();
				return true;
			}
			System.out.println("pro: " + prop.toString());

		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;

	}

	public void dbInstall() {

		
		try {

			File file = new File(getClass().getClassLoader().getResource(DB_INSTALLER).getFile());
			Runtime runTime = Runtime.getRuntime();

			Process process = runTime.exec("cmd /c start " + file.getAbsolutePath());

		} catch (IOException e) {

			e.printStackTrace();
		}


	}

	public void postgresDBCreate() {
		Connection conn = null;
		try {
			conn = DriverManager.getConnection("jdbc:postgresql://localhost/public", "postgres", "user12345");

			String query = "CREATE SCHEMA IF NOT EXISTS db_ieesa";
			PreparedStatement ps = conn.prepareStatement(query);
			ps.executeUpdate();

		} catch (SQLException e) {

			System.out.println("db error creation" + e.getMessage());
		}

	}

	public void myqlDBCreate() {

		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager
					.getConnection("jdbc:mysql://localhost:3306/sys?user=user_ieesa&password=pw_ieesa");
			String query = "CREATE SCHEMA IF NOT EXISTS db_ieesa";
			PreparedStatement ps = conn.prepareStatement(query);
			ps.executeUpdate();

		} catch (Exception ex) {

			System.out.println("db error creation");
		}
	}

}
