package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.BEAN.NhanVien;


public class DBDAOLogin {
	
	public static NhanVien Login(Connection conn, String username, String password) throws SQLException{
		String sql = "SELECT * FROM login INNER JOIN nhanvien ON login.nhanvien_Ma_NhanVien = nhanvien.Ma_NhanVien;";
		String DBUsername;
		String DBPass;
		PreparedStatement pst = conn.prepareStatement(sql);
		ResultSet rs = pst.executeQuery();
		
		System.out.println(username + password);
		while(rs.next()){
			DBUsername = rs.getString("username");
			DBPass = rs.getString("password");
			System.out.println(DBUsername + DBPass);
			if(username.equals(DBUsername) && password.equals(DBPass)){
				NhanVien st=new NhanVien();
				st.setMa_NV(rs.getString("Ma_NhanVien"));
				st.setTen_NV(rs.getString("Ten_NhanVien"));
				st.setEmail_NV(rs.getString("Email_NhanVien"));
				st.setSdt_NV(rs.getString("SDT_NhanVien"));
				st.setDiachi_NV(rs.getString("DiaChi_NhanVien"));
				st.setVitri_NV(rs.getString("ViTri"));
				st.setNgaybatdau_NV(rs.getDate("NgayBatDau_NhanVien"));
				return st;
			}
		}
		return null;
	}
}
