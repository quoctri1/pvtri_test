package com.DBConnection;

import java.sql.Connection;
import java.sql.DriverManager;


public class ConnectDB {
	
	final static String DB_URL = "jdbc:mysql://localhost/";
	final static String DBName = "server";
	final static String username = "root";
	final static String password = "root";
	private static Connection conn;
	
	public static Connection con(){
		String connectDB = DB_URL + DBName;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(connectDB, username, password);
			return conn;
			
		}catch (Exception e){
			System.out.println(e);
			return null;
		}
	}
	
	public static void Close(Connection conn){
		try {
			conn.close();
		}catch(Exception e){
		}
	}

}
