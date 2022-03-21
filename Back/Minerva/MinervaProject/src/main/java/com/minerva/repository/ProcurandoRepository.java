package com.minerva.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.minerva.model.Procurando;

@Repository
public interface ProcurandoRepository extends MongoRepository<Procurando, String>{
	
}
