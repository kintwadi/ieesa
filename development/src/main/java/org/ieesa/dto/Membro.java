package org.ieesa.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Membro  {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idMembro;
	private String nome;
	private String apelido;
	@Temporal(TemporalType.DATE)
	private Date dataNascimento;
	private String naturalidade;
	private String provincia;
	private String genero;
	private String estadoCivil;
	@Column(name="numeroBI",unique=true)
	private String numeroBI;
	@Temporal(TemporalType.DATE)
	private Date dataEmissao;
	@Temporal(TemporalType.DATE)
	private Date dataCasamento;
	private String profissao;
	private String habiltacao;
	private String oucupacao;
	private String grupoSangueno;
	private String endereco;
	private String casaNumero;
	private String telefone;
	private String categoria;

	// filiacao
	private String pai;
	private String mae;
	//dados da igreja
	private String igreja;
	@Temporal(TemporalType.DATE)
	private Date dataIngresso;
	private String funcaoNaIgreja;

	
	private String padrinho;
	private String madrinha;
	
	private String despacho;
	private String depertamentoDeAloccao;
	@Temporal(TemporalType.DATE)
	private Date dataBatismo;
	@Temporal(TemporalType.DATE)
	private Date desde;

	public Membro(){


	}
	public long getIdMembro() {
		return idMembro;
	}

	public void setIdMembro(long idMembro) {
		this.idMembro = idMembro;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getApelido() {
		return apelido;
	}

	public void setApelido(String apelido) {
		this.apelido = apelido;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getEstadoCivil() {
		return estadoCivil;
	}

	public void setEstadoCivil(String estadoCivil) {
		this.estadoCivil = estadoCivil;
	}



	public String getProvincia() {
		return provincia;
	}
	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}
	public Date getDataEmissao() {
		return dataEmissao;
	}
	public void setDataEmissao(Date dataEmissao) {
		this.dataEmissao = dataEmissao;
	}
	public String getNumeroBI() {
		return numeroBI;
	}

	public void setNumeroBI(String numeroBI) {
		this.numeroBI = numeroBI;
	}

	public String getProfissao() {
		return profissao;
	}

	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}

	public String getHabiltacao() {
		return habiltacao;
	}

	public void setHabiltacao(String habiltacao) {
		this.habiltacao = habiltacao;
	}

	public String getOucupacao() {
		return oucupacao;
	}

	public void setOucupacao(String oucupacao) {
		this.oucupacao = oucupacao;
	}

	public String getGrupoSangueno() {
		return grupoSangueno;
	}

	public void setGrupoSangueno(String grupoSangueno) {
		this.grupoSangueno = grupoSangueno;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCasaNumero() {
		return casaNumero;
	}

	public void setCasaNumero(String casaNumero) {
		this.casaNumero = casaNumero;
	}




	public String getNaturalidade() {
		return naturalidade;
	}

	public void setNaturalidade(String naturalidade) {
		this.naturalidade = naturalidade;
	}


	public Date getDataCasamento() {
		return dataCasamento;
	}

	public void setDataCasamento(Date dataCasamento) {
		this.dataCasamento = dataCasamento;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}


	public String getIgreja() {
		return igreja;
	}
	public void setIgreja(String igreja) {
		this.igreja = igreja;
	}


	public Date getDataIngresso() {
		return dataIngresso;
	}
	public void setDataIngresso(Date dataIngresso) {
		this.dataIngresso = dataIngresso;
	}
	
	public String getPai() {
		return pai;
	}
	public void setPai(String pai) {
		this.pai = pai;
	}
	public String getMae() {
		return mae;
	}
	public void setMae(String mae) {
		this.mae = mae;
	}
	public String getFuncaoNaIgreja() {
		return funcaoNaIgreja;
	}
	public void setFuncaoNaIgreja(String funcaoNaIgreja) {
		this.funcaoNaIgreja = funcaoNaIgreja;
	}
	
	
	public String getPadrinho() {
		return padrinho;
	}
	public void setPadrinho(String padrinho) {
		this.padrinho = padrinho;
	}
	public String getMadrinha() {
		return madrinha;
	}
	public void setMadrinha(String madrinha) {
		this.madrinha = madrinha;
	}
	
	public String getDespacho() {
		return despacho;
	}
	public void setDespacho(String despacho) {
		this.despacho = despacho;
	}
	public String getDepertamentoDeAloccao() {
		return depertamentoDeAloccao;
	}
	public void setDepertamentoDeAloccao(String depertamentoDeAloccao) {
		this.depertamentoDeAloccao = depertamentoDeAloccao;
	}
	public Date getDataBatismo() {
		return dataBatismo;
	}
	public void setDataBatismo(Date dataBatismo) {
		this.dataBatismo = dataBatismo;
	}

	public Date getDesde() {
		return desde;
	}
	public void setDesde(Date desde) {
		this.desde = desde;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Membro [idMembro=");
		builder.append(idMembro);
		builder.append(", nome=");
		builder.append(nome);
		builder.append(", apelido=");
		builder.append(apelido);
		builder.append(", dataNascimento=");
		builder.append(dataNascimento);
		builder.append(", naturalidade=");
		builder.append(naturalidade);
		builder.append(", provincia=");
		builder.append(provincia);
		builder.append(", genero=");
		builder.append(genero);
		builder.append(", estadoCivil=");
		builder.append(estadoCivil);
		builder.append(", numeroBI=");
		builder.append(numeroBI);
		builder.append(", dataEmissao=");
		builder.append(dataEmissao);
		builder.append(", dataCasamento=");
		builder.append(dataCasamento);
		builder.append(", profissao=");
		builder.append(profissao);
		builder.append(", habiltacao=");
		builder.append(habiltacao);
		builder.append(", oucupacao=");
		builder.append(oucupacao);
		builder.append(", grupoSangueno=");
		builder.append(grupoSangueno);
		builder.append(", endereco=");
		builder.append(endereco);
		builder.append(", casaNumero=");
		builder.append(casaNumero);
		builder.append(", Telefone=");
		builder.append(telefone);
		builder.append(", categoria=");
		builder.append(categoria);
		builder.append(", pai=");
		builder.append(pai);
		builder.append(", mae=");
		builder.append(mae);
		builder.append(", igreja=");
		builder.append(igreja);
		builder.append(", dataIngresso=");
		builder.append(dataIngresso);
		builder.append(", funcaoNaIgreja=");
		builder.append(funcaoNaIgreja);
		builder.append(", padrinho=");
		builder.append(padrinho);
		builder.append(", madrinha=");
		builder.append(madrinha);
		builder.append(", despacho=");
		builder.append(despacho);
		builder.append(", depertamentoDeAloccao=");
		builder.append(depertamentoDeAloccao);
		builder.append(", dataBatismo=");
		builder.append(dataBatismo);
		builder.append(", desde=");
		builder.append(desde);
		builder.append("]");
		return builder.toString();
	}


}





