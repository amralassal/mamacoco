package com.okta.developer.mamacoco.model.restaurants;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NonNull
    private String name;
    private String address;
    private Double lat;
    private Double lng;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Meal> meals;
}