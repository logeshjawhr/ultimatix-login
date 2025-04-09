package com.ultimatix;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;


import com.google.gson.*;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    private static final Map<String, String> users = new HashMap<>();

    @Override
    public void init() {

        users.put("john", "1234");
        users.put("alice", "pass");
        users.put("admin", "admin123");
    }

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        resp.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
        resp.setHeader("Access-Control-Allow-Credentials", "true");
        resp.setStatus(HttpServletResponse.SC_OK);
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Allow-Credentials", "true");


        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            return;
        }


        BufferedReader reader = request.getReader();
        Gson gson = new Gson();
        Map<String, String> loginData = gson.fromJson(reader, Map.class);

        String username = loginData.get("username");
        String password = loginData.get("password");


        response.setContentType("application/json");
        PrintWriter out = response.getWriter();


        if (username != null && password != null && password.equals(users.get(username))) {
            out.print("{\"status\": \"success\", \"message\": \"Login successful\"}");
        } else {
            out.print("{\"status\": \"error\", \"message\": \"Invalid username or password\"}");
        }
        out.flush();
    }
}
