package org.ieesa.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.ieesa.dto.Admin;
import org.ieesa.dto.Igreja;
import org.ieesa.dto.Membro;
import org.ieesa.dto.Operador;
import org.ieesa.service.IessaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class InController {
	@Autowired
	private IessaService service;

	@PostMapping("/dashboard")
	public String dashboard(HttpServletRequest request, Model model) {

		String email = request.getParameter("email");
		String pin = request.getParameter("pin");
		model.addAttribute("login_error", "Administrator Inválido");
		model.addAttribute("block", true);
		
		if (email.equals("") ) {

			return "login";
		}

		model.addAttribute("total_operadores", service.buscarOperadores().size());
		model.addAttribute("total_igrejas", service.buscarIgrejas().size());
		model.addAttribute("total_membros", service.listaMembros().size());
		
		if (service.findAdmin(email, pin)) {

			model.addAttribute("login_error", "");
			model.addAttribute("block", false);
			return "dashboard";
		}

		Operador operador = service.findOperador(email);
		if (operador != null) {

			if (pin!= null && pin.equals(operador.getPin())) {

				model.addAttribute("login_error", "");
				model.addAttribute("block", false);
				return "dashboard";

			} else {

				model.addAttribute("login_error", "");
				model.addAttribute("block", true);
				return "dashboard";
			}
		}

		return "login";

	}

	@PostMapping("/adicionar_operador")
	public String adicionarOperador(HttpServletRequest request, Model model) {

		String nome = request.getParameter("nome");
		String email = request.getParameter("email");
		String pin = request.getParameter("pin");

		if (service.validarEmail(email)) {

			Operador operador = new Operador();
			operador.setNome(nome);
			operador.setEmail(email);
			operador.setPin(pin);
			service.adicionarOperador(operador);
		}

		return "operadores";
	}

	@PostMapping("/remover_operador")
	public String removerOperador(HttpServletRequest request, Model model) {
		String email = request.getParameter("email");
		if (email != null && !email.equals("")) {

			service.removerOperador(email);
		}
		return "operadores";
	}

	@PostMapping("/atualizar_operador")
	public String atualizarOperador(HttpServletRequest request, Model model) {

		String anteriorNome = request.getParameter("anteriorNome");
		String anteriorEmail = request.getParameter("anteriorEmail");
		String novoNome = request.getParameter("nome");
		String novoEmail = request.getParameter("email");

		if (!novoNome.equals("") && !novoEmail.equals("")) {

			service.atualizarOperador(anteriorNome, anteriorEmail, novoNome, novoEmail);
		}
		return "operadores";
	}

	// igrejas

	@PostMapping("/adicionar_igreja")
	public String adicionarIgreja(HttpServletRequest request, Model model) {

		String denominacao = request.getParameter("denominacao");
		String pais = request.getParameter("pais");
		String provincia = request.getParameter("provincia");

		Igreja igreja = new Igreja();
		igreja.setDenominacao(denominacao);
		igreja.setPais(pais);
		igreja.setProvincia(provincia);
		service.adicionarIgreja(igreja);

		return "igreja";
	}

	@PostMapping("/atualizar_igreja")
	public String atualizarIgreja(HttpServletRequest request, Model model) {

		String anteriorDenominacao = request.getParameter("anteriorDenominacao");
		String anteriorPais = request.getParameter("anteriorPais");
		String anteriorProvincia = request.getParameter("anteriorProvincia");

		String novoDenominacao = request.getParameter("denominacao");
		String novoPais = request.getParameter("pais");
		String novoProvincia = request.getParameter("provincia");

		if (!"".equals(novoDenominacao) && !"".equals(novoPais) && !"".equals(novoProvincia)) {

			service.atualizarIgreja(anteriorDenominacao, anteriorPais, anteriorProvincia, novoDenominacao, novoPais,
					novoProvincia);
		}
		return "igreja";
	}

	@PostMapping("/remover_igreja")
	public String removerIgreja(HttpServletRequest request, Model model) {

		String value = request.getParameter("id");

		if (!value.equals("")) {

			int id = Integer.parseInt(value);
			service.removerIgreja(id);
		}
		return "igreja";
	}

	// Membro
	@PostMapping("/adicionar_membro")
	@ResponseBody
	public Membro adicionarMembro(HttpServletRequest request, Model model) {

		return service.addicionarMembro(request);
	}

	@PostMapping("/remover_membro")
	@ResponseBody
	public String removerMembro(HttpServletRequest request, Model model) {

		int id = Integer.parseInt(request.getParameter("idMembro"));

		service.removerMemebro(id);
		return "atualizar_membros";
	}

	@PostMapping("/atualizar_membro")
	@ResponseBody
	public String atualizarMembro(HttpServletRequest request, Model model) {

		service.atualizarMembro(request);
		return "add-membros";
	}

}
