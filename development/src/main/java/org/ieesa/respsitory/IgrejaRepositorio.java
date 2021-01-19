package org.ieesa.respsitory;


import org.ieesa.dto.Igreja;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface IgrejaRepositorio extends CrudRepository<Igreja, Integer> {
	
	@Query("SELECT igreja FROM Igreja igreja WHERE igreja.denominacao =:denominacao and igreja.pais = :pais and igreja.provincia = :provincia")
	public Igreja findIgreja(@Param("denominacao") String denominacao, @Param("pais") String pais,@Param("provincia") String provincia);

}
