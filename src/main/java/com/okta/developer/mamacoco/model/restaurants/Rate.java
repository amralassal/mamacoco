package com.okta.developer.mamacoco.model.restaurants;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String comment;
    private int foodScore;
    private int serviceScore;
    private int ambienceScore;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private UserAccount user;
}
