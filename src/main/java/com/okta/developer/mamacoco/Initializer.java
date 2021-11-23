package com.okta.developer.mamacoco;

import com.okta.developer.mamacoco.model.GroupRepository;
import com.okta.developer.mamacoco.model.restaurants.Meal;
import com.okta.developer.mamacoco.model.restaurants.Rate;
import com.okta.developer.mamacoco.model.restaurants.Restaurant;
import com.okta.developer.mamacoco.model.restaurants.respositories.MealRepository;
import com.okta.developer.mamacoco.model.restaurants.respositories.RateRepository;
import com.okta.developer.mamacoco.model.restaurants.respositories.RestaurantRepository;
import com.okta.developer.mamacoco.model.restaurants.respositories.UserRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;
    private final RestaurantRepository restaurantRepository;
    private final RateRepository rateRepository;
    private final UserRepository userRepository;
    private final MealRepository mealRepository;

    public Initializer(GroupRepository repository, RestaurantRepository restaurantRepository, RateRepository rateRepository, UserRepository userRepository, MealRepository mealRepository) {
        this.repository = repository;
        this.restaurantRepository = restaurantRepository;
        this.rateRepository = rateRepository;
        this.userRepository = userRepository;
        this.mealRepository = mealRepository;
    }

    @Override
    public void run(String... strings) {
//        Stream.of("Denver JUG", "Utah JUG", "Seattle JUG",
//                "Richmond JUG").forEach(name ->
//                repository.save(new Group(name))
//        );
//
//        Group djug = repository.findByName("Denver JUG");
//        Event e = Event.builder().title("Full Stack Reactive")
//                .description("Reactive with Spring Boot + React")
//                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
//                .build();
//        djug.setEvents(Collections.singleton(e));
//        repository.save(djug);
//
//        repository.findAll().forEach(System.out::println);

        readJsonFile();

//        Restaurant restaurant = Restaurant.builder().name("Junk food bar").lat(123).lng(23434).build();
//
//        Meal meal = Meal.builder()
//                .title("Vegan burger")
//                .description("test description")
//                .sectionTitle("vegetarian")
//                .price(12)
//                .build();
//
//        restaurant.setMeals(Collections.singleton(meal));
//        restaurantRepository.save(restaurant);
//        restaurantRepository.findAll().forEach(System.out::println);
//        Restaurant restaurant = this.restaurantRepository.findByName("restaurant verena");
        Meal meal = this.mealRepository.findByTitle("Melanzane alla Parmigiana (V)");

        Rate rate = Rate.builder()
                .comment("Food here is great")
                .foodScore(7)
                .serviceScore(8)
                .ambienceScore(4)
                .build();

        meal.getRates().add(rate);
        this.mealRepository.save(meal);
        rateRepository.findAll().forEach(System.out::println);
//
//
//        UserAccount userAccount = UserAccount.builder().name("Amr").build();
//        userRepository.save(userAccount);
//        userRepository.findAll().forEach(System.out::println);
    }

    private void readJsonFile() {
        //JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();

        File file = new File("/Users/amr/Desktop/git/java-crud-app/jugtours/app/src/assets/data/restaurant-menus2.json");
        try (FileReader reader = new FileReader(file)) {
            //Read JSON file
            Object obj = jsonParser.parse(reader);

            JSONArray restaurantList = (JSONArray) obj;

            ArrayList<Restaurant> allRestaurants = new ArrayList<Restaurant>();
            for (int i = 0; i < restaurantList.size(); i++) {
                JSONObject resObj = (JSONObject) restaurantList.get(i);
                Restaurant restaurant = parseRestaurant(resObj);
                JSONArray menuArray = (JSONArray) resObj.get("menu");
                ArrayList<Meal> allMeals = new ArrayList<Meal>();
                for (int j = 0; j < menuArray.size(); j++) {
                    JSONObject menuObj = (JSONObject) menuArray.get(j);
                    allMeals.addAll(parseMeals((String) menuObj.get("title"), (JSONArray) menuObj.get("meals")));
                }
                restaurant.setMeals(allMeals);
                allRestaurants.add(restaurant);
            }
            this.restaurantRepository.saveAll(allRestaurants);
            //Iterate over employee array
//            employeeList.forEach( emp -> parseEmployeeObject( (JSONObject) emp ) );

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    private Restaurant parseRestaurant(JSONObject resObj) {
        JSONObject geoData = (JSONObject) resObj.get("geodata");
        String name = (String) resObj.get("name");
        Double lat = (Double) geoData.get("lat");
        Double lng = (Double) geoData.get("lng");
        return Restaurant.builder()
                .name(name.toLowerCase())
                .address((String) geoData.get("address"))
                .lat(lat)
                .lng(lng)
                .build();
    }

    private ArrayList<Meal> parseMeals(String sectionTitle, JSONArray meals) {
        ArrayList<Meal> mealSet = new ArrayList<Meal>();
        for (int i = 0; i < meals.size(); i++) {
            JSONObject mealObj = (JSONObject) meals.get(i);
            String mealPrice = (String) mealObj.get("price");
            Float mealPriceFloat = Float.parseFloat(mealPrice.isEmpty() ? "-1" : mealPrice);
            Meal meal = Meal.builder()
                    .title((String) mealObj.get("title"))
                    .description((String) mealObj.get("description"))
                    .sectionTitle(sectionTitle)
                    .price(mealPriceFloat)
                    .build();
            mealSet.add(meal);
        }
        return mealSet;
    }
}
