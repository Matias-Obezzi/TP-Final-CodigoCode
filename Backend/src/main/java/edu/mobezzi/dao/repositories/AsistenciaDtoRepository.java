package edu.mobezzi.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.mobezzi.dao.AsistenciaDTO;

@Repository
public interface AsistenciaDtoRepository extends JpaRepository<AsistenciaDTO, String> {

}
