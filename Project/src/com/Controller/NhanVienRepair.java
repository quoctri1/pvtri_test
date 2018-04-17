package com.Controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.BEAN.NhanVien;
import com.DBConnection.ConnectDB;

import DAO.DBDAONhanVien;
import oracle.jdbc.driver.DBConversion;

/**
 * Servlet implementation class NhanVienRepair
 */
@WebServlet("/NhanVienRepair")
public class NhanVienRepair extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NhanVienRepair() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ma=request.getParameter("ma");
		String name=request.getParameter("ten");
		String vitri=request.getParameter("vitri");
		String sdt=request.getParameter("sdt");
		String email=request.getParameter("email");
		String diachi=request.getParameter("diachi");
		String ngay=request.getParameter("ngay");
		
		System.out.println(ma);
		Connection conn=ConnectDB.con();
		
		try {
			boolean ch=DBDAONhanVien.SuaNhanVien(conn, ma, name, email, sdt, diachi, vitri, ngay);
			System.out.println(ch);
			conn.close();
			
				RequestDispatcher rs=request.getRequestDispatcher("/NhanVienServlet");
				rs.forward(request, response);
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ma=request.getParameter("ma");
		
		Connection conn=ConnectDB.con();
		NhanVien nv=new NhanVien();
		
		try {
			nv=DBDAONhanVien.Get_NhanVien(conn, ma);
			request.setAttribute("nhanvien", nv);
			
			conn.close();
			
			RequestDispatcher rs=request.getRequestDispatcher("/WEB-INF/View/SuaNhanVien.jsp");
			rs.forward(request, response);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
