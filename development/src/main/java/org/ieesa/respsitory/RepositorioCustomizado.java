package org.ieesa.respsitory;

import java.util.List;

import org.ieesa.dto.Membro;

public interface RepositorioCustomizado {


	List<Membro>  custumSearch(String filtro, String valor);
	List<Membro> find(String nome,String apelido,String provincia);
	
}
