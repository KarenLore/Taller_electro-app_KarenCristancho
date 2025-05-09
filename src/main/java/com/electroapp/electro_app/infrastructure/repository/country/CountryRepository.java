package com.electroapp.electro_app.infrastructure.repository.country;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.electroapp.electro_app.domain.entities.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country,Long> {
    boolean existsByCountryName(String username);
}
