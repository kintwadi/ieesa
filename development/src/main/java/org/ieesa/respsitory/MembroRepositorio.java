package org.ieesa.respsitory;


import java.util.List;

import org.ieesa.dto.Membro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MembroRepositorio extends JpaRepository<Membro, Long>, RepositorioCustomizado {
	
	//@Modifying
	//@Query(value = "SELECT * FROM Member m WHERE m.nome like %nome%",  nativeQuery = true)
	public List<Membro>findMembroByNome(String nome);
	//@Query(value = "SELECT * FROM Member m WHERE m.apelido like :%apelido%",  nativeQuery = true)
	public List<Membro>findMembroByApelido(String apelido);
	//@Query(value = "SELECT * FROM Member m WHERE m.provincia like :%provincia%",  nativeQuery = true)
	public List<Membro>findMembroByProvincia(String provincia);
	//@Query(value = "SELECT * FROM Member m WHERE m.igreja like :%igreja%",  nativeQuery = true)
	public List<Membro>findMembroByIgreja(String igreja);
	@Query("SELECT m FROM Membro m WHERE m.nome = :nome and m.apelido = :apelido and m.provincia = :provincia")
	Membro findByNomeAndApelidoAndProvincia(@Param("nome")  String nome, @Param("apelido") String apelido, @Param("provincia") String provincia);

	

}
