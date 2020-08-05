package edu.mobezzi.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.mobezzi.dao.CursoDTO;

@Repository
public interface CursoDtoRepository extends JpaRepository<CursoDTO, Integer>{

}