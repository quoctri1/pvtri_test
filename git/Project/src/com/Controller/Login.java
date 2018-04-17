package com.Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.BEAN.NhanVien;
import com.DBConnection.ConnectDB;

import DAO.DBDAOLogin;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
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
	@SuppressWarnings("unused")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Connection conn = ConnectDB.con();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		PrintWriter out =response.getWriter();
		
		
		try {
			NhanVien st = DBDAOLogin.Login(conn, username, password);
			if(st != null){
				HttpSession session=request.getSession(true);
				session.setAttribute("login", st.getTen_NV());
				
				
				if(st.getMa_NV().equals("1")){
					RequestDispatcher rs=request.getRequestDispatcher("/WEB-INF/View/WelcomeManager.jsp");
					rs.forward(request, response);
				}else {
					RequestDispatcher rs=request.getRequestDispatcher("/WEB-INF/View/WelcomeStaff.jsp");
					rs.forward(request, response);
				}
				conn.close();
				
			}else {
				request.setAttribute("login1", "Login Failed");
				RequestDispatcher rs=request.getRequestDispatcher("/WEB-INF/View/Login.jsp");
				rs.forward(request, response);
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
			

		
	}

}
