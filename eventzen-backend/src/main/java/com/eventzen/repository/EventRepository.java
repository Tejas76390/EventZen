package com.eventzen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventzen.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
