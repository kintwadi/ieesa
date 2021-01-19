package org.ieesa.respsitory;

import org.ieesa.dto.Admin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends CrudRepository<Admin, Integer> {

	@Query("SELECT a FROM Admin a WHERE a.email =:email and a.pin = :pin")
	public Admin findByEmail(@Param("email") String email, @Param("pin") String pin);
	
	@Query("SELECT a FROM Admin a WHERE a.pin = :pin")
	public Admin findByPin(@Param("pin") String pin);
	
}
