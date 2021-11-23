package com.okta.developer.mamacoco.model.restaurants.respositories;

import com.okta.developer.mamacoco.model.restaurants.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RateRepository extends JpaRepository<Rate, Long> {
    
}