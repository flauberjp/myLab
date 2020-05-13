package guru.springframework.sfgpetclinic.controllers;

import guru.springframework.sfgpetclinic.fauxspring.Model;
import guru.springframework.sfgpetclinic.fauxspring.ModelImp;
import guru.springframework.sfgpetclinic.model.Speciality;
import guru.springframework.sfgpetclinic.services.SpecialtyService;
import guru.springframework.sfgpetclinic.services.VetService;
import guru.springframework.sfgpetclinic.services.VetServiceImp;
import guru.springframework.sfgpetclinic.services.map.SpecialityMapService;
import guru.springframework.sfgpetclinic.services.map.VetMapService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class VetControllerTest {
    static VetController vetController;
    static  VetService vetService;
    static SpecialityMapService specialityMapService;


    @BeforeAll
    static void beforeAll() {
        specialityMapService = new SpecialityMapService();
        vetService = new VetMapService(specialityMapService);
        vetController = new VetController(vetService);
    }

    @Tag("disabled")
    @Test
    void listVets() {
        Model model = new ModelImp();

        assertEquals("vets/index", vetController.listVets(model));
    }

    @Test
    void verifyListOfVetMapService() {
        specialityMapService.save(new Speciality("speciality 1"));
        specialityMapService.save(new Speciality("speciality 2"));

        assertEquals(2, specialityMapService.findAll().size());
    }


}