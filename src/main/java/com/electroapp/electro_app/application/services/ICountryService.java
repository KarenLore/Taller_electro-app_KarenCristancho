package com.electroapp.electro_app.application.services;

import java.util.List;
import java.util.Optional;

import com.electroapp.electro_app.domain.entities.Country;

public interface ICountryService {
    List<Country> findAll();

    Optional<Country> findById(Long id);

    Country save(Country country);
    
    Optional<Country> update(Long id, Country country);

    Optional<Country> delete(Long id);   
    
     boolean existsByCountryname(String countryname);

}
