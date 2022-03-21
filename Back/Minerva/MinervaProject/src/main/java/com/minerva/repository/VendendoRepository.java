package com.minerva.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.minerva.model.Vendendo;

@Repository
public interface VendendoRepository extends MongoRepository<Vendendo, String>{
	
}
