package com.minerva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.minerva.model.Procurando;
import com.minerva.repository.ProcurandoRepository;

@RestController
public class ProcurandoController {
	
	@Autowired
	private ProcurandoRepository procurandoRepository; 
	
	@PostMapping("/procurando/create")
	public void createProcurando(@RequestBody Procurando procurando) {
		procurandoRepository.insert(procurando);
		
	}
	
	@PostMapping("/procurando/delete/{id}")
	public void deleteProcurando(@PathVariable String id) {
		procurandoRepository.deleteById(id);
			
		}
	
	@GetMapping("/procurando/list")
	public List <Procurando> listProcurandos() {
		return procurandoRepository.findAll();
		
	}

}
