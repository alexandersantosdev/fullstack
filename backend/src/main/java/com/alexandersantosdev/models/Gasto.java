package com.alexandersantosdev.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="tb_gastos")
public class Gasto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="descricao")
	@NotNull
	private String description;
	
	@Column(name="quantidade")
	@NotNull
	private Integer qtd;
	
	@Column(name="valor")
	@NotNull
	private Double value;
	
	@Column(name="data")
	private LocalDate date;
	
	@JsonProperty(value = "sub_total")
	public Double getSubTotal() {
		return qtd * value;
	}
}
