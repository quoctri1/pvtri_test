package com.BEAN;

public class BanAn {
	private String ma_B;
	private int socho_B;
	private String ten_Ban;
	
	public BanAn() {
		super();
	}

	public BanAn(String ma_B, int socho_B, String ten_Ban) {
		super();
		this.ma_B = ma_B;
		this.socho_B = socho_B;
		this.ten_Ban = ten_Ban;
	}

	public String getMa_B() {
		return ma_B;
	}

	public void setMa_B(String ma_B) {
		this.ma_B = ma_B;
	}

	public int getSocho_B() {
		return socho_B;
	}

	public void setSocho_B(int socho_B) {
		this.socho_B = socho_B;
	}

	public String getTen_Ban() {
		return ten_Ban;
	}

	public void setTen_Ban(String ten_Ban) {
		this.ten_Ban = ten_Ban;
	}
	
}
