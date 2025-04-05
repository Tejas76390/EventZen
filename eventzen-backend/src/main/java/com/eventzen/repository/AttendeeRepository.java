package com.eventzen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventzen.model.Attendee;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
    List<Attendee> findByEventId(Long eventId);
    List<Attendee> findByUserId(Long userId);
}
