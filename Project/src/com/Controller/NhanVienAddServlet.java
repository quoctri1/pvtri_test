package com.Controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.BEAN.NhanVien;
import com.DBConnection.ConnectDB;

import DAO.DBDAONhanVien;

/**
 * Servlet implementation class NhanVienAdd
 */
@WebServlet("/NhanVienAddServlet")
public class NhanVienAddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NhanVienAddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Connection conn=ConnectDB.con();
		String ma=request.getParameter("ma");
		String name=request.getParameter("name1");
		String email=request.getParameter("email");
		String sdt=request.getParameter("sdt");
		String diachi=request.getParameter("diachi");
		String vitri=request.getParameter("vitri");
		String ngay=request.getParameter("ngaybatdau");
		
		Date ngaybatdau = Date.valueOf(ngay);
		
		try {
			int i = DBDAONhanVien.ThemNhanVien(conn, ma, name, email, sdt, diachi, vitri, ngaybatdau);
			conn.close();
			if(i!=0){
				RequestDispatcher rs=request.getRequestDispatcher("/NhanVienServlet");
				rs.forward(request, response);
			}else {
				
				RequestDispatcher rs=request.getRequestDispatcher("/NhanVienServlet");
				rs.forward(request, response);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
