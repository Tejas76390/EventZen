package com.eventzen.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String expenseName;
    private double amount;
    private String category;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    // Constructors
    public Budget() {}

    public Budget(String expenseName, double amount, String category, Event event) {
        this.expenseName = expenseName;
        this.amount = amount;
        this.category = category;
        this.event = event;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}



