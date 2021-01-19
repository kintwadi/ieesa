package org.ieesa.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.ieesa.dto.Igreja;
import org.ieesa.dto.Membro;
import org.ieesa.dto.Operador;
import org.ieesa.service.IessaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class OutController {

	@Autowired
	private IessaService service;
	@Autowired
    private ApplicationContext ctx;
	
	
	  
	@GetMapping("/")
	public String home(HttpServletRequest request) {
		
		service.adminConfig();
		return "login";
	}
	
	@GetMapping("/logout")
	public String logout() {
	
		return "login";
	}
	
	@GetMapping("/stop")
	public void exit(HttpServletRequest request) {
	
        System.exit(1);
		
	}
	
	
	
	@GetMapping("/dashboard")
	public String dashboard(Model model) {
	
		model.addAttribute("total_operadores", service.buscarOperadores().size());
		model.addAttribute("total_igrejas", service.buscarIgrejas().size());
		model.addAttribute("total_membros", service.listaMembros().size());
		return "dashboard";
	}
		
	@GetMapping("/lista_membros")
	@ResponseBody
	public List<Membro> buscarMembros() {
		
		return service.listaMembros();
	}
	
	@GetMapping("/add-membros")
	public String addMembros() {
		
		return "add-membros";
	}
	
	@GetMapping("/atualizar_membros")
	public String atualizarMembros() {
		
		return "atualizar_membros";
	}
	
	@GetMapping("/operadores")
	public String operadores() {
		
		return "operadores";
	}
	
	@GetMapping("/igrejas")
	public String igrejas() {
		
		return "igreja";
	}
	
	@GetMapping("/buscar_igrejas")
	@ResponseBody
	public List<Igreja> buscarIgrejas(){
	
		return  service.buscarIgrejas();
	}
	
	@GetMapping("/buscar_operadores")
	@ResponseBody
	public List<Operador> buscarOperadores(){
		
		return service.buscarOperadores();
	}
	
	@GetMapping("/exportar")
	public String report(){
		
		return "exportar";
	}
	
}
