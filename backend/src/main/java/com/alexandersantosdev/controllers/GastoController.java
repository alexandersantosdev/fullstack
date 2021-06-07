package com.alexandersantosdev.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alexandersantosdev.models.Gasto;
import com.alexandersantosdev.repositories.GastoRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class GastoController {
	
	@Autowired
	private GastoRepository gastoRepository;
	
	@GetMapping("gastos")
	@ResponseStatus(code = HttpStatus.OK)
	public List<Gasto> listarGastos(){
		return gastoRepository.findAll();
	}
	
	@GetMapping("gastos/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public Gasto listarGastoPorId(@PathVariable Long id) {
		return gastoRepository.findById(id).orElse(null);
	}
	
	@DeleteMapping("gastos/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void removerGasto(@PathVariable Long id) {
		gastoRepository.deleteById(id);
	}
	
	@PostMapping("gastos")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Gasto adicionarGasto(@RequestBody Gasto gasto) {
		gasto.setDate(LocalDate.now());
		return gastoRepository.save(gasto);
	}
	
	@PutMapping("gastos")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public Gasto atualizarGasto(@RequestBody Gasto gasto) {
		return gastoRepository.save(gasto);
	}

}
