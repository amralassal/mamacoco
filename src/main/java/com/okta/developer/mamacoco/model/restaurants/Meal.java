package com.okta.developer.mamacoco.model.restaurants;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String sectionTitle;
    private Float price;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Rate> rates;
}