package org.ieesa.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Igreja {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String denominacao;
	private String pais;
	private String provincia;

	public Igreja() {
	}



	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDenominacao() {
		return denominacao;
	}


	public void setDenominacao(String denominacao) {
		this.denominacao = denominacao;
	}


	public String getPais() {
		return pais;
	}



	public void setPais(String pais) {
		this.pais = pais;
	}



	public String getProvincia() {
		return provincia;
	}



	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}



	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Igreja [id=");
		builder.append(id);
		builder.append(", denominacao=");
		builder.append(denominacao);
		builder.append(", pais=");
		builder.append(pais);
		builder.append(", provincia=");
		builder.append(provincia);
		builder.append("]");
		return builder.toString();
	}
	
	
	
	
}
