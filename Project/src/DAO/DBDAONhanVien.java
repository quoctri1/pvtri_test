package DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.BEAN.NhanVien;

public class DBDAONhanVien {
	public static List DSNhanVien (Connection conn) throws SQLException{
		String mysql="SELECT * FROM nhanvien;";
		List <NhanVien> listnv=new ArrayList<NhanVien>();
		PreparedStatement pst = conn.prepareStatement(mysql);
		ResultSet rs = pst.executeQuery();
		
		while(rs.next()){
			NhanVien nv=new NhanVien();
			nv.setMa_NV(rs.getString("Ma_NhanVien"));
			nv.setTen_NV(rs.getString("Ten_NhanVien"));
			nv.setEmail_NV(rs.getString("Email_NhanVien"));
			nv.setSdt_NV(rs.getString("SDT_NhanVien"));
			nv.setDiachi_NV(rs.getString("DiaChi_NhanVien"));
			nv.setNgaybatdau_NV(rs.getDate("NgayBatDau_NhanVien"));
			nv.setVitri_NV(rs.getString("ViTri"));
			listnv.add(nv);
		}
		return listnv;		
	}
	
	public static int ThemNhanVien (Connection conn, String ma, String ten, String email, String sdt, String diachi, String vitri, Date ngay) throws SQLException{
		String mysql="INSERT INTO nhanvien VALUES (?,?,?,?,?,?,?);";
		String mysql1="SELECT * FROM nhanvien;";
		PreparedStatement pst1=conn.prepareStatement(mysql1);
		ResultSet rs = pst1.executeQuery();
		while(rs.next()){
			if(ma.equals(rs.getString("Ma_NhanVien")))
			{
				return 0;
			}
		}
		PreparedStatement pst=conn.prepareStatement(mysql);
		pst.setString(1, ma);
		pst.setString(2, ten);
		pst.setString(3, email);
		pst.setString(4, sdt);
		pst.setString(5, diachi);
		pst.setDate(6, ngay);
		pst.setString(7, vitri);
		int i=pst.executeUpdate();
		return i;
	}
	
	public static void DeleteNhanVien (Connection conn, String ma) throws SQLException{
		String mysql = "DELETE FROM login WHERE Ma_NhanVien=?";
		PreparedStatement pst=conn.prepareStatement(mysql);
		pst.setString(1, ma);
		pst.execute();
		
		String mysql1 = "DELETE FROM nhanvien WHERE Ma_NhanVien=?";
		PreparedStatement pst1=conn.prepareStatement(mysql1);
		pst1.setString(1, ma);
		pst1.execute();
		System.out.println("toi day"+ma);
	}
	
	
	public static NhanVien Get_NhanVien (Connection conn, String ma) throws SQLException{
		String mysql = "SELECT * FROM nhanvien WHERE Ma_NhanVien = ?;";
		
		PreparedStatement pst=conn.prepareStatement(mysql);
		pst.setString(1,ma);
		ResultSet rs = pst.executeQuery();
		
		NhanVien nv= new NhanVien();
		
		while(rs.next()){
			nv.setMa_NV(rs.getString("Ma_NhanVien"));
			nv.setTen_NV(rs.getString("Ten_NhanVien"));
			nv.setEmail_NV(rs.getString("Email_NhanVien"));
			nv.setSdt_NV(rs.getString("SDT_NhanVien"));
			nv.setDiachi_NV(rs.getString("DiaChi_NhanVien"));
			nv.setNgaybatdau_NV(rs.getDate("NgayBatDau_NhanVien"));
			nv.setVitri_NV(rs.getString("ViTri"));
		}
		return nv;
	}
	
	public static boolean SuaNhanVien(Connection conn, String ma, String ten, String email, String sdt, String diachi, String vitri, String ngay) throws SQLException{
		String mysql = "UPDATE nhanvien SET Ten_NhanVien=?, Email_NhanVien=?, SDT_NhanVien=?, DiaChi_NhanVien=?, NgayBatDau_NhanVien=?, ViTri=? WHERE Ma_NhanVien=?;";
		
		PreparedStatement pst=conn.prepareStatement(mysql);
		pst.setString(1,ten);
		pst.setString(2,email);
		pst.setString(3,sdt);
		pst.setString(4,diachi);
		pst.setString(5,ngay);
		pst.setString(6,vitri);
		pst.setString(7,ma);
		boolean i = pst.execute();
		return i;
	}
	
}
