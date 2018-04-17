package com.BEAN;

public class KhachHang {
	private String ma_KH;
	private String ten_KH;
	private String email_KH;
	private String sdt_KH;
	private String diachi_KH;
	
	public KhachHang() {
		super();
	}

	public KhachHang(String ma_KH, String ten_KH, String email_KH, String sdt_KH, String diachi_KH) {
		super();
		this.ma_KH = ma_KH;
		this.ten_KH = ten_KH;
		this.email_KH = email_KH;
		this.sdt_KH = sdt_KH;
		this.diachi_KH = diachi_KH;
	}

	public String getMa_KH() {
		return ma_KH;
	}

	public void setMa_KH(String ma_KH) {
		this.ma_KH = ma_KH;
	}

	public String getTen_KH() {
		return ten_KH;
	}

	public void setTen_KH(String ten_KH) {
		this.ten_KH = ten_KH;
	}

	public String getEmail_KH() {
		return email_KH;
	}

	public void setEmail_KH(String email_KH) {
		this.email_KH = email_KH;
	}

	public String getSdt_KH() {
		return sdt_KH;
	}

	public void setSdt_KH(String sdt_KH) {
		this.sdt_KH = sdt_KH;
	}

	public String getDiachi_KH() {
		return diachi_KH;
	}

	public void setDiachi_KH(String diachi_KH) {
		this.diachi_KH = diachi_KH;
	}
	
}
