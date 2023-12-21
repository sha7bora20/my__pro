
package company;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.awt.Container;
import java.awt.FlowLayout;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableColumnModel;



public class CONNECT {
    
    
  public static Statement stmt;
  public static  ResultSet rs;
  public static  DefaultTableModel model;
  public static Connection con;
   // to connect to SQL
 public static void connectD()
    {
        String host="jdbc:sqlserver://localhost:1433;databaseName=hospital;integritySecurity=false";
        String uname ="";
        String password="";
        try {
            con=DriverManager.getConnection(host, uname, password);
            stmt=con.createStatement();
            rs=stmt.executeQuery("select * from doctor");
            JOptionPane.showMessageDialog(null , "Connection");
           
            }
         catch (SQLException ex) {
            JOptionPane.showMessageDialog(null , "Connection Error");
        }
    }
    public static void Close () { // to close the connection of SQL
        try { con.close();
        } 
        catch (SQLException ex) { System.out.println("ERROR Connection"); }
    }

public static boolean executeNonquary (String sqlStatement) { //to update, delete, insert
    try{  
        
        Statement stmt = con.createStatement();
        stmt.execute(sqlStatement);
        return true;
    }
    catch (Exception e)
    {
        System.out.println(e);
      //JOptionPane.showMessageDialog(null,"Cant make your edit");
        return false;
    }
     
}   
}
