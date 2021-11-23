package com.okta.developer.mamacoco.model.restaurants.respositories;

import com.okta.developer.mamacoco.model.restaurants.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserAccount, Long> {
    UserAccount findByName(String name);
}