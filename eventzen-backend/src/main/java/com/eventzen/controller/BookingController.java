package com.eventzen.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    private final List<Map<String, String>> bookings = new ArrayList<>();

    @PostMapping
    public ResponseEntity<?> bookEvent(@RequestBody Map<String, String> bookingData) {
        bookings.add(bookingData);
        return ResponseEntity.ok(Collections.singletonMap("message", "Booking successful"));
    }

    @GetMapping
    public ResponseEntity<?> getAllBookings() {
        return ResponseEntity.ok(bookings);
    }
}

