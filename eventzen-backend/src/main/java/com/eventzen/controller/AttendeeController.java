package com.eventzen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventzen.model.Attendee;
import com.eventzen.service.AttendeeService;

@RestController
@RequestMapping("/api/attendees")
public class AttendeeController {

    @Autowired
    private AttendeeService attendeeService;

    @PostMapping
    public ResponseEntity<Attendee> registerAttendee(@RequestBody Attendee attendee) {
        Attendee saved = attendeeService.registerAttendee(attendee);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/event/{eventId}")
    public ResponseEntity<List<Attendee>> getByEvent(@PathVariable Long eventId) {
        return ResponseEntity.ok(attendeeService.getAttendeesByEvent(eventId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Attendee>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(attendeeService.getAttendeesByUser(userId));
    }

    @DeleteMapping("/{attendeeId}")
    public ResponseEntity<Void> deleteAttendee(@PathVariable Long attendeeId) {
        attendeeService.deleteAttendee(attendeeId);
        return ResponseEntity.noContent().build();
    }
}

