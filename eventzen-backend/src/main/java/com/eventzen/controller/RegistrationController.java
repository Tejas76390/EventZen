package com.eventzen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eventzen.model.Registration;
import com.eventzen.service.RegistrationService;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public ResponseEntity<Registration> registerUser(@RequestParam Long userId, @RequestParam Long eventId) {
        Registration registration = registrationService.registerUserForEvent(userId, eventId);
        return ResponseEntity.ok(registration);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Registration>> getUserRegistrations(@PathVariable Long userId) {
        List<Registration> registrations = registrationService.getRegistrationsByUser(userId);
        return ResponseEntity.ok(registrations);
    }
}

