package com.BEAN;

public class NguoiDung {
	private String username;
	private String password;
	private boolean position;
	
	public NguoiDung() {
		super();
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean isPosition() {
		return position;
	}
	
	public void setPosition(boolean position) {
		this.position = position;
	}
	
	public NguoiDung(String username, String password, boolean position) {
		super();
		this.username = username;
		this.password = password;
		this.position = position;
	}
	
	
	
}
