package com.okta.developer.mamacoco.model.restaurants.respositories;

import com.okta.developer.mamacoco.model.restaurants.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Restaurant findByName(String name);
}