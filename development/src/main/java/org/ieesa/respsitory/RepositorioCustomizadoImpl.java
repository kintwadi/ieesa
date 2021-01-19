package org.ieesa.respsitory;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.ieesa.dto.Membro;

public class RepositorioCustomizadoImpl implements RepositorioCustomizado {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Membro> custumSearch(String filtro, String valor) {

		Query query = entityManager.createNativeQuery("Select * from membro where " + filtro + " like ?", Membro.class);
		valor = "%" + valor + "%";
		query.setParameter(1, valor);

		List<Membro> membros = query.getResultList();
		
		return membros;
	}

	// for some reason this query does not work
	

	@Override
	public List<Membro> find(String nome, String apelido, String provincia) {
		
	Query query = entityManager.createNativeQuery("Select * from membro  where membro.nome = ? and membro.apelido = ? and membro.provincia = ?", Membro.class);
		
		query.setParameter(1, nome);
		query.setParameter(2, apelido);
		query.setParameter(3, provincia);

		List<Membro> membros = query.getResultList();
	
		
		return membros;
	}

}
