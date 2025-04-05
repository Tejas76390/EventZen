package com.eventzen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventzen.model.Attendee;
import com.eventzen.repository.AttendeeRepository;

@Service
public class AttendeeService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    public Attendee registerAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public List<Attendee> getAttendeesByEvent(Long eventId) {
        return attendeeRepository.findByEventId(eventId);
    }

    public List<Attendee> getAttendeesByUser(Long userId) {
        return attendeeRepository.findByUserId(userId);
    }

    public void deleteAttendee(Long attendeeId) {
        attendeeRepository.deleteById(attendeeId);
    }
}
