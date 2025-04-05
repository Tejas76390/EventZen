package com.eventzen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventzen.model.Registration;
import com.eventzen.model.User;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    List<Registration> findByUser(User user);
}

