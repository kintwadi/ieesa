package org.ieesa;



import org.ieesa.service.IessaService;
import org.ieesa.util.Setup;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IeesaApplication {

	public static void main(String[] args) {
		
		IessaService ser = new IessaService();
		//ser.dbSetup();
		
		SpringApplication.run(IeesaApplication.class, args);
	}
	
	

}
