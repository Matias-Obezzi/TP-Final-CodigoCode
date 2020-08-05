package edu.mobezzi.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cursos")
public class CursoDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int curso;

	@Column(name = "dias")
	private String dias;
	
	@Column(name = "nivel")
	private String nivel;
	
	@Column(name = "categoria")
	private String categoria;

	@Column(name = "edades")
	private String edades;
	
	@Column(name = "valor")
	private int valor;

	public boolean valido() {
		return this.curso>=0 &&
				this.dias != null &&
				this.nivel != null &&
				this.categoria != null &&
				this.edades != null &&
				this.valor >= 0;
	}
	
	public int getCurso() {
		return curso;
	}

	public String getDias() {
		return dias;
	}

	public void setDias(String dias) {
		this.dias = dias;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getEdades() {
		return edades;
	}

	public void setEdades(String edades) {
		this.edades = edades;
	}

	public int getValor() {
		return valor;
	}

	public void setValor(int valor) {
		this.valor = valor;
	}
	
}
