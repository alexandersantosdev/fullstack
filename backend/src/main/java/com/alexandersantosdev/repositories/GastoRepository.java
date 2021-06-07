package com.alexandersantosdev.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alexandersantosdev.models.Gasto;

@Repository
public interface GastoRepository extends JpaRepository<Gasto, Long>{

}
