package com.BEAN;

public class MonAn {
	private String ma_Mon;
	private String ten_Mon;
	private float gia_Mon;
	private String mota_Mon;
	
	public MonAn() {
		super();
	}

	public MonAn(String ma_Mon, String ten_Mon, float gia_Mon, String mota_Mon) {
		super();
		this.ma_Mon = ma_Mon;
		this.ten_Mon = ten_Mon;
		this.gia_Mon = gia_Mon;
		this.mota_Mon = mota_Mon;
	}

	public String getMa_Mon() {
		return ma_Mon;
	}

	public void setMa_Mon(String ma_Mon) {
		this.ma_Mon = ma_Mon;
	}

	public String getTen_Mon() {
		return ten_Mon;
	}

	public void setTen_Mon(String ten_Mon) {
		this.ten_Mon = ten_Mon;
	}

	public float getGia_Mon() {
		return gia_Mon;
	}

	public void setGia_Mon(float gia_Mon) {
		this.gia_Mon = gia_Mon;
	}

	public String getMota_Mon() {
		return mota_Mon;
	}

	public void setMota_Mon(String mota_Mon) {
		this.mota_Mon = mota_Mon;
	}
	
}
