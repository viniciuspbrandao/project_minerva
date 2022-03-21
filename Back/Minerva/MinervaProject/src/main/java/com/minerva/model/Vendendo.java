package com.minerva.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "vendendo")
public class Vendendo {
	
	@Id
	private String id;
	
	private String nomeCompleto;
	
	private String estado;
	
	private int telefone;
	
	private String email;
	
	private String vendendo;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public int getTelefone() {
		return telefone;
	}

	public void setTelefone(int telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getVendendo() {
		return vendendo;
	}

	public void setVendendo(String vendendo) {
		this.vendendo = vendendo;
	}
	
	

}
