package com.BEAN;

import java.sql.Date;

public class NhanVien {
	private String ma_NV;
	private String ten_NV;
	private String email_NV;
	private String sdt_NV;
	private String diachi_NV;
	private String vitri_NV;
	private Date ngaybatdau_NV;
	
	public NhanVien(String ma_NV, String ten_NV, String email_NV, String sdt_NV, String diachi_NV, String vitri_NV,
			Date ngaybatdau_NV) {
		super();
		this.ma_NV = ma_NV;
		this.ten_NV = ten_NV;
		this.email_NV = email_NV;
		this.sdt_NV = sdt_NV;
		this.diachi_NV = diachi_NV;
		this.vitri_NV = vitri_NV;
		this.ngaybatdau_NV = ngaybatdau_NV;
	}

	public NhanVien() {
		super();
	}


	public String getVitri_NV() {
		return vitri_NV;
	}

	public void setVitri_NV(String vitri_NV) {
		this.vitri_NV = vitri_NV;
	}

	public Date getNgaybatdau_NV() {
		return ngaybatdau_NV;
	}

	public void setNgaybatdau_NV(Date ngaybatdau_NV) {
		this.ngaybatdau_NV = ngaybatdau_NV;
	}

	public String getMa_NV() {
		return ma_NV;
	}

	public void setMa_NV(String ma_NV) {
		this.ma_NV = ma_NV;
	}

	public String getTen_NV() {
		return ten_NV;
	}

	public void setTen_NV(String ten_NV) {
		this.ten_NV = ten_NV;
	}

	public String getEmail_NV() {
		return email_NV;
	}

	public void setEmail_NV(String email_NV) {
		this.email_NV = email_NV;
	}

	public String getSdt_NV() {
		return sdt_NV;
	}

	public void setSdt_NV(String sdt_NV) {
		this.sdt_NV = sdt_NV;
	}

	public String getDiachi_NV() {
		return diachi_NV;
	}

	public void setDiachi_NV(String diachi_NV) {
		this.diachi_NV = diachi_NV;
	}
	
	
	
}
