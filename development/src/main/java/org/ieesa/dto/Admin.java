package org.ieesa.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@Column(unique=true)
	private String email;
	@Column(unique=true)
	private String pin;
	
	
	public Admin() {
		
	}
	
	

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	

	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getPin() {
		return pin;
	}



	public void setPin(String pin) {
		this.pin = pin;
	}



	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Admin [id=");
		builder.append(id);
		builder.append(", email=");
		builder.append(email);
		builder.append(", pin=");
		builder.append(pin);
		builder.append("]");
		return builder.toString();
	}



	
	
	
}
