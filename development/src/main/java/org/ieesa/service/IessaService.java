package org.ieesa.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.servlet.http.HttpServletRequest;
import org.ieesa.dto.Admin;
import org.ieesa.dto.Igreja;
import org.ieesa.dto.Membro;
import org.ieesa.dto.Operador;
import org.ieesa.respsitory.AdminRepository;
import org.ieesa.respsitory.IgrejaRepositorio;
import org.ieesa.respsitory.MembroRepositorio;
import org.ieesa.respsitory.OperadorRepositorio;
import org.ieesa.util.Setup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class IessaService {

	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private OperadorRepositorio operadorRepositorio;

	@Autowired
	private MembroRepositorio membroRepositorio;
	@Autowired
	private IgrejaRepositorio igrejaRepositorio;

	@Value("${ieesa.pin}")
	private String PIN;

	@Value("${admin.email}")
	private String ADMIN_EMAIL;

	@Value("${admin.pin}")
	private String ADMIN_PIN;
	
	private boolean operadorExist = false;

	public void adminConfig() {

		Admin admin = new Admin();
		admin.setPin(ADMIN_PIN);
		admin.setEmail(ADMIN_EMAIL);
		try {

			adminRepository.save(admin);
			
		} catch (Exception e) {
			
			System.out.println("admin already created");
		}

	}

	public boolean findAdmin(String email, String pin) {

		Admin admin = adminRepository.findByEmail(email, pin);

		return admin != null && email.equals(admin.getEmail()) && pin.equals(admin.getPin()) ? true : false;

	}

	public Operador findOperador(String email) {

		Operador operador = operadorRepositorio.findByEmail(email);

		return operador;

	}

	public void removerOperador(String email) {

		Operador operador = operadorRepositorio.findByEmail(email);
		if (operador != null) {
			operadorRepositorio.delete(operador);
		}
	}

	public void atualizarOperador(String anteriorNome, String anteriorEmail, String nome, String email) {

		Operador operador = operadorRepositorio.findByEmail(anteriorEmail);
		if (operador != null) {

			operador.setNome(nome);
			operador.setEmail(email);
			operadorRepositorio.save(operador);
		}
	}

	public boolean verificarPIN(String pin) {

		return PIN.equals(pin) ? true : false;
	}

	public boolean adicionarOperador(Operador operador, String pin) {

		boolean result = false;
		if (verificarPIN(pin)) {
			operadorRepositorio.save(operador);
			result = true;
		}
		return result;

	}

	public List<Operador> buscarOperadores() {
		return (List<Operador>) operadorRepositorio.findAll();
	}

	public List<Igreja> buscarIgrejas() {

		return (List<Igreja>) igrejaRepositorio.findAll();
	}

	public void adicionarIgreja(Igreja igreja) {

		igrejaRepositorio.save(igreja);
	}

	public void atualizarIgreja(String anteriorDenominacao, String anteriorPais, String anteriorProvincia,
			String novoDenominacao, String novoPais, String novoProvincia) {

		Igreja igreja = igrejaRepositorio.findIgreja(anteriorDenominacao, anteriorPais, anteriorProvincia);
		if (igreja != null) {

			igreja.setDenominacao(novoDenominacao);
			igreja.setPais(novoPais);
			igreja.setProvincia(novoProvincia);
			igrejaRepositorio.save(igreja);
		}

	}

	public void removerIgreja(int id) {

		igrejaRepositorio.deleteById(id);
		;

	}

	private void nullSafe(String value) {

		if (value == null || value.equals("")) {
			return;
		}
	}

	public void adicionarOperador(Operador operador) {

		operadorRepositorio.save(operador);
	}

	public Membro addicionarMembro(HttpServletRequest request) {

		return membroRepositorio.save(setMembro("add", request));
	}

	public List<Membro> listaMembros() {

		return (List<Membro>) membroRepositorio.findAll();
	}

	public List<Membro> buscaPorFiltro(String filtro, String valor) {

		List<Membro> membros = new ArrayList<Membro>();
		switch (filtro) {

		case "nome":

			membroRepositorio.findMembroByNome(valor).forEach(membro -> {

				membros.add(membro);
			});
			break;
		case "apelido":

			membroRepositorio.findMembroByApelido(valor).forEach(membro -> {

				membros.add(membro);
			});
			break;
		case "provincia":

			membroRepositorio.findMembroByNome(valor).forEach(membro -> {

				membros.add(membro);
			});
			break;
		case "igreja":

			membroRepositorio.findMembroByIgreja(valor).forEach(membro -> {

				membros.add(membro);
			});
			break;

		default:
			membroRepositorio.findAll().forEach(membro -> {

				membros.add(membro);
			});
			break;
		}

		return membros;
	}

	public Membro setMembro(String type, HttpServletRequest request) {

		Membro membro = new Membro();
		if (type.equals("update")) {

			membro.setIdMembro(Long.parseLong(request.getParameter("idMembro")));
		}

		membro.setNome(request.getParameter("nome"));
		membro.setApelido(request.getParameter("apelido"));
		membro.setCategoria(request.getParameter("categoria"));
		membro.setDataBatismo(strToDate(request.getParameter("dataBatismo")));
		membro.setDataCasamento(strToDate(request.getParameter("dataCasamento")));
		membro.setDataEmissao(strToDate(request.getParameter("dataEmissao")));
		membro.setDataNascimento(strToDate(request.getParameter("dataNascimento")));
		membro.setDataIngresso(strToDate(request.getParameter("dataIngresso")));
		membro.setDepertamentoDeAloccao(request.getParameter("direcaoAlocacao"));
		membro.setDesde(strToDate(request.getParameter("desde")));
		membro.setDespacho(request.getParameter("despacho"));
		membro.setEndereco(request.getParameter("endereco"));
		membro.setEstadoCivil(request.getParameter("estadoCivil"));
		membro.setFuncaoNaIgreja(request.getParameter("funcaoIgreja"));
		membro.setGenero(request.getParameter("genero"));
		membro.setGrupoSangueno(request.getParameter("grupoSanguineo"));
		membro.setHabiltacao(request.getParameter("habilitacoesLiterarias"));
		membro.setIgreja(request.getParameter("nomeIgreja"));
		membro.setMadrinha(request.getParameter("madrinha"));
		membro.setPadrinho(request.getParameter("padrinho"));
		membro.setMae(request.getParameter("mae"));
		membro.setNaturalidade(request.getParameter("natural"));
		membro.setNumeroBI(request.getParameter("bi"));
		membro.setOucupacao(request.getParameter("ocupacao"));
		membro.setPadrinho(request.getParameter("padrinho"));
		membro.setPai(request.getParameter("pai"));
		membro.setProfissao(request.getParameter("profissao"));
		membro.setProvincia(request.getParameter("provincia"));
		membro.setTelefone(request.getParameter("telefone"));
		membro.setCasaNumero(request.getParameter("casaNumero"));

		return membro;
	}

	private Date strToDate(String str) {

		Date date = null;

		if (str != null && !str.isEmpty()) {

			List<String> tokens = getTokens(str);
			StringBuilder stb = new StringBuilder();
			stb.append(tokens.get(2));// dia
			stb.append("/");
			stb.append(tokens.get(1)); // mes
			stb.append("/");
			stb.append(tokens.get(0)); // ano
			try {
				date = new SimpleDateFormat("dd/MM/yyyy").parse(stb.toString());
			} catch (ParseException e) {

				e.printStackTrace();
			}
		}
		return date;
	}

	public List<String> getTokens(String str) {
		List<String> tokens = new ArrayList<>();
		StringTokenizer tokenizer = new StringTokenizer(str, "-");

		while (tokenizer.hasMoreElements()) {

			tokens.add(tokenizer.nextToken());
		}
		return tokens;
	}

	public List<Membro> custumSearch(String filtro, String valor) {

		return membroRepositorio.custumSearch(filtro, valor);

	}

	public Membro customSearchValues(String nome, String apelido, String dataNascimento, String provincia) {

		return membroRepositorio.findByNomeAndApelidoAndProvincia(nome, apelido, provincia);

	}

	public Membro buscaPorId(long id) {

		return membroRepositorio.getOne(id);
	}

	public void removerMemebro(long id) {

		membroRepositorio.deleteById(id);
	}

	public void atualizarMembro(HttpServletRequest request) {

		Membro membro = setMembro("update", request);

		membroRepositorio.save(membro);

	}

	public boolean validar(String email, String senha) {

		nullSafe(email);
		nullSafe(senha);
		operadorRepositorio.findAll().forEach(operador -> {

			if (email.equals(operador.getEmail())) {

				operadorExist = true;
			}
		});

		return operadorExist;

	}

	public boolean validarEmail(String email) {
		Pattern EMAIL_REGEX = Pattern.compile("^(.+)@(.+)$");
		final Matcher matcher = EMAIL_REGEX.matcher(email);
		return matcher.matches();
	}

	public List<String> provincias() {

		List<String> provincias = new ArrayList<String>();
		provincias.add("Bengo");
		provincias.add("Benguela");
		provincias.add("Bié");
		provincias.add("Cabinda");
		provincias.add("Cuando_Cubango");
		provincias.add("Cunene");
		provincias.add("Huambo");
		provincias.add("Huíla");
		provincias.add("Kwanza_Norte");
		provincias.add("Kwanza_Sul");
		provincias.add("Luanda");
		provincias.add("Lunda_Norte");
		provincias.add("Lunda_Sul");
		provincias.add("Malanje");
		provincias.add("Moxico");
		provincias.add("Namibe");
		provincias.add("Uíge");
		provincias.add("Zaire");
		return provincias;
	}

	public boolean biValidator(String bi) {

		String first = bi.substring(0, 9);
		String second = bi.substring(9, 11);
		String third = bi.substring(11, 14);

		if (!first.matches("^[0-9]*$")) {
			return false;
		}
		if (!second.matches(("^[a-zA-ZÁÂÃÀÇÉÊÍÓÔÕÚÜáâãàçéêíóôõúü]*$"))) {
			return false;
		}
		if (!third.matches("^[0-9]*$")) {
			return false;
		}

		return true;
	}

	public void dbInstall() {
		
		Setup setup = new Setup();
		if(setup.resourceWrite()) {
			
			setup.dbInstall();
			
		}
		
	}
	
	public void dbSetup() {
		
		Setup setup = new Setup();
		if(setup.resourceWrite()) {
			setup.postgresDBCreate();
			adminConfig();
		
		}
		
	}

}
