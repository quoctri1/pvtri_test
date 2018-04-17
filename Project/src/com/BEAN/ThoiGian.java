package com.BEAN;

import java.sql.Date;
import java.sql.Time;

public class ThoiGian {
	private Time time;
	private Date ngay;
	
	public ThoiGian() {
		super();
	}

	public ThoiGian(Time time, Date ngay) {
		super();
		this.time = time;
		this.ngay = ngay;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	public Date getNgay() {
		return ngay;
	}

	public void setNgay(Date ngay) {
		this.ngay = ngay;
	}
	
	
	
	
}
