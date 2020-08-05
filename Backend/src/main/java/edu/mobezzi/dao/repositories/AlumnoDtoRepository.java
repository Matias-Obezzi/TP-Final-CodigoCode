package edu.mobezzi.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.mobezzi.dao.AlumnoDTO;

@Repository
public interface AlumnoDtoRepository extends JpaRepository<AlumnoDTO, Integer>{

}
