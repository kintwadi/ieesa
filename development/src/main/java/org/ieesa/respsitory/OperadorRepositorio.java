package org.ieesa.respsitory;

import org.ieesa.dto.Operador;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface OperadorRepositorio extends CrudRepository<Operador, Integer>{

	@Query("SELECT o FROM Operador o WHERE o.email =:email")
	public Operador findByEmail(@Param("email") String email);
	
}
