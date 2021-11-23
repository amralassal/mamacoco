package com.okta.developer.mamacoco.model.restaurants.respositories;

import com.okta.developer.mamacoco.model.restaurants.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal, Long> {
    Meal findByTitle(String title);
}