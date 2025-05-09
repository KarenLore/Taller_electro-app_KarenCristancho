package com.electroapp.electro_app.infrastructure.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.electroapp.electro_app.application.services.ICountryService;
import com.electroapp.electro_app.domain.entities.Country;

@RestController
@RequestMapping("/api/country")
public class CountryController {
    @Autowired
    private ICountryService countryService;

    @GetMapping
    public List<Country> list() {
        return countryService.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> view(@PathVariable Long id) {
        Optional<Country> countryOptional = countryService.findById(id);
        if (countryOptional.isPresent()) {
            return ResponseEntity.ok(countryOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Country country) {
        return ResponseEntity.status(HttpStatus.CREATED).body(countryService.save(country));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Country country, @PathVariable Long id) {
        Optional<Country> countryOptional = countryService.update(id, country);
        if (countryOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(countryOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Country> countryOptional = countryService.delete(id);
        if (countryOptional.isPresent()) {
            return ResponseEntity.ok(countryOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }


}
