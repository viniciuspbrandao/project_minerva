package com.minerva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.minerva.model.Vendendo;
import com.minerva.repository.VendendoRepository;

@RestController
public class VendendoController {
	
	@Autowired
	private VendendoRepository vendendoRepository; 
	
	@PostMapping("/vendendo/create")
	public void createVendendo(@RequestBody Vendendo vendendo) {
		vendendoRepository.insert(vendendo);
		
	}
	
	@PostMapping("/vendendo/delete/{id}")
	public void deleteVendendo(@PathVariable String id) {
		vendendoRepository.deleteById(id);
			
		}
	
	@GetMapping("/vendendo/list")
	public List <Vendendo> listVendendos() {
		return vendendoRepository.findAll();
		
	}

}
