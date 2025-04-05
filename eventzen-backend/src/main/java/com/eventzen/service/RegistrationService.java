package com.eventzen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventzen.model.Event;
import com.eventzen.model.Registration;
import com.eventzen.model.User;
import com.eventzen.repository.EventRepository;
import com.eventzen.repository.RegistrationRepository;
import com.eventzen.repository.UserRepository;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    public Registration registerUserForEvent(Long userId, Long eventId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));

        Registration registration = new Registration();
        registration.setUser(user);
        registration.setEvent(event);

        return registrationRepository.save(registration);
    }

    public List<Registration> getRegistrationsByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return registrationRepository.findByUser(user);
    }
}

