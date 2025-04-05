package com.eventzen.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventzen.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // ✅ Correct method
}



