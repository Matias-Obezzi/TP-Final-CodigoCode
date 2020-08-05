package edu.mobezzi.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "asistencia")
public class AsistenciaDTO {

	 @Id
	 private String cursoClaseAlumno;
	
	 @Column(name = "clase")
	 private String clase;
	 
	 @Column(name = "id_curso")
	 private int idCurso;
	 
	 @Column(name = "numero_socio")
	 private int numeroSocio;
	
	 @Column(name = "presente")
	 private Boolean presente;

	public String getCursoClaseAlumno() {
		return cursoClaseAlumno;
	}

	public String getClase() {
		return this.clase;
	}

	public void setClase(String clase) {
		this.clase = clase;
	}

	public int getIdCurso() {
		return this.idCurso;
	}

	public void setIdCurso(int idCurso) {
		this.idCurso = idCurso;
	}

	public int getNumeroSocio() {
		return this.numeroSocio;
	}

	public void setNumeroSocio(int numeroSocio) {
		this.numeroSocio = numeroSocio;
	}

	public Boolean getPresente() {
		return this.presente;
	}

	public void setPresente(Boolean presente) {
		this.presente = presente;
	}
	 
}
